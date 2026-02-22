import React from 'react'

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


    // if using action on form

    const signUp = formData => {

        const email = formData.get("email")
        console.log(email)

        const password = formData.get("password")
        console.log(password)

    } 


    return (
        <section>
            <h1>Signup form</h1>

            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder='john.doe@schmoe.com' />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" />
                
                <br />

                <button>Submit</button>
            </form>
        </section>
    )
}