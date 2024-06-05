import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { options } from './Data'

export const CompanyDetails = () => {

    const { id } = useParams();
    const option = options.find( opt => opt.id.toString() === id );
    

  return (
    <div>
        <div>{option.companyName}</div>
        <img src={option.img} />
        <div>{option.description}</div>

        <Link to="/">Go Back</Link>
    </div>
  )
}
