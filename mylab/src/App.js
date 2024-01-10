import React, { useState } from 'react';
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";import Counter from "./components/Counter";


function App() {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter/>
      </MealsProvider>
      <h1>Lemon pepper Restaurant</h1>
      <MyForm />
      <FeedbackForm />
    </div>
  )
}

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name you entered is: ${name}`);
  }

  const [menu, setMenu]=useState( '' );
  
  const handleMenuClick = (e) =>{
    e.preventDefault();
    setMenu(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Menu</h1>
      <select value={menu} onChange={handleMenuClick}>
        <option value='1'>Breakfast</option>
        <option value='2'>Lunch</option>
        <option value='3'>Dinner</option>
        <option value='4'>Drinks</option>
      </select>
      <br />
      <br />
      <label>
        Enter your name:
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

function FeedbackForm() {
  const [score, setScore]=useState( 10 );
  
  const [comment, setComment]=useState( '' );

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Number(score) < 5 && comment.length <= 10) {
      alert(`Please provide a comment explaining why the experience was poor.`)
    }
  }

  return (
    <div className='feedback'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Feedback</legend>
          <label>
            Score:{score} ⭐
            <input type='range' min={0} max={10} value={score} onChange={(e) => setScore(e.target.value)}/>
          </label>
          
          <label>
            Feedback:
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Comment here!'/>
          </label>
          <br />
          <input type='submit' value='Submit' />
        </fieldset>
      </form>
    </div>
  );
}
export default App;