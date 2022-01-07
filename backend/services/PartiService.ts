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
      .orderBy("role_id");

    return partiList;
  };

  addParti = async (partiData: Parti) => {
    await this.knex<Parti>(tables.WEDDING_PARTI_LIST).insert(partiData);
  };

  updateParti = async (partiData: Parti, partiId: number) => {
    await this.knex<Parti>(tables.WEDDING_PARTI_LIST).update(partiData).where("id", partiId);
    return;
  };

  deleteParti = async (partiId: number) => {
    await this.knex(tables.WEDDING_PARTI_LIST).where("id", partiId).del();
    return;
  };
}
