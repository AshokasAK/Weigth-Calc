import React from 'react'

const Input = ({height,weight,setHeight,setWeight,bmiValue,bmiStatus,handleBmi,handleClear,errorMsg,bmiBox}) => {
  return (
    <>
    <div className="datas">
        <h3 className='heading'>BMI Calculator</h3>
      <label
       htmlFor="height"
       className='heightlabel'
       >Height (cm)</label>
      <input
       type="text"
       id='height'
       value={height}
       onChange={(e)=>{setHeight(e.target.value)}} />
      <label
       className='weightlabel'
      htmlFor="weight"
      >Weight (kg)</label>
      <input
       type="text"
       id='weight'
       value={weight}
       onChange={(e)=>{setWeight(e.target.value)}} />
       <div className="error">
        <p className='errormsg'>{errorMsg}</p>
       </div>
       <footer
       className='buttons'
       >
        <button
              className='create'
              onClick={handleBmi}
              >Generate BMI</button>
              <button
              className='clear'
              onClick={handleClear}
              >Clear</button>
       </footer>
       
       {bmiBox &&
      <div className="results">
        <h5>{`BMI value : ${bmiValue}`}</h5>
        <h5>{`BMI status : ${bmiStatus} `}</h5>
        </div>
       }
      </div>
    </>
  )
}

export default Input