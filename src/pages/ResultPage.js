import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../components/Navbar";

const ResultPage = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState({});

    useEffect(()=>{
        const symbol = searchParams.get('name');

        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.bse&apikey=JAARZWOLNUOZ6AI6`, {method: 'GET'})
        .then(response => response.json())
        .then(response => {
            response = response['Global Quote'];
            setData(response);
        })
        .catch(err => console.error(err));

    }, [])

    return (<div className="result-container">
        <NavBar/>
        <h2 style={{marginTop: '4rem'}}>{("01. symbol" in data)?data['01. symbol']: null}</h2>
        <div className="result-box">
        {Object.keys(data).map(key=><div className="result-row">
            <div>{key}</div>
            <div>{data[key]}</div>
        </div>)}
        </div>
    </div>)
}

export default ResultPage;