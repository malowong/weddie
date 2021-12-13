import { Knex } from "knex";
import { tables } from "../utils/tables";

export class UserService {
  constructor(private knex: Knex) {}

  getUserInfo = async () => {};
}
