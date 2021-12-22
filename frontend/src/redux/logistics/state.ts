export interface LogisticsState {
  id: number;
  itemName: string;
  amount: number;
}

export interface ILogisticsState {
  materialList: LogisticsState[];
}
