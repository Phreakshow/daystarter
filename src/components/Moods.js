import React from 'react'

function Moods({ mood,setMood }) {

    const currentMoodHandler= (e) =>{
        setMood(
             mood = e.target.value
        );
        console.log(mood)
    }

    
    const moodAnnouncer = (mood) => {
            switch(mood){
                case "lazy":
                    return "Don't worry. We all have Lazy days!";
                case "chill":
                    return "Don't forget to Netflix & Chill!";
                case "meh":
                    return "Say Meh and go through the day!";
                case "motivated":
                    return "Motivated, huh? Lets get it done!";
                case "excited":
                    return "A big day? We're excited too!"
                default:
                    return "";
            }
    }

    return (
        <div>
        <div>PICK A MOOD</div>
        <div className="buttonsContainer">
            <button className="buttonLazy" type="button" value="lazy" onClick={currentMoodHandler}>Lazy</button>
            <button className="buttonChill" type="button" value="chill" onClick={currentMoodHandler}>Chill</button>
            <button className="buttonMeh" type="button" value="meh" onClick={currentMoodHandler}>Meh</button>
            <button className="buttonMotivated" type="button" value="motivated" onClick={currentMoodHandler}>Motivated</button>
            <button className="buttonExcited" type="button" value="excited" onClick={currentMoodHandler}>Excited</button>
        </div>
        {moodAnnouncer(mood)}
        </div>
    )
}

export default Moods
