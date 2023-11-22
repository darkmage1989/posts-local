import { useEffect, useState } from "react";
import { data } from "../../../../interfaces/dataInterface";
import { useGetPostsApiQuery, useGetUsersApiQuery } from "../../../../redux/apis/apis";
import PaginationComponent from "../Pagination/PaginationComponent";
import UserPost from "../UserPost/UserPost";
import style from "./Posts.module.css";
import PaginationCounter from "../PaginationCounter/PaginationCounter";
import { useDispatch } from "react-redux";
import { setPostsData } from "../../../../redux/slices/postsDataSlice";
import { setUsersData } from "../../../../redux/slices/usersDataSlice";
const Posts = () => {
  const { data: postsData, error: postsError, isLoading: postsLoading } = useGetPostsApiQuery(null);
  const { data: usersData, error: usersError, isLoading: usersLoading } = useGetUsersApiQuery(null);
  
  const isEmptyList = !postsLoading && !postsData;
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = currentPage * usersPerPage;
  const firstPage = lastPage - usersPerPage;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPostsData(postsData))
  dispatch(setUsersData(usersData))
  });
  if (postsLoading || usersLoading) {
    return <span>Загрузка</span>;
  }

  if (postsError || usersError) {
    return <div>Error occurred</div>;
  }
  if (isEmptyList) {
    return <p>No users</p>;
  }
  const currentUser = postsData.slice(firstPage, lastPage);
  
  return (
    <>
    <PaginationCounter usersPerPage={usersPerPage} setUsersPerPage={setUsersPerPage} data={postsData}/>
      <PaginationComponent
        currentPage={currentPage}
        setUsersPerPage={setUsersPerPage}
        paginate={setCurrentPage}
        usersPerPage={usersPerPage}
        userCount={postsData}
      />
      <div className={style.user__box}>
        {currentUser.map((user:data) => (
          <UserPost key={user.id} title={user.title} body={user.body} id={user.id} userId={user.userId}/>
        ))}
      </div>
    </>
  );
};

export default Posts;
