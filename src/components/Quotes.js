import React,{useState, useEffect} from 'react'

function Quotes() {
  
    const[quote,setQuote] = useState({});

    const getQuotes = async () => {
        const response = await fetch(
          "https://type.fit/api/quotes"
        );
        const data = await response.json();
        setQuote(data);
        console.log(data);
    
      };
      
    useEffect(() => {
       getQuotes()}, []);
   
    /*
       The undefined check? 

        (typeof quote.text != "undefined") ? (
          <div>say something</div>
          ) : ("")
       

 */

      

    return (
        <div>
        <button onClick={getQuotes}>Get Inspired</button>
          
        </div>
    )
}

export default Quotes;
