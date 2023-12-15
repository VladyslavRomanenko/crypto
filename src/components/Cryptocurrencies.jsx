import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectCoins, selectLoading } from "../redux/selectors";
import { Oval } from "react-loader-spinner";
import { getCoinThunk, getCoinsThunk } from "../redux/operations";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getCoinsThunk(count));
    // dispatch(getNewsThunk());
  }, [dispatch]);

  let coins = useSelector(selectCoins);

  if (coins) {
    coins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      {!isLoading ? (
        <>
          {!simplified && (
            <div className="search-crypto">
              <Input
                placeholder="Serach Cryptocurrency"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          )}
          <Row gutter={[32, 32]} className="crypto-card-container">
            {coins.map((coin) => (
              <Col
                key={coin.uuid}
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
              >
                <Link
                  to={`/crypto/${coin.uuid}`}
                  onClick={() => dispatch(getCoinThunk(coin.uuid))}
                >
                  <Card
                    title={`${coin.rank}. ${coin.name}`}
                    extra={<img className="crypto-image" src={coin.iconUrl} />}
                    hoverable
                  >
                    <p>Price: {millify(coin.price)}</p>
                    <p>Market Cap: {millify(coin.marketCap)}</p>
                    <p>Daily Change: {millify(coin.change)}</p>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Oval color="rgb(0, 21, 41)" />
      )}
    </>
  );
};

export default Cryptocurrencies;
