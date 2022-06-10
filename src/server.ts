import express, { request } from "express"
import { routes } from './routes'
import SwaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())

app.use("/api-doc", SwaggerUi.serve, SwaggerUi.setup(swaggerFile))

app.use(routes)

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
