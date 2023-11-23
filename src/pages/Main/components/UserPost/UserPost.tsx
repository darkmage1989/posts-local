import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { RootState } from "../../../../redux/store";
import { deletePost } from "../../../../redux/slices/postsDataSlice";
import { Comments, Users } from "../../../../interfaces/dataInterface";

interface UserPostProps {
  title: string;
  body: string;
  userId: number;
  id: number;
}
const UserPost = ({ title, body, userId, id }: UserPostProps) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  function handleOpen() {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }
  const userData: Array<Users> = useSelector(
    (state: any) => state.usersDataSlice.usersData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  const commentsData: Array<Comments> = useSelector(
    (state: any) => state.commentsDataSlice.commentsData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );

  function handleDelete() {
    dispatch(deletePost(id));
  }
  const user = userData?.find((item) => item.id === userId);
  const comments = commentsData?.map((item) => {
    return item.postId === id ? item : null;
  }).filter(Boolean);
  return (
    <>
      <div>
        <div>
          <h3>{title}</h3>
          <h4>{user?.name}</h4>
          <span>{body}</span>
        </div>
        {openModal ? (
          <Button text={"Скрыть"} onClickHandler={handleOpen} />
        ) : (
          <Button text={`Комментарий `} onClickHandler={handleOpen} />
        )}
        <Button text={"УДалить"} onClickHandler={handleDelete} />
        {openModal && <div>
          {comments.map((item)=> (
            <>
            <h4>{item?.name}</h4>
            <span>{item?.email}</span>
            <p>{item?.body}</p>
            </>
          ))}
          </div>}
      </div>
    </>
  );
};

export default UserPost;
