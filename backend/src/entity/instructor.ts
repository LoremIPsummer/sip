import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "INSTRUCTOR_DIM" })
export default class Instructor {
  @PrimaryColumn({ type: "varchar2", name: "INS_ID", unique: true, length: 9 })
  id: string | undefined;

  @Column({ type: "varchar2", name: "INS_FNAME", length: 20 })
  firstName: string | undefined;

  @Column({ type: "varchar2", name: "INS_LNAME", length: 20 })
  lastName: string | undefined;

  @Column({ type: "varchar2", name: "DEP_CODE", length: 4 })
  depCode: string | undefined;

  @Column({ type: "varchar2", name: "FAC_CODE", length: 9 })
  facCode: string | undefined;
}
