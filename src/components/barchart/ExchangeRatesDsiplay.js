import {Chart} from 'primereact/chart';
import { useEffect, useState } from 'react';
const ExchangeRatesDisplay = () => {
    const[rates,setRates] = useState({})
    const apiUrl = process.env.REACT_APP_API_URL
    const apiKey = process.env.REACT_APP_API_KEY
    const fetchRates = async() => {
        const res = await fetch(`${apiUrl}?app_id=${apiKey}`)
        const data = await res.json()
        setRates(data)
    }
    useEffect(()=>{
        fetchRates()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const rate = rates.rates
    const currencies = rate?Object.keys(rate):[]
    const exchangeRates = rate?Object.values(rate):[]
    const data = exchangeRates.slice(1,6);
    const labels = currencies.slice(1,6);
    
    
        const [basicData,setBasicData] = useState({
             labels,
            
            datasets: [
                {
                    label: 'exchange rates compared to USD',
                    backgroundColor: '#42A5F5',
                    data
                    
                },
    
            ]
        });
        useEffect(()=>{
            setBasicData((prevState)=>{
                return {...prevState,labels:labels,datasets:[ {
                    label: 'exchange rates compared to USD',
                    backgroundColor: '#42A5F5',
                    data
                    
                }]}
            })
                // eslint-disable-next-line react-hooks/exhaustive-deps
        },[rates])
        
        
        let basicOptions = {
            maintainAspectRatio:false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
        
    return (
        <div className="main">
            <h1>Exchange rates</h1>
            <h3>Last updated at {new Date().toLocaleTimeString()} </h3>
            <div className="bar-chart" style={{ width: 800 }}>
            <Chart type="bar" data={basicData}  />
            </div>
        </div>
    )
}
export default ExchangeRatesDisplay;