import axios from 'axios';
import auth from './auth';

export const getAll = async () => {
  const resp = await axios.get('/api/clubs',{headers: {'Authorization': auth.getToken()}},)
  return resp.data;
};


export const getClub = async (id) => {
  const resp = await axios.get(`/api/clubs/${id}`,{headers: {'Authorization': auth.getToken()}})
  return resp.data;
};

export const add = async (newName,newLogo,newLeague,newPlaceInLeague,newPhone,newCity,newCountry,newStadiumName,newCapacity, newNumberOfPlayers,newYearEstablished,newManagerName,newTitlesWon) => {
  const resp = axios.post('/api/clubs', {
    name: newName,
    logo: newLogo,
    league: newLeague,
    placeInLeague: newPlaceInLeague,
    phone: newPhone,
    city: newCity,
    country: newCountry,
    stadium_name: newStadiumName,
    capacity:newCapacity ,
    numberOfPlayers: newNumberOfPlayers,
    yearEstablished: newYearEstablished,
    manager_name:newManagerName,
    titlesWon: newTitlesWon },{headers: {'Authorization': auth.getToken()}});
    return resp.data;
};

export const login = async (username, password) => {
  const resp = await axios.post('/api/users', { username: username, password: password });
  return resp.data;
};

export const signup = async (username, password) => {
  const resp = await axios.post('/api/users?action=register', { username: username, password: password });
  return resp.data;
};


export const update = (id,newName,newLogo, newLeague,newPlaceInLeague,newPhone,newCity,newCountry,newStadiumName,newCapacity,newNumberOfPlayers,newYearEstablished,newManagerName,newTitlesWon) => {
  return axios.put(`/api/clubs/${id}`, {id: id, name:newName, logo:newLogo, league: newLeague, placeInLeague: newPlaceInLeague,phone: newPhone,city : newCity,country: newCountry, stadium_name: newStadiumName, capacity: newCapacity,numberOfPlayers: newNumberOfPlayers,yearEstablished: newYearEstablished,manager_name:newManagerName,titlesWon:newTitlesWon})
  .then(resp => resp.data);
};

export const deleteClub = (id) => {
  return axios.delete(`/api/clubs/${id}`)
  .then(resp => resp.data);
};