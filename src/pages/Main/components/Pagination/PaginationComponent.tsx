import { Post } from "../../../../interfaces/dataInterface";
import style from './PaginationComponent.module.css'

interface PaginationComponentProps {
  userCount: Array<Post>;
  usersPerPage: number;
  paginate: (i: number) => void;
  currentPage: number;
}
const PaginationComponent = ({
  userCount,
  usersPerPage,
  paginate,
  currentPage,
}: PaginationComponentProps) => {
 const pageNumbers = []
 for (let i = 1; i<= Math.ceil(userCount.length/usersPerPage); i++ )
 pageNumbers.push(i)
  return (
    <div className={style.pagination__box}>
      {pageNumbers.map((item)=> (<button key={item} onClick={()=> paginate(item)}>{item}</button>))}
      <br />
    </div>
  );
};

export default PaginationComponent;