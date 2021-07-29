# TATAR Typescript Adonis Tailwind Apollo React demo
This is a simple example of a graphql server & client, to estimate health insurance costs.

## Requirements
* nodejs >= v14.x LTS (tested on v16)
* sqlite3 or other database

## Setup

```bash
git clone https://github.com/bingalls/tatar.git
cd tatar/backend
npm install     # yarn also works
cp .env.example .env
node ace generate:key
npm run dev
```

## Run
`open http://127.0.0.1:3333/graphiql` # OSX; Linux: `xdg-open`

In the left graphiql window, try this example graphql statement
* QUERY: ` {rate(code: 99213, lname: "Astor", fname: "Nancy"){gross, net}} `

## Database Option
Sqlite is the default database for development.
Create empty database & grant permissions.
Edit database configuration in .env
Note that env.ts type-checks your .env

### Migrations
Run the following command to run startup migrations.

```bash
cd adonisql
node ace invoke @adonisjs/lucid   # select your database driver
node ace build
```
Run following commands to replace the bundled sqlite database
```bash
node ace migration:run
node ace db:seed
```
## Customize
Edit your graphql API in
* app/data/schema.ts
* app/data/resolvers.ts
Continue at https://docs.adonisjs.com/guides/introductionw

## Notice
It might be necessary to disable CSRF in config/shield.js to allow the /graphiql development tool (i.e. route).
Re-enable CSRF for production

ToDo: configure Adonisjs v5 Japa unit tests.
* https://preview.adonisjs.com/blog/running-tests-in-adonisjs-v5
* [A v4 TDD tutorial may help
](https://dev.to/michi/tdd-course-with-adonisjs-1-let-s-build-a-simple-forum-199)

## See Also
I had past difficulties with these Apollo v5 service provider plugins; they've since improved
* https://github.com/sebastiandittrich/apollo-adonis
* https://github.com/zakodium/adonis-apollo

## Credits
The following are included under the MIT license:
* https://adonisjs.com/
* https://www.apollographql.com/
* https://github.com/facebook/create-react-app
* https://www.tailwind-kit.com/
* https://heroicons.com/

