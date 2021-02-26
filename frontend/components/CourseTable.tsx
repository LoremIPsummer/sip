import React from "react";
import Datatable from "react-bs-datatable";
import Course from "../models/course";

interface CourseTableProps {
  courses: Course[];
}

export default function CourseTable({ courses }: CourseTableProps) {
  const header = [
    {
      title: "Course code",
      prop: "code",
      sortable: true,
      filterable: true,
    },
    { title: "Course Title", prop: "title", sortable: true },
    { title: "Department code", prop: "depCode" },
    { title: "Instructor code", prop: "insId" },
    { title: "Faculty code", prop: "facCode" },
  ];

  return (
    <Datatable
      tableHeaders={header}
      tableBody={courses}
      rowsPerPage={15}
      rowsPerPageOption={[5, 10, 15, 20]}
      initialSort={{ prop: "code", isAscending: true }}
    />
  );
}
