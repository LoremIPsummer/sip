import { Response } from "express";
import {
  JsonController,
  Get,
  Param,
  Delete,
  Body,
  Post,
  Res,
} from "routing-controllers";
import { Service } from "typedi";
import { Connection, Repository, getConnection } from "typeorm";
import { InjectConnection } from "typeorm-typedi-extensions";
import Instructor from "../entity/instructor";
import InstructorRepository from "../repositories/InstructorRepository";

@JsonController()
@Service()
export class InstructorController {
  private _repo: Repository<Instructor>;

  constructor(@InjectConnection() private connection: Connection) {
    this._repo = connection.getCustomRepository(InstructorRepository);
  }

  @Get("/instructors")
  all(): Promise<Instructor[]> {
    return this._repo.find();
  }

  @Get("/instructors/:id")
  async one(
    @Param("id") id: string,
    @Res() response: Response
  ): Promise<Instructor | Response> {
    try {
      return await this._repo.findOne(id);
    } catch {
      return response
        .status(404)
        .json({ err: "There is no instructor with the given ID." });
    }
  }

  @Post("/instructors")
  async post(
    @Body() instructor: Instructor,
    @Res() response: Response
  ): Promise<Instructor | Response> {
    try {
      const created = await this._repo.create(instructor);
      return response.status(201).json(created);
    } catch {
      return response
        .status(400)
        .json({ err: "The given instructor cannot be created." });
    }
  }

  @Delete("/instructors/:id")
  async delete(
    @Param("id") id: string,
    @Res() response: Response
  ): Promise<Instructor | Response> {
    try {
      const candidate = await this._repo.findOne(id);
      if (!candidate)
        return response
          .status(404)
          .json({ err: "There is no instructor with the given ID." });
      await this._repo.delete(candidate);
      return candidate;
    } catch {
      return response
        .status(400)
        .json({ err: "The given instructor cannot be deleted." });
    }
  }
}
