import { Knex } from "knex";

export class BudgetService {
  constructor(private knex: Knex) {}

  getExpenditureList = async (eventId: number) => {
    const expenditureList = this.knex.select("*").from("wedding_budget_list").where("wedding_event_id", eventId);

    return expenditureList;
  };
}
