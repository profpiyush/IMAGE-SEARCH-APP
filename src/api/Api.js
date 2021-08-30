const baseURL = "https://api.unsplash.com/"
const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
export const getTrendingImages = async () => {
    try {

        const res = await fetch(`${baseURL}/photos?per_page=30`, {
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        });
        if (!res.ok) {
            console.error(res.status);
            return;
        }
        const json = await res.json();
        return json;

    } catch (error) {
        console.log(error);
    }
}

export const getSearchedImages = async (query) => {
    const url = new URL(`${baseURL}/search/photos`)
    url.search = new URLSearchParams({
        per_page: 30,
        query: query,
    });
    try {

        const res = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        });
        if (!res.ok) {
            console.error(res.status);
            return;
        }
        const json = await res.json();
        console.log(json);
        return json.results;

    } catch (error) {
        console.log(error);
    }
}

