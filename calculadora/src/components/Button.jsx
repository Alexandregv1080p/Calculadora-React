import React from "react";
import './Button.css'

export default params =>{ 
   
    return(
    <button 
        onClick={e => params.click && params.click(e.target.innerHTML)}
        className={
            `
            button
            ${params.operation ? 'operation' : ''}
            ${params.double ? 'double' : ''}
            ${params.triple ? 'triple' : ''}
            `
        }>
        {params.label}
    </button>
    )
}