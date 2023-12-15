import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useSelector } from "react-redux";
import { selectLoading, selectStats } from "../redux/selectors";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

const Homepage = () => {
  const stats = useSelector(selectStats);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row>
        <Col span={12}>
          {!isLoading ? (
            <>
              <Statistic
                title="Total Cryptocurrencies"
                value={millify(stats.totalCoins)}
              />
              <Statistic
                title="Total Exhanges"
                value={millify(stats.totalExchanges)}
              />
              <Statistic
                title="Total Market Cap"
                value={millify(stats.totalMarketCap)}
              />
              <Statistic
                title="Total 24h Volume"
                value={millify(stats.total24hVolume)}
              />
              <Statistic
                title="Total Markets"
                value={millify(stats.totalMarkets)}
              />
            </>
          ) : (
            <Oval color="rgb(0, 21, 41)" />
          )}
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified={true} />
    </>
  );
};
export default Homepage;
