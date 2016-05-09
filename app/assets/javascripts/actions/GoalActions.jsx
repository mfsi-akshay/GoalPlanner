import API from '../API.jsx'
export default{
  getAllGoals(start_date){
    console.log(1,'In Goal Actions');
    API.getAllGoals(start_date);
  }
}
