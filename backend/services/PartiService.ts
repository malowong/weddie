import { Knex } from "knex";
import { tables } from "../utils/tables";
import { Parti } from "./models";

export class PartiService {
  constructor(private knex: Knex) {}

  getPartiList = async (eventId: number) => {
    const partiList: Parti[] = await this.knex
      .select("*")
      .from(tables.WEDDING_PARTI_LIST)
      .where("wedding_event_id", eventId)
      .orderBy("id");

    return partiList;
  };

  addParti = async (partiData: Parti) => {
    await this.knex<Parti>(tables.WEDDING_PARTI_LIST).insert(partiData);
  };
}
