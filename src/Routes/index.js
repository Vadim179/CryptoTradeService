import express from 'express'
import { StocksRoute } from './Stocks.Route'
import { ActionsRoute } from './Actions.Route'

const MainRoute = express.Router()
MainRoute.use('/stocks', StocksRoute)
MainRoute.use('/actions', ActionsRoute)

export default { MainRoute }
