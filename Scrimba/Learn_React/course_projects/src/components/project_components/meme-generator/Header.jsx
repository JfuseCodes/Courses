import trollFace from '../../../assets/meme-generator/troll-face.png'
export default function Header(){
    return (
        <header className='mg--header-container'>
            <div className='mg--header-content-container'>
                <span className='mg--h-span'><img className='mg--h-img' src={trollFace}/></span><h3 className='mg--h-title'>Meme Generator</h3>
            </div>
        </header>
    )
}