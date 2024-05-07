import React,{useState} from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
const App = () =>{
  const [courseGoals ,setCourseGoals] = useState([
      {id:'cg1',text:'Finish the course'},
      {id:'cg2',text:'Learn all the things'},
      {id:'cg3',text:'Help others'}
    ]);  
    
  const addNewGoalHandler = newGoal => {
  //  setCourseGoals(courseGoals.concat(newGoal));
  setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  return (
    <div>
      <h2 className="course-goals">Course Goal</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
     <GoalList goal={courseGoals} />
    </div>
  );
}

export default App;