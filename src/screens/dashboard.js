import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/actions/action';
import CryptoComponent from '../components/cryptoComponent';


const Dashboard = () => {
    const appStoredData = useSelector((state) => state.data.data);

    const dispatch = useDispatch();

    //cf267766-30be-4ebd-8ba6-60b7464d1311
    const fetchData = async () => {
        let params = {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
        };

        const jsonData = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
            },
            qs: params
        })
        dispatch(setData(jsonData.data));
        console.log("Response<><>", jsonData.data);
    }

    useEffect(() => {
        fetchData()
        console.log("appStoredData", appStoredData.data);
    }, []);


    return (
        <div>
            <p>Number of cryptocurrencless show below, in order of rank: 100</p>
            {appStoredData.data &&
                <CryptoComponent />

            }
        </div>
    )
}

export default Dashboard;