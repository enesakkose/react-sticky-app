import React from 'react'
import Card from '../components/Card'
import { fetchProductList } from '../Api'
import { useInfiniteQuery } from 'react-query'
import './Products.scss'

function Products() {

    const { 
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
      status,
     } = useInfiniteQuery('products',
     fetchProductList,{
       getNextPageParam: (lastOffset, allOffset) => {
         const morePagesExist = lastOffset?.length === 20
         if(!morePagesExist){
           return;
         }
         return allOffset.length + 190;
       }
     })
    
    
    
     if (status === "loading") return 'Loading...'
   
     if (status === "error") return 'An error has occurred: ' + error.message
  
     console.log("data",data)

  return (
    <div className='products'>
      
      {data.pages.map((group, i)=>(
        <React.Fragment key={i}>
          {group.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </React.Fragment>
      ))}
      <div>
         <button
           onClick={() => fetchNextPage()}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </button>
       </div>
       <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>  
        
    </div>
  )
}

export default Products