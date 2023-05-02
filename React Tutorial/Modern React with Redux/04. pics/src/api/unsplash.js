import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6FnJsZ9baLsEvR8DYgkf_MVXFGGzmEVThbgR8JZSHYo',
  },
});
