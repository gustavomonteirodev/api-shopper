import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
    constructor(){
        super(400, "Todos os campos devem ser preenchidos!")
    }

}