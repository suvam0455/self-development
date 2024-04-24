import React from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
const App = () =>{
  const courseGoals = [
    {id:'cg1',text:'Finish the course'},
    {id:'cg2',text:'Learn all the things'},
    {id:'cg3',text:'Help others'}
  ]
  return (
    <div>
      <h2 className="course-goals">Course Goal</h2>
      <NewGoal />
     <GoalList goal={courseGoals} />
    </div>
  );
}

export default App;