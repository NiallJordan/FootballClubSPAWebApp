import axios from 'axios';

export const getAll = () => {
   return axios('/api/clubs')
              .then(resp => resp.data);
};

export const getClub = (id) => {
  return axios.get(`/api/clubs/${id}`)
              .then(resp => resp.data);
};

export const add = (newName,newLogo,newLeague,newPlaceInLeague,newPhone,newCity,newCountry,newStadiumName,newCapacity, newNumberOfPlayers,newYearEstablished,newManagerName,newTitlesWon) => {
  return axios.post('/api/clubs', { name: newName, logo: newLogo, league: newLeague, placeInLeague: newPlaceInLeague, phone: newPhone, city: newCity, country: newCountry,stadium_name: newStadiumName,capacity:newCapacity , numberOfPlayers: newNumberOfPlayers,yearEstablished: newYearEstablished, manager_name:newManagerName, titlesWon: newTitlesWon })
              .then(resp => resp.data);
};

export const update = (id,newId,newName,newLogo, newLeague,newPlaceInLeague,newPhone,newCity,newCountry,newStadiumName,newCapacity,newNumberOfPlayers,newYearEstablished,newManagerName,newTitlesWon) => {
  return axios.put(`/api/clubs/${id}`, {id: newId, name:newName, logo:newLogo, league: newLeague, placeInLeague: newPlaceInLeague,phone: newPhone,city : newCity,country: newCountry, stadium_name: newStadiumName, capacity: newCapacity,numberOfPlayers: newNumberOfPlayers,yearEstablished: newYearEstablished,manager_name:newManagerName,titlesWon:newTitlesWon})
  .then(resp => resp.data);
};

export const deleteClub = (id) => {
  return axios.delete(`/api/clubs/${id}`)
  .then(resp => resp.data);
};