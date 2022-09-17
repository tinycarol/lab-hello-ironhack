import React from 'react'
import './Button.css'

const Button = ({ children, action }) => {

    return (
        <button class="Button">
            {children}
        </button>
    )
}

export default Button;