import { useState } from "react";
import Button from "../../../../../components/Button/Button";

interface EditModalProps {
  id: number;
  title: string;
  name?: string;
  body: string;
  setOpenModalEdit: (i: boolean) => void;
}

const EditModal = ({
  id,
  title,
  name,
  body,
  setOpenModalEdit,
}: EditModalProps) => {
  const [editTitle, setEditTitle] = useState(title);
  const [editName, setEditName] = useState(name);
  const [editBody, setEditBody] = useState(body);
  function CanelEdit() {
    setEditTitle(title);
    setEditName(name);
    setEditBody(body);
  }
  function ConfirmEdit() {
    setOpenModalEdit(false);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Режим редактирования: </span>
      <label>
        Изменить Заголовок:
        <textarea
          onChange={(e) => setEditTitle(e.target.value)}
          rows={5}
          cols={33}
          value={editTitle}
        ></textarea>
      </label>
      <label>
        Изменить Имя пользователя:
        <textarea
          onChange={(e) => setEditName(e.target.value)}
          rows={2}
          cols={23}
          value={editName}
        ></textarea>
      </label>
      <label>
        Изменить текст сообщения:
        <textarea
          onChange={(e) => setEditBody(e.target.value)}
          rows={10}
          cols={33}
          value={editBody}
        ></textarea>
      </label>
      <div>
        <Button text={"Отменить изменения"} onClickHandler={CanelEdit} />
        <Button text={"Подтвердить изменения"} onClickHandler={ConfirmEdit} />
      </div>
    </div>
  );
};

export default EditModal;
