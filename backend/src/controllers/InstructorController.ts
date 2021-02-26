import {
  JsonController,
  Get,
  Param,
  Delete,
  Body,
  Post,
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
  async one(@Param("id") id: string): Promise<Instructor | undefined> {
    try {
      return await this._repo.findOne(id);
    } catch {
      return undefined;
    }
  }

  @Post("/instructors")
  async post(@Body() instructor: Instructor): Promise<Instructor | undefined> {
    try {
      const created = await this._repo.create(instructor);
      return created;
    } catch {
      return undefined;
    }
  }

  @Delete("/instructors/:id")
  async delete(@Param("id") id: string): Promise<Instructor | undefined> {
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
