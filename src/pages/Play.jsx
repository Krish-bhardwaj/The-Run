import React , {useEffect}from 'react'
import { Redirect, useNavigate } from 'react-router-dom'
import Game from '../Game';

const Play = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // navigate('/finish')
    }, [])
    
  return (
    <Game/>
    
  )
}

export default Play