import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Provider from 'App/Models/Provider'

// noinspection JSUnusedGlobalSymbols
export default class ProviderSeeder extends BaseSeeder {
  public async run() {
    await Provider.createMany([
      {
        id: 1,
        cpt_code: 99202,
        lname: 'Boombas',
        fname: 'Vinny', // eslint-disable-next-line prettier/prettier
        charge: 62.50,
      },
      {
        id: 1,
        cpt_code: 99203,
        lname: 'Boombas',
        fname: 'Vinny', // eslint-disable-next-line prettier/prettier
        charge: 125.00,
      },
      {
        id: 1,
        cpt_code: 99204,
        lname: 'Boombas',
        fname: 'Vinny', // eslint-disable-next-line prettier/prettier
        charge: 187.00,
      },
      {
        id: 1,
        cpt_code: 99213,
        lname: 'Boombas',
        fname: 'Vinny',
        charge: 83.33,
      },
      {
        id: 1,
        cpt_code: 99214,
        lname: 'Boombas',
        fname: 'Vinny', // eslint-disable-next-line prettier/prettier
        charge: 125.00,
      },
      {
        id: 1,
        cpt_code: 99215,
        lname: 'Boombas',
        fname: 'Vinny', // eslint-disable-next-line prettier/prettier
        charge: 150.00,
      },

      {
        id: 2,
        cpt_code: 99202,
        lname: 'Robinson',
        fname: 'Amy',
        charge: 55.51,
      },
      {
        id: 2,
        cpt_code: 99203,
        lname: 'Robinson',
        fname: 'Amy',
        charge: 80.63,
      },
      {
        id: 2,
        cpt_code: 99204,
        lname: 'Robinson',
        fname: 'Amy', // eslint-disable-next-line prettier/prettier
        charge: 118.00,
      },
      {
        id: 2,
        cpt_code: 99213,
        lname: 'Robinson',
        fname: 'Amy', // eslint-disable-next-line prettier/prettier
        charge: 57.00,
      },
      {
        id: 2,
        cpt_code: 99214,
        lname: 'Robinson',
        fname: 'Amy', // eslint-disable-next-line prettier/prettier
        charge: 75.00,
      },
      {
        id: 2,
        cpt_code: 99215,
        lname: 'Robinson',
        fname: 'Amy',
        charge: 106.36,
      },

      {
        id: 3,
        cpt_code: 99202,
        lname: 'Gibson',
        fname: 'Art',
        charge: 74.79,
      },
      {
        id: 3,
        cpt_code: 99203,
        lname: 'Gibson',
        fname: 'Art',
        charge: 102.63,
      },
      {
        id: 3,
        cpt_code: 99204,
        lname: 'Gibson',
        fname: 'Art',
        charge: 137.18,
      },
      {
        id: 3,
        cpt_code: 99213,
        lname: 'Gibson',
        fname: 'Art',
        charge: 65.53,
      },
      {
        id: 3,
        cpt_code: 99214,
        lname: 'Gibson',
        fname: 'Art',
        charge: 65.53,
      },
      {
        id: 3,
        cpt_code: 99215,
        lname: 'Gibson',
        fname: 'Art',
        charge: 119.72,
      },

      {
        id: 4,
        cpt_code: 99202,
        lname: 'Dolittle',
        fname: 'John',
        charge: 55.51,
      },
      {
        id: 4,
        cpt_code: 99203,
        lname: 'Dolittle',
        fname: 'John',
        charge: 80.63,
      },
      {
        id: 4,
        cpt_code: 99204,
        lname: 'Dolittle',
        fname: 'John',
        charge: 118.0,
      },
      {
        id: 4,
        cpt_code: 99213,
        lname: 'Dolittle',
        fname: 'John', // eslint-disable-next-line prettier/prettier
        charge: 57.00,
      },
      {
        id: 4,
        cpt_code: 99214,
        lname: 'Dolittle',
        fname: 'John',
        charge: 65.53,
      },
      {
        id: 4,
        cpt_code: 99215,
        lname: 'Dolittle',
        fname: 'John',
        charge: 106.36,
      },
    ])
  }
}
