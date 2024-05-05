import React from 'react'
import {Link } from 'react-router-dom'

export function Card({vehicleNumber}) {
  const images = [
    "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  const selectRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  }

  const image = selectRandomImage();

  const challan = vehicleNumber.fineImposed;
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{vehicleNumber.vehicleNumber}</h1>
        <p className="mt-3 text-sm text-gray-600">
          Current Challan : {challan}
        </p>
        <Link to='/payment'>
        <button
          type="button"
          className="mt-4  bg-black px-2.5 py-1  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full text-md rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
          disabled = {challan === 0 ? true : false}
        >
          Proceed to Pay
        </button>
        </Link>
      </div>
    </div>
  )
}
