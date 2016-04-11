import Goal from './Goal.jsx'
export default class GoalsList extends React.Component{
  render(){
    let goals = this.props.goals.map( goal => <Goal key={goal.id} {...goal}/>
    );
    return(
      <div className="row">
        Goals:
        <ul className="collection with-header">
          {goals}
          { goals.length == 0 ? <li className="collection-item">No Goals Added!</li> : null}

        </ul>
      </div>
    );
  }
}
