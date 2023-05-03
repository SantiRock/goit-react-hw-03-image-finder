import axios from "axios";

const API_KEY = '33065522-142377ea89c4475bb68820c05';

const search = async (keyword, page) => {
    const response = await axios.get('https://pixabay.com/api/', 
    {
        params: {
            key: API_KEY,
            q: keyword,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page : page
        }
    })
    //console.log(response.data.totalHits)
    return response.data
}

export default search