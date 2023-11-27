import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../interfaces/dataInterface";
import { setFilteredData } from "../../redux/slices/postsDataSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const postsDataLocal: Array<Post> = useSelector(
    (state: any) => state.postsDataSlice.postsData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  function handelFilter(e: React.ChangeEvent<HTMLSelectElement>) {
      dispatch(setFilteredData(e.target.value));
  }
  return (
    <div>
      <select onChange={handelFilter} name="title">
        <option value="true">все посты</option>
        <option value="false">избранные</option>
      </select>
      <select onChange={handelFilter} name="name">
        <option value="all">Все</option>
        {Array.from(new Set(postsDataLocal?.map((item) => item.name))).map(
          (name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          )
        )}
      </select>
      <select name="favorite">
        <option value="false">все посты</option>
        <option value="true">избранные</option>
      </select>
    </div>
  );
};

export default Filters;
