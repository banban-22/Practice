import axios from 'axios';

const KEY = 'AIzaSyAJZ3M0ZPPT3yrt0MoevxngBR15yClbgRM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
