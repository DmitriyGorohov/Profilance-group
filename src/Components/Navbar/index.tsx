import React, { FC } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { RootState } from "../../redux/store";
import { SvgId, WebsiteUrls } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { setVisiblePopup, setSignOut } from "../../redux/actions/authAction";

import Svg from "../../assets/svg/Svg";
import Button from "../../UI/Button";

import "./index.scss";

const Navbar: FC = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const visiblePopup = () => {
    dispatch(setVisiblePopup(true));
  };

  const signOut = () => {
    dispatch(setSignOut());
    navigate("/news");
  };

  return (
    <div className="navbar">
      <div className="navbar__link">
        <Link to="/">
          <Svg id={SvgId.LOGO} />
        </Link>
        <NavLink to={WebsiteUrls.NEWS}>Новости</NavLink>
      </div>
      <div className="navbar__signup">
        {!isAuth && (
          <Button className="navbar__signup-btn" onClick={visiblePopup}>
            Войти
          </Button>
        )}
        {isAuth && (
          <Button className="navbar__signup-btn" onClick={signOut}>
            Выйти
          </Button>
        )}
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
