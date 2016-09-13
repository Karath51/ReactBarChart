import React from 'react'
import IncrementableBarChart from '../containers/IncrementableBarChart'
import fruits from '../data'

class App extends React.Component {
  render = () => {
    return (
      <div style={styles.app}>
        <IncrementableBarChart data={fruits}/>
      </div>
    )
  }
}

var styles = {
  app: {
    background: 'grey',
    backgroundSize: 'cover',
    WebkitTransition: 'all'
  }
}

export default App
