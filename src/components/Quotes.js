import React,{useState, useEffect} from 'react'

function Quotes() {
  
    const [quote,setQuote] = useState({});

    const getQuotes = async () => {
        const response = await fetch(
          "https://type.fit/api/quotes"
        );
        const data = await response.json();
        setQuote(data);
        console.log(data);
        
      };
      
    useEffect(() => { // Since you call the api only once, there is no need to have it in a different method
       getQuotes()}, []);

      let randomQuoteIndex = Math.floor(Math.random()*1643);
  
      

    return (
        <div>
        <button onClick={getQuotes}> Another Quote?</button>
        <div>{quote[randomQuoteIndex] ? (
          <p>{quote[randomQuoteIndex].text}</p>
          ) : ""}</div>
       </div>
    )
}

export default Quotes;
