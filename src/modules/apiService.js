export default class ApiService {

    _apiBase = 'https://picsum.photos/';

    async getListImg() {
        const response_list = await fetch(`${this._apiBase}v2/list`).then((res) => res.json());
        return response_list
    }
}