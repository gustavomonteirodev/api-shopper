import { BaseDatabase } from "../BaseDatabase"
import { products } from "../data"

export const PRODUCTS_LIST = "products_shopper"
export const REQUEST_LIST = "request_shopper"
export const REQUEST_PRODUCTS = "request_products_shopper"

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

            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${REQUEST_LIST} (
                id VARCHAR(255) NOT NULL PRIMARY KEY,
                clientName VARCHAR(50) NOT NULL,
                dueDate DATE NOT NULL
            );         
        `)

            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${REQUEST_PRODUCTS}(
                productId INT NOT NULL,
                requestId VARCHAR(255) NOT NULL,
                productQuantity INT NOT NULL,
                FOREIGN KEY (productId) REFERENCES ${PRODUCTS_LIST}(id),
                FOREIGN KEY (requestId) REFERENCES ${REQUEST_LIST}(id)
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

// Para popular os itens em seu BD, descomentar a linha abaixo para invocar os Migrations

// Migrations.createTables()