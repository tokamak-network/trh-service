import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Core {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
