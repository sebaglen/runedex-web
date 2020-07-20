import MiniXpGained from './xpGainedMiniWidget'
import XpGained from './xpGainedWidget'

export default {
  name: 'XP Gained',
  type: 'xp-gained',
  description: `Track your XP gained over time like a boss. You can decide the interval yourself and stuff`,
  shortDescription: `Don't be whack, make sure you track`,
  mini: MiniXpGained,
  main: XpGained,
  permissions: ['character'],
  // delaration of what kind of config this widget expects
  configStructure: {
    time: {
      type: 'options',
      items: ['day', 'week', 'month']
    }
  }
}
