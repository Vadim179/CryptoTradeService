import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

function doLaunchApp() {
  const PORT = parseInt(process.env.PORT || '8550')
  const HOST = process.env.HOST || 'localhost'
  return new Promise(resolve => app.listen(PORT, HOST, resolve))
}

export default {
  app,
  doLaunchApp,
}
