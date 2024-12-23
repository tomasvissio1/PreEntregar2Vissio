import React from 'react'
import imgCarro from '../img/carro.png'
import './cartwidget.css'

function CartWidget() {
  return (
    <div className='contenedor'>
      <img src={imgCarro} alt="" />
    </div>
  )
}

export default CartWidget