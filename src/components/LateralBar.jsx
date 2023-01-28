import { useState } from "react"
import { Link } from 'react-scroll'
import "../styles/LateralBar.css"

export function LateralBarContact({ link, image, name, visibility, descargar}){
    const [imageHover, setImageHover] = useState(image)
    const line = visibility ? "lb-line" : "lb-line-hidden"

    const mouseHover = () => setImageHover(`${image}Hover`)
    const mouseOut = () => setImageHover(`${image}`)

    return ( 
        <div className="lb-container">
            {descargar ? 
                <div className="lb-img-container">
                    <a className="lb-img" href={link} target="_blank" download onMouseEnter={mouseHover} onMouseLeave={mouseOut}>
                        <img src={`../svg/${imageHover}.svg`}/>
                    </a>
                    <span>{name}</span>
                </div>
                :
                <div className="lb-img-container">
                    <a className="lb-img" href={link} target="_blank" onMouseEnter={mouseHover} onMouseLeave={mouseOut}>
                        <img src={`../svg/${imageHover}.svg`}/>
                    </a>
                    <span>{name}</span>
                </div>
            }
            <div className={line}></div>
        </div>
    )
}

export function LateralBarNavigator({ link, image, visibility }){
    const [imageHover, setImageHover] = useState(image)
    const line = visibility ? "lb-line" : "lb-line-hidden"

    const mouseHover = () => setImageHover(`${image}Hover`)
    const mouseOut = () => setImageHover(`${image}`)
    
    return (
        <div className="lb-container">
                <Link className="lb-img" to={link} smooth={true} offset={0} duration={500} onMouseEnter={mouseHover} onMouseLeave={mouseOut}>
                    <img src={`../svg/${imageHover}.svg`}/>
                </Link>
            <div className={line}></div>
        </div>
    )
}