import React, { useState } from "react";
import Clock from "./Clock";
import { ClockData } from "../interface"; 
import "./Watch.css";

export const Watch: React.FC = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);
  const [name, setName] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  const addClock = () => {
    const newClock: ClockData = {
      id: Date.now().toString(),
      name,
      timezone,
    };

    setClocks((prevClocks) => [...prevClocks, newClock]);
    setName("");
    setTimezone("");
  };

  const removeClock = (id: string) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== id));
  };

  return (
    <div>
      <div className="control-container">
        <label>
          Название
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Временная зона
          <input
            type="text" 
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" onClick={addClock}>
          Добавить
        </button>
      </div>
      <div className="clocks-container">
        {clocks.map((clock) => (
          <Clock key={clock.id} {...clock} onDelete={removeClock} />
        ))}
      </div>
    </div>
  );
};
