import React, { useMemo } from "react";
import DataTable from "../../../tables/DataTable";
import { approveTeacher, approveUser, getPendingTeacher } from "../../../infra";
import { FcApproval } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
const TeacherTable = () => {
  const notice = () => {
    toast.success("student approved succesfully", { autoClose: 2000 });
  };
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
        Header: "Contact Number",
        accessor: "userContactNumber",
      },
      {
        Header: "status",
        accessor: "userStatus",
      },
      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row: { original } }) => {
          return (
            <div className="space-x-3">
              <div
                onClick={() => {
                  console.log(original);
                  approveUser(original.userId).then((data) => {
                    notice();
                    window.location.reload();
                  });
                }}>
                <FcApproval className="w-5 h-5 cursor-pointer" />
              </div>
              {/* <div onClick={() => console.log("sa")}>
                <FcApproval className="w-5 h-5 text-red-400 hover:text-red-500" />
              </div> */}
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="max-w-full mx-auto px-4 py-4 sm:px-6 md:px-8 bg-white">
      <DataTable columns={columns} apiRequest={getPendingTeacher} />
    </div>
  );
};

export default TeacherTable;
