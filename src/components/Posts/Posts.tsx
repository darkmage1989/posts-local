import { useState } from "react";
import { data } from "../../interfaces/dataInterface";
import { useGetPostsApiQuery } from "../../redux/apis/apis";
import PaginationComponent from "../Pagination/PaginationComponent";
import UserPost from "../UserPost/UserPost";
import style from './Posts.module.css'
const Posts = () => {
    const { data, error, isLoading } = useGetPostsApiQuery(null);
  const isEmptyList = !isLoading && !data;
  const [usersPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = currentPage * usersPerPage;
  const firstPage = lastPage - usersPerPage;
  if (isLoading) {
    return <span>Загрузка</span>;
  }

  if (error) {
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div>
          <div>An error has occurred:</div>
          <div>{message}</div>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  if (isEmptyList) {
    return <p>No users</p>;
  }
  const currentUser = data.slice(firstPage, lastPage)
  return <>
  <PaginationComponent currentPage={currentPage} paginate={setCurrentPage} usersPerPage={usersPerPage} userCount={data}/>
    <div className={style.user__box}>{currentUser.map ((userData:data)=> <UserPost id={userData.id} key={userData.id} title={userData.title} text={userData.body}/>)}</div>
  </> ;
}
 
export default Posts;