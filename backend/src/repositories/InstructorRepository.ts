import { EntityRepository, Repository } from "typeorm";
import Instructor from "../entity/instructor";

@EntityRepository(Instructor)
export default class InstructorRepository extends Repository<Instructor> {}
