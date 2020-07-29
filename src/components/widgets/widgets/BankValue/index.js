import MiniBankValue from './bankValueMiniWidget'
import BankValue from './bankValueWidget'

export default {
  name: 'Bank Value',
  type: 'bank-value',
  description: `Monitor daily, weekly or monthly changes in your bank value. Define a threshold, 
    and get push notifications when items in your bank spike or drop past the set threshold.`,
  shortDescription: 'Banky spank me',
  mini: MiniBankValue,
  main: BankValue,
  permissions: ['bank'],
  searchTags: ['bank', 'value', 'ge', 'grand', 'exchange', 'items'],
  configStructure: {}
}
