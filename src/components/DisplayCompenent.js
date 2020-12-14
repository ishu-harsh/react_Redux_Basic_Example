import React from  'react'


const MovieDisplay = (props)=>{
    
    const renderMovies = ({dataList})=>{
        if(dataList){
            return dataList.map((item)=>{
                return(
                <div>{item.name}</div>
                )
            })
        }
    }
    
    return( 
        <div>
            {renderMovies(props)}
        </div>
    )
}  

export default MovieDisplay
