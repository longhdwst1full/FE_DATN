import instance from "./index";

const getAllProducts = (limit=10) => {
    console.log(limit)
    return instance.get(`/products?_limit=${limit}`);
};

export { getAllProducts}