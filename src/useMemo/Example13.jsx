import React, { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
    // Use useMemo to cache the result of the expensive calculation
    const sum = useMemo(() => {
        // Simulate an expensive calculation
        let result = 0;
        for (let i = 0; i < 1e6; i++) {
            result += a + b;
        }
        return result;
    }, [a, b]); // Recalculate only when a or b changes

    return (
        <div>
            <p>The sum is: {sum}</p>
        </div>
    );
}

export default ExpensiveComponent;
