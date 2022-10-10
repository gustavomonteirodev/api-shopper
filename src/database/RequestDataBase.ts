import { BaseDatabase } from "../database/BaseDatabase"
import { REQUEST_LIST, REQUEST_PRODUCTS } from "../database/migrations/Migrations"
import { Request } from "../database/models/Request"

export class RequestDataBase extends BaseDatabase {

    async createRequest(input: Request) {
        try {
            const request = {
                id: input.id,
                clientName: input.clientName,
                dueDate: input.dueDate
            }

            await RequestDataBase.connection(REQUEST_LIST)
                .insert(request)

            const items = input.list.map((item) => {
                return {
                    productId: item.productId,
                    requestId: request.id,
                    productQuantity: item.productQuantity
                }
            })

            await RequestDataBase.connection(REQUEST_PRODUCTS)
                .insert(items)
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getRequests() {
        const result = await BaseDatabase.connection(REQUEST_LIST)
            .select('*')
        return result
    }
  
}