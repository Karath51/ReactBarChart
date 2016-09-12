import React, { PropTypes } from 'react'
import Row from './Row'

var fruits_list_style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexDirection: 'column',
  margin: '-10px'
}

class BarChart extends React.Component {

  componentDidMount() {
    console.log("BarChart didmount")
    this.props.set_state_values()
    /** default props **/
  }
  
  /** find max stat between fruits **/
  render() {
    var max_value = Math.max(...this.props.data.map(function (row) {
      return row.value
    }))

    return (
      <div style={fruits_list_style}>
        {this.props.data.map(row => {
            return (
              <Row
                row_data={row}
                max_value={max_value}
                on_click_bar={this.props.on_click_bar}
                key={row.id}
              />
            )
          }
        )}
      </div>
    )
  }
}


BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired).isRequired,
  on_click_bar: PropTypes.func.isRequired
}


export default BarChart