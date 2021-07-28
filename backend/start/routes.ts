/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
| Defines HTTP routes. You could also import routes into this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

import { graphiqlAdonis } from 'apollo-server-adonis'
import GqlController from 'App/Controllers/Http/GqlController'

Route.get('graphiql', graphiqlAdonis({ endpointURL: '/graphql' }))

Route.post('graphql', GqlController.post())
