import { type PropsWithChildren } from "react";

/*
interface CourseGoalsProps {
    title: string;
    children: ReactNode;
};
*/
type CourseGoalsProps = PropsWithChildren<{
    title: string;
    onDeleteGoal: (id: number) => void
    id: number;
}>;

export default function CourseGoal({title, children, onDeleteGoal, id}: CourseGoalsProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
            <button onClick={() => onDeleteGoal(id)}>Delete</button>
        </div>
    </article>
}
