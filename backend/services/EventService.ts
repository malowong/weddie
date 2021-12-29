import { Knex } from "knex";
import { tables } from "../utils/tables";
import { IEvent } from "./models";

export class EventService {
  constructor(private knex: Knex) {}

  async createEvent(event: IEvent) {
    const { wedding_date, wedding_name, pax, role_id, user_id } = event;

    const [eventId] = await this.knex(tables.WEDDING_EVENT).insert({ wedding_date, wedding_name, pax }).returning("id");

    await this.knex(tables.WEDDING_USER).insert({ user_id, role_id, wedding_event_id: eventId });

    return eventId;
  }

  async getEvent(userId: number) {
    const eventData = await this.knex
      .from(tables.WEDDING_USER)
      .where({ user_id: userId })
      .innerJoin("wedding_event", "wedding_event_id", "wedding_event.id")
      .first();

    return eventData;
  }
}
