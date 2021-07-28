import BaseSchema from '@ioc:Adonis/Lucid/Schema'

// noinspection JSUnusedGlobalSymbols
export default class Patients extends BaseSchema {
  protected tableName = 'patients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // support multiple providers with JSON https://www.sqlite.org/json1.html
      table.integer('provider_id').defaultTo(0).index() // >0 id of primary provider visited
      table.string('lname', 32).notNullable().index()
      table.string('fname', 16).notNullable().index()
      table.float('paid', 2).defaultTo(0)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
