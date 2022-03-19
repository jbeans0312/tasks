import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface AttemptProps {
    setRemaining: (request: number) => void;
    remainingAttempts: number;
    requestedAttempts: number;
}

function UseButton({
    setRemaining,
    remainingAttempts
}: AttemptProps): JSX.Element {
    return (
        <Button
            onClick={() => setRemaining(remainingAttempts - 1)}
            disabled={remainingAttempts === 0}
        >
            Use
        </Button>
    );
}

function AddButton({
    setRemaining,
    remainingAttempts,
    requestedAttempts
}: AttemptProps): JSX.Element {
    return (
        <Button
            onClick={() => setRemaining(remainingAttempts + requestedAttempts)}
        >
            Add
        </Button>
    );
}

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemaining] = useState<number>(3);
    const [requestedAttempts, setRequested] = useState<number>(0);

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        const userInput = parseInt(event.target.value);
        if (!isNaN(userInput)) {
            setRequested(userInput);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <span>{remainingAttempts}</span>
                <Form.Group controlId="updateRequestAttempts">
                    <Form.Label>Request Attempts</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={updateRequest}
                    />
                </Form.Group>
            </div>
            <div>
                <UseButton
                    setRemaining={setRemaining}
                    remainingAttempts={remainingAttempts}
                    requestedAttempts={requestedAttempts}
                ></UseButton>
                <AddButton
                    setRemaining={setRemaining}
                    remainingAttempts={remainingAttempts}
                    requestedAttempts={requestedAttempts}
                ></AddButton>
            </div>
        </div>
    );
}
