import { BaseDatabase } from "../BaseDatabase"
import { products } from "../data"

export const PRODUCTS_LIST = "products_shopper"

export class Migrations extends BaseDatabase {

    static createTables = async () => {

        try {
            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${PRODUCTS_LIST} (
                id INT PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                price FLOAT NOT NULL,
                qty_stock INT NOT NULL
            );
         `)

            await Migrations.connection(PRODUCTS_LIST).insert(products)

            console.log("Tabelas criadas!")
        } catch (error: any) {
            console.log(error.message)
        } finally {
            Migrations.connection.destroy()
        }
    }
}

Migrations.createTables()