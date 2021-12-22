import { Knex } from "knex";
import { tables } from "../utils/tables";
import { User } from "./models";
// import { tables } from "../utils/tables";

export class UserService {
  constructor(private knex: Knex) {}

  async getUserByPhone(phone: string) {
    const user = await this.knex<User>(tables.USER_INFO).where({ phone: phone }).first()
    return user;
  }

  async getUserById(id: number) {
    const user = await this.knex<User>(tables.USER_INFO).where({ id }).first();
    return user;
  }


}
