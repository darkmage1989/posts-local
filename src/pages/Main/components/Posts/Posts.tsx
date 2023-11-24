import { useState, useEffect } from "react";
import { Post } from "../../../../interfaces/dataInterface";
import {
  useGetCommentsApiQuery,
  useGetPostsApiQuery,
  useGetUsersApiQuery,
} from "../../../../redux/apis/dataApi";
import PaginationComponent from "../Pagination/PaginationComponent";
import UserPost from "../UserPost/UserPost";
import style from "./Posts.module.css";
import PaginationCounter from "../PaginationCounter/PaginationCounter";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  setFavorite,
  setPostsData,
} from "../../../../redux/slices/postsDataSlice";
import { setUsersData } from "../../../../redux/slices/usersDataSlice";
import { setCommentsData } from "../../../../redux/slices/commentsDataSlice";
import Confirm from "../../../../components/Confirm/Confirm";
import FavoriteIcon from "../../../../components/FavoriteIcon/FavoriteIcon";
import DeleteIcon from "../../../../components/DeleteIcon/DeleteIcon";
const Posts = () => {
  const {
    data: postsData,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsApiQuery(null) as {
    data: Array<Post>;
    error: unknown;
    isLoading: boolean;
  };
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersApiQuery(null);
  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsLoading,
  } = useGetCommentsApiQuery(null);
  const isEmptyList = !postsLoading && !postsData;
  const [usersPerPage, setUsersPerPage] = useState(
    Number(localStorage.getItem("usersPerPage") ?? 10)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
  const [typeOfConfirm, setTypeOfConfirm] = useState("");
  const lastPage = currentPage * usersPerPage;
  const firstPage = lastPage - usersPerPage;
  const dispatch = useDispatch();
  const postsDataLocal: Array<Post> = useSelector(
    (state: any) => state.postsDataSlice.postsData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  useEffect(() => {
    dispatch(setPostsData(postsData));
    dispatch(setUsersData(usersData));
    dispatch(setCommentsData(commentsData));
  }, [
    postsLoading,
    usersLoading,
    commentsLoading,
    dispatch,
    postsData,
    usersData,
    commentsData,
  ]);

  if (postsLoading || usersLoading || commentsLoading) {
    return <span>Загрузка</span>;
  }

  if (postsError || usersError || commentsError) {
    return <div>Error occurred</div>;
  }
  if (isEmptyList) {
    return <p>No users</p>;
  }
  const currentPost: Array<Post> = postsDataLocal?.slice(firstPage, lastPage);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const postId = parseInt(event.target.id);
    if (event.target.checked) {
      setSelectedPosts((prevSelectedPosts) => [...prevSelectedPosts, postId]);
    } else {
      setSelectedPosts((prevSelectedPosts) =>
        prevSelectedPosts.filter((id) => id !== postId)
      );
    }
  };
  function openConfirmeDelete() {
    setTypeOfConfirm("delete");
  }
  function openConfirmFavorite() {
    setTypeOfConfirm("favorite");
  }
  function deleteChecked() {
    selectedPosts.forEach((item) => {
      dispatch(deletePost(item));
    });
    setTypeOfConfirm("");
  }
  function cancelChecked() {
    setTypeOfConfirm("");
  }
  function checkedFavorite() {
    selectedPosts.forEach((item) => {
      dispatch(setFavorite({ id: item, favorite: true }));
    });
    setTypeOfConfirm("");
    setSelectedPosts([]);
  }
  return (
    <>
      <PaginationCounter
        usersPerPage={usersPerPage}
        setUsersPerPage={setUsersPerPage}
        data={postsDataLocal}
      />
      <PaginationComponent
        currentPage={currentPage}
        paginate={setCurrentPage}
        usersPerPage={usersPerPage}
        userCount={postsDataLocal}
      />
      {selectedPosts.length !== 0 && (
        <div style={{display:'flex', textAlign:'center'}}>
          <div>
            <label style={{ display: "block" }}>Добавить в избранное</label>
            <FavoriteIcon
              fill={"#f8f806"}
              onClickHandler={openConfirmFavorite}
            />
          </div>
          <div>
            <label style={{ display: "block" }}>Удалить выделенное</label>
            <DeleteIcon onClickHandler={openConfirmeDelete} />
          </div>

          {typeOfConfirm && (
            <div>
              {typeOfConfirm === "delete" && (
                <Confirm
                  handleConfirm={deleteChecked}
                  handleCancell={cancelChecked}
                />
              )}
              {typeOfConfirm === "favorite" && (
                <Confirm
                  handleConfirm={checkedFavorite}
                  handleCancell={cancelChecked}
                />
              )}
            </div>
          )}
        </div>
      )}
      <div className={style.user__box}>
        {currentPost?.map((post: Post) => (
          <div style={{ display: "flex" }}>
            <input
              id={String(post.id)}
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={selectedPosts.includes(post.id)}
            ></input>
            <UserPost
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              name={post.name}
              favorite={post.favorite}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
