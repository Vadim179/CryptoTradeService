import express from 'express'
import { ActionsController } from '~/Controllers'

const ActionsRoute = express.Router()
ActionsRoute.get('/', ActionsController.doFetchAction)

export default { ActionsRoute }
