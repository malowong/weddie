import { Knex } from "knex";
import { tables } from "../utils/tables";
// import { collections } from "./mongoService";
// import { EventStore, EventType } from "./models";

interface BudgetItem {
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
      .where("wedding_event_id", eventId)
      .orderBy("id");

    return expenditureList;
  };

  addBudgetItem = async (budgetItem: BudgetItem) => {
    await this.knex(tables.WEDDING_BUDGET_LIST).insert(budgetItem);
    return;
  };

<<<<<<< HEAD
  // updateExpenditureList = async (
  //   budgetListId: number,
  //   description: string,
  //   expenditure: number,
  //   paymentDate: Date,
  //   amendDate: Date,
  //   weddingEventId: number,
  //   recordCreatedAtDate: Date
  // ) => {
  //   let event_store_old = {} as EventStore;
  //   let event_store_new = {} as EventStore;
  //   const weddingCreatedAtDate = this.knex(tables.WEDDING_EVENT)
  //     .select("created_at")
  //     .where("id", weddingEventId)
  //     .first();
  //   const weddingDate = this.knex(tables.WEDDING_EVENT).select("wedding_date").where("id", weddingEventId).first();
  //   const old_data = await this.knex(tables.WEDDING_BUDGET_LIST)
  //     .join(tables.BUDGET_CAT, `${tables.WEDDING_BUDGET_LIST}.budget_cat_id`, `${tables.BUDGET_CAT}.id`)
  //     .select()
  //     .where("id", budgetListId)
  //     .first();

  //   event_store_old.eventType = EventType.Delete;
  //   event_store_old.data = old_data;
  //   event_store_old.amendDate = amendDate.getTime();
  //   event_store_old.weddingCreatedAtDate = weddingCreatedAtDate;
  //   event_store_old.weddingDate = weddingDate;

  //   await this.knex(tables.WEDDING_BUDGET_LIST)
  //     .where("id", budgetListId)
  //     .update({ description, expenditure, payment_date: paymentDate });

  //   const new_data = await this.knex(tables.WEDDING_BUDGET_LIST)
  //     .join(tables.BUDGET_CAT, `${tables.WEDDING_BUDGET_LIST}.budget_cat_id`, `${tables.BUDGET_CAT}.id`)
  //     .select()
  //     .where("id", budgetListId)
  //     .first();

  //   event_store_new.eventType = EventType.Add;
  //   event_store_new.data = new_data;
  //   event_store_new.amendDate = amendDate.getTime();
  //   event_store_new.weddingCreatedAtDate = weddingCreatedAtDate;
  //   event_store_new.weddingDate = weddingDate;

    // collections.event_store?.insertMany([event_store_old, event_store_new]);
=======
  updateBudgetItem = async (budgetItem: BudgetItem, itemId: number) => {
    await this.knex(tables.WEDDING_BUDGET_LIST).update(budgetItem).where("id", itemId);
    return;
  };

  deleteBudgetItem = async (itemId: number) => {
    await this.knex(tables.WEDDING_BUDGET_LIST).where("id", itemId).del();
    return;
  };

  // updateExpenditureList = async (
  //   budgetListId: number,
  //   description: string,
  //   expenditure: number,
  //   paymentDate: Date,
  //   amendDate: Date,
  //   weddingEventId: number,
  //   recordCreatedAtDate: Date
  // ) => {
  //   let event_store_old = {} as EventStore;
  //   let event_store_new = {} as EventStore;
  //   const weddingCreatedAtDate = this.knex(tables.WEDDING_EVENT)
  //     .select("created_at")
  //     .where("id", weddingEventId)
  //     .first();
  //   const weddingDate = this.knex(tables.WEDDING_EVENT).select("wedding_date").where("id", weddingEventId).first();
  //   const old_data = await this.knex(tables.WEDDING_BUDGET_LIST)
  //     .join(tables.BUDGET_CAT, `${tables.WEDDING_BUDGET_LIST}.budget_cat_id`, `${tables.BUDGET_CAT}.id`)
  //     .select()
  //     .where("id", budgetListId)
  //     .first();

  //   event_store_old.eventType = EventType.Delete;
  //   event_store_old.data = old_data;
  //   event_store_old.amendDate = amendDate.getTime();
  //   event_store_old.weddingCreatedAtDate = weddingCreatedAtDate;
  //   event_store_old.weddingDate = weddingDate;

  //   await this.knex(tables.WEDDING_BUDGET_LIST)
  //     .where("id", budgetListId)
  //     .update({ description, expenditure, payment_date: paymentDate });

  //   const new_data = await this.knex(tables.WEDDING_BUDGET_LIST)
  //     .join(tables.BUDGET_CAT, `${tables.WEDDING_BUDGET_LIST}.budget_cat_id`, `${tables.BUDGET_CAT}.id`)
  //     .select()
  //     .where("id", budgetListId)
  //     .first();

  //   event_store_new.eventType = EventType.Add;
  //   event_store_new.data = new_data;
  //   event_store_new.amendDate = amendDate.getTime();
  //   event_store_new.weddingCreatedAtDate = weddingCreatedAtDate;
  //   event_store_new.weddingDate = weddingDate;

  // collections.event_store?.insertMany([event_store_old, event_store_new]);
>>>>>>> fef340dd127977de36ae4ee095577433da02e7f2
  // };
}
