import {
  JsonController,
  Get,
  Post,
  Param,
  Delete,
  Body,
} from "routing-controllers";
import { Inject, Service } from "typedi";
import { Connection, Repository, getConnection } from "typeorm";
import { InjectConnection } from "typeorm-typedi-extensions";
import Course from "../entity/course";
import CourseRepository from "../repositories/CourseRepository";

@JsonController()
@Service()
export class CourseController {
  private _repo: Repository<Course>;

  constructor(@InjectConnection() private connection: Connection) {
    this._repo = connection.getCustomRepository(CourseRepository);
  }

  @Get("/courses")
  all(): Promise<Course[]> {
    return this._repo.find();
  }

  @Get("/courses/:id")
  async one(@Param("id") id: string): Promise<Course | undefined> {
    try {
      return await this._repo.findOne(id);
    } catch {
      return undefined;
    }
  }

  @Post("/courses")
  async post(@Body() course: Course): Promise<Course | undefined> {
    try {
      const created = await this._repo.create(course);
      return created;
    } catch {
      return undefined;
    }
  }

  @Delete("/courses/:id")
  async delete(@Param("id") id: string): Promise<Course | undefined> {
    try {
      const candidate = await this._repo.findOne(id);
      if (!candidate) return undefined;
      await this._repo.delete(candidate);
      return candidate;
    } catch {
      return undefined;
    }
  }
}
