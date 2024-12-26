import React, { useState } from 'react';
import styled from 'styled-components';

interface RangeSliderProps {
  thumbIcon: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const RangeSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

const RangeSliderTrack = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 4px;
  background-color: #ddd;
`;

const RangeSliderThumb = styled.div<{ thumbIcon: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  cursor: grab;

  &::after {
    content: '${(props) => props.thumbIcon}';
  }
`;

const TestRangeSlider: React.FC<RangeSliderProps> = ({
  thumbIcon,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newValue = ((offsetX / rect.width) * (max - min) + min);
    onChange(Math.round(newValue / step) * step);
  };

  const thumbLeft = `${((value - min) / (max - min)) * 100}%`;

  return (
    <RangeSliderContainer onMouseMove={handleMouseMove}>
      <RangeSliderTrack />
      <RangeSliderThumb
        thumbIcon={thumbIcon}
        style={{ left: thumbLeft }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </RangeSliderContainer>
  );
};

export default TestRangeSlider;