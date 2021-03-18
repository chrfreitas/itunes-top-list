import axios from "axios";

const BASE_URL = 'https://itunes.apple.com/us/rss';
const CACHE = [];

const iTunesAPI = {
    getAlgums: async (limit = 100) => {
        const url = `${BASE_URL}/topalbums/limit=${limit}/json`;
        if(CACHE[url]) {
            return CACHE[url];
        }

        const response = await axios.get(url);
        CACHE[url] = response.data.feed.entry;
        return response.data.feed.entry;
    },
    getSongs: async (limit = 100) => {
        const url = `${BASE_URL}/topsongs/limit=${limit}/json`;
        if(CACHE[url]) {
            return CACHE[url];
        }

        const response = await axios.get(url);
        CACHE[url] = response.data.feed.entry;
        return response.data.feed.entry;
    }
}

export default iTunesAPI;