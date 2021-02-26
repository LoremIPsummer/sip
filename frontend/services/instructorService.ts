import globalAxios from "../config/axios-config";
import Instructor from "../models/instructor";

export const fetchInstructors = async () => {
  try {
    return await globalAxios.get<Instructor[]>("/instructors");
  } catch (err) {
    console.log(err);
  }
};

export const fetchInstructorById = async (id: string) => {
  try {
    return await globalAxios.get<Instructor>(`/instructors/${id}`);
  } catch (err) {
    console.log(err);
  }
};
