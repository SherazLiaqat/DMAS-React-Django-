import React,{useState} from 'react'
import Hero from './Hero'
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
const Blog = () => {
const [quotes,setquotes]=useState([]);
const [textvalue,settextvalue]=useState("");
const [open,setopen]=useState(false);
   
const onChangeHandler=(e)=>{
       settextvalue(e,textvalue);
   }
   const onsubmitHandler=(e,textvalue)=>{
    
    if(textvalue===""){

    }else{
const newquote={
    id:Math.floor(Math.random()*1000),
    deleted:false,
    description:textvalue
};
const newquotes=[...quotes,newquotes];
setquotes(newquotes);
    }
};
    return (
        <div>
           <h1>This is blog page</h1> 
           <input
          className=''
          type='text'
          name='username'
          placeholder='Add quotes'
          onChange={onChangeHandler}
          />
          <button className='SignupButton' onSubmit={onsubmitHandler}>Add Quote</button>
          <Container>
             {quotes.map((quote)=>(

             

<Paper>
    <p>{quote.description}</p>
</Paper>
))}
 </Container>
        </div>
    )
}

export default Blog

        
        
       