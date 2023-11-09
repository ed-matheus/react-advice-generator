import './Card.css'

const Card = () => {
    const getRandomAdvice = () => {
        // console.log('opa')
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json)
        .then(data => {
            console.log(data)
        })
    }  

    return (
        <div>
            <div className="container__card">
                <h5>ADVICE <span id='adviceNumber'>#117</span></h5>
                <span id='randomAdvice'>
                    "It is easy to sit up and take notice, what's
                    difficult is getting up and taking action"
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