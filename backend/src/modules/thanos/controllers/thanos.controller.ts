import { Controller, Get } from '@nestjs/common';

@Controller('thanos')
export class ThanosController {
  @Get()
  getThanos() {
    return 'Thanos';
  }
}
