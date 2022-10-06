import { BaseDatabase } from "../BaseDatabase"
import { PRODUCTS_LIST } from "../migrations/Migrations"

export class ProductsDataBase extends BaseDatabase {

    public async getProducts() {
        const result = await BaseDatabase.connection(PRODUCTS_LIST)
            .select('*')

        return result
    }

    // public async getProductsByID() {

    //     const result = await BaseDatabase.connection(PRODUCTS_LIST)
    //         .select('*')
    //         .where({id})
    //     return result
    // }


}