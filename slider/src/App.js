import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className='section'>
      <div className='title'>
        <h2> <span>/</span> Reviews</h2>
      </div>
      <div className='section-center'>Slider</div>
      
    </section>
  );
}

export default App;
