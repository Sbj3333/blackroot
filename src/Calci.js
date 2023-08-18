import React, { useState } from 'react';

function Calci() {
    const [distance, setDistance] = useState('');
    const [electricityUsage, setElectricityUsage] = useState('');
    const [flightsDistance, setFlightsDistance] = useState('');
    const [gasConsumption, setGasConsumption] = useState('');
    const [result, setResult] = useState('');

    const calculateCarbonFootprint = () => {
        const carEmissionFactor = 2.3; // kg CO2 per mile
        const electricityEmissionFactor = 0.5; // kg CO2 per kWh
        const flightEmissionFactor = 0.2; // kg CO2 per mile
        const gasEmissionFactor = 19.6 / 2.20462; // kg CO2 per gallon (converted from lbs)

        const carEmissions = parseFloat(distance) * carEmissionFactor;
        const electricityEmissions = parseFloat(electricityUsage) * electricityEmissionFactor;
        const flightEmissions = parseFloat(flightsDistance) * flightEmissionFactor;
        const gasEmissions = (parseFloat(gasConsumption) * gasEmissionFactor);

        const totalEmissions = carEmissions + electricityEmissions + flightEmissions + gasEmissions;
        setResult(`Your total carbon footprint is ${totalEmissions.toFixed(2)} kg CO2e.`);
    };

    return (
        <div className="bg-[#8997bf] p-4">
            <h1 className="text-xl text-white mb-4">Carbon Footprint Calculator</h1>
            <label htmlFor="distance" className="block mb-2">Distance (miles):</label>
            <input type="number" id="distance" className="p-2 border mb-2" value={distance} onChange={(e) => setDistance(e.target.value)} />

            <label htmlFor="electricity" className="block mb-2">Electricity usage (kWh):</label>
            <input type="number" id="electricity" className="p-2 border mb-2" value={electricityUsage} onChange={(e) => setElectricityUsage(e.target.value)} />

            <label htmlFor="flights" className="block mb-2">Flights (miles):</label>
            <input type="number" id="flights" className="p-2 border mb-2" value={flightsDistance} onChange={(e) => setFlightsDistance(e.target.value)} />

            <label htmlFor="gas" className="block mb-2">Gas consumption (gallons):</label>
            <input type="number" id="gas" className="p-2 border mb-2" value={gasConsumption} onChange={(e) => setGasConsumption(e.target.value)} />

            <button id="calculate" className="bg-yellow-400 p-2 rounded-lg text-white hover:bg-yellow-600" onClick={calculateCarbonFootprint}>Calculate</button>
            <p id="result" className="font-bold text-white mt-4">{result}</p>
        </div>
    );
}

export default Calci;
