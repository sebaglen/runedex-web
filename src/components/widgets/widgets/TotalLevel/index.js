import MiniTotalLevel from './totalLevelMiniWidget'
import TotalLevel from './totalLevelWidget'

export default {
  name: 'Total Level',
  type: 'total-level',
  description: `Track your total level over time like a boss. You can decide the interval yourself and stuff`,
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
