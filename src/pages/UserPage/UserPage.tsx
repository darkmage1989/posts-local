import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../interfaces/dataInterface";
import { useGetPostsApiQuery } from "../../redux/apis/dataApi";

const UserPage = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPostsApiQuery(null);
  const params = useParams();

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
  const userPage: Post = data.find(
    (user: Post) => user.id === Number(params.id)
  );
  return <div>{userPage.id}</div>;
};

export default UserPage;
