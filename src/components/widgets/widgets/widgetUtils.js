import BankValue from './BankValue'
import Goal from './Goal'
import TotalLevel from './TotalLevel'
import XpGained from './XpGained'
import AddNew from './AddNew'

const availableWidgets = {
  [BankValue.type]: BankValue,
  [Goal.type]: Goal,
  [TotalLevel.type]: TotalLevel,
  [XpGained.type]: XpGained,
  [AddNew.type]: AddNew
}

export const miniWidgetComponents = Object.values(availableWidgets).reduce(
  (widgetMap, widget) => ({ ...widgetMap, [widget.type]: widget.mini }),
  {}
)
export const mainWidgetComponents = Object.values(availableWidgets).reduce(
  (widgetMap, widget) => ({ ...widgetMap, [widget.type]: widget.main }),
  {}
)
export const getWidget = widgetType => availableWidgets[widgetType]

export default availableWidgets
