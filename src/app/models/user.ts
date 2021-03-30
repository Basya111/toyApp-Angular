import { Toy } from "./toy.model";

export interface User {
    id: string,
    username: string,
    cart: Toy[],
    wishList: Toy[]
}
