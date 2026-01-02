import { useState, useEffect, useRef } from 'react';
import '../styles/components/RangeSlider.css';

interface RangeSliderProps {
    thumbIcon: string;
    min: number;
    max: number;
    value: number;
    step: number;
    onChange: (value: number) => void;
  }

function RangeSlider({thumbIcon, min, max, value, step, onChange}: RangeSliderProps){
    const [sliderRange, setSliderRange] = useState(value)
    const [inputValue, setInputValue] = useState(value)
    const sliderRef = useRef<HTMLInputElement | null>(null);
  
    function handleSliderInput(){
        const sliderElement: HTMLInputElement | null = sliderRef.current;
        if (sliderElement) {
          const range = max - min;
          const distance = +sliderElement.value - min;
          const percentage = (distance / range) * 100;
          setSliderRange(percentage);
          setInputValue(Number(sliderElement.value));
          onChange(Number(sliderElement.value));
        }
    }
  
    useEffect(() => {
      handleSliderInput();
    }, [sliderRef])
  
    function handleNumberInput(e: React.ChangeEvent<HTMLInputElement>){
      const newValue = parseInt(e.target.value);
      if (newValue< min) {
        setInputValue(min)
        setSliderRange(0)
      } else if (newValue > max) {
        setInputValue(max)
        setSliderRange(100)
      } else {
        setInputValue(newValue);
        const range = max-min;
        const distance = newValue - min;
        const percentage = (distance / range) * 100;
        setSliderRange(percentage)
      }
    }
  
    return (
      <div className="range-slider"> 
        <div className="slider-values">
          <small>{min}</small>
          <input 
           type="number"
           onInput={handleSliderInput}
           value={inputValue} 
           min={min} max={max}
           className="number-input"
           step={step}
          />
          <small>{max}</small>
        </div>
        <div className="slider-container">
          <input 
           type="range" 
           onInput={handleNumberInput}
           value={inputValue}
           className="slider"
           min={min} max={max}
           ref={sliderRef}
           step={step}
          />
          <div 
            className="slider-thumb"
            style={{ left: `calc(${sliderRange}% - 0.5em)` }}
            data-emoji={thumbIcon}
          ></div>
          <div 
            className="progress"
            style={{ width: `${sliderRange}%`}}
          ></div>
        </div>
      </div>
  
    )
  }
  export default RangeSlider