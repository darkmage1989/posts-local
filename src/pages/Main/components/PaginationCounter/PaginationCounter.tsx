import { ChangeEvent, useState } from "react";
import { data } from "../../../../interfaces/dataInterface";

interface PaginationCounterProps {
  usersPerPage: number;
  setUsersPerPage: (i: number) => void;
  data: Array<data>;
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
    const target = Number(event.target?.value)
    if (target <= data.length && target > 0) {
        setUsersPerPage(target)
    } else {
        setUsersPerPage(data.length)
    }
  }
  return (
    <div>
      <button onClick={handleOpen}>{openModal ? 
        'Скрыть'
      : `posts per page ${usersPerPage}`}</button>
      {openModal ? (
        <div>
          <input type="number" onInput={countChange} />
        </div>
      ) : null}
    </div>
  );
};

export default PaginationCounter;
