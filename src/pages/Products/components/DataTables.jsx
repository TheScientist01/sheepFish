import DataTable from "react-data-table-component";
import { customStyles } from "../../../constants/datatables";

const DataTables = ({ data, columns, onRowClick }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles("light")}
      highlightOnHover={true}
      pagination={true}
      striped={false}
      onRowClicked={onRowClick}
    />
  );
};

export default DataTables;