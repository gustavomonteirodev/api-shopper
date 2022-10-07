import express from "express"
import { RequestController } from "../controller/RequestController"

export const requestRouter = express.Router()
const requestController = new RequestController()

requestRouter.post("/request", requestController.createRequest)
requestRouter.get("/getrequests", requestController.getRequests)
