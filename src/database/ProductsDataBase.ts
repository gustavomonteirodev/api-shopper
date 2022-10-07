import { BaseDatabase } from "./BaseDatabase"
import { PRODUCTS_LIST,  } from "./migrations/Migrations"
import { RequestDataBase } from "./RequestDataBase";

export class ProductsDataBase extends BaseDatabase {

    public async getProducts() {
        const result = await BaseDatabase.connection(PRODUCTS_LIST)
            .select('*')
        return result
    }

    async getProductBiId(id: Number): Promise<void|any> {
        try {
           const result = await RequestDataBase.connection(PRODUCTS_LIST)
           .select('*')
           .where(id)
           return result[0];
        } catch (error) {
           if (error instanceof Error) {
              throw new Error(error.message) 
            }
        }
     }

   //  async editProduct(id_product: Number, qty:Number): Promise<  undefined> {
   //      try {
   //         const result = await RequestDataBase.connection.raw(`
   //         UPDATE ${PRODUCTS_LIST} SET qty_stock = '${qty}' WHERE id = '${id_product}'
   //         `);
   //         return ;
   //      } catch (error) {
   //         if (error instanceof Error) {
   //            throw new Error(error.message) 
   //          }
   //      }
   //   }

}
