import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

interface UserPostProps {
  title: string;
  body: string;
  id: number;
  userId: number;
}
const UserPost = ({title, body, id, userId}: UserPostProps) => {
  const userData = useSelector(
    (state: any) => state.usersDataSlice.usersData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  console.log(userData);
  return (
    <>
      <div>
        <h3>{title}</h3>
        <h4>{userData[userId].name}</h4>
        <span>{body}</span>
      </div>
    </>
  );
};

export default UserPost;
