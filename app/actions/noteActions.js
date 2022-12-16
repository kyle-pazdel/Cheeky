import {types} from '@babel/core';

export function fetchNotes() {
  return async dispatch => {
    dispatch({type: types.FETCH_NOTES});
    try {
      let response = await fetch('http://localhost:3000/performers.json');
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.FETCH_NOTES_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.FETCH_NOTES_FAILURE, error});
    }
  };
}

export function createNote(note) {
  return async dispatch => {
    dispatch({type: types.CREATE_NOTE});
    try {
      let response = await fetch('http://localhost:3000/performers.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({note}),
      });
      if (response.statys !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.CREATE_NOTE_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.CREATE_NOTE_FAILURE, error});
    }
  };
}
