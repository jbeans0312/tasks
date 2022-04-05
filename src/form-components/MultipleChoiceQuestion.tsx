import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="multipleChoiceQuestions">
                    <Form.Label>Choose an answer!</Form.Label>
                    <Form.Select value={answer} onChange={updateAnswer}>
                        {options.map((ans: string) => (
                            <option key={ans} value={ans}>
                                {ans}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                Result{" "}
                {answer === expectedAnswer ? <span>✔️ </span> : <span>❌</span>}
            </div>
        </div>
    );
}

/*
The MultipleChoiceQuestions component allows a user to select an answer from a list in a dropdown, 
and then displays whether they got it correct or incorrect. The component takes in a parameter representing 
the expectedAnswer and also a parameter representing the list of options.

    You will need a state to represent the user’s currently selected choice.
    The initial state of the selected choice is the first element of the options list.
    When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
*/
