import * as XLSX from "xlsx";

export const excelExport = (data, type) => {
  const wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, "Sheet");
  const a = XLSX.writeFile(wb, type);
  return 1;
};
