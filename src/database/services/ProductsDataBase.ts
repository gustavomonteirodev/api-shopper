import { BaseDatabase } from "../BaseDatabase"
import { PRODUCTS_LIST } from "../migrations/Migrations"

export class ProductsDataBase extends BaseDatabase {

    public async getProducts() {
        const result = await BaseDatabase.connection(PRODUCTS_LIST)
            .select('*')
        return result
    }

}
