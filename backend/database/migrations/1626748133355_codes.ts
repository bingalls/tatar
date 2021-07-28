import BaseSchema from '@ioc:Adonis/Lucid/Schema'

// noinspection JSUnusedGlobalSymbols
export default class Codes extends BaseSchema {
  protected tableName = 'codes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cpt_code').primary()
      table.integer('session_time').index().notNullable()
      table.enum('patient_type', ['new', 'existing']).index().notNullable()

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
