import { Knex } from "knex";
import { tables } from "../utils/tables";
import { SignupUser, User } from "./models";
// import { tables } from "../utils/tables";


export class UserService {
  constructor(private knex: Knex) {}

  async getUserByEmail(email: string) {
    const user = await this.knex<User>(tables.USER_INFO).where({ email: email }).first()
    return user;
  }

  async getUserById(id: number) {
    const user = await this.knex<User>(tables.USER_INFO).where({ id }).first();
    return user;
  }

  insertNewUser = async (newUser: SignupUser) => {
    const newUserID = await this.knex(tables.USER_INFO).insert(newUser).returning("id");
    return newUserID;
  };

}
