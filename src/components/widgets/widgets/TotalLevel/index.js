import MiniTotalLevel from './totalLevelMiniWidget'
import TotalLevel from './totalLevelWidget'

export default {
  name: 'Total Level',
  type: 'total-level',
  description: `Monitor daily, weekly or monthly level progression.
    With this widget you can keep track of all your XP gains.`,
  shortDescription: `Don't be whack, make sure you track`,
  mini: MiniTotalLevel,
  main: TotalLevel,
  permissions: ['character'],
  // delaration of what kind of config this widget expects
  configStructure: {
    time: {
      type: 'options',
      items: ['day', 'week', 'month']
    }
  }
}
