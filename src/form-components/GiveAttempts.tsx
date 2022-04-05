import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemaining] = useState<number>(3);
    const [requestedAttempts, setRequested] = useState<string>("");
    const requested = parseInt(requestedAttempts) || 0;

    const useAttempt = (): void => {
        setRemaining(remainingAttempts - 1);
    };

    const addAttempts = (): void => {
        setRemaining(remainingAttempts + requested);
    };

    return (
        <div>
            <div>
                <Button onClick={useAttempt} disabled={remainingAttempts === 0}>
                    use
                </Button>
                <Button onClick={addAttempts}>gain</Button>
            </div>
            <div>
                <Form.Group controlId="giveAttempts">
                    <Form.Label>Requested Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequested(event.target.value)}
                    />
                </Form.Group>
                <div>{remainingAttempts}.</div>{" "}
            </div>
        </div>
    );
}
