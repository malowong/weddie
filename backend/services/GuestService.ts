import { Knex } from "knex";
import { tables } from "../utils/tables";
import { GuestList } from "./models";

export class GuestService {
  constructor(private knex: Knex) {}

  getGuestList = async (eventId: number) => {
    const guestList = await this.knex.select("*").from(tables.WEDDING_GUEST_LIST).where("wedding_event_id", eventId);

    return guestList;
  };

  addGuest = async (guestData: GuestList) => {
    await this.knex<GuestList>(tables.WEDDING_GUEST_LIST).insert(guestData);

    return;
  };

  updateGuest = async (guestData: GuestList, guestId: number) => {
    await this.knex<GuestList>(tables.WEDDING_GUEST_LIST).update(guestData).where("id", guestId);

    return;
  };
}
