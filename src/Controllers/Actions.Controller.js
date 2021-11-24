import { ActionsService } from '~/Services'

function doFetchAction(_, response) {
  const action = ActionsService.doFetchAction()
  if (action === undefined) return response.status(404).end()
  response.status(200).json(action)
}

export default { doFetchAction }
