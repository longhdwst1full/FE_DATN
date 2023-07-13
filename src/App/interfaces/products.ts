import { ICategory } from "./category";

export interface IProduct {
    _id?: string | number,
    name: string,
    images?: [],
    title: string,
    description: string,
    git: string,
    languageId: ICategory,
    price: number
    docs:[]
}
