import instance from "./index";

const getAllProducts = () => {
    return instance.get("/products");
};

export { getAllProducts}