import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "COURSE_DIM" })
export default class Course {
  @PrimaryColumn({
    type: "varchar2",
    name: "CRS_CODE",
    unique: true,
    length: 10,
  })
  code: string;

  @Column({ type: "varchar2", name: "CRS_TITLE", unique: true, length: 30 })
  title: string;

  @Column({ type: "varchar2", name: "FAC_CODE", length: 9 })
  facCode: string;

  @Column({ type: "varchar2", name: "INS_ID", length: 9 })
  insId: string;

  @Column({ type: "varchar2", name: "DEP_CODE", length: 4 })
  depCode: string;
}
