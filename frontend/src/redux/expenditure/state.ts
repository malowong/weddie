export interface ExpenditureState {
  id: number;
  category: string;
  amount: number;
}

export interface IExpenditureState {
  expenditureList: ExpenditureState[];
}
