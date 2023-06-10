import React, { useMemo } from "react";
import { viewResult } from "../../infra";
import DataTable from "../../tables/DataTable";

const Marks = () => {
  const columns = useMemo(
    () => [
      {
        Header:"Student Name",
        accessor:"studentName"
      },
      {
        Header: "Course Name",
        accessor: "courseName",
      },
      {
        Header: "Exam Title",
        accessor: "examTitle",
      },

      {
        Header: "Marks Obtained",
        accessor: "marksObtained",
      },
      {
        Header: "Percentage",
        accessor: "percentage",
      },
      {
        Header: "Result Status",
        accessor: "resultStatus",
      },
      {
        Header:"Exam Date",
        accessor:"examConductedDate",
      },
    ],
    []
  );

  return (
    <div className="max-w-full mx-auto px-4 py-4 sm:px-6 md:px-8 bg-white">
      <DataTable columns={columns} apiRequest={viewResult} />
    </div>
  );
};

export default Marks;
