import Posts from "../../components/Posts/Posts";
import style from "./Main.module.css"
const Main = () => {
  return ( <main className={style.posts__box}>
    <h1 style={{marginTop: '60px'}}>Posts Page</h1>
    <Posts/>
    </main> );
}
export default Main;