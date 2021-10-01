import { useSelector } from "react-redux";


const CryptoComponent = () => {
    const appStoredData = useSelector((state) => state.data.data);
    console.log("data<><", appStoredData);

    const rec = (item) => {
        return (
            <div className="record">
                <div className="recordHeader">
                    
                    <div className="headerName">
                        Bitcoin
                    </div>
                    <p> rank: {item.cmc_rank}</p>
                    <p> symbol: BTC</p>
                    <p> circulating supply: {item.circulating_supply}</p>
                    <p> total supply: {item.total_supply}</p>
                    <p> max supply: {item.max_supply}</p>
                    <p> last updated: {new Date(item.last_updated).getTime()}</p>

                    <br />
                    <br />

                    <div className="headerName">
                        quotes in USD:
                    </div>
                    <p> price: {item.quote.USD.price}</p>
                    <p> percent change 1hr: {item.quote.USD.percent_change_1h}</p>
                    <p> percent change 7d: {item.quote.USD.percent_change_7d}</p>
                    <p> percent change 24hr: {item.quote.USD.percent_change_24h}</p>
                    <p> volume 24hr: {item.quote.USD.volume_24h}</p>
                    <p>-------</p>
                </div>
            </div>
        );
    };

    return (
        appStoredData.data.map(rec)
    )
}

export default CryptoComponent;