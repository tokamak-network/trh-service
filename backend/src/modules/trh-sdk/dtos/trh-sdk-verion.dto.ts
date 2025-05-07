import { IsString } from 'class-validator';

export class TrhSdkVersionResponseDto {
  @IsString()
  version: string;

  constructor(data: { version: string }) {
    this.version = data.version;
  }
}
