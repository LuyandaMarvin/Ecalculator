import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
        'C': 'clear',
        '0': 'num',
        '1': 'num',
        '2': 'num',
        '3': 'num',
        '4': 'num',
        '5': 'num',
        '6': 'num',
        '7': 'num',
        '8': 'num',
        '9': 'num',
        '.': 'comma',
        '+-': 'invert',
        '%': 'persent'
    }

    return className[btn]
}

const Button = ({ value }) => {

  const { calc, setCalc } = useContext(CalcContext)

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }

  const resetClick = () => {
    setCalc({sign: '', num: 0, res: 0})
  }

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  const equalsClick = () => {
    if(calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+' : (a, b) => a + b,
          '-' : (a, b) => a - b,
          '/' : (a, b) => a / b,
          'x' : (a, b) => a * b,
        }
  
        return result[sign](a, b)
      }

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      })
    }
  }

  const persentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ''
    })
  }

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0
    })
  }

  const handleClickButton = () => {
    const numberString  =  value.toString()

    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue = '0'
    }else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc, 
      num: numberValue
    })
  }

  const handleBtnClick = () => {
    
    const result = {
      '.' : commaClick,
      'C' : resetClick,
      '/' : signClick,
      'x' : signClick,
      '-' : signClick,
      '+' : signClick,
      '=' : equalsClick,
      '%' : persentClick,
      '+-': invertClick
    }
    if (result[value]) {
      return result[value]()
    }else {
      return handleClickButton()
    }
  }

  return (
    <button data-testid='button' onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button