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

}
