import { Knex } from "knex";

export class GuestService {
  constructor(private knex: Knex) {}

  getGuestList = async () => {
    const guestList = "TODO";

    return guestList;
  };
}
