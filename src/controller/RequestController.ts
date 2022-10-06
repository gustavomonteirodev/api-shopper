import { Request, Response } from "express"
import { RequestBusiness } from "../business/RequestBusiness"
import { RequestInputDTO } from "../database/models/Request"
import { RequestDataBase } from "../database/RequestDataBase"
import { IdGenerator } from "../database/services/IdGenerator"

const idGenerator = new IdGenerator()
const requestDataBase = new RequestDataBase()

export class RequestController {
    async createRequest(req: Request, res: Response): Promise<void> {

        try {
            const input: RequestInputDTO = {
                clientName: req.body.clientName,
                dueDate: req.body.dueDate,
                list: req.body.list
            }

            const requestBusiness = new RequestBusiness(idGenerator, requestDataBase)
            const newOrder = await requestBusiness.createRequest(input)
            res.status(201).send(newOrder)
        }

        catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}