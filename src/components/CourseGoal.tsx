interface CourseGoalsProps {
    title: string;
    description: string;
};

export default function CourseGoal({title, description}: CourseGoalsProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Delete</button>
        </div>
    </article>
}
