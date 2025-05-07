import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TrhSdkVersionResponseDto } from '../dtos/trh-sdk-verion.dto';
import { TrhSdkService } from '../services/trh-sdk.service';
@Controller('trh-sdk')
@ApiTags('TRH SDK')
export class TrhSdkController {
  constructor(private readonly trhSdkService: TrhSdkService) {}
  @Get('version')
  @ApiResponse({
    status: 200,
    description: 'The version of the TRH SDK',
    type: TrhSdkVersionResponseDto,
  })
  async getTrhSdkVersion() {
    const version = await this.trhSdkService.getTrhSdkVersion();
    return new TrhSdkVersionResponseDto({ version: version.trim() });
  }
}
