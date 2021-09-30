import React from 'react';
import './App.css';

function App() {
    const colors = ['#0066CC','#00CC66','#6600CC','#FF9933','#66FF66', '#FF3333','#FFFF33', '#FFFF99']
    const newArr = []
    const numOfDiv = 500

    const squareHandlerOn = (e:React.MouseEvent<HTMLDivElement>) => {
        let color = colors[Math.floor(Math.random()*colors.length)]
        e.currentTarget.style.backgroundColor = `${color}`
        e.currentTarget.style.boxShadow = `0 0 2px ${color}, , 0 0 10px ${color}`
    }
    const squareHandlerLeave = (e:React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = ''
        e.currentTarget.style.boxShadow = `0 0 2px #000`
    }
    for(let i = 0; i < numOfDiv;i++){
        newArr.push(<div onMouseLeave={squareHandlerLeave} onMouseOver={squareHandlerOn} className={'square'}/>)
    }
    return (
        <div className="App">
            <div className={'container'}>

                {newArr.map(el=><div>{el}</div>)}
            </div>
        </div>
    );
}

export default App;
