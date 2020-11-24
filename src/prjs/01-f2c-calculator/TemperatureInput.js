import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

const TemperatureInput = ({scale, temperature, handleTemperatureChange}) => {

    const handleChange = (e) => {
        handleTemperatureChange(e.target.value);
    }

    console.log("Temperature: ", temperature);
    console.log("Scale: ", scale);

    return (
        <>
            <div className="item">
                Temperature ({scaleNames[scale]}):
                <input
                    type="text"
                    value={temperature}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

export default TemperatureInput;