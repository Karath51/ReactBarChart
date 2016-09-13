const initialState = {
  values: []
}

const rows_values = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_VALUE':
      var new_state = [...state.values]
      new_state[action.row_id - 1]++
      return {...state, values: new_state }

    case 'SET_VALUE':
      return {...state, values: action.original_values}

    default:
      return state
  }
}

export default rows_values
