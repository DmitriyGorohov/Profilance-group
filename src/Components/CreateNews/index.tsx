import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../UI/Form";
import Field from "../../UI/Field";
import Button from "../../UI/Button";

import { addNews } from "../../redux/actions/newsAction";
import { setError } from "../../redux/actions/authAction";
import { RootState } from "../../redux/store";

import "./index.scss";

interface CreateNewsProps {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

const CreateNews: FC<CreateNewsProps> = React.memo(({ setShowForm }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const descriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmin = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "" || description.trim() !== "") {
      dispatch(addNews(title, description));
      setShowForm(false);
    } else {
      dispatch(setError("Одно из полей должно быть заполнено !!!"));
    }
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
    };
  }, [dispatch, error]);

  return (
    <Form className="create" onSubmit={handleSubmin}>
      <h4>Новый пост</h4>
      <Field
        className="create__input"
        placeholder="Название"
        value={title}
        onChange={titleChange}
      />
      <Field
        className="create__input"
        placeholder="Описание"
        value={description}
        onChange={descriptionChange}
      />
      {error && <p className="create__error">{error}</p>}
      <Button className="create__btn" onClick={handleSubmin}>
        Отправить
      </Button>
      <hr />
    </Form>
  );
});

CreateNews.displayName = "CreateNews";

export default CreateNews;
