import React from 'react'
// import Form from "./Form"


export default function Main () {

    const randomNumInt = (max) => Math.floor(Math.random() * max)

    const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])
    

    const ingredientList = ingredients.map( ingredient => {
        return <li key={randomNumInt(100000)}>{ingredient}</li>
    })

    const testClick = () => {
        console.log('button clicked')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient")
        setIngredients( prevIngredient => [...prevIngredient, newIngredient])
    }

    return (
        <main className='cc--main-container'>
            <div className='cc--main-content'>
                <form className='cc--form' onSubmit={handleSubmit}>
                    <input 
                    aria-label="Add ingredient"
                    className='cc--form-input'
                    placeholder="e.g. oregano"
                    type="text" 
                    name="ingredient"
                    />
                    <button className='cc--form-button fs-14 fw-500'onClick={testClick}>Add ingredient</button>
                </form>

                <ul className='cc--ingredient-list'>
                    {ingredientList}
                </ul>
            </div>
        </main>
    )
}