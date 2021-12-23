import { Knex } from "knex";

export class BudgetService {
  constructor(private knex: Knex) {}

  getExpenditureList = async () => {
    const expenditureList = "TODO";

    return expenditureList;
  };
}
