import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CurrencyCard from "../components/CurrencyCard";
import SearchField from "../components/SearchField";
import NoResultsFound from "../components/NoResults";
import "../styles/cryptocurrencies.css";
import Loading from "../components/Loading";
import FallbackError from '../components/FallbackError';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching, error } = useGetCryptosQuery(count);
  const [cryptoCoins, setcryptoCoins] = useState(data?.data?.coins);
  const [searchCoin, setSearchCoin] = useState("");
  const navigate = useNavigate();

  // navigate to coin details
  useEffect(() => {
    const filteredResults = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    );
    setcryptoCoins(filteredResults);
  }, [data, searchCoin]);

  const NoResultComponent = () => {
    if (isFetching) return <Loading />;
    if (error) return <FallbackError />;
    if (cryptoCoins?.length === 0) return <NoResultsFound />;
    return <Loading />;
  };

  return (
    <div className="crypto-container">
      {!simplified && (
        <div className="search-box">
          <SearchField
            onChange={(value) => {
              setSearchCoin(value);
            }}
          />
        </div>
      )}
      {cryptoCoins?.length > 0 ? (
        <div className="coin-grid">
          {cryptoCoins?.map((currency) => {
            return (
              <div onClick={()=>{navigate(`/cryptocurrencies/${currency.uuid}`)}} key={currency.uuid}>
                <CurrencyCard
                  id={currency.rank}
                  name={currency.name}
                  imgUrl={currency.iconUrl}
                  price={currency.price}
                  marketCap={currency.marketCap}
                  dailyChange={currency.change}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-result">
          <NoResultComponent />
        </div>
      )}
    </div>
  );
};

export default Cryptocurrencies;
