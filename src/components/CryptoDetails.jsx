import React from "react";
import { Oval } from "react-loader-spinner";
import millify from "millify";
import { Col, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  NumberOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCoin, selectLoading } from "../redux/selectors";

const { Title, Text } = Typography;

const CryptoDetails = () => {
  const coin = useSelector(selectCoin);
  const isLoading = useSelector(selectLoading);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coin?.price && millify(coin?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: coin?.rank, icon: <NumberOutlined /> },
    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coin?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: coin?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coin?.supply?.circulating && millify(coin?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return !isLoading ? (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {coin?.name} ({coin?.symbol}) Price
        </Title>
        <p>
          {coin?.name} live price in US dollars. View value statistics, market
          cap and dupply
        </p>
      </Col>

      {/* __________________________________ */}
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {coin?.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {coin?.name}, such as the
              base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>

        {/* __________________________________ */}
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Stats Info
            </Title>
            <p>
              An overview showing the statistics of {coin.name}, such as the
              base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        {/* __________________________________ */}
      </Col>
    </Col>
  ) : (
    <Oval />
  );
};

export default CryptoDetails;
