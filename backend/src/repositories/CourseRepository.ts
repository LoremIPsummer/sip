import { EntityRepository, Repository } from "typeorm";
import Course from "../entity/course";

@EntityRepository(Course)
export default class CourseRepository extends Repository<Course> {}
