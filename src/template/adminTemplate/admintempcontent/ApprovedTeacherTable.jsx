import React, { useMemo } from "react";
import DataTable from "../../../tables/DataTable";
import { getApprovedTeacher } from "../../../infra";
import { FcApproval } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
const ApprovedTeacherTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Teacher Name",
        accessor: "userName",
      },
      {
        Header: "Email",
        accessor: "userEmail",
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
      <DataTable columns={columns} apiRequest={getApprovedTeacher} />
    </div>
  );
};

export default ApprovedTeacherTable;
