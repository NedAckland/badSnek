import React, { useEffect, useState, useRef } from 'react';
import "../styles/Grid.css"

import Box from '../components/Box';


function Grid({setIsGameOver}) {
    const gridSize = 800;
    const [position, setPosition] = useState(340)
    const [snake, setSnake] = useState([0])
    const [leng, setLeng] = useState(0)
    const [food, setFood] = useState(50)
    const [foodType, setFoodType] = useState(0)
    let handle;
    const controlMovement = (direction, currentPos) => {
   
        let m = new Map()
        m.set("ArrowDown", () => setPosition(pos => pos + gridSize/20 ))
        m.set("ArrowUp",  () =>  setPosition(pos => pos - gridSize/20 ))
        m.set("ArrowRight", () => setPosition(pos => pos + 1 ))
        m.set("ArrowLeft", () => setPosition(pos =>pos - 1))
        // m.set("ArrowLeft", () => moveSnake(direction, ))

        // let coords = m.get(direction)
        // if(!coords) return
        clearTimeout(handle)
        // coords(currentPos)
        mve(m, direction)
    } 

    const mve = (m, direction) =>  {
        handle = setTimeout(() => {
            let coords = m.get(direction)
            coords(position)
            mve(m, direction)
        }, 150 )
    }

    const handleKeyDown = (e) => {
        controlMovement(e.key, position)
    };


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [])
    
    useEffect(() => {
        if(position < 0) {
            setPosition(pos => pos + gridSize)
        }
        if(position > gridSize-1) {
            setPosition(pos => pos - gridSize)
        }
        let s = [...snake, position]
        setSnake(s)
        if(snake.slice(snake.length-leng, -1).includes(position)) {
            setLeng(0)
            setSnake([])
            console.log('ded');
            setIsGameOver(true)
        }
        if(position === food) {
            setLeng((leng) => leng+1)
            setFood(Math.round(Math.random()* gridSize))
            setFoodType(Math.floor(Math.random() * 10))
        }
    }, [position])
    const arr = new Array(gridSize).fill('')


    return (
        <div className='grid'>
         {arr.map((a, i) => {
            return (
                <div key={i}>
                    <Box a={i} head={position} body={snake.slice(snake.length-leng, -1)} food={food} foodType={foodType} key={i} />
                </div>
            )
            })
        }
        </div>
    )
}

export default Grid;