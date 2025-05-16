import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  Min,
  IsEnum,
} from 'class-validator';
import { DeploymentNetwork, CloudProvider } from 'src/common/enums';

export class ThanosStackCreateRequestDto {
  @IsEnum(CloudProvider)
  @IsNotEmpty()
  cloudProvider: CloudProvider;

  @IsEnum(DeploymentNetwork)
  @IsNotEmpty()
  network: DeploymentNetwork;

  @IsString()
  @IsNotEmpty()
  l1RpcUrl: string;

  @IsString()
  @IsNotEmpty()
  l1BeaconUrl: string;

  @IsString()
  @IsNotEmpty()
  awsAccessKey: string;

  @IsString()
  @IsNotEmpty()
  awsAccessSecretKey: string;

  @IsString()
  @IsNotEmpty()
  awsRegion: string;

  @IsString()
  @IsNotEmpty()
  chainName: string;

  @IsString()
  @IsNotEmpty()
  adminAccount: string;

  @IsString()
  @IsNotEmpty()
  sequencerAccount: string;

  @IsString()
  @IsNotEmpty()
  batcherAccount: string;

  @IsString()
  @IsNotEmpty()
  proposerAccount: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  l2BlockTime: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  batchSubmissionFrequency: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  outputRootFrequency: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  challengePeriod: number;
}
