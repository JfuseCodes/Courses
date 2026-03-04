import React from 'react'
import '../styles/css/form-basics.css'


export default function FormBasics() {

    {/* 

        *** If using onSubmit on form instead of action & method = "post"

    const handleSubmit = event => {
        event.preventDefault() //stop page from refreshing
        const formEl = event.currentTarget // get access to form DOM node -> formEl = formElement
        const formData = new FormData(formEl) // get data from form
        
        const email = formData.get("email") // use name property to get that specific data (name is important in inputs)
        console.log(email)

        const password = formData.get("password")
        console.log(`password: ${password}`)

        formEl.reset()
    }
    
    */}


    // if using action on form & manual way

    // const signUp = formData => {

    //     const email = formData.get("email")
 

    //     const password = formData.get("password")
 
    //     const description = formData.get("description")
    //     const employmentStatus = formData.get("employmentStatus")
    //     const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    //     const favColor = formData.get("favColor")


    //     console.log(`
    //         email: ${email}, 
    //         password: ${password}, 
    //         description - ${description}
    //         employment status: ${employmentStatus}, 
    //         dietary restrictions: ${dietaryRestrictions}
    //         favorite color: ${favColor}
    //         `
            
    //     )


    // } 

    // capture form data no matter how short or long
    const signUp = formData => {
        // console.log(Object.fromEntries(formData))
        const data = Object.fromEntries(formData)
        // console.log(data)
        
        const dietaryData = formData.getAll("dietaryRestrictions")
        // console.log(dietaryData);

        const allData = {
            ...data,
            dietaryData
        }

        console.log(allData);
    }


    return (
        <section className='fb--container'>
            <h1>Signup form</h1>

            <form className='fb--form-container' action={signUp}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder='john.doe@schmoe.com' defaultValue="john.doe@schmoe.com"/>
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" defaultValue="password123"/>
                <br />

                <label htmlFor="description" >Description:</label>
                <textarea name="description" id="description" defaultValue={"this is a description"} placeholder={'this is a description'}></textarea> 

                <br />


                <fieldset className='fb--fieldset-container'>
                    <legend>Employment Status:</legend>
                    <label><input type="radio" name="employmentStatus" id="employmentStatus" value='unemployed' />Unemployed</label>
                    <label><input type="radio" name="employmentStatus" id="employmentStatus" value='part time'/>Part Time</label>
                    <label><input type="radio" name="employmentStatus" id="employmentStatus" value='full time' defaultChecked={true}/>Full Time</label>
                </fieldset>
                <br />

                <fieldset className='fb--fieldset-container'>
                    <legend>Dietary Restrictions:</legend>
                    <label><input type="checkbox" name="dietaryRestrictions" id="dietaryRestrictions" value='kosher' />Kosher</label>
                    <label><input type="checkbox" name="dietaryRestrictions" id="dietaryRestrictions" value='vegan'/>Vegan</label>
                    <label><input type="checkbox" name="dietaryRestrictions" id="dietaryRestrictions" value='gluten-free' defaultChecked={true}/>Gluten-Free</label>
                </fieldset>
                <br />


                <label htmlFor="favColor">What is your favorite color?</label>
                <select id="favColor" name="favColor" defaultValue="blue" required>
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="indigo">indigo</option>
                    <option value="violet">violet</option>


                </select>

                <button className='fb--submit-button'>Submit</button>
            </form>
        </section>
    )
}