import "../App.css"


export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <div className="HomePage">
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <div className="stats" >Stats</div>
          <div className="HomePage-element">
            Total Employees: <span className="totalemp">10</span>
          </div>
          <div className="HomePage-element">
            Total Terminated: <span className="total_terminated">0</span>
          </div>
          <div className="HomePage-element">
            Total Promoted: <span className="total_promoted">0</span>
          </div>
          <div className="HomePage-element">
            Total New:  <span className="total_new">0</span>
          </div>
        </div>
      </div>
    </>
  );
};
