import React,{useState, useEffect} from 'react'

function Quotes() {
  
    const [quote,setQuote] = useState({});
    const [quoteIndex, setQuoteIndex] = useState (0)

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


   const shuffleHandler = () =>{
      setQuoteIndex(Math.floor(Math.random()*1643));
      };
      

    return (
        <div className = "quoteComponentContainer">
        <button onClick={shuffleHandler} className="submitButtonStyle"> Another Quote?</button>
        <div className="quoteContainer">{quote[quoteIndex] ? (
          <p>"{quote[quoteIndex].text}"</p>
         
          ) : ""}</div>
       </div>
    )
}

export default Quotes;
