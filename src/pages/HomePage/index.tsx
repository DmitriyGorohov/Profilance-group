import React, { FC } from "react";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import "./index.scss";

const HomePage: FC = React.memo(() => {
  const { isAuth, admin, user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="home">
      {!isAuth ? (
        <h1>Привет гость!!</h1>
      ) : (
        <>
          {admin && <h1>Привет {`${admin?.name}`}</h1>}
          {user && <h1>Привет {`${user?.name}`}</h1>}
        </>
      )}
    </div>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
