var DisplayableFruitsList = React.createClass({
  render : function() {
    console.log("displayable");
    return (
      <div style={styles.displayable_fruits_list}>
        <FruitsList data={this.props.data} onClick={bar_clicked} />
      </div>
    )
  }
});

var FruitsList = React.createClass({
  render : function() {
    var stats = this.props.data.map((stats) => {
      return stats.fruit_statistic;
    });
    var onClick = this.props.onClick;

    var fruits = this.props.data.map(function(data) {
      return (
        /** Syntax max(...array) to decompose the array then find max **/
        <FruitsRow data={data} max_statistic={Math.max(...stats)} key={data.id} onClick={onClick}/>
      );
    });

    console.log(stats);

    return (
      <div style={styles.fruits_list}>
        {fruits}
      </div>
    );
  }
});

var bar_clicked = (bar) => {
  var click_style = {
    background: 'red'
  };
  bar.setStyle
  console.log("Hiiii =)");
};

var FruitsRow = React.createClass({
  render : function() {
    console.log("FruitsRow " + this.props.max_statistic);

    var style_individual = {
      display: 'flex',
      justifyContent: 'flex-start',
      width: ((this.props.data.fruit_statistic / this.props.max_statistic) * 100).toString() + '%',
      background: this.props.data.color
    };

    return (
      <div style={styles.fruits_row}>
        <h2 style={styles.fruit_name}>
          {this.props.data.fruit_name}
        </h2>

        <div className="fruit_bar" style={styles.fruit_bar}>
          <div
            style={style_individual}
            onClick={this.props.onClick}
            ref="individual_fruit_bar"
          ></div>
        </div>

        <h2 style={styles.fruit_statistic}>
          {this.props.data.fruit_statistic}
        </h2>
      </div>
    )
  }
});

var styles = {
  displayable_fruits_list: {
    backgroundImage: 'url(' + '/ReactBarChart/css/img/back-unique.jpg' + ')',
    backgroundSize: 'cover',
    WebkitTransition: 'all'
  },

  fruits_list: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    margin: '-10px'
  },
  
  fruits_row: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    margin: '10px'
  },

  fruit_name: {
    display: 'flex',
    width: '200px',
    justifyContent: 'flex-start',
    color: 'bisque'
  },

  fruit_statistic: {
    display: 'flex',
    width: '70px',
    justifyContent: 'flex-start',
    color: 'bisque'
  },

  fruit_bar: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%'
  }
};

var FRUITS = [
  {id: 1, fruit_name:'Apple', fruit_statistic:1, color:'Chartreuse'},
  {id: 2, fruit_name:'Peach', fruit_statistic:4, color:'coral'},
  {id: 3, fruit_name:'Pineapple', fruit_statistic:5, color:'goldenrod'},
  {id: 4, fruit_name:'Nuts', fruit_statistic:7, color:'BurlyWood'}
];

ReactDOM.render(
  <DisplayableFruitsList data={FRUITS} />,
  document.getElementById('container')
);