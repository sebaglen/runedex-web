import MiniGoal from './goalMiniWidget'
import Goal from './goalWidget'

export default {
  name: 'Goal',
  type: 'goal',
  description: `Set goals and track your progress towards them! 
    Make a list of things you want to achieve, items you want to collect and xp you want to gain`,
  shortDescription: 'Set goals and track your progress',
  mini: MiniGoal,
  main: Goal,
  permissions: ['bank', 'character', 'quest'],
  // delaration of what kind of config this widget expects
  configStructure: {
    levels: {
      type: 'list',
      items: {
        key: 'levelId',
        value: 'number'
      }
    },
    quests: {
      type: 'list',
      items: 'questId'
    },
    items: {
      type: 'list',
      items: {
        key: 'itemId',
        value: 'number'
      }
    }
  }
}
