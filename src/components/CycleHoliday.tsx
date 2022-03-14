import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "🥚" //Egg Festival
    | "🌸" //Flower Dance
    | "🍲" //Luau
    | "🎡" //Stardew Valley Fair
    | "⛄"; //Feast of The Winter Star

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, cycle] = useState<Holiday>("🥚");

    const byAlphabet: Record<Holiday, Holiday> = {
        "🎡": "🥚",
        "🥚": "⛄",
        "⛄": "🌸",
        "🌸": "🍲",
        "🍲": "🎡"
    };

    const bySeason: Record<Holiday, Holiday> = {
        "⛄": "🥚",
        "🥚": "🌸",
        "🌸": "🍲",
        "🍲": "🎡",
        "🎡": "⛄"
    };

    return (
        <div>
            <div>
                <Button onClick={() => cycle(byAlphabet[currentHoliday])}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => cycle(bySeason[currentHoliday])}>
                    Advance by Season
                </Button>
            </div>
            <div>
                <span>Holiday: {currentHoliday}</span>
            </div>
        </div>
    );
}
/* Egg Festival (Early Spring), Flower Dance (Late Spring), Luau (Early Summer)
 * Stardew Valley Fair (Mid Fall), Feast of The Winter Star (Late Winter)
 */
