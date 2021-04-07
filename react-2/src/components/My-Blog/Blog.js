import React,{useState} from 'react'
import Hero from './Hero'

const Blog = () => {

    const openSearch = () => {
        setSearch(true);
    }
    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }
    return (
        <div>
           <h1>This is blog page</h1> 
           <div >
            <form onSubmit={submitSearch}>
                <input type="text"  placeholder="Search" />
                <img onClick={openSearch} className="searchIcon"  alt="Search" />
            </form>
            <div className='container1'>
                <h1>This is 1 div</h1>
            </div>
            <div className='container2'>
                <h1>This is 2 div</h1>
            </div>
        </div>
       
           <Hero/>
        </div>
    )
}

export default Blog

        
        
       