import React from 'react'
import IncrementedRows from '../containers/IncrementableBarChart'
import fruits from '../data'

var styles = {
  displayable_fruits_list: {
    backgroundImage: 'url(/ReactBarChart/back-unique.jpg)',
    backgroundSize: 'cover',
    WebkitTransition: 'all'
  }
}

class App extends React.Component {
  render = () => {
    return (
      <div style={styles.displayable_fruits_list}>
        <IncrementedRows data={fruits}/>
      </div>
    )
  }
}


export default App
