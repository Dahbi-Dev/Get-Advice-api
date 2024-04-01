import React, { useState, useEffect } from 'react';
import Message from './Message';

const App = () => {
    // State variable to hold the advice
    const [advice, setAdvice] = useState('get advice');
    const [count, setCount] = useState(0);
    const [buttonVisible, setButtonVisible] = useState(true);

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
            setTimeout(() => {
                setButtonVisible(true);
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
