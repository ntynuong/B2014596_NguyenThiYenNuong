import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/login") {
        this.api = createApiClient(baseUrl);
    }

    async getAllUsers() {
        return (await this.api.get('/')).data;
    }


}

export default new LoginService();