import GoalActions from "../actions/GoalActions.jsx";

export default class Goal extends React.Component{
  constructor(props){
    super(props);
    //this.state = props;
  }
  complete(goal){
    GoalActions.completeGoal(goal);
    //debugger
    //this.setState({complete: 'true', end_date: new Date(Date.now())});
  };
  isComplete(goal){

  };
  render(){
    let style = {
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
    let calc = function(end_date, start_date){
      let sDate = new Date(start_date);
      let timeDiff = Math.abs(end_date.getTime() - sDate.getTime());
      let diff = (timeDiff/(60 * 60 * 1000)).toFixed(2);
      return diff;
    }
    return(
        <li className="collection-item">
          <div className="row" title={this.props.completed ? calc(this.props.end_date, this.props.start_date) + " hours" : "Created: " + this.props.formattedStartDate}>
            <div className="input-field" ><span style={style.span}>{this.props.body}</span><input disabled={this.props.complete} style={style.input} type="text" placeholder={this.props.complete ? "complete" : "non complete"} ref="goalNotes"/>
              <input type="checkbox" disabled={this.props.complete} checked={this.props.complete} className="filled-in" id={this.props.id} onChange={this.complete.bind(this,this)} /><label htmlFor={this.props.id} style={style.checkbox}></label></div>
          </div>
        </li>
    );
  }
}
