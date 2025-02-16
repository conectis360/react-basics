
import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as Goal } from "../App.tsx"

type CourseGoalListProps = {
    goals: Goal[];
    onDeleteGoal: (id: number) => void;
  };

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    return <div>
        <ul>
        {goals.map((goal) => (
            <li key={goal.id}>
                <CourseGoal title={goal.title} onDeleteGoal={onDeleteGoal} id={goal.id}>{goal.description}</CourseGoal>
            </li>
        ))}
        </ul>
    </div>
}