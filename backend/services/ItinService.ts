import { Knex } from "knex";
import { tables } from "../utils/tables";

export class ItinService {
  constructor(private knex: Knex) { }

  getItinList = async (eventID: number) => {

    const itinList = await this.knex.select(`${tables.ITINERARY_LIST}.id`, 'itinerary', 'job_duty', 'itinerary_time', `${tables.ITINERARY_ROLE}.role_id`).from(tables.ITINERARY_LIST)
      .where("wedding_event_id", eventID)
      .innerJoin(tables.ITINERARY_ROLE, `${tables.ITINERARY_LIST}.id`, `${tables.ITINERARY_ROLE}.itinerary_id`)

    const itinMap = new Map()
    for (const item of itinList) {
      const { role_id, id, ...others } = item;
      if (!itinMap.has(id)) {
        itinMap.set(id, {
          id,
          ...others,
          role_id_arr: []
        })
      }
      itinMap.get(id).role_id_arr.push(role_id)
    }

    return itinMap;
  };

  async getEventId(userId: number) {
    const [eventId] = await this.knex.select("user_id").from(tables.WEDDING_USER).where("user_id", userId)
    return eventId;
  }

}
