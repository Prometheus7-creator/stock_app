import { useState, useEffect, useRef } from "react";
import screen from '../assets/coins.jpg'




const NewsFeed = () =>{

    const [intervalId, setIntervalId] = useState();

    const [newsData, setNewsData] = useState([]);

    const feedcontainer = useRef();

    const loadData = () =>{
        const year = new Date().toLocaleDateString('en', {year: 'numeric'});
        const month = new Date().toLocaleDateString('en', {month: '2-digit'});
        const day = parseInt(new Date().toLocaleDateString('en', {day: '2-digit'}))-1;
        // console.log(year + month + day-10);

        fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&time_from=${year+month+day}T0000&limit=100&apikey=JAARZWOLNUOZ6AI6`, {method: 'GET'})
        .then(response => response.json())
        .then(response => {
            console.log(response['feed']);
            setNewsData(response['feed']);
            console.log(newsData)    
        })
    }

    useEffect(()=>{

            startScroll();
            loadData();
      
    }, [])


    const getDate = (dateStr) =>{
        const date = dateStr.split('T')[0];
        const d = new Date(`${date.slice(0,4)}-${date.slice(4,6)}-${date.slice(6,8)}`);
        return d.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
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
                            {getDate(news.time_published)}
                        </div>
                        <img src={news.banner_image || screen} alt={news.title}/>

                        <div className="caption">
                        <h2>{news.source}</h2>
                        <p>{news.title}</p>
                        </div>
                        <a href={news.url} target="_blank" rel="noreferrer" className="read-more">Read More</a>
                    </figure>
                </div>)
            }

        </div>
        </>
    );
}

export default NewsFeed;