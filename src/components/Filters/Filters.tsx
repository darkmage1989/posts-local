import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../interfaces/dataInterface";
import { setFilteredData, setSort } from "../../redux/slices/postsDataSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const postsDataLocal: Array<Post> = useSelector(
    (state: any) => state.postsDataSlice.postsData // НУЖНО ЗАТИПИЗИРОВАТЬ НЕ ЗАБЫТЬ!!!
  );
  function handelFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilteredData(e.target.value));
  }
  function handelSort(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setSort({name:e.target.name, value: e.target.value}))
  }
  return (
    <div>
      <label>
        сортировать по заголовку
        <select onChange={handelSort} name="title">
          <option value="min">А-Я</option>
          <option value="max">Я-А</option>
        </select>
      </label>
      <label>
        сортировать по id
        <select onChange={handelSort} name="id">
          <option value="min">по возростанию</option>
          <option value="max">по убыванию</option>
        </select>
      </label>
      <label>
        Фильтр по имени автора
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
      </label>
      <label>
        Сортировка, избранное
        <select onChange={handelSort} name="favorite">
          <option value="false">избранные в конце</option>
          <option value="true">сначала избранные</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
