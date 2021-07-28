import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Patient from 'App/Models/Patient'

export default class RateSeeder extends BaseSeeder {
  public async run() {
    await Patient.createMany([
      {
        provider_id: 1,
        lname: 'Astor',
        fname: 'Nancy',
        paid: 0,
      },
      {
        provider_id: 3,
        lname: 'Clark',
        fname: 'Minnie',
        paid: 200,
      },
      {
        provider_id: 4,
        lname: 'Fayette',
        fname: 'Clara',
        paid: 400,
      },
      {
        provider_id: 1,
        lname: 'Langhorne',
        fname: 'Irene',
        paid: 800,
      },
      {
        provider_id: 3,
        lname: 'Nesbin',
        fname: 'Evelyn',
        paid: 1600,
      },
      {
        provider_id: 2,
        lname: 'Normand',
        fname: 'Mabel',
        paid: 3200,
      },
    ])
  }
}
