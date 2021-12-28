import { Knex } from "knex";
import { tables } from "../utils/tables";

interface budgetItem {
  id?: number;
  wedding_event_id: number;
  budget_cat_id: number;
  description?: string;
  expenditure: number;
  payment_date?: Date;
}

export class BudgetService {
  constructor(private knex: Knex) {}

  getExpenditureList = async (eventId: number) => {
    const expenditureList = await this.knex
      .select("*")
      .from(tables.WEDDING_BUDGET_LIST)
      .where("wedding_event_id", eventId);

    return expenditureList;
  };

  addBudgetItem = async (budgetItem: budgetItem) => {
    await this.knex(tables.WEDDING_BUDGET_LIST).insert(budgetItem);

    return;
  };
}
