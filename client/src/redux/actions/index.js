import axios from 'axios';

/**
 * It's an async function that makes a request to the server, and if successful, dispatches an action
 * to the reducer to get all champs
 * @returns The action object is being returned.
 */
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

/**
 * It takes a payload, and returns an object with a type and the payload to filter type of champs
 */
export const filterChamps = (payload) => {
  return {
    type: 'FILTER_CHAMPS',
    payload
  }
}

/**
 * It's an async function that takes in an id, makes a request to the server, and then dispatches an
 * action with the response data as the payload.
 * @param id - the id of the champ you want to get details for
 */
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

/**
 * It takes a payload, sends it to the server, and create a new champ.
 * @param payload - {
 * @returns The response from the server.
 */
export const createNewChamp = (payload) => {
  return async function (dispatch) {
    try {
        const res = await axios.post('http://localhost:3001/champs/create', payload)
        return res
    } catch (error) {
      console.log(error)
    }}
}

export const updateChamp = (payload) => {
  return async function (dispatch) {
    try {
        const res = await axios.put(`http://localhost:3001/champs/update/${payload.id}`, payload)
        return res
    } catch (error) {
      console.log(error)
    }}
}

export const deleteChamp = (id) => {
  return async function (dispatch) {
    try {
        const res = await axios.delete(`http://localhost:3001/champs/delete/${id}`)
        return res
    } catch (error) {
      console.log(error)
    }}
}