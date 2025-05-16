import { Controller, Post, Body } from '@nestjs/common';
import { ThanosStackCreateRequestDto } from '../dtos/thanos-stack-create.request.dto';
@Controller('thanos')
export class ThanosController {
  @Post()
  createThanosStack(@Body() body: ThanosStackCreateRequestDto) {
    return 'Thanos';
  }
}
