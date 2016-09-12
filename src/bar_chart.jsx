var DisplayableFruitsList = React.createClass({
  getInitialState: function() {
    return ({
      //active_rows: new Array(this.props.data.length + 1).fill(false),
      increment_row: this.props.data.map(function (row) {
        return row.value
      })
    })
  },

  /*
  on_bar_click: function(index) {
    var tmp_rows = this.state.active_rows;
    tmp_rows[index] = !tmp_rows[index];
    this.setState({active_rows: tmp_rows});

    var new_total = this.state.total_active;
    this.state.active_rows[index] ? new_total++ : new_total--;
    this.setState({total_active: new_total});

    console.log("Hiiii =)");
  },
  */
  on_bar_click: function(index) {
    var tmp_increment_row = this.state.increment_row;
    tmp_increment_row[index - 1]++;

    this.setState({increment_row: tmp_increment_row});
    console.log("Hiiii =)");
  },

  /** Clone props data, slice array of data clone objects with refs, need to deep clone our objects {id, ...} **/
  clone_data: function () {
    var clone = [];
    this.props.data.forEach(function (row) {
      /** Object.assign copy all no-inherited properties of an object, in our case work well,
       * don't copy {toto: 'da', lol: data.something}, second props will be the refs of the object
       **/
      /*
        clone.push({id: row.id,
        label:row.label,
        value: row.value,
        color:row.color
        */
      clone.push(Object.assign({}, row))
    });
    return clone;
  },

  /** Update the chart bar and her color when click occur **/
  update_rows: function (rows) {
    var max_stat = Math.max(...this.state.increment_row);
    console.log("update_row " + max_stat);

    rows.forEach(function (row) {
      row.value = this.state.increment_row[row.id - 1];

      var grad = row.value / max_stat;
      grad = Math.floor(grad * 255); /** floor the result, rgb only accept int value **/

      row.color = "rgb(" + grad + ", " + (255 - grad) + ", 0)";

      row.color = `rgba(${grad}, ${255 - grad}, 0, 0.90)`;
      console.log(row);
    }.bind(this));
  },

  render : function() {
    console.log("displayable" + this.props.data);
    /*
    data_update.forEach(function(row) {
      if (this.state.total_active) {
        if (!this.state.active_rows[row.id]) {
          row.color = row.color.replace('rgb', 'rgba').replace(')', ' ,0.55');
        } else {
          row.color = row.color.replace('rgb', 'rgba').replace(')', ' ,0.95');
        }
      }
      console.log(row.color + " " + this.state.active_rows[row.id]);
    }.bind(this));
    */
    var data_update = [...this.props.data];


    this.update_rows(data_update);

    return (
      <div style={styles.displayable_fruits_list}>
        <FruitsList data={data_update} row_click={this.on_bar_click}/>
      </div>
    )
  }
});

var find_stat_max = (function (my_data) {
  var stats = my_data.map((stats) => {
    return stats.value;
  });

  return Math.max(...stats);
});

var Old_FruitsList = React.createClass({
  render : function() {
    var props_data = this.props.data;

    var row_click = this.props.on_bar_click;
    var fruits = this.props.data.map(function(one_line) {
      return (
        /** Syntax max(...array) to decompose the array then find max **/
        <FruitsRow row_data={one_line}
                   max_statistic={find_stat_max(props_data)}
                   key={one_line.id}
                   row_click={row_click}
                   rows={props_data}
        />
      );
    });

    return (
      <div style={styles.fruits_list}>
        {fruits}
      </div>
    );
  }
});

const FruitsList = (props) => {
  var props_data = props.data;

  var row_click = props.on_bar_click;
  var fruits = props.data.map(function(one_line) {
    return (
      /** Syntax max(...array) to decompose the array then find max **/
      <FruitsRow row_data={one_line}
                 max_statistic={find_stat_max(props_data)}
                 key={one_line.id}
                 row_click={row_click}
                 rows={props_data}
      />
    );
  });

  return (
    <div style={styles.fruits_list}>
      {fruits}
    </div>
  );
};

/**
FruitsList.PropTypes = {
  // Array of data
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired
  })),
  on_bar_click: React.PropTypes.func.isRequired
};
**/

const FruitsRow = (props) => {
    var style_individual = {
      display: 'flex',
      justifyContent: 'flex-start',
      width: ((props.row_data.value / props.max_statistic) * 100).toString() + '%',
      background: (props.row_data.color)
    };
  
    return (
      <div style={styles.fruits_row}>
        <h2 style={styles.label}>
          {props.row_data.label}
        </h2>

        <div style={styles.fruit_bar}>
          <div className="individual_fruit_bar"
            style={style_individual}
            onClick={() => props.on_bar_click(props.row_data.id)}
          ></div>
        </div>

        <h2 style={styles.value}>
          {props.row_data.value}
        </h2>
      </div>
    )
};



/**
FruitsRow.propTypes = {
  max_statistic: React.PropTypes.number.isRequired,
  row_data: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired
  }),
  on_bar_click: React.PropTypes.func.isRequired
};
**/
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
  {id: 1, fruit_name:'Apple', fruit_statistic:1, color:'rgb(127, 255, 0)'},
  {id: 2, fruit_name:'Peach', fruit_statistic:4, color:'rgb(255, 127, 80)'},
  {id: 3, fruit_name:'Pineapple', fruit_statistic:5, color:'rgb(218, 165, 32)'},
  {id: 4, fruit_name:'Nuts', fruit_statistic:7, color:'rgb(222, 184, 135)'}
];

ReactDOM.render(
  <DisplayableFruitsList data={FRUITS} />,
  document.getElementById('container')
);