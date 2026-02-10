import React, { useState } from 'react';
// import RangeSlider from './RangeSlider';
import { Slider} from '@mui/material';
// import TestRangeSlider from './test';
//import Plot from 'react-plotly.js';

interface Result {
  userChoice: string;
  compChoice: string;
  result: string;
}

const RockPaperScissors: React.FC = () => {
  // UseState variables
  const [userStrategyRock, setUserStrategyRock] = useState<number>(20)
  const [userStrategyPaper, setUserStrategyPaper] = useState<number>(30)
  const [userStrategyScissors, setUserStrategyScissors] = useState<number>(50)
  const [computerHistory, setComputerHistory] = useState<Record<string, number>>({'rock': 0, 'paper': 0, 'scissors': 0})
  const [results, setResults] = useState<Record<string, number>>({'wins': 0, 'ties': 0, 'loss': 0})
  const [history, setHistory] = useState<Result[]>([]);
  const [a, setA] = useState<number>(Math.random());
  const [b, setB]= useState<number>(Math.random());
  // other variables
  const exploreVal = 5
  const exploitVal = 20
  const dict: Record<string, number> = {'rock': 0, "paper": 1, 'scissors': 2};

  function handleUserChoice(userChoice: string) {
      const newResult: Result = playGame(userChoice)
      // Update game history
      const newHistory = [...history, newResult];
      setHistory(newHistory);
  }
  
  function playGame(userChoice: string) {
    const compNum = Math.random()
    const compChoice: string = compNum < a && compNum < b ? 'rock' : compNum > a && compNum > b ? 'paper' : 'scissors';

    const result = getResult(userChoice, compChoice);
      if (result === 'win') {
        results.wins = results.wins + 1
        setResults(results);
      } else if (result === 'loss') {
        results.loss = results.loss + 1
        setResults(results);
      } else {
        results.ties = results.ties + 1
        setResults(results);
      }
    // Update computer history with new selection
    computerHistory[compChoice] = computerHistory[compChoice] + 1
    setComputerHistory(computerHistory);
    return { userChoice, compChoice, result }
  }
  
  const getResult = (userChoice: string, computerChoice: string): string => {
    const choiceSum: number = dict[userChoice] - dict[computerChoice] + 3
    if (choiceSum % 3 == 0){ return 'tie';
    } else if (choiceSum % 3 == 1){return 'win'
    } else {return 'loss'}
  }

  const simulate = () => {
    // Ask for strategy values
    // setUserStrategy({'rock': 50, 'paper': 30, 'scissors': 20})
    console.log(userStrategyRock)
    const newResults: Result[] = []
    while (results.wins + results.loss < exploitVal) {
      const randNum = Math.random() * 100;
      const userRandomChoice: string = randNum < userStrategyRock ? 'rock' : randNum > 100 - userStrategyPaper ? 'paper' : 'scissors';
      
      const newResult: Result = playGame(userRandomChoice)
      newResults.push(newResult)
    }
    // Update game history
    history.push(...newResults);
    setHistory(history);
  }

  // Reset all variables to initial conditions
  const resetGame = () => {
    setResults({'wins': 0, 'ties': 0, 'loss': 0})
    setHistory([]);
    setComputerHistory({'rock': 0, 'paper': 0, 'scissors': 0});
    setUserStrategyRock(20)
    setUserStrategyPaper(30)
    setUserStrategyScissors(50)
    setA(Math.random());
    setB(Math.random());
  }


  // Conditional rendering
  const thresholdRendering = (results: Record<string, number>) => {
    if (results.wins + results.loss < exploreVal) {
      return <div>
      <button onClick={() => handleUserChoice('rock')}>Rock</button>
      <button onClick={() => handleUserChoice('paper')}>Paper</button>
      <button onClick={() => handleUserChoice('scissors')}>Scissors</button>
    </div>
    } else if (results. wins + results.loss < exploitVal){ 
      return <div>
        <Slider 
          step={5}
          marks
          min={0}
          max={100}
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(_event: Event, newValue: number | number[]) => {setUserStrategyRock(newValue as number)}}
        ></Slider>
        <Slider 
          step={5}
          marks
          min={0}
          max={100}
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(_event: Event, newValue: number | number[]) => {setUserStrategyPaper(newValue as number)}}
        />
        <Slider 
          step={5}
          marks
          min={0}
          max={100}
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(_event: Event, newValue: number | number[]) => {setUserStrategyScissors(newValue as number)}}
        />
      <button 
        onClick={() => {if (userStrategyRock + userStrategyPaper + userStrategyScissors == 100){simulate()}}}
        style={{color: userStrategyRock + userStrategyPaper + userStrategyScissors == 100 ? 'green' : 'inherit'}}
      >
        Simulate
      </button>
    </div>
    } else {
      <></>
    }
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <p>Can you beat a biased computer? Play {exploreVal} games and then select a strategy for the next {exploitVal - exploreVal} games.</p>
      {thresholdRendering(results)}

      <h2>Debug</h2>
      <p> Rock: {Math.round(Math.min(a, b) * 100)}, Paper: {100 - Math.round(Math.max(a, b) * 100)}, Scissors: {Math.round((Math.max(a, b) - Math.min(a,b))* 100)}</p>
      
      <h2>Computer Choices</h2>
      <p>Rock: {computerHistory.rock}, Paper: {computerHistory.paper}, Scissors: {computerHistory.scissors}</p>
      <button onClick={() => resetGame()}>Reset</button>
      <h2>Stats:</h2>
      <ul>
        <li>Wins: {results.wins}</li>
        <li>Losses: {results.loss}</li>
        <li>Ties: {results.ties}</li>
      </ul>

      <h2>Results:</h2>
      <ul>
      {history.map((result, index) => (
      <li key={index}>
        {' '}
        <span style={{ color: result.result === 'win' ? 'green' :
        result.result === 'loss' ? 'red' :
        'inherit' }}>
        User: {result.userChoice} | Computer: {result.compChoice}
        </span>
      </li>
      ))}
      </ul>


    </div>
  );
};

export default RockPaperScissors;

/*
<Plot data={[{
            y: computerHistory['rock'],
            type: 'bar',
            mode: 'lines',
            line: { color: 'blue' },
            name: 'ComputerHistory',
          },]} layout={{ title: 'Computer History' }}/>

<RangeSlider thumbIcon={"🪨"} min={0} max={100} value={50} step={1} onChange={setUserStrategyRock}/>
      <RangeSlider thumbIcon={"📄"} min={0} max={100} value={30} step={1} onChange={setUserStrategyPaper}/>
      <RangeSlider  thumbIcon={"✂️"} min={0} max={100} value={20} step={1} onChange={setUserStrategyScissors}/>

          */
