import createApiClient from "./api.service";

class CategoryService {
    constructor(baseUrl = "/api/categorys") {
        this.api = createApiClient(baseUrl);
    }

    // async createCategory(formData) {
    //     return (await this.api.post("/", formData)).data;
    // }

    async createCategory(formData) {
        return (await this.api.post(`/`, formData)).data;
    }

    async getNameCategorys() {
        return (await this.api.get('/')).data;
    }

    async findProduct(id) {
        return (await this.api.get(`/${id}`)).data;
    }
}

export default new CategoryService();