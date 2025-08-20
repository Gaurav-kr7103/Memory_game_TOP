import './App.css'
import { useState } from 'react';
import { HeadingScore } from './HeadingScore';
import { CardsToPlayWith } from './CardsToPlayWith';

function App () {
  const [count, setCount] = useState(0);
  return (
    <>
      <HeadingScore count={count} setCount={setCount}/>
      <CardsToPlayWith count={count} setCount={setCount}/>
    </>
  )
}

export default App
