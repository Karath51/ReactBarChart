import { connect } from 'react-redux'
import { increment_value } from '../actions'
import { set_state_values } from '../actions'
import BarChart from '../components/BarChart'

const mapStateToProps = (state, ownProps) => {
  console.log("State on_click_bar: " + state.on_click_bar.values)
  //console.log('incrow props: '  + ownProps)

  /** Bug if state.on_click_bar.fruits_statistic **/
  if (typeof state.on_click_bar.values[0] === 'undefined')
  {
    console.log("click if undifined")
    return {...ownProps}
  }

  var tmp = ownProps.data.map((row, index) => {
    //console.log(row)
    return {
      ...row,
      value: state.on_click_bar.values[index]
    }
  })
  return {
    data: tmp
  }
  
}

/** Add on_bar_click in the props of BarChart **/
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_click_bar: (id) => {
      console.log("on_bar_click id " + id)
      dispatch(increment_value(id))
    },
    set_state_values: () => {
      console.log("init_stats")
      dispatch(set_state_values(ownProps.data))
    }
  }
}

const IncrementedRows = connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChart)

export default IncrementedRows