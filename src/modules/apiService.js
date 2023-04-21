export default class ApiService {

    _apiBase = 'https://picsum.photos/';

    async getListImg() {
        const response_list = await fetch(`${this._apiBase}v2/list`, {
            params: {
                _page: 1,
                _limit: 30
            }
        }).then((res) => res.json());
        return response_list
    }
}