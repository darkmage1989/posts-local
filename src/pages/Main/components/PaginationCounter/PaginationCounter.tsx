import { ChangeEvent, useState } from "react";
import { Post } from "../../../../interfaces/dataInterface";
import Button from "../../../../components/Button/Button";

interface PaginationCounterProps {
  usersPerPage: number;
  setUsersPerPage: (i: number) => void;
  data: Array<Post>;
}

const PaginationCounter = ({
  usersPerPage,
  setUsersPerPage,
  data,
}: PaginationCounterProps) => {
  const [openModal, setOpenModal] = useState(false);
  function handleOpen() {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }
  function countChange(event: ChangeEvent<HTMLInputElement>) {
    const target = Number(event.target?.value);
    if (target <= data.length && target > 0) {
      setUsersPerPage(target);
      localStorage.setItem('usersPerPage', JSON.stringify(target))
    } else {
      setUsersPerPage(data.length);
      localStorage.setItem('usersPerPage', JSON.stringify(data.length))
    }
  }
  return (
    <div>
      {openModal ? (
        <Button text={"Скрыть"} onClickHandler={handleOpen} />
      ) : (
        <Button
          text={`сообщений на страницу ${usersPerPage} `}
          onClickHandler={handleOpen}
        />
      )}
      {openModal && (
        <div>
          <input type="number" onChange={countChange} />
        </div>
      )}
    </div>
  );
};

export default PaginationCounter;
