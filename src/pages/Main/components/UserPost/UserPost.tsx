import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { RootState } from "../../../../redux/store";
import { deletePost } from "../../../../redux/slices/postsDataSlice";

interface UserPostProps {
  title: string;
  body: string;
  userId: number;
  id: number;
}
const UserPost = ({ title, body, userId, id }: UserPostProps) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch()
  function handleOpen() {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }
  const userData = useSelector(
    (state: any) => state.usersDataSlice.usersData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  const commentsData = useSelector(
    (state: any) => state.commentsDataSlice.commentsData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  
  function handleDelete() {
    dispatch(deletePost(id))
  }
  return (
    <>
      <div>
        <div>
          <h3>{title}</h3>
          {/* <h4>{userData && userData[userId - 1].name}</h4> */}
          <span>{body}</span>
        </div>
        {openModal ? (
          <Button text={"Скрыть"} onClickHandler={handleOpen} />
        ) : (
          <Button text={`Комментарий `} onClickHandler={handleOpen} />
        )}
        <Button text={'УДалить'} onClickHandler={handleDelete}/>
        {openModal &&
          commentsData.map((comment: any) => (
            <div>
              <h4>{comment.name}</h4>
              <p>{comment.email}</p>
              <p>{comment.body}</p> 
            </div>
          ))}
      </div>
    </>
  );
};

export default UserPost;
