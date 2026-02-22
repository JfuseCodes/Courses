import React from 'react'
export default function Form(props) {
    
    
    const testClick = () => {
        console.log('button clicked')
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient);
    }


    return (
        <form className='cc--form' onSubmit={handleSubmit}>
            <input 
                aria-label="Add ingredient"
                className='cc--form-input'
                placeholder="e.g. oregano"
                type="text" 
                name="ingredient"
                 />
            <button className='cc--form-button fs-14 fw-500'
                    onClick={testClick}
            >Add ingredient</button>
        </form>
    )
}