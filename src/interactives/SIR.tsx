import { useState } from 'react';
import Plot from 'react-plotly.js';
import Button from '../components/Button';
// import { TextField} from '@mui/material';

interface SIRData {
  S: number[];
  I: number[];
  R: number[];
}

function SIR() {
  const [transmissionCoefficient, setTransmissionCoefficient] = useState<number>(0);
  const [recoveryRate, setRecoveryRate] = useState<number>(0);
  const [totalPopulation, setTotalPopulation] = useState<number>(0);
  const [data, setData] = useState<SIRData>({ S: [], I: [], R: [] });

  const simulate = () => {
    let S = 1 - 1/totalPopulation;
    let I = 1/totalPopulation;
    let R = 0;
    let dt = .5;
    let steps = 25;
    let SArray: number[] = [];
    let IArray: number[] = [];
    let RArray: number[] = [];

    for (let i = 0; i < steps; i++) {
      SArray.push(S);
      IArray.push(I);
      RArray.push(R);
      let S_prime = transmissionCoefficient * S * I;
      //let I_prime = transmissionCoefficient * S * I - recoveryRate * I;
      let R_prime = recoveryRate * I;
      S -= S_prime * dt;
      I += S_prime * dt - R_prime *dt;
      R += R_prime * dt;
    }

    setData({ S: SArray, I: IArray, R: RArray });
  };

  return (
    <div>
      <h1>SIR Epidemic Model</h1>
      <label>Transmission Coefficient
      <input
        type="number"
        value={transmissionCoefficient}
        onChange={(e: any) => setTransmissionCoefficient(Number(e.target.value))}
      /></label>
      <label>Recovery Rate
      <input
        type="number"
        value={recoveryRate}
        onChange={(e: any) => setRecoveryRate(Number(e.target.value))}
      /></label>
      <label>Total Population
      <input
        type="number"
        value={totalPopulation}
        onChange={(e: any) => setTotalPopulation(Number(e.target.value))}
      /></label>
      <Button 
          buttonStyle='btn--outline'
          type=''
          to=''
          buttonSize=''onClick={simulate}>Simulate</Button>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Susceptible</th>
            <th>Infected</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {data.S.map((value, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{value}</td>
              <td>{data.I[index]}</td>
              <td>{data.R[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Plot
        data={[
          {
            x: Array.from(Array(data.S.length).keys()),
            y: data.S,
            type: 'scatter',
            mode: 'lines',
            line: { color: 'blue' },
            name: 'Susceptible',
          },
          {
            x: Array.from(Array(data.I.length).keys()),
            y: data.I,
            type: 'scatter',
            mode: 'lines',
            line: { color: 'red' },
            name: 'Infected',
          },
          {
            x: Array.from(Array(data.R.length).keys()),
            y: data.R,
            type: 'scatter',
            mode: 'lines',
            line: { color: 'green' },
            name: 'Recovered',
          },
        ]}
        layout={{ title: 'SIR Model' }}
      />
    </div>
  );
}

export default SIR;