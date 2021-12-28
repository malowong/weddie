import { Knex } from "knex";
import { tables } from "../utils/tables";

export class GuestService {
  constructor(private knex: Knex) {}

  getGuestList = async (eventId: number) => {
    const guestList = this.knex.select("*").from(tables.WEDDING_GUEST_LIST).where("wedding_event_id", eventId);

    return guestList;
  };
}
