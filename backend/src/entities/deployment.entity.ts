import { Column, Entity, ManyToOne } from 'typeorm';
import { Core } from './core.entity';
import { DeploymentStatus } from '../common/enums';
import { Stack } from './stack.entity';
import { Integration } from './integration.entity';
@Entity()
export class Deployment extends Core {
  @Column({
    nullable: true,
  })
  name: string;

  @Column({
    nullable: false,
  })
  step: number;

  @Column({
    nullable: true,
  })
  logPath: string;

  @Column({
    type: 'enum',
    enum: DeploymentStatus,
    nullable: false,
    default: DeploymentStatus.PENDING,
  })
  status: DeploymentStatus;

  @ManyToOne(() => Stack, (stack) => stack.deployments, { nullable: true })
  stack: Stack;

  @ManyToOne(() => Integration, (integration) => integration.deployments, {
    nullable: true,
  })
  integration: Integration;
}
