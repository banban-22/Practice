import axios from 'axios';

const searchImages = async(term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID jSFLGequY9COwC-EZMDk7gPNLbLhAbAuJVyZSk9JhDg',
      },
      params: {
        query: term
      },
    });

    return response.data.results;
}

export default searchImages;