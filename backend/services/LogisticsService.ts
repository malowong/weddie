import { Knex } from "knex";

export class LogisticsService {
  constructor(private knex: Knex) {}

  getLogisticsList = async (eventID: number) => {
    const logisticsList = await this.knex
      .select("logistics_item", "logistics_remarks")
      .from("wedding_logistics")
      .where("wedding_event_id", eventID);

    return logisticsList;
  };
}
