import { Knex } from "knex";
import { tables } from "../utils/tables";

export class EventService {
  constructor(private knex: Knex) {}

  getEventListByUserId = async (userId: number) => {
    const eventList = this.knex
      .select("wedding_event.id", "wedding_event_id", "user_id", "role_id", "wedding_name")
      .from(tables.WEDDING_USER)
      .innerJoin(tables.WEDDING_EVENT, `${tables.WEDDING_USER}.wedding_event_id`, `${tables.WEDDING_EVENT}.id`);

    return eventList;
  };
}
