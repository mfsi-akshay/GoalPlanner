import ServerActions from './actions/ServerActions.jsx'
export default{
  getAllGoals(start_date){
    console.log(2, "In API");
    $.get("/goals", {start_date: start_date})
    .success(rawGoals => ServerActions.receivedGoals(rawGoals))
    .error(e => console.log(e));
  }
}
