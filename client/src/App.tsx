import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';

function App() {
  const [sliderValue, setSliderValue] = useState(30);
  const { hovered, ref } = useHover();

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Slider
          defaultValue={30}
          value={sliderValue}
          onChange={(value) => setSliderValue(value)}
          ref={ref}
          label={sliderValue}
          styles={{
            thumb: {
              transition: 'opacity 150ms ease',
              opacity: hovered ? 1 : 0,
            },
          }}
        />
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
