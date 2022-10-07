import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { AddressInfo } from "net"

import { productsRouter } from './router/ProductsRouter'
import { requestRouter } from './router/RequestRouter'


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
// Lista de produtos 
app.use("/shopper", productsRouter)

// Pedidos
app.use("/shopper", requestRouter)