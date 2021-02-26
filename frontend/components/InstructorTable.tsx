import React from "react";
import Datatable from "react-bs-datatable";
import Instructor from "../models/instructor";

interface InstructorTableProps {
  instructors: Instructor[];
}

export default function InstructorTable({ instructors }: InstructorTableProps) {
  const header = [
    {
      title: "Instructor code",
      prop: "id",
      sortable: true,
      filterable: true,
    },
    { title: "First Name", prop: "firstName", sortable: true },
    { title: "Last Name", prop: "lastName" },
    { title: "Department code", prop: "depCode" },
    { title: "Faculty code", prop: "facCode" },
  ];

  return (
    <Datatable
      tableHeaders={header}
      tableBody={instructors}
      rowsPerPage={15}
      rowsPerPageOption={[5, 10, 15, 20]}
      initialSort={{ prop: "id", isAscending: true }}
    />
  );
}
