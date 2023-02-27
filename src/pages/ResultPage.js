import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BarChart from "../components/BarChart";
import NavBar from "../components/Navbar";

const ResultPage = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState({});
    const [userData, setUserData] = useState({
        labels: ["Open", "High", "Low", "Price"],
        datasets: [{
            label: "Loss/Gain",
            data: []
        }]
    });

    useEffect(()=>{
        const symbol = searchParams.get('name');

        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.bse&apikey=JAARZWOLNUOZ6AI6`, {method: 'GET'})
        .then(response => response.json())
        .then(response => {
            response = response['Global Quote'];
            setData(response);
            // console.log(response)
            setUserData({
                labels: ["Open", "High", "Low", "Price"],
                datasets: [{
                    label: "Loss/Gain",
                    data: [response['02. open'], response['03. high'], response['04. low'], response['05. price']],
                    backgroundColor: ["rgba(75, 192, 192, 1)",
                        "#f3ba2f"
                    ]
                }]
            })
        })
        .catch(err => console.error(err));

    }, [])

    return (<div className="result-container">
        <NavBar/>
        <h2 style={{marginTop: '4rem'}}>{("01. symbol" in data)?data['01. symbol']: null}</h2>
        <div className="bar-chart">
        <BarChart chartData={userData}/>
        </div>
    </div>)
}

export default ResultPage;