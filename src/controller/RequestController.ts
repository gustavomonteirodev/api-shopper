import { Request, Response } from "express"
import { ProductsBusiness } from "../business/ProductsBusiness"
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
            const newRequest = await requestBusiness.createRequest(input)
            res.status(201).send(newRequest)
        }
        catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    async getRequests(req: Request, res: Response) {
        try {
            const requestedBusiness = new RequestBusiness(idGenerator, requestDataBase)
            const newRequest = await requestedBusiness.getRequests()
            res.status(201).send({newRequest})
            }
        catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    // async newRequest(req: Request, res: Response) {
    //     try {
    //        const { name, date, products } = req.body
    //         const requestBusiness = new RequestBusiness(idGenerator, requestDataBase)

    //        const result = await requestBusiness.newRequest(
    //           name,
    //           date,
    //           products
    //        );
    //        res.status(200).send(result);
    //     } catch (error) {
           
    //        if (error instanceof Error) {
    //           res.status(400).send(error.message);
    //       } else {
    //           res.send({ message: "Controller - Algo deu errado ao registrar pedido" })
    //       }
    //     }
    //  }
}