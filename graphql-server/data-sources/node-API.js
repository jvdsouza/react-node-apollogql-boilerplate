const { RESTDataSource } = require('apollo-datasource-rest');

class nodeRestApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${process.env.REST_API_BASE_URL}`;
    }
  
    async fetchPingResolver() {
        const response = await this.get('/ping');
        return {pong: response || "none"};
    }
}

module.exports = nodeRestApi;