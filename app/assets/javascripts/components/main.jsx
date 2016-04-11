import GoalsList from './GoalsList.jsx';
import AddGoal from './AddGoal.jsx';

let mockkGoals = [{id: 1, body: 'Check Emails', start_date: 'Fri Apr 08 2016 17:47:37 GMT+0530 (IST)', end_date: 'Fri Apr 08 2016 17:57:37 GMT+0530 (IST)', completed: false},
          {id: 2, body: 'Check Time', start_date: 'Fri Apr 08 2016 17:37:37 GMT+0530 (IST)', end_date: 'Fri Apr 08 2016 17:57:37 GMT+0530 (IST)', completed: false},
          {id: 3, body: 'Check Emails', start_date: '03-17-2016 00:00', end_date: '', completed: false}
        ];


class Main extends React.Component{
  render(){
    return(
      <div>
        <GoalsList goals={mockkGoals}/>
        <AddGoal />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(<Main/>,
    document.getElementById('root'));
};

$(documentReady)
