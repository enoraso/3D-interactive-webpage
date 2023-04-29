import { useEffect } from "react";
import { useState } from "react";

    fetch('http://localhost:3000/',{
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      
    })
    .catch(error => {
      console.error('Error:', error);
    });




const Paragraph = () => {
    const [posts, setPosts ] = useState({})
    useEffect(()=> {
        const getPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/');
                const data = await response.json();
                setPosts(data)
                console.log(posts)
            } catch(err){
                console.log(err)
            }
        }
    })
    
    


    return(
        <div className="h-[40vh] px-20 py-10" style={{backgroundColor:'white'}}>
            <div className= 'max-w-6xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-black'>
                sometext
            </h2>
            <p className="mt-5 text-black text-xl">
                some random text here
            </p>
            </div>
        </div>
    );
 }

 export default Paragraph;