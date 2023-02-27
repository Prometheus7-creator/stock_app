import { useState, useEffect, useRef } from "react";
import screen from '../assets/coins.jpg'




const NewsFeed = () =>{

    const [intervalId, setIntervalId] = useState();

    const [newsData, setNewsData] = useState([]);

    const feedcontainer = useRef();

    const loadData = () =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '189a1b6639msheebed2040ce3668p15e63bjsn9c53a08c4837',
                'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
            }
        };

        fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news', options)
        .then(response => response.json())
        .then(response => {
            setNewsData(response);
            console.log(newsData)    
        })
    }

    useEffect(()=>{

            startScroll();
            loadData();
      
    }, [])


    const getDate = (dateStr) =>{
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
    }

    const startScroll = () => {
        setIntervalId(setInterval(()=>{
            feedcontainer.current.scrollLeft += 1;
        }, 15))
    }

    const stopScroll = () => {
        clearInterval(intervalId);
    }


    
    return(
        <>
        <div
         className="news-container"
         ref={feedcontainer}
         onMouseOver={stopScroll}
         onMouseLeave={startScroll}
        >
            {
                newsData.map((news, index) => <div key={index} className="news-card">
                    <figure>
                        <div className="date">
                            {getDate(news.pubDate)}
                        </div>
                        <img src={screen} alt={news.title}/>

                        <div className="caption">
                        <h2>{news.source}</h2>
                        <p>{news.title}</p>
                        </div>
                        <a href={news.link} target="_blank" rel="noreferrer" className="read-more">Read More</a>
                    </figure>
                </div>)
            }

        </div>
        </>
    );
}

export default NewsFeed;