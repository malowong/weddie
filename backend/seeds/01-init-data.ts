import { Knex } from "knex";
import { church } from "./dataset/church";
import { club } from "./dataset/club_info";
import { hotel } from "./dataset/hotel_info";
import { restaurant } from "./dataset/restaurant_info";
import { others } from "./dataset/others_info";
import * as dataset from "./dataset/reamain_tables_seeds";
import { tables } from "../utils/tables";

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  const trx = await knex.transaction();
  try {
    await knex(tables.BANQUET_VENDOR_CAT).insert(dataset.banquet_cat);
    await knex(tables.BANQUET_VENDOR_LIST).insert(club);
    await knex(tables.BANQUET_VENDOR_LIST).insert(hotel);
    await knex(tables.BANQUET_VENDOR_LIST).insert(restaurant);
    await knex(tables.BANQUET_VENDOR_LIST).insert(others);
    await knex(tables.CHURCH_LIST).insert(church);
    await knex(tables.BUDGET_CAT).insert(dataset.banquet_cat);
    await knex(tables.HK_DISTRICT).insert(dataset.hk_district);
    await knex(tables.ROLE).insert(dataset.role);
    await knex(tables.USER_INFO).insert(dataset.user1);

    await trx.commit();
  } catch (err) {
    console.error(err.message);
    await trx.rollback();
  } finally {
    await trx.destroy();
  }
}
