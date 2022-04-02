import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "turquoise"
];

interface ColorProps {
    color: string;
    setColor: (newColor: string) => void;
}

function ColorButtons({ color, setColor }: ColorProps): JSX.Element {
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            {COLORS.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="color"
                    id="radio-button-color"
                    label={c}
                    value={c}
                    checked={c === color}
                    onChange={updateColor}
                />
            ))}
        </div>
    );
}

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("Red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <ColorButtons color={color} setColor={setColor}></ColorButtons>
            </div>
            <div>
                The current color is{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
