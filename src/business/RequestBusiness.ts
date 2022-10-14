import { RequestInputDTO } from "../database/models/Request"
import { RequestDataBase } from "../database/RequestDataBase"
import { IdGenerator } from "../database/services/IdGenerator"
import { MissingFields } from "../errors/MissingFields"

export class RequestBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private requestDataBase: RequestDataBase,
    ) { }

    async createRequest(input: RequestInputDTO) {

        try {
            if (!input.clientName || !input.dueDate || !input.list) {

                throw new MissingFields()
            }

            const id = this.idGenerator.generate()
            const newRequest = { id, ...input }

            await this.requestDataBase.createRequest(newRequest)
            return newRequest
        }

        catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getRequests(): Promise<any> {

        const requestDataBase = new RequestDataBase()
        const result = await requestDataBase.getRequests()
        console.log(result)
        return result
    }

    
}