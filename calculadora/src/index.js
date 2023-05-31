import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Calculator from './main/Calculator'


const el = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator></Calculator>
    </div>
    ,
    el)