/* eslint-disable prettier/prettier */
import Database from '@ioc:Adonis/Lucid/Database'
import Estimate from 'App/Biz/Estimate'

export interface PatientProvider {
  id: number
  cpt_code: number
  lname: string
  fname: string
  charge: number
  paid: number
}

const resolvers = {
  Query: {
    /**
     * Standard to implement graphql schema
     * @param _: object Unused parent param
     * @param param1: object Visit code & patient name
     * @returns
     */
    rate: async(_, { code, lname, fname }) => {
      return await Database.from('providers')
      .join('patients', 'providers.id', '=', 'patients.provider_id')
      .select('providers.*')
      .select('patients.paid')
      .where('providers.cpt_code', parseInt(code, 10))
      .andWhere('patients.lname', 'LIKE', lname.replaceAll(/[^a-z]/gi, ''))
      .andWhere('patients.fname', 'LIKE', fname.replaceAll(/[^a-z]/gi, '')) // sanitize as letters
      .first()
      .then(
        (result: PatientProvider) => {return Estimate.calc(result.charge, result.paid)}
      )
    },
  },
}

export default resolvers
