import BaseSchema from '@ioc:Adonis/Lucid/Schema'

// noinspection JSUnusedGlobalSymbols
export default class Providers extends BaseSchema {
  protected tableName = 'providers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').notNullable().index()
      table.integer('cpt_code').notNullable().index()
      table.primary(['id', 'cpt_code'], 'provider_idx')

      table.string('lname').notNullable().index()
      table.string('fname').notNullable().index()
      table.float('charge', 2).notNullable()

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
