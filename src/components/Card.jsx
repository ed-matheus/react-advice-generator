import './Card.css'
import {useState, useEffect} from 'react'

const Card = () => {
    const [advice, setAdvice] = useState('')
    const [adviceId, setAdviceId] = useState('')

    const getRandomAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                console.log(data.slip.advice)

                setAdvice(`"${data.slip.advice}"`)
                setAdviceId(`#${data.slip.id}`)
            })
    }  

    useEffect(() => {
        getRandomAdvice()
    }, []) // first call

    return (
        <div>
            <div className="container__card">
                <h5>ADVICE <span id='adviceNumber'>{adviceId}</span></h5>
                <span id='randomAdvice'>
                    {advice}
                </span>

                <img src="/images/pattern-divider-mobile.svg" alt="" />

                <button onClick={getRandomAdvice} className='adviceGenerateButton'>
                    <img src="/images/icon-dice.svg" alt="" width={28} />
                </button>
            </div>
        </div>
    )
}

export default Card