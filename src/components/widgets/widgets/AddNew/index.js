import MiniAddNew from './addNewMiniWidget'
import AddNew from './addNewWidget'

export default {
  name: 'Add New',
  type: 'add-new',
  description:
    'Add a new widget',
  shortDescription: 'Add new widget',
  mini: MiniAddNew,
  main: AddNew,
  permissions: [],
  configStructure: {}
}
