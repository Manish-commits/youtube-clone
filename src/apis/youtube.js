import axios from 'axios';

const KEY = 'AIzaSyCkaW1-Ja0OTfmGCAQcfsy_Qq43tfsxnMw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,    
    }
});

