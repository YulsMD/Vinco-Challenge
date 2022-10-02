import axios from 'axios';

export const getAllChamps = () => {
  return async function(dispatch) {
    try {
    const res = await axios.get('http://localhost:3001/champs')
    return dispatch ({
        type: 'GET_ALL_CHAMPS',
        payload: res.data
    })
    } catch (error) {
        alert('Champ not found')
    }
  } 
}

export const filterChamps = (payload) => {
  return {
    type: 'FILTER_CHAMPS',
    payload
  }
}

export const getChampDetails = (id) =>{
  return async function(dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/champs/${id}`)
      return dispatch({
        type: 'GET_CHAMP_DETAILS',
        payload: res.data
      })
    } catch (error) {
      alert('Champ not found')
    }
  }
}