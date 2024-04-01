import React, { useState, useEffect } from 'react';
import Message from './Message';
import ReactLoading from 'react-loading';



const App = () => {
    // State variable to hold the advice
    const [advice, setAdvice] = useState('get advice');
    const [count, setCount] = useState(0);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [loading, setLoading] = useState(false); // State to track loading status


    // Function to fetch advice from the API
    async function getAdvice() {
        try {
            // Fetching advice from the API
            const res = await fetch("https://api.adviceslip.com/advice");
            const data = await res.json();
            setAdvice(data.slip.advice);
            setCount((c) => c + 1);
            // Hide the button for 1500 milliseconds
            setButtonVisible(false);
            setLoading(true)
            setTimeout(() => {
                setButtonVisible(true);
                setLoading(false)
            }, 1500);
        } catch (error) {
            // Handling errors during fetching
            console.error('Error fetching advice:', error);
            // Setting advice to an error message
            setAdvice('Failed to fetch advice. Please try again later.');
        }
    }

 

    return (
        <div style={{ textAlign: 'center', padding: '50px', border: '3px solid #322' }}>
            <h1>Get your Daily Advices : </h1>
            <p style={{ color: 'blue', margin: '50px', fontSize: '22px' }}>{advice}</p>
            {
                loading && (

                    <div  style={{paddingBottom:'30px', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <ReactLoading  type="spin" color="#393" height={30} width={30} />
                    </div>
                )
            }
            
            {buttonVisible && (
                <button
                    style={{ border: '  solid 1px', cursor: 'pointer',
                        backgroundColor: '#393', color: 'white', fontSize: '16px' }}
                    onClick={getAdvice}>Get Advice</button>
            )}
            <Message count={count} />
        </div>
    );
}

export default App;
