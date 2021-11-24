import dotenv from 'dotenv'
dotenv.config()

import { app, doLaunchApp } from '~/Server'
import { MainRoute } from '~/Routes'

async function main() {
  app.use(MainRoute)
  await doLaunchApp()
}

main()
