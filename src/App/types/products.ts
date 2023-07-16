import { ICategory } from "./category"
import { ISize } from "./size"
import { ITopping } from "./topping"

export interface IProduct {
    _id?: string | number,
    name: string,
    images: string[],
    description: string,
    price: number,
    category: ICategory,
    is_delete: boolean,
    salePrice: number,
    shortDescription: string,
    satus: string,
    size: ISize[],
    topping: ITopping[],
    docs:[]
}