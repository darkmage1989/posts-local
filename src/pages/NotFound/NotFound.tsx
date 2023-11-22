import style from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className={style.not__found__box}>
      <button onClick={()=> navigate('/')}>Вернуться на главную</button>{' '}
    </div>
  );
};

export default NotFound;
