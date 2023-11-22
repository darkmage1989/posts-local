import { Link } from "react-router-dom";
interface UserPostProps {
  id: number;
  title: string;
  text: string;
}

const UserPost = ({ title, text, id }: UserPostProps) => {
  return (
    <>
          <div>{text}</div>
         
    </>
  );
};

export default UserPost;
