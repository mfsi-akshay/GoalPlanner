import AppDispatcher from '../dispatcher.jsx'
import ActionTypes from '../constants.jsx'

export default{
  receivedGoals(rawGoals){
    console.log(3, "Server Actions");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_GOALS,
      rawGoals
    })
  }
}
