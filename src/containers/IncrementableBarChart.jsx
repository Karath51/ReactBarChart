import { connect } from 'react-redux'
import { increment_value, set_initial_values } from '../actions'
import BarChart from '../components/BarChart'

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.data) {
    return {data: []}
  } else {
    return {
      data: ownProps.data.map((row, index) => {
        return {
          ...row,
          value: state.on_click_bar.values[index]
        }
      })
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_bar_click: (id) => {
      dispatch(increment_value(id))
    },
    set_state_values: () => {
      dispatch(set_initial_values(ownProps.data))
    }
  }
}

const IncrementableBarChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChart)

export default IncrementableBarChart