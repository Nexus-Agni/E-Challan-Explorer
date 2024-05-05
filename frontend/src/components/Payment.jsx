import React from 'react'
import QR from '../assets/payment_QR.jpg'

function Payment() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <img src={QR} alt="qr" className='h-[50rem] w-[40rem]' />
    </div>
  )
}

export default Payment