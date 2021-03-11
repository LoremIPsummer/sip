import {
  JsonController,
  Get,
  Post,
  Param,
  Delete,
  Body,
  Req,
  Res,
} from "routing-controllers";
import { Inject, Service } from "typedi";
import { Connection, Repository, getConnection } from "typeorm";
import { InjectConnection } from "typeorm-typedi-extensions";
import Course from "../entity/course";
import CourseRepository from "../repositories/CourseRepository";
import { Request, Response } from "express";

@JsonController()
@Service()
export class CourseController {
  private _repo: Repository<Course>;

  constructor(@InjectConnection() private connection: Connection) {
    this._repo = connection.getCustomRepository(CourseRepository);
  }

  @Get("/courses")
  all(@Res() response: Response): Promise<Course[]> {
    return this._repo.find();
  }

  @Get("/courses/:id")
  async one(
    @Param("id") id: string,
    @Res() response: Response
  ): Promise<Course | Response> {
    try {
      return await this._repo.findOne(id);
    } catch {
      return response
        .status(404)
        .json({ err: "There is no course with the given ID." });
    }
  }

  @Post("/courses")
  async post(
    @Body() course: Course,
    @Res() response: Response
  ): Promise<Course | Response> {
    try {
      const created = await this._repo.create(course);
      return response.status(201).json(created);
    } catch {
      return response
        .status(400)
        .json({ err: "The given course cannot be created." });
    }
  }

  @Delete("/courses/:id")
  async delete(
    @Param("id") id: string,
    @Res() response: Response
  ): Promise<Course | Response> {
    try {
      const candidate = await this._repo.findOne(id);
      if (!candidate)
        response.status(404).json({ err: "The given course does not exist." });
      await this._repo.delete(candidate);
      return candidate;
    } catch {
      response.status(400).json({ err: "The given course cannot be deleted." });
    }
  }
}
