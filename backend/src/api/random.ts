import axios from 'axios';

const BASE_URL:string = 'https://randomuser.me/api';

export const getUserData = async() => {
  try {
    const result = await axios.get(`${BASE_URL}/?nat=br&results=10`);
    console.log("Received data: ", result.data)
    return result.data;
  } catch (error) {
    throw new Error(`An error has occurred: ${error}`);
        
  }
}

