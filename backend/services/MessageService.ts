import { Knex } from "knex";
import { tables } from "../utils/tables";
import { MessageList } from "./models";

export class MessageService {
  constructor(private knex: Knex) {}

  getMessageList = async (eventId: number) => {
    const messageList = await this.knex.select("*").from(tables.MESSAGE_LIST).orderBy("created_at", "DESC").limit(15);
    return messageList;
  };

  addMessage = async (messageData: MessageList, role_id_arr: number[]) => {
    const [messageId] = await this.knex(tables.MESSAGE_LIST).insert(messageData).returning("id");

    for (const roleId of role_id_arr) {
      await this.knex(tables.MESSAGE_ROLE).insert({
        message_id: messageId,
        role_id: roleId,
      });
    }
  };
}
