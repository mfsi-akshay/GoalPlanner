export default class AddGoal extends React.Component{
    render(){
      return(
        <div className="row">
          <form>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="materialize-textarea"/>
                <label htmlFor="textarea1">Goal</label>
                <button type="submit" className="btn left">Add Goal</button>
              </div>
            </div>
          </form>
        </div>
      )
    }
}
