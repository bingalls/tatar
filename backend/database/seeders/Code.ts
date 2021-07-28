import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Code from 'App/Models/Code'

export default class CodeSeeder extends BaseSeeder {
  public async run() {
    await Code.createMany([
      {
        cpt_code: 99202,
        session_time: 15,
        patient_type: 'new',
      },
      {
        cpt_code: 99203,
        session_time: 30,
        patient_type: 'new',
      },
      {
        cpt_code: 99204,
        session_time: 45,
        patient_type: 'new',
      },
      {
        cpt_code: 99213,
        session_time: 20,
        patient_type: 'existing',
      },
      {
        cpt_code: 99214,
        session_time: 30,
        patient_type: 'existing',
      },
      {
        cpt_code: 99215,
        session_time: 40,
        patient_type: 'existing',
      },
    ])
  }
}
