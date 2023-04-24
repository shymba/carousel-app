import axios from 'axios';

export default class ApiService {

    _apiBase = 'https://picsum.photos/';

    async getListImg(page) {
        const response_list = await axios.get(`${this._apiBase}v2/list`, {
            params: {
                page: page,
                limit: 3
            }
        });
        return response_list.data
    }
}