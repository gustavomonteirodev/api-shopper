import { RequestInputDTO } from "../database/models/Request"
import { ProductsDataBase } from "../database/ProductsDataBase"
import { RequestDataBase } from "../database/RequestDataBase"
import { IdGenerator } from "../database/services/IdGenerator"
import { BaseError } from "../errors/BaseError"

export class RequestBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private requestDataBase: RequestDataBase,
    ) {}

    async createRequest(input: RequestInputDTO) {

        try {
            if (!input.clientName || !input.dueDate || !input.list) {

                throw new Error("Todos os campos devem ser preenchidos!")
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
    
            return result
        }


      // async newRequest(input:RequestInputDTO) {
      //           const name = input.clientName
      //           const date = input.dueDate
      //           const list = input.list
        
      //           try {
      //              if (!name || !date || !list) {
          
      //                 throw new BaseError(422, "Preencha todos os dados corretamente");
      //              }
      //               const idGenerator = new IdGenerator()
      //               const productsDataBase = new ProductsDataBase()
          
      //               list.map(async (list: any) => {
          
      //                 const prod = await productsDataBase.getProductBiId(list.id);
      //                 const qty_actual = prod[0].qty_stock - list.qty
          
      //                 await productsDataBase.editProduct(
      //                    list.id,
      //                    qty_actual
      //                 );
      //              })

      //              await this.productsDataBase.newRequestProducts(
      //                id,
      //                product.product_id,
      //                product.name,
      //                product.qty
      //             );

      //              return ("Pedido cadastrado");
      //           } catch (error) {
          
      //              if (error instanceof Error) {
      //                 throw new BaseError(400, error.message)
      //              } else {
      //                 throw new BaseError(400, "business - Erro ao registrar pedido")
      //              }
      //           }
      //        }
        }        
