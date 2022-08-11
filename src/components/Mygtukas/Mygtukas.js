import React from 'react';
import PropTypes from 'prop-types';
import './Mygtukas.css';

const Mygtukas = ({pirmas, antras,text, operator, setSum}) => {

const handleOperation = () =>{
  if(operator === '+')
    setSum(parseInt(pirmas) + parseInt(antras))
  else if(operator === '-')
    setSum(parseInt(pirmas) - parseInt(antras))
  
  else if(operator === '*')
    setSum(parseInt(pirmas) * parseInt(antras))
  
  else if(operator === '/')
    setSum(parseInt(pirmas) / parseInt(antras))
  


  }



return (
  
   <div className="Mygtukas" >
     <button className='mygtukai' onClick={handleOperation}>{text}</button>
   </div>
  
)}
Mygtukas.propTypes = {};
Mygtukas.defaultProps = {};

export default Mygtukas;
