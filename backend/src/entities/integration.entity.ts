import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Core } from './core.entity';
import { Status } from '../common/enums';
import { Stack } from './stack.entity';
import { Deployment } from './deployment.entity';

@Entity()
export class Integration extends Core {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
    nullable: false,
  })
  status: Status;

  @Column({
    type: 'json',
    nullable: true,
  })
  config: Record<string, any>;

  @Column({
    type: 'json',
    nullable: true,
  })
  info: Record<string, any>;

  @ManyToOne(() => Stack, (stack) => stack.integrations)
  stack: Stack;

  @OneToMany(() => Deployment, (deployment) => deployment.integration)
  deployments: Deployment[];
}
