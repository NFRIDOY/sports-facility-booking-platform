import React, { useState } from 'react';

const TimeInput = () => {
    const [time, setTime] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(time); // Log the time value
        console.log(typeof(time)); // Log the time value
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="time"
                    name="time"
                    id="time"
                    value={time}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TimeInput;
