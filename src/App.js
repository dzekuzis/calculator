
import { useState } from 'react';
import './App.css';
import Mygtukas from './components/Mygtukas/Mygtukas';


function App() {


  let [firstNumber, setFirstas] = useState(0)
  let [secondNumber,  setSecondas] = useState(0)
  let [suma, setSum ] = useState(0)

 const styles = {
     color: `blueviolet`,
     fontSize: `20px`,
     fontFamily: `Trebuchet MS`,
     
     fontWeight: `900`
 }


  return (
    <div className="App">
        <h1>Calculator</h1>
     <div className='inputai'>
        <input style={styles} placeholder='first number' type='text'   onChange={(e)=> {setFirstas(e.target.value)}}></input>
        <input style={styles} placeholder='second number'  type='text'  onChange={(e)=> {setSecondas(e.target.value)}}></input>
     </div>
    {/* <button onClick={() => setSum(parseInt(firstNumber) + parseInt(secondNumber) )}>+</button> */}
     <Mygtukas 
     pirmas={firstNumber}
     antras={secondNumber}
     text={'+'}
     operator={'+'}
     setSum={setSum}
     />
     <Mygtukas 
     pirmas={firstNumber}
     antras={secondNumber}
     text={'-'}
     operator={'-'}
     setSum={setSum}
     />
     <Mygtukas 
     pirmas={firstNumber}
     antras={secondNumber}
     text={'*'}
     operator={'*'}
     setSum={setSum}
     />
     <Mygtukas 
     pirmas={firstNumber}
     antras={secondNumber}
     text={'/'}
     operator={'/'}
     setSum={setSum}
     />
     
    <div className='ats'>Answer: {suma}</div>
    </div>
  );
}

export default App;
