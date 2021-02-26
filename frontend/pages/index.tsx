import Head from "next/head";
import React from "react";
import { Col, Row } from "react-bootstrap";
import CourseTable from "../components/CourseTable";
import InstructorTable from "../components/InstructorTable";
import Course from "../models/course";
import Instructor from "../models/instructor";
import { fetchCourses } from "../services/courseService";
import { fetchInstructors } from "../services/instructorService";
import styles from "../styles/Home.module.scss";

interface DataProps {
  instructors: Instructor[];
  courses: Course[];
}

export default function Home({ instructors, courses }: DataProps) {
  return (
    <Row>
      <Col xs='12' lg='8'>
        <InstructorTable instructors={instructors} />
      </Col>
      <Col xs='12' lg='8'>
        <CourseTable courses={courses} />
      </Col>
    </Row>
  );
}

export async function getStaticProps() {
  const res = await fetchInstructors();
  const { data: instructors } = res;

  const res2 = await fetchCourses();
  const { data: courses } = res2;

  return {
    props: {
      instructors,
      courses,
    },
  };
}
