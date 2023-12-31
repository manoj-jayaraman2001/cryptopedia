import { useGetCryptosQuery } from "../services/cryptoApi";
import StatisticCard from "../components/StatisticCard";
import { BsGraphUpArrow, BsCurrencyExchange } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Tb24Hours } from "react-icons/tb";
import { GiWorld, GiMoneyStack } from "react-icons/gi";
import millify from "millify";
import { Cryptocurrencies, News } from "../Pages";
import Loading from '../components/Loading';
import FallbackError from "../components/FallbackError";
import "../styles/home.css";

const Home = () => {
  const { data, isFetching, error} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loading />;
  if (error) return <FallbackError/>;
  return (
    <div className="home-container">
      <h2>Global Crypto Stats</h2>
      <div className="card-grid">
        <StatisticCard
          title="Total Sales"
          value={globalStats.total}
          icon={<BsGraphUpArrow className="icon" />}
        />
        <StatisticCard
          title="Total Exchanges"
          value={globalStats.totalExchanges}
          icon={<BsCurrencyExchange className="icon" />}
        />
        <StatisticCard
          title="Total Market Cap ($)"
          value={millify(globalStats.totalMarketCap)}
          icon={<GiMoneyStack className="icon" />}
        />
        <StatisticCard
          title="Total 24h Volume ($)"
          value={millify(globalStats.total24hVolume)}
          icon={<Tb24Hours className="icon" />}
        />
        <StatisticCard
          title="Total Markets"
          value={globalStats.totalMarkets}
          icon={<GiWorld className="icon" />}
        />
      </div>
      <div className="home-heading-container">
        <h2>Top 10 Crypto Currencies in the world</h2>
        <Link to="/cryptocurrencies">View More</Link>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <h2>Latest Crypto News</h2>
        <Link to="/news">View More</Link>
      </div>
      <News simplified />
    </div>
  );
};

export default Home;

