import { Knex } from "knex";

export class GuestService {
  constructor(private knex: Knex) {}

  getGuestList = async () => {
    const guestList = "TODO";

    this.knex.raw('SELECT * FROM user_info')


    return guestList;
  };
}
