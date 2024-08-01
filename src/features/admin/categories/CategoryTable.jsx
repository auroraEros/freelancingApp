import useCategories from "../../../hooks/useCategories";
import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import CategoryRow from "./CategoryRow";

function CategoryTable() {
  const { isLoading, rawCategories } = useCategories();

  if (isLoading) return <Loader />;

  if (!rawCategories.length) return <Empty resourceName="دسته‌بندی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {rawCategories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CategoryTable;
