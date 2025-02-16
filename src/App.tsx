import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import "./App.css";
import CourseGoalList from "./components/CourseGoalList.tsx";
import { useState } from "react";


export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal() {
      setGoals((prevGoals) => {
        const newGoal: CourseGoal = {
          id: Math.random(),
          title: "Learn React",
          description: "Learn in depth",
        };
        return [...prevGoals, newGoal];
      });
    }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "ìmagem" }}>
          <h1>YOUR COURSE GOALS</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>
        <CourseGoalList goals={goals}></CourseGoalList>
      </main>
    </>
  );
}

export default App;
