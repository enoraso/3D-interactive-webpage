import { useEffect } from "react";
import { useState } from "react";






const Paragraph = () => {
const [ title , setTitle ] = useState(null);
const [ text , setText ] = useState(null);
const [ loading , setLoading ] = useState(false);
const [ error , setError ] = useState(null);

useEffect(()=>{
    fetch('http://103.45.246.151/dev')
    .then(res => res.json())
    .then(
        (result)=>{
            setLoading(true);
            setTitle(result[0]);
            setText(result[2]);
        },
        (error) => {
            setLoading(true);
            setError(error);
            console.error(error);
        }
    )
},[]);


    return(
        <div id="work" className="h-[40vh] px-10 py-10 bg-primary" >
            <div className='w-100 h-[10px] green-horizontal-gradient'/>
            <div className= 'py-10 max-w-6xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-white'>
                {title}
            </h2>
            <p className="mt-5 text-white text-xl">
                {text}
            </p>
            </div>
        </div>
    );
 }

 export default Paragraph;