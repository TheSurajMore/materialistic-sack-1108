import React, { useEffect, useState } from "react";
import {GridItem, Grid, extendTheme} from '@chakra-ui/react'
import axios from "axios";
import Product from "./Product";

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

export default function Products () {

    const [data, setData] = useState([]);

    const getData = () =>{
        axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
          // handle success
          setData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
{/* <Grid templateColumns='repeat(4, 1fr)' gap={6}> */}
<Grid templateColumns={{ base:'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg:'repeat(3, 1fr)', xl:'repeat(4, 1fr)',
                         '2xl':'repeat(4, 1fr)' }} gap={6}>
    { data && data.map((el)=>(
          <GridItem key={el.id}>
            <Product image={el.image} title={el.title} rating_count={el.rating.count} rating_rate={el.rating.rate} price={el.price} 
              description={el.description} category={el.category} />
          </GridItem>
    ))
}
</Grid>
        </>
    )
}