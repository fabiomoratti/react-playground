import React, {useState} from 'react';
import TemperatureInput from "./TemperatureInput";

const Setup = () => {
    const [temperature, setTemperature] = useState('32');
    const [scale, setScale] = useState('c');

    const toCelsius = (fahrenheit) => {
        console.log("toCelsius: ", fahrenheit);
        return (fahrenheit - 32) * 5 / 9;
    }

    const toFahrenheit = (celsius) => {
        console.log("toFahrenheit: ", celsius);
        return (celsius * 9 / 5) + 32;
    }

    const tryConvert = (temperature, convert) => {
        console.log("tryConvert", temperature, convert);
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const handleCelsiusChange = (temperature) => {
        console.log("handleCelsiusChange", temperature);
        setScale('c');
        setTemperature(temperature);
    }

    const handleFahrenheitChange = (temperature) => {
        console.log("handleFahrenheitChange", temperature);
        setScale('f');
        setTemperature(temperature);
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <>
            <h1>Calculator</h1>
            <TemperatureInput
                scale={'c'}
                temperature={celsius}
                handleTemperatureChange={handleCelsiusChange}
            />

            <TemperatureInput
                scale={'f'}
                temperature={fahrenheit}
                handleTemperatureChange={handleFahrenheitChange}
            />

        </>
    );
}

export default Setup;