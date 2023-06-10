import React, { useMemo } from "react";
import DataTable from "../../../tables/DataTable";
import { getApprovedStudent } from "../../../infra";

const ApprovedStudentTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Student Name",
        accessor: "userName",
      },
      {
        Header: "Email",
        accessor: "userEmail",
      },

      {
        Header: "Gender",
        accessor: "userGender",
      },
      {
        Header: "status",
        accessor: "userStatus",
      },
    ],
    []
  );

  return (
    <div className="max-w-full mx-auto px-4 py-4 sm:px-6 md:px-8 bg-white">
      <DataTable columns={columns} apiRequest={getApprovedStudent} />
    </div>
  );
};

export default ApprovedStudentTable;
