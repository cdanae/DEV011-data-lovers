import axios from 'axios';

const apiKey = '1db8b0e3b4bab33d5ff7f06b7cbf4bc4';

export const getMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      throw new Error('Error al obtener datos de la API');
    }
  };