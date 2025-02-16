import { type ReactNode } from "react";

interface CourseGoalsProps {
    title: string;
    children: ReactNode;
};

export default function CourseGoal({title, children}: CourseGoalsProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
            <button>Delete</button>
        </div>
    </article>
}
