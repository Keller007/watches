export interface ClockData {
  id: string;
  name: string;
  timezone: string;
}

export interface ClockProps extends ClockData {
  onDelete: (id: string) => void;
}