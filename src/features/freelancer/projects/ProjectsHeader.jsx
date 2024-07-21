import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  const sortOptions = [
    { value: "newest", label: "مرتب سازی (جدیدترین)" },
    { value: "earliest", label: "مرتب سازی (قدیمی‌ترین)" },
  ];

  const statusOptions = [
    { label: "همه", value: "ALL" },
    { label: "باز", value: "OPEN" },
    { label: "بسته", value: "CLOSED" },
  ];

  return (
    <div className="flex items-center justify-between mb-8">
      <h1>لیست پروژه‌های موجود</h1>
      <div className="flex items-center gap-x-8">
        <Filter options={statusOptions} filterField="status" />
        <FilterDropDown options={sortOptions} filterField="sort" />
        <FilterDropDown
          options={[
            { value: "ALL", label: "دسته‌بندی (همه)" },
            ...transformedCategories,
          ]}
          filterField="category"
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
