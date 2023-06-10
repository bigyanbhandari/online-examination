import React, { useMemo } from "react";
import DataTable from "../../../tables/DataTable";
import { getPendingStudent, approveUser } from "../../../infra";
import { FcApproval } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";

const StudentTable = () => {
  const notice = () => {
    toast.success("student approved succesfully");
  };
  const toastMessage = localStorage.getItem("toastMessage");
  if (toastMessage) {
    toast.success(toastMessage, { position: "top-right", autoClose: 2000 });
    localStorage.removeItem("toastMessage");
  }
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
                  approveUser(original.userId).then((data) => {
                    localStorage.setItem(
                      "toastMessage",
                      "Student approved succesfully"
                    );
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
      <DataTable columns={columns} apiRequest={getPendingStudent} />
    </div>
  );
};

export default StudentTable;
