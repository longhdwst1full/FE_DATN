import instance from "./index";

const getAllCategory = () => {
    return instance.get("/categories");
};

export { getAllCategory}