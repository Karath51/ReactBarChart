import React from 'react'
import IncrementableBarChart from '../containers/IncrementableBarChart'
import fruits from '../data'

class App extends React.Component {
  render = () => {
    return (
      <div style={styles.displayable_fruits_list}>
        <IncrementableBarChart data={fruits}/>
      </div>
    )
  }
}

var styles = {
  displayable_fruits_list: {
    backgroundImage: 'url(/ReactBarChart/back-unique.jpg)',
    backgroundSize: 'cover',
    WebkitTransition: 'all'
  }
}

export default App
