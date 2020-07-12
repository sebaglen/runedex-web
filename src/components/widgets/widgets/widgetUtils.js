import BankValue from './BankValue'
import Goal from './Goal'

const availableWidgets = {
  [BankValue.type]: BankValue,
  [Goal.type]: Goal
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
