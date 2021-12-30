import { Knex } from "knex";
import { tables } from "../utils/tables";

export class ItinService {
  constructor(private knex: Knex) {}

  getItinList = async (eventID: number) => {

    const itinList = this.knex(tables.ITINERARY_LIST).where("wedding_event_id", eventID).innerJoin(tables.ITINERARY_ROLE, 'wedding_event_id', `${tables.ITINERARY_ROLE}.itinerary_id`)
    return itinList;
  };
  
  async getEventId(userId: number) {
    const [eventId] = await this.knex.select("user_id").from(tables.WEDDING_USER).where("user_id", userId)
    return eventId;
  }

  
}
