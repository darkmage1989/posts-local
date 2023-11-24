import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../redux/store";
import { addAuthor, deletePost } from "../../../../redux/slices/postsDataSlice";
import { Comments, Users } from "../../../../interfaces/dataInterface";
import CommentIcon from "../../../../components/CommentIcon/CommentIcon";
import DeleteIcon from "../../../../components/DeleteIcon/DeleteIcon";
import EditIcon from "../../../../components/EditIcon/EditIcon";
import FavoriteIcon from "../../../../components/FavoriteIcon/FavoriteIcon";
import EditModal from "./Components/EditModal";
interface UserPostProps {
  title: string;
  body: string;
  userId: number;
  id: number;
  name: string
}
const UserPost = ({ title, body, userId, id, name }: UserPostProps) => {
  const [openModalComments, setOpenModalComments] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const dispatch = useDispatch();
  function handleOpenEdit() {
    openModalEdit ? setOpenModalEdit(false) : setOpenModalEdit(true);
  }
  function handleOpenComments() {
    openModalComments
      ? setOpenModalComments(false)
      : setOpenModalComments(true);
  }
  const userData: Array<Users> = useSelector(
    (state: any) => state.usersDataSlice.usersData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  const commentsData: Array<Comments> = useSelector(
    (state: any) => state.commentsDataSlice.commentsData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  const user = userData?.find((item) => item.id === userId)!;
  useEffect(() => {
    if (!name) {
      dispatch(addAuthor({id, name: user.name}))
    }
  }, [dispatch, id, user, name]);
  
  function handleDelete() {
    dispatch(deletePost(id));
  }

  const comments = commentsData
    ?.map((item) => {
      return item.postId === id ? item : null;
    })
    .filter(Boolean);
  return (
    <>
      <div>
        <div>
          <div>
            <h3>{title}</h3>
            <FavoriteIcon />
          </div>
          <h4>{name}</h4>
          <span>{body}</span>
          {openModalEdit && <EditModal setOpenModalEdit={setOpenModalEdit} userId={userId} id={id} title={title} name={name} body={body}/>}
        </div>
        <div>
          {openModalComments ? (
            <CommentIcon onClickHandler={handleOpenComments} />
          ) : (
            <CommentIcon onClickHandler={handleOpenComments} />
          )}
          <DeleteIcon onClickHandler={handleDelete} />

          <EditIcon onClickHandler={handleOpenEdit}/>
        </div>

        {openModalComments && (
          <div>
            {comments.map((item) => (
              <>
                <h4>{item?.name}</h4>
                <span>{item?.email}</span>
                <p>{item?.body}</p>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserPost;
