import globalAxios from "../config/axios-config";
import Course from "../models/course";

export const fetchCourses = async () => {
  try {
    return await globalAxios.get<Course[]>("/courses");
  } catch (err) {
    console.log(err);
  }
};

export const fetchInstructorById = async (id: string) => {
  try {
    return await globalAxios.get<Course>(`/courses/${id}`);
  } catch (err) {
    console.log(err);
  }
};
