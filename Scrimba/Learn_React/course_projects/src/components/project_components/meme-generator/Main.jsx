import React from 'react'
import { randomNumber } from '../component-library/general_components'

export default function Main(){

    const [allMemes, setAllMemes] = React.useState([])
    const [meme, setMeme] = React.useState({
        topText:  "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg",
    })

    const handleChange = event => {
        const {value, name} = event.currentTarget
        console.log(value)

        setMeme( prevValue => ({
            ...prevValue, 
            [name]: value
        }))
    }

    const getNewMeme = () => {
        console.log('get a random meme!')
        // console.log(allMemes[randomNumber(1,100)])
        setMeme( prevValue => ({
            ...prevValue,
            imageUrl: allMemes[randomNumber(0,allMemes.length - 1)].url
        }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(results => {
                // console.log(results.data.memes)
                const data = results.data.memes
                setAllMemes(data)
                console.log(allMemes)
            })
    }, [])

    return (
        <main className='mg--main-container'>
            <div className='mg--content-container'>
                <section className='mg--form-container'>
                    <div className='mg--form'>
                        <div className='mg--f-input-container fs-14'>
                            <label>Top text
                                <input 
                                    type='text' 
                                    placeholder={meme.topText} 
                                    name="topText" 
                                    value={meme.topText}
                                    onChange={handleChange}/>
                            </label>
                        
                            <label className='ml-33'>Bottom text
                                <input 
                                    type="text" 
                                    name="bottomText" 
                                    value={meme.bottomText}
                                    placeholder={meme.bottomText} 
                                    onChange={handleChange}/>
                            </label>
                        </div>
                        
                        <div className='mg--f-button'>
                            <button className='fs-16' onClick={getNewMeme}>Get a new meme image 🖼 </button>
                        </div>
                    </div>
                </section>
                
                <section className='mg--meme-container'>
                    <div className='mg--meme-content'>
                        <img src={meme.imageUrl} />
                        <span className="top">{meme.topText}</span>
                        <span className="bottom">{meme.bottomText}</span>
                    </div>
                </section>
            </div>
        </main>
    )
}