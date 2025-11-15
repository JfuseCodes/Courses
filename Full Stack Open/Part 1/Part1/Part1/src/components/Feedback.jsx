import { useState } from "react"
const FeedbackButton = ({text, clickCounter, count, averageCalc, average}) => {

    const handleClicker = () => {
        setTimeout(() => clickCounter(count + 1))
        
        text == "good" ? averageCalc(average + 1) : 
        text == "neutral" ? averageCalc(average + 0) :
        text == 'bad' ? averageCalc(average - 1) : console.log('?')
    }

    return (
        <button onClick={handleClicker}>{text}</button>
    )
}

const StatisticLine = ({text, value}) => {

    return (
        <tr>
            <td>{text}:</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad, average}) => {
    const total = bad + neutral + good
    
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>statistics</th>
                    </tr>
                    <StatisticLine text={"good"} value={good} />
                    <StatisticLine text={"neutral"} value={neutral} />
                    <StatisticLine text={"bad"} value={bad} />
                    <StatisticLine text={"all"} value={total} />
                    <StatisticLine text={"average"} value={average/3} />
                    <StatisticLine text={"positive"} value={`${(good/total) * 100}%`} />
                </tbody>
            </table>
        </div>
    ) 
}

const Feedback = () => {

    const [ bad, setBad] = useState(0)
    const [ neutral, setNeutral]  = useState(0)
    const [ good, setGood]  = useState(0)
    const [ average, setAverage] = useState(0)
    
    
    return( (bad + neutral + good) == 0 ? 
    <div>
        <u><h1>UniCafe</h1></u>
        <h3>Give Feedback</h3>
        <FeedbackButton text={"good"} clickCounter={setGood} count={good} averageCalc={setAverage} average={average}/>
        <FeedbackButton text={"neutral"} clickCounter ={setNeutral} count={neutral} averageCalc={setAverage} average={average}/>
        <FeedbackButton text={"bad"} clickCounter = {setBad} count={bad} averageCalc={setAverage} average={average}/>
        <h3>Statistics</h3>
        <p>No feedback given</p>
    </div>
        
        :
        
    <div>
        <u><h1>UniCafe</h1></u>
        <h3>Give Feedback</h3>
        <FeedbackButton text={"good"} clickCounter={setGood} count={good} averageCalc={setAverage} average={average}/>
        <FeedbackButton text={"neutral"} clickCounter ={setNeutral} count={neutral} averageCalc={setAverage} average={average}/>
        <FeedbackButton text={"bad"} clickCounter = {setBad} count={bad} averageCalc={setAverage} average={average}/>
        <Statistics good={good} bad = {bad} neutral={neutral} average={average}/>
    </div>
    )
}

export {Feedback}