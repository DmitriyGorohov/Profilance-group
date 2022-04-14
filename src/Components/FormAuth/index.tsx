import React, { ChangeEvent, FC, FormEvent } from "react";

import Form from "../../UI/Form";
import Field from "../../UI/Field";
import Button from "../../UI/Button";

import "./index.scss";

interface FormAuthProps {
  handleSubmit: (e: FormEvent) => void;
  name: string;
  nameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  error: string;
  closeForm: () => void;
}

const FormAuth: FC<FormAuthProps> = ({
  handleSubmit,
  name,
  password,
  error,
  nameChange,
  passwordChange,
  closeForm,
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit} className="auth">
        <p className="auth__back" onClick={closeForm}>
          Назад
        </p>
        <Field
          value={name}
          onChange={nameChange}
          className="auth__field"
          type="text"
          placeholder="Введите имя..."
        />
        <Field
          value={password}
          onChange={passwordChange}
          className="auth__field"
          type="password"
          placeholder="Введите пароль..."
        />
        {error && <p className="auth__error">{error}</p>}
        <Button className="auth__btn" onClick={handleSubmit}>
          Войти
        </Button>
      </Form>
    </>
  );
};

export default FormAuth;
