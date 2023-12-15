import React, { useEffect } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectLoading, selectNews } from "../redux/selectors";
import { Oval } from "react-loader-spinner";

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  "https://5.imimg.com/data5/SELLER/Default/2021/10/NY/QS/FQ/44417685/token-security-software-service-500x500.jpg";

const News = ({ simplified }) => {
  let news = useSelector(selectNews);
  const isLoading = useSelector(selectLoading);

  return !isLoading ? (
    <div>
      <Row gutter={[24, 24]}>
        {news?.slice(0, simplified ? 6 : news.length).map((newsItem, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={newsItem.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {newsItem.title.split(" ").slice(0, 5).join(" ")}
                  </Title>
                  <img src={newsItem.thumbnail || demoImage} alt="news" />
                </div>
                <p>
                  {newsItem.description && newsItem.description.length > 100
                    ? `${newsItem.description.substring(0, 200)}...`
                    : newsItem.description}
                </p>
                <div className="provider-container">
                  <Text>
                    {moment(newsItem.createdAt).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <Oval />
  );
};

export default News;
