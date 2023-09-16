import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails(props) {
    const [book,setBook] = useState(null)
    const [count,setCount] = useState(0)
    const {bookId} = useParams()
    console.log(bookId)
    console.log(props.books)

    function findBook(){
        const foundBook = props.books.find((oneBook)=>{
            return oneBook.id === bookId
        })
        console.log(foundBook)
        setBook(foundBook)
    }
   


    useEffect(()=>{
        setTimeout(() => {
            findBook()
        }, 2000);
    },[]) 

    if(book){
        return (
            <div>
                <button onClick={()=>{setCount(count+1)}}>+</button>
                <h1>Title:{book.title} </h1>
                {count}
                <p>Author: {book.author}</p>
        
        
            </div>
          )
    }
    else{
        return(
        <h2>...Loading</h2>
        )
    }
 
}
/* 
Router.get('/books/:id',(req,res)=>{
    const {id} = req.params
    req.params.id
}) */
export default BookDetails