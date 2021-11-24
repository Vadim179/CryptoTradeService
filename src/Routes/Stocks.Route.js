import express from 'express'
import { StocksController } from '~/Controllers'

const StocksRoute = express.Router()
StocksRoute.post('/', StocksController.doAnalyzeStocks)

export default { StocksRoute }
