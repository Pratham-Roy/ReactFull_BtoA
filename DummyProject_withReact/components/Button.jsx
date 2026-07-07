import React from 'react'

function Button({ handlebuttonclick, buttonimage, buttontext }) {
    return (
        <>
            <button onClick={handlebuttonclick}>
                <img src={buttonimage} alt={buttontext} style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
            </button>
        </>
    )
}

export default Button;