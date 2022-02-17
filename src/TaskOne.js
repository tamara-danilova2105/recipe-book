import './App.css';
import { useState } from 'react'

function TaskOne() {

  const [book, setBook] = useState({
    title: 'Цифровая крепость',
    author: 'Дэн Браун',
    year: '1998 год',
    rating: '6 звезд'
  })

  const ChangeRating = () => {
    setBook({...book, rating: '10 звезд'})
  }

  return (
    <div className='container'>
      <h2>{book.title}</h2>
      <h2>{book.author}</h2>
      <h2>{book.year}</h2>
      <h2>{book.rating}</h2>
      <button onClick={ChangeRating}>Не согласна с рейтингом</button>
    </div>
  );
}

export default TaskOne;