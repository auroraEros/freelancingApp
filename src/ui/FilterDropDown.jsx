import { useSearchParams } from 'react-router-dom';
import Select from "./Select";

function FilterDropDown({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return <Select value={value} onChange={handleChange} options={options} />;
}

export default FilterDropDown;
