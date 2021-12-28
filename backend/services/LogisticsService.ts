import { Knex } from "knex";
import { tables } from "../utils/tables";

export class LogisticsService {
  constructor(private knex: Knex) {}

  getLogisticsList = async (eventID: number) => {
    const logisticsList = await this.knex.select("*").from(tables.WEDDING_LOGISTICS).where("wedding_event_id", eventID);

    return logisticsList;
  };
}
