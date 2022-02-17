import './App.css';
import { useEffect, useState } from 'react'

function TaskTwo() {

  const [quote, setQuote] = useState('')

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    setQuote(data.content);
  }

  return (
    <div className='container'>
      <p>{quote}</p>
    </div>
  );
}

export default TaskTwo;
