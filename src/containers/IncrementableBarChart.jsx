import { connect } from 'react-redux'
import { increment_value } from '../actions'
import { set_state_values } from '../actions'
import BarChart from '../components/BarChart'

const mapStateToProps = (state, ownProps) => {
  /** Bug if state.on_click_bar.fruits_statistic **/
  if (typeof state.on_click_bar.values[0] === 'undefined')
  {
    return {...ownProps}
  }
  
  return {
    data: ownProps.data.map((row, index) => {
      return {
        ...row,
        value: state.on_click_bar.values[index]
      }
    })
  }
  
}

/** Add on_bar_click in the props of BarChart **/
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_click_bar: (id) => {
      dispatch(increment_value(id))
    },
    set_state_values: () => {
      dispatch(set_state_values(ownProps.data))
    }
  }
}

const IncrementedRows = connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChart)

export default IncrementedRows