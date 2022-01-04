import { Knex } from "knex";

const tables = Object.freeze({
  HK_DISTRICT: "hk_district",
  ROLE: "role",
  BANQUET_VENDOR_CAT: "banquet_vendor_cat",
  CHURCH_LIST: "church_list",
  BUDGET_CAT: "budgets_cat",
  BANQUET_VENDOR_LIST: "banquet_vendor_list",
  WEDDING_EVENT: "wedding_event",
  USER_INFO: "user_info",
  WEDDING_USER: "wedding_user",
  WEDDING_TO_DO_LIST: "wedding_to_do_list",
  WEDDING_LOGISTICS: "wedding_logistics",
  WEDDING_BUDGET_LIST: "wedding_budget_list",
  ITINERARY_LIST: "itinerary_list",
  ITINERARY_ROLE: "itinerary_role",
  WEDDING_USER_ITINERARY: "wedding_user_itinerary",
  LOGISTICS_LIST_TEMPLATE: "logistics_list_template",
  TO_DO_LIST_TEMPLATE: "to_do_list_template",
  ITIN_TEMPLATE: "itin_template",
  BUDGET_TEMPLATE: "budget_template",
  WEDDING_GUEST_LIST: "wedding_guest_list",
});

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tables.HK_DISTRICT, (table) => {
    table.increments();
    table.string("residence_district").notNullable().unique();
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
    table.string("name").notNullable().unique();
  });

  await knex.schema.createTable(tables.BUDGET_CAT, (table) => {
    table.increments();
    table.string("budget_cat").notNullable().unique();
  });

  await knex.schema.createTable(tables.BANQUET_VENDOR_LIST, (table) => {
    table.increments();
    table.string("vendor_name").notNullable().unique();
    table.string("vendor_location").notNullable();
    table.integer("banquet_cat_id").unsigned();
    table.foreign("banquet_cat_id").references(`${tables.BANQUET_VENDOR_CAT}.id`);
  });

  await knex.schema.createTable(tables.WEDDING_EVENT, (table) => {
    table.increments();
    table.string("wedding_name");
    table.date("wedding_date");
    table.integer("pax").unsigned();
    table.integer("budget").unsigned();
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
    table.integer("district_id").unsigned().notNullable();
    table.foreign("district_id").references(`${tables.HK_DISTRICT}.id`);
    table.string("gender", 1).notNullable();
  });

  await knex.schema.createTable(tables.WEDDING_USER, (table) => {
    table.increments();
    table.integer("wedding_event_id").unsigned();
    table.foreign("wedding_event_id").references(`${tables.WEDDING_EVENT}.id`);
    table.integer("user_id").unsigned();
    table.foreign("user_id").references(`${tables.USER_INFO}.id`);
    table.integer("role_id").unsigned();
    table.foreign("role_id").references(`${tables.ROLE}.id`);
  });

  await knex.schema.createTable(tables.WEDDING_TO_DO_LIST, (table) => {
    table.increments();
    table.integer("wedding_event_id").unsigned();
    table.foreign("wedding_event_id").references(`${tables.WEDDING_EVENT}.id`);
    table.timestamp("to_do_date", { useTz: true }).notNullable();
    table.string("to_do_item").notNullable();
    table.string("to_do_remarks");
    table.boolean("is_finished").defaultTo(false);
  });

  await knex.schema.createTable(tables.WEDDING_GUEST_LIST, (table) => {
    table.increments();
    table.integer("wedding_event_id").unsigned();
    table.foreign("wedding_event_id").references(`${tables.WEDDING_EVENT}.id`);
    table.string("name", 30).notNullable();
    table.string("phone", 8).notNullable();
    table.string("relationship").notNullable();
  });

  await knex.schema.createTable(tables.WEDDING_LOGISTICS, (table) => {
    table.increments();
    table.integer("wedding_event_id").unsigned();
    table.foreign("wedding_event_id").references(`${tables.WEDDING_EVENT}.id`);
    table.string("logistics_item").notNullable().unique();
    table.string("logistics_remarks");
    table.boolean("is_ready").defaultTo(false);
  });

  await knex.schema.createTable(tables.WEDDING_BUDGET_LIST, (table) => {
    table.increments();
    table.integer("wedding_event_id").unsigned();
    table.foreign("wedding_event_id").references(`${tables.WEDDING_EVENT}.id`);
    table.integer("budget_cat_id").unsigned();
    table.foreign("budget_cat_id").references(`${tables.BUDGET_CAT}.id`);
    table.integer("budget_description_id").unsigned();
    table.string("description").notNullable();
    table.integer("expenditure").unsigned();
  });

  await knex.schema.createTable(tables.ITINERARY_LIST, (table) => {
    table.increments();
    table.integer("wedding_event_id").unsigned();
    table.foreign("wedding_event_id").references(`${tables.WEDDING_EVENT}.id`);
    table.string("itinerary").notNullable();
    table.string("job_duty").notNullable();
    table.time("itinerary_time");
  });

  await knex.schema.createTable(tables.ITINERARY_ROLE, (table) => {
    table.increments();
    table.integer("itinerary_id").notNullable().unsigned();
    table.foreign("itinerary_id").references(`${tables.ITINERARY_LIST}.id`);
    table.integer("role_id").unsigned();
    table.foreign("role_id").references(`${tables.ROLE}.id`);
  });

  await knex.schema.createTable(tables.WEDDING_USER_ITINERARY, (table) => {
    table.increments();
    table.integer("wedding_event_user_id").notNullable().unsigned();
    table.foreign("wedding_event_user_id").references(`${tables.WEDDING_USER}.id`);
  });

  await knex.schema.createTable(tables.LOGISTICS_LIST_TEMPLATE, (table) => {
    table.increments();
    table.string("logistics_item");
  });

  await knex.schema.createTable(tables.TO_DO_LIST_TEMPLATE, (table) => {
    table.increments();
    table.string("days_prior_wedding");
    table.string("to_do_temp");
  });

  await knex.schema.createTable(tables.ITIN_TEMPLATE, (table) => {
    table.increments();
    table.string("itin_temp");
    table.string("itin_time_temp");
    table.string("job_duty_temp");
    table.string("wedding_user_id_temp");
  });

  await knex.schema.createTable(tables.BUDGET_TEMPLATE, (table) => {
    table.increments();
    table.string("budget_cat_id_temp");
    table.string("budget_description_temp");
  });
}

export async function down(knex: Knex): Promise<void> {
  async function dropTable(tableObj: Object) {
    const reversedTableArr = Object.values(tableObj).reverse();
    console.log(reversedTableArr);

    for (let i = 0; i < reversedTableArr.length; i++) {
      await knex.schema.dropTable(reversedTableArr[i]);
      // truncate is only for deleting data, not drop table
      // await knex.raw(`TRUNCATE ${reversedTableArr[i]} RESTART IDENTITY CASCADE`);
    }
  }

  await dropTable(tables);
}
