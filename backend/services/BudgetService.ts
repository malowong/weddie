import { Knex } from "knex";

export class BudgetService {
  constructor(private knex: Knex) {}

  getExpenditureList = async () => {
    const expenditureList = "TODO";

    this.knex.raw('SELECT * FROM user_info')

    return expenditureList;
  };
}
