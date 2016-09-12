const initialState = {
  values: []
}

/** action.original is the result of data.map(fruit_stat) in action **/

const on_click_bar = (state = initialState, action) => {
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

export default on_click_bar
