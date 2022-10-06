export interface Items {
    productId: number,
    productQuantity: number
}

export interface Request {
    id: string,
    clientName: string,
    dueDate: Date,
    list: Items[]
}

export interface RequestInputDTO {
    clientName: string,
    dueDate: Date,
    list: Items[]
}