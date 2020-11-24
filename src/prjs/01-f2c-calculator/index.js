import React, {useState} from 'react';
import TemperatureInput from "./TemperatureInput";

const Setup = () => {
    // const [temperature, setTemperature] = useState('32');
    // const [scale, setScale] = useState('c');
    const [state, setState] = useState({temperature: 32, scale:'c'});

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
        // setScale('c');
        // setTemperature(temperature);
        setState({...state, temperature:temperature, state:'c'});
    }

    const handleFahrenheitChange = (temperature) => {
        console.log("handleFahrenheitChange", temperature);
        // setScale('f');
        // setTemperature(temperature);
        setState({...state, temperature:temperature, state:'f'});

    }

    const celsius = state.scale === 'f' ? tryConvert(state.temperature, toCelsius) : state.temperature;
    const fahrenheit = state.scale === 'c' ? tryConvert(state.temperature, toFahrenheit) : state.temperature;
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