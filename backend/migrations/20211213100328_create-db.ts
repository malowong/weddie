import { Knex } from "knex";

const tables = Object.freeze({
  HK_DISTRICT: "hk_district",
  USER_IN_OUT_TIME: "user_in_out_time",
  ROLE: "role",
  BANQUET_VENDOR_CAT: "banquet_vendor_cat",
  CHURCH_LIST: "church_list",
  BUDGET_CAT: "budgets_cat",
  BANQUET_VENDOR_LIST: "banquet_vendor_list",
  WEDDING_EVENT: "wedding_event",
  USER_INFO: "user_info",
  WEDDING_EVENT_USER: "wedding_event_user",
  WEDDING_LOGISTICS: "wedding_logistics",
  BUDGET_LIST: "budgets_list",
  LOGISTICS_LIST_TEMPLATE: "logistics_list_template",
  TO_DO_LIST_TEMPLATE: "to_do_list_template",
  BIG_DAY_ITIN_TEMPLATE: "big_day_itin_template",
});

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tables.HK_DISTRICT, (table) => {
    table.increments();
    table.string("residence_district").notNullable().unique();
    table.timestamps;
  });

  await knex.schema.createTable(tables.USER_IN_OUT_TIME, (table) => {
    table.increments();
    table.integer("user_id").unsigned();
    table.timestamp("in_time", { useTz: false });
    table.timestamp("out_time", { useTz: false });
  });

  await knex.schema.createTable(tables.ROLE, (table) => {
    table.increments();
    table.string("role").notNullable().unique();
  });

  await knex.schema.createTable(tables.BANQUET_VENDOR_CAT, (table) => {
    table.increments();
    table.string("banquet_cat").notNullable().unique();
  });

  await knex.schema.createTable(tables.CHURCH_LIST, (table) => {
    table.increments();
    table.string("church_name").notNullable().unique();
  });

  await knex.schema.createTable(tables.BUDGET_CAT, (table) => {
    table.increments();
    table.string("budget_cat").notNullable().unique();
  });

  await knex.schema.createTable(tables.BANQUET_VENDOR_LIST, (table) => {
    table.increments();
    table.integer("event_id").unsigned();
    table.foreign("event_id").references(`${tables.LOGISTICS_LIST_TEMPLATE}.id`);
    table.string("vendor_name").notNullable().unique();
    table.string("vendor_location").notNullable();
    table.integer("banquet_cat_id").unsigned();
    table.foreign("banquet_cat_id").references(`${tables.BANQUET_VENDOR_CAT}.id`);
  });

  await knex.schema.createTable(tables.WEDDING_EVENT, (table) => {
    table.increments();
    table.date("wedding_date");
    table.integer("pax").unsigned();
    table.integer("banquet_vendor_id").unsigned();
    table.foreign("banquet_vendor_id").references(`${tables.BANQUET_VENDOR_LIST}.id`);
    table.integer("church_id").unsigned();
    table.foreign("church_id").references(`${tables.CHURCH_LIST}.id`);
    table.timestamp("created_at", { useTz: false }).defaultTo(knex.fn.now());
    table.timestamp("updated_at", { useTz: false }).defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(tables.USER_INFO, (table) => {
    table.increments();
    table.string("nickname", 30).notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("phone", 8).notNullable().unique();
    table.integer("district_id").unsigned();
    table.foreign("district_id").references(`${tables.HK_DISTRICT}.id`);
    table.string("gender", 1).notNullable();
  });

  await knex.schema.createTable(tables.WEDDING_EVENT_USER, (table) => {
    table.increments();
    table.integer("event_id").unsigned();
    table.foreign("event_id").references(`${tables.WEDDING_EVENT}.id`);
    table.integer("user_id").unsigned();
    table.foreign("user_id").references(`${tables.USER_INFO}.id`);
    table.integer("role_id").unsigned();
    table.foreign("role_id").references(`${tables.ROLE}.id`);
    table.string("to_do_item").notNullable();
    table.date("exec_date").notNullable();
    table.time("exec_time");
  });

  await knex.schema.createTable(tables.WEDDING_LOGISTICS, (table) => {
    table.increments();
    table.integer("event_id").unsigned();
    table.foreign("event_id").references(`${tables.LOGISTICS_LIST_TEMPLATE}.id`);
    table.string("item_name").notNullable().unique();
    table.string("remarks");
  });

  await knex.schema.createTable(tables.BUDGET_LIST, (table) => {
    table.increments();
    table.integer("event_id").unsigned();
    table.foreign("event_id").references(`${tables.LOGISTICS_LIST_TEMPLATE}.id`);
    table.integer("budget_cat_id").unsigned();
    table.foreign("budget_cat_id").references(`${tables.BUDGET_CAT}.id`);
    table.string("description").notNullable().unique();
    table.float("expenditure").notNullable().unsigned();
    table.date("payment_date").notNullable();
  });

  await knex.schema.createTable(tables.LOGISTICS_LIST_TEMPLATE, (table) => {
    table.increments();
    table.string("logistics_example");
  });

  await knex.schema.createTable(tables.TO_DO_LIST_TEMPLATE, (table) => {
    table.increments();
    table.string("to_do_example");
  });

  await knex.schema.createTable(tables.BIG_DAY_ITIN_TEMPLATE, (table) => {
    table.increments();
    table.string("itin_example");
  });
}

export async function down(knex: Knex): Promise<void> {
  async function dropTable(tableObj: Object) {
    const reversedTableArr = Object.values(tableObj).reverse();

    for (let i = 0; i < reversedTableArr.length; i++) {
      await knex.schema.dropTable(`TRUNCATE ${reversedTableArr[i]} RESTART IDENTITY CASCADE`);
    }
  }

  await dropTable(tables);
}
