import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { DeploymentNetwork, Status } from './enum';
import { Core } from './core.entity';
import { Integration } from './integration.entity';
import { Deployment } from './deployment.entity';
@Entity('stacks')
@Unique(['name'])
export class Stack extends Core {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Status,
    nullable: false,
    default: Status.ACTIVE,
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: DeploymentNetwork,
    nullable: false,
    default: DeploymentNetwork.DEVNET,
  })
  network: DeploymentNetwork;

  @Column({
    name: 'deployment_path',
    nullable: false,
  })
  deploymentPath: string;

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

  @OneToMany(() => Integration, (integration) => integration.stack)
  integrations: Integration[];

  @OneToMany(() => Deployment, (deployment) => deployment.stack)
  deployments: Deployment[];
}
