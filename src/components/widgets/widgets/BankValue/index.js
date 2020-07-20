import MiniBankValue from './bankValueMiniWidget'
import BankValue from './bankValueWidget'

export default {
  name: 'Bank Value',
  type: 'bank-value',
  description:
    'Have total control of the value in your bank with this fantastic widget',
  shortDescription: 'Banky spank me',
  mini: MiniBankValue,
  main: BankValue,
  permissions: ['bank'],
  configStructure: {}
}
