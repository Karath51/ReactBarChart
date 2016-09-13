import React, { PropTypes } from 'react'

const Row = ({row_data, max_value, on_bar_click}) => {
  const bar_style = (row_data, max_value) => {
    var grad = row_data.value / max_value;
    grad = Math.floor(grad * 255); /** floor the result, rgb only accept int value **/

    return {
      display: 'flex',
      justifyContent: 'flex-start',
      width: ((row_data.value / max_value) * 100).toString() + '%',
      background: `rgba(${grad}, ${255 - grad}, 0, 0.90`,
    }
  }

  return (
    <div style={styles.row}>
      <h2 style={styles.label}>
        {row_data.label}
      </h2>

      <div style={styles.bar_container}>
        <div style={bar_style(row_data, max_value)}
             onClick={() => on_bar_click(row_data.id)}
        ></div>
      </div>

      <h2 style={styles.value}>
        {row_data.value}
      </h2>
    </div>
  )
}

Row.propTypes = {
  row_data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  }),
  max_value: PropTypes.number.isRequired,
  on_click_bar: PropTypes.func.isRequired,
}

class BarChart extends React.Component {

  componentDidMount() {
    this.props.set_state_values()
  }
  
  render() {
    var max_value = Math.max(...this.props.data.map(function (row) {
      return row.value
    }))

    return (
      <div style={styles.list}>
        {this.props.data.map(row => {
          return (
            <Row
              row_data={row}
              max_value={max_value}
              on_bar_click={this.props.on_bar_click}
              key={row.id}
            />
          )}
        )}
      </div>
    )
  }
}

var styles = {
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    margin: '10px'
  },

  label: {
    display: 'flex',
    width: '200px',
    justifyContent: 'flex-start',
    color: 'bisque'
  },

  value: {
    display: 'flex',
    width: '70px',
    justifyContent: 'flex-start',
    color: 'bisque'
  },

  bar_container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%'
  },

  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    margin: '-10px'
  },
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