import { Knex } from "knex";
import { tables } from "../utils/tables";
// import { collections } from "./mongoService";
import { EventStore, EventType } from "./models";

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

  updateExpenditureList = async (
    budgetListId: number,
    description: string,
    expenditure: number,
    paymentDate: Date,
    amendDate: Date
  ) => {
    let event_store_old = {} as EventStore;
    let event_store_new = {} as EventStore;
    const old_data = await this.knex(tables.WEDDING_BUDGET_LIST).select().where("id", budgetListId).first();
    event_store_old.eventType = EventType.Delete;
    event_store_old.amendDate = amendDate;
    event_store_old.data = old_data;

    await this.knex(tables.WEDDING_BUDGET_LIST)
      .where("id", budgetListId)
      .update({ description, expenditure, payment_date: paymentDate });

    const new_data = await this.knex(tables.WEDDING_BUDGET_LIST).select().where("id", budgetListId).first();

    event_store_new.eventType = EventType.Add;
    event_store_new.amendDate = amendDate;
    event_store_new.data = new_data;

    // collections.event_store?.insertMany([event_store_old, event_store_new]);
  };
}
