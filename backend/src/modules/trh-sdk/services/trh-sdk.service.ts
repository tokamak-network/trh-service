import { Injectable, Logger } from '@nestjs/common';
import { CliRunner } from 'src/common/cli/cli-runner';
@Injectable()
export class TrhSdkService {
  constructor(
    private readonly cliRunner: CliRunner,
    private readonly logger: Logger,
  ) {}

  async getTrhSdkVersion(): Promise<string> {
    try {
      const version = await this.cliRunner.run('trh-sdk version');
      return version.trim().split(' ')[1];
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to get TRH SDK version');
    }
  }
}
