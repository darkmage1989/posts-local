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
import { setPostsData } from "../../../../redux/slices/postsDataSlice";
import { setUsersData } from "../../../../redux/slices/usersDataSlice";
import { setCommentsData } from "../../../../redux/slices/commentsDataSlice";
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
  }, [postsLoading, usersLoading, commentsLoading, dispatch, postsData, usersData, commentsData]);

  console.log(postsDataLocal);
  if (postsLoading || usersLoading || commentsLoading) {
    return <span>Загрузка</span>;
  }

  if (postsError || usersError || commentsError) {
    return <div>Error occurred</div>;
  }
  if (isEmptyList) {
    return <p>No users</p>;
  }
  const currentPost: any = postsDataLocal.slice(firstPage, lastPage);
  console.log(postsDataLocal);
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
      <div className={style.user__box}>
        {currentPost.map((post: Post) => (
          <UserPost
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
