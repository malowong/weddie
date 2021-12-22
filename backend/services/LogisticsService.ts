import { Knex } from "knex";

export class LogisticsService {
  constructor(private knex: Knex) {}

  getLogisticsList = async (eventID: number) => {
    const logisticsList = await this.knex.select("description").from("wedding_logistics").where("event_id", eventID);
    return logisticsList;
  };
}