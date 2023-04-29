import { useEffect } from "react";
import { useState } from "react";





const Paragraph = () => {
    const [posts, setPosts ] = useState({})
    useEffect(()=> {
        const getPosts = async () => {
            try {
                const response = await fetch('http://http://103.45.246.151/dev');
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
