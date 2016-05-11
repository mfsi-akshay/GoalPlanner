import AppDispatcher from '../dispatcher.jsx'
import ActionTypes from '../constants.jsx'
import { EventEmitter } from "events";


let _goals = [];

class GoalEventEmitter extends EventEmitter{
  getAll(){
    return _goals.map(goal => {
      let date = new Date(goal.start_date);
      let formattedDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      goal.formattedStartDate = formattedDate;
      return goal;
    });

  }
  emitChange(){
    this.emit('CHANGE');
  }
  addChangeListener(callback){
    this.on("CHANGE", callback);
  }
  removeChangeListner(callback){
    this.removeListner("CHANGE", callback);
  }
}

let GoalStore = new GoalEventEmitter();

AppDispatcher.register(action => {
  console.log(4,"Store");
  switch (action.actionType) {
    case ActionTypes.RECEIVED_GOALS:
      _goals = action.rawGoals;
      GoalStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_GOAL:
      _goals.unshift(action.rawGoal);
      GoalStore.emitChange();
      break;
    default:
      //nothing
  }
});

export default GoalStore;
