import instance from "./index";


const getAllProducts = (limit=10 , page=1) => {
    console.log(limit)
    return instance.get(`/products?_limit=${limit}&_page=${page}`);
};

export { getAllProducts}