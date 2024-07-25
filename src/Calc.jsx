import React, { useState } from 'react'
import Image from './Image'
import Input from './Input'
import './Calc.css'

const Calc = () => {
const [height,setHeight] = useState('')
const [weight,setWeight] = useState('')
const [bmiValue,setBmiValue] = useState ('')
const [bmiStatus,setBmiStatus] = useState ('')
const [errorMsg,setErrorMsg] = useState('')
const [bmiBox,setBmiBox] = useState(false)



const handleBmi = () => {

  setErrorMsg("")
  const wholeHeight = Math.round(height)
  const wholeWeight = Math.round(weight)
// console.log(wholeHeight)
// console.log(wholeWeight)
  const heightinDigit = /^\d+$/.test(wholeHeight)
  const weightinDigit = /^\d+$/.test(wholeWeight)
  
if (heightinDigit && weightinDigit){
  if( height>=120 && height<=210 && weight>=35 && weight<=140){
    setBmiBox(true)
      const meter = height /100
      // console.log(meter)
      const bmiVal = wholeWeight / (meter * meter)
      // console.log( bmiVal)
      setBmiValue(bmiVal.toFixed(2))
      // console.log(bmiValue)
      if (bmiVal < 18.9){
        setBmiStatus("Under weight")
      }else if(bmiVal>=18.91 && bmiVal<=24.9){
          setBmiStatus("Normal weight")
      }else if(bmiVal>=24.91 && bmiVal<=29.9) {
           setBmiStatus("Over weight")
      }else{
        setBmiStatus("Obesse")
      }
  }else{
    setErrorMsg( "!"+ " " + "You might enter an invalid measurements.")
  setBmiBox(false)
  }
}else{
  setErrorMsg( "!"+ " " + "Please enter numbers.")
  setBmiBox(false)
  }
}

const handleClear =()=>{
  setHeight('')
  setWeight('')
  setErrorMsg('')
  setBmiBox(false)
}

  return (
    <>
    <div className="container">
       
       <Image />
       <Input 
       height= {height}
       setHeight= {setHeight}
       weight= {weight}
       setWeight= {setWeight}
       errorMsg= {errorMsg}
       handleBmi= {handleBmi}
       handleClear= {handleClear}
       bmiValue= {bmiValue}
       bmiStatus= {bmiStatus}
       bmiBox ={bmiBox}
       />
    </div>
    </>
  )
}

export default Calc