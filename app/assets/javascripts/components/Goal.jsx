export default class Goal extends React.Component{
  constructor(props){
    super(props);
    this.state = props;
  }
  complete(goal){
    this.setState({completed: 'true', end_date: Date.now()});
  };
  isComplete(goal){

  };
  render(){
    var style = {
      span: {
        float: 'left',
        margin: '2% 5% 0 3%',
        width: '25%'
      },
      input: {
        float: 'left',
        width: '45%'
      },
      checkbox: {
        margin: '5% 0 0 10%'
      }
    };
    var calc = function(end_date, start_date){
      var diff = Math.abs(end_date - start_date);
      return diff;
    }
    return(
        <li className="collection-item">
          <div className="row" title={this.state.completed ? calc(this.state.end_date, this.state.start_date) : "Created: " + this.props.start_date}>
            <div className="input-field" ><span style={style.span}>{this.state.body}</span><input disabled={this.state.completed} style={style.input} type="text" placeholder="notes"/>
              <input type="checkbox" disabled={this.state.completed} checked={this.state.completed} className="filled-in" id={this.props.id} onChange={this.complete.bind(this,this)} /><label htmlFor={this.props.id} style={style.checkbox}></label></div>
          </div>
        </li>
    );
  }
}
