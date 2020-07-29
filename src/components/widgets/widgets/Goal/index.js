import MiniGoal from './goalMiniWidget'
import Goal from './goalWidget'

export default {
  name: 'Goal',
  type: 'goal',
  description: `Monitor progress towards custom account goals. 
    With this widget you can set yourself a goal, and monitor your progression towards that goal. 
    Examples of progression can be quests, items or levels that your account needs before the goal is achieved.`,
  shortDescription: 'Set goals and track your progress',
  mini: MiniGoal,
  main: Goal,
  permissions: ['bank', 'character', 'quest'],
  searchTags: ['goal', 'progress', 'progression'],
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
