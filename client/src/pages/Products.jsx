import React from 'react'
import Card from '../components/Card'
import { useQuery } from 'react-query'

function Products() {

    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://localhost:4000/product').then(res =>
      res.json()
    )
  )
  if (isLoading) return 'Loading...'
   
     if (error) return 'An error has occurred: ' + error.message
  
     console.log("data", data)

  return (
    <div>
        <Card />
    </div>
  )
}

export default Products