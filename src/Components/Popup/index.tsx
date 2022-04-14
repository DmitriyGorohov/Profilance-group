import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  setError,
  setSuccess,
  signInAdmin,
  signInUser,
} from "../../redux/actions/authAction";
import { RootState } from "../../redux/store";
import { WebsiteUrls } from "../../types";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../UI/Button";
import FormAuth from "../FormAuth";

import "./index.scss";

const Popup: FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state: RootState) => state.auth);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userForm, setUserForm] = useState(false);
  const [adminForm, setAdminForm] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "" || password.trim() !== "") {
      adminForm && dispatch(signInAdmin({ name, password }));
      userForm && dispatch(signInUser({ name, password }));
      navigate(WebsiteUrls.HOME);
    } else {
      dispatch(setError("Поля пустые"));
    }
  };

  const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const selectUserForm = () => {
    setUserForm(true);
  };

  const selectAdminForm = () => {
    setAdminForm(true);
  };

  const closeForm = () => {
    dispatch(setError(""));
    setAdminForm(false);
    setUserForm(false);
  };

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
        dispatch(setSuccess(""));
      }
    };
  }, [error, dispatch]);

  return (
    <div className="popup">
      <h3>Войти как {(userForm && "User") || (adminForm && "Admin")}</h3>
      {!adminForm && !userForm && (
        <div className="popup__group">
          <Button className="popup__group-btn" onClick={selectAdminForm}>
            Admin
          </Button>
          <Button className="popup__group-btn" onClick={selectUserForm}>
            User
          </Button>
        </div>
      )}
      {adminForm && (
        <FormAuth
          handleSubmit={handleSubmit}
          name={name}
          password={password}
          nameChange={nameChange}
          passwordChange={passwordChange}
          error={error}
          closeForm={closeForm}
        />
      )}
      {userForm && (
        <FormAuth
          handleSubmit={handleSubmit}
          name={name}
          password={password}
          nameChange={nameChange}
          passwordChange={passwordChange}
          error={error}
          closeForm={closeForm}
        />
      )}
    </div>
  );
});

Popup.displayName = "Popup";

export default Popup;
