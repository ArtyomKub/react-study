import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is App component
            <Rating/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
        </div>
    )
}

export default App;
