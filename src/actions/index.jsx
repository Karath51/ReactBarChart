export const increment_value = (row_id) => {
  return {
    type: 'INCREMENT_VALUE',
    row_id,
  }
}

export const set_state_values = (original_data) => {
  console.log("action: " + original_data)
  return {
    type: 'SET_VALUE',
    original_values: original_data.map((row) => {
      console.log("row " + row.value)
      return row.value
    })
  }
}