import React, { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { New } from "../../redux/types";
import { fetchNews } from "../../redux/actions/newsAction";
import { RootState } from "../../redux/store";

import News from "../../Components/News";
import Field from "../../UI/Field";
import Button from "../../UI/Button";
import CreateNews from "../../Components/CreateNews";

import "./index.scss";

const NewsPage: FC = React.memo(() => {
  const dispatch = useDispatch();
  const { news } = useSelector((state: RootState) => state.news);
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filterNews = useMemo(() => {
    return news.filter(
      (item: New) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [news, search]);

  const newsApproved = useMemo(() => {
    return news.filter((item: New) => item.approved);
  }, [news]);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="news">
      <div className="news__search">
        <Field
          className="news__input"
          onChange={onChangeSearch}
          value={search}
          placeholder="Поиск..."
        />
      </div>
      <div className="news__create">
        <h4>{search ? `Поиск по запросу: ${search}` : "Все Новости"}</h4>
        {isAuth && (
          <Button className="news__create-post" onClick={handleShowForm}>
            Новый пост
          </Button>
        )}
      </div>
      {showForm && <CreateNews setShowForm={setShowForm} />}
      <div className="news__items">
        {isAuth
          ? filterNews &&
            filterNews.map((n: New, index: number) => (
              <News key={`${n.id}__${index}`} news={n} />
            ))
          : newsApproved.map((n: New, index: number) => (
              <News key={`${n.id}__${index}`} news={n} />
            ))}
      </div>
    </div>
  );
});

NewsPage.displayName = "NewsPage";

export default NewsPage;
