import React, { useState } from 'react';

const App = () => {
    const [advice, setAdvice] = useState('get advice')

    async function getAdvice() {
        // here we use the https://api.adviceslip.com/advice api to show data from an api
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        setAdvice(data.slip.advice)
    }


    return (
        <div style={{ textAlign: 'center', padding: '50px', border: '3px solid #322' }}>
            <h1>Get your Daily Advices : </h1>
            <p style={{ color: 'blue',margin:'50px', fontSize: '22px' }}>{advice}</p>
            <button
                style={{ border: '  solid 1px', cursor: 'pointer', backgroundColor: '#393', color: 'white', fontSize: '16px' }}
                onClick={getAdvice}>Get Advice</button>
        </div>
    );
}

export default App;
