import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLFormElement>(null);
    const summary = useRef<HTMLFormElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();

        onAddGoal(enteredGoal, enteredSummary);
    }

    return <form onSubmit={handleSubmit}>
        <p>
            <label> Your Goal </label>
            <input id="goal" type="text" ref={goal}/>
        </p>
        <p>
            <label> Summary </label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}
