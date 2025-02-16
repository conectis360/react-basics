
import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as Goal } from "../App.tsx"

type CourseGoalListProps = {
    goals: Goal[];
  };

export default function CourseGoalList({goals}: CourseGoalListProps) {
    return <div>
        <ul>
        {goals.map((goal) => (
            <li key={goal.id}>
                <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
            </li>
        ))}
        </ul>
    </div>
}