import { useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "../../interfaces/dataInterface";

const Filters = () => {
  const [filter, setFilter] = useState("");
  const postsDataLocal: Array<Post> = useSelector(
    (state: any) => state.postsDataSlice.postsData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  return (
    <div>
      <select name="title">
      <option value="true">все посты</option>
        <option value="false">избранные</option>
      </select>
      <select name="name">
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
