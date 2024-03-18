/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ndt_form", (t) => {
    t.uuid("id").primary().defaultTo(knex.fn.uuid());
    t.string("propertyID").notNullable();
    t.string("propertyName").notNullable();
    t.string("propertyAddress").notNullable();
    t.boolean("bankDetailsChange").notNullable().defaultTo(false);
    t.boolean("propertyOwnershipChange").notNullable().defaultTo(false);
    t.boolean("accountNameChange").notNullable().defaultTo(false);
    t.boolean("otherChange").notNullable().defaultTo(false);
    t.specificType("changeRequired", "text[]").notNullable();
    t.string("changeDescriptonDetails").notNullable();
    t.string("reasonForChange").notNullable();
    t.string("desiredOutcome").notNullable();
    t.string("requestorName").nullable();
    t.string("requestorID").notNullable();
    t.string("requestorJobTitle").notNullable();
    t.date("date").notNullable();
    t.boolean("urgently").notNullable().defaultTo(false);
    t.boolean("urgent").notNullable().defaultTo(false);
    t.boolean("routine").notNullable().defaultTo(false);
    t.string("uploads");
    t.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("ndt_form")
};
