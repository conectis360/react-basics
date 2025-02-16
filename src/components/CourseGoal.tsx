import { type PropsWithChildren } from "react";

/*
interface CourseGoalsProps {
    title: string;
    children: ReactNode;
};
*/
type CourseGoalsProps = PropsWithChildren<{title: string}>

export default function CourseGoal({title, children}: CourseGoalsProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
            <button>Delete</button>
        </div>
    </article>
}
