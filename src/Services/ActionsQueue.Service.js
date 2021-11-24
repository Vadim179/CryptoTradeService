import doValidate from 'aproba'

const actions = []

/**
 * @param {object} action
 * An Action Entity of {ActionType}
 */
function doEnqueueAction(action) {
  doValidate('O', arguments)
  actions.push(action)
}

function doFetchAction() {
  return actions.shift()
}

export default {
  doEnqueueAction,
  doFetchAction,
}
