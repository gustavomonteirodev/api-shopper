import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { AddressInfo } from "net"

import { productsRouter } from './router/ProductsRouter'
import { requestRouter } from './router/RequestRouter'
import { getrequestsRouter } from './router/getRequestsRouter'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`🚀 Server is running on http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

app.use("/shopper", productsRouter)
app.use("/shopper", requestRouter)
app.use("/shopper", getrequestsRouter)