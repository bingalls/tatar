/*
|--------------------------------------------------------------------------
| Validate Environment Variables
|--------------------------------------------------------------------------
| Defines rules for validating environment variables.
| Do not rename nor move this file, as it loads from boot lifecycle
*/
import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  DB_CONNECTION: Env.schema.enum(['mssql', 'mysql', 'oracle', 'postgres', 'sqlite'] as const), //aws redshift?
  DB_DATABASE: Env.schema.string(),
  DB_HOST: Env.schema.string(),
  DB_PASSWORD: Env.schema.string(),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  NODE_ENV: Env.schema.enum(['development', 'production', 'testing'] as const),
  PORT: Env.schema.number(),
  SESSION_DRIVER: Env.schema.string(),
})
