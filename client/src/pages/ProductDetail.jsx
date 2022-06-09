import React from 'react'
import {useParams} from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchProduct } from '../Api'
import Button from '../components/Button'
import ImageGallery from 'react-image-gallery'
import './ProductDetail.scss'


function ProductDetail() {

  const { id } = useParams()
  const { isLoading, isError, data } = useQuery(["product", id], () => 
    fetchProduct(id)
  )

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Error</div>
  }



  const images = data.images.map((item) => (
    { original : item}
  ))

  return (
    <div className='product-detail'>
      <Button>
        Add to basket
      </Button>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="product-gallery">
      <ImageGallery items={images}/>
      </div>

    </div>
  )
}

export default ProductDetail