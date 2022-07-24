import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect( () => {
    if(index > people.length -1){
      setIndex( (prevIndex) => setIndex(0));
    }
    else if( index < 0){
      setIndex( people.length -1)
    }
  }, [index, people])

  useEffect( () => {
    let slider = setInterval( () =>{setIndex( (prevIndex) => setIndex(prevIndex +1))}, 3000);

    return () => {clearInterval(slider) };
  } , [index])

  

  return (
    <section className='section'>
      <div className='title'>
        <h2> <span>/</span> Reviews</h2>
      </div>
      <div className='section-center'>
        {people.map( (person, personIndex) => {
          const {id, image, name, title, quote} = person;
          let position = "nextSlide";
          
          if(index === personIndex ) position = "activeSlide"
          if(index === 0 && personIndex === people.length -1 ) position= "lastSlide"

          return (
            <article key={id} className = {position}>
              <img src={image} className="person-img"></img>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' ></FaQuoteRight>

            </article>
          );
        }) }
        <button className='prev'>
          <FiChevronLeft onClick= { () => setIndex(index -1)}></FiChevronLeft>
        </button>
        <button className='next'>
          <FiChevronRight onClick= { () => setIndex(index +1)}></FiChevronRight>
        </button>
      </div>

      
    </section>
  );
}

export default App;
