import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { New } from "../../redux/types";
import { SvgId } from "../../types";
import { RootState } from "../../redux/store";
import { approvedNews, removeNews } from "../../redux/actions/newsAction";

import Svg from "../../assets/svg/Svg";
import Button from "../../UI/Button";

import "./index.scss";

interface NewsProps {
  news: New;
}

const News: FC<NewsProps> = React.memo(({ news }) => {
  const dispatch = useDispatch();
  const { isAuth, admin } = useSelector((state: RootState) => state.auth);

  const handleClick = () => {
    dispatch(removeNews(news.id));
  };

  const handleApproved = () => {
    dispatch(approvedNews(news.id));
  };

  return (
    <div className="item">
      <div className="item__approved">
        <p className="item__title">{news.title}</p>
        {isAuth && admin && (
          <div className="item__group">
            <Button className="item__group-btn" onClick={handleApproved}>
              Одобрить {news.approved && <Svg id={SvgId.OK} />}
            </Button>
            <Button className="item__group-btn" onClick={handleClick}>
              Удалить
            </Button>
          </div>
        )}
      </div>
      <p className="item__description">{news.description}</p>
      <p className="item__time">{news.time}</p>
    </div>
  );
});

News.displayName = "News";

export default News;
