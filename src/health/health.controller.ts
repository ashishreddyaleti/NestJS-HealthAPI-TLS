import { Controller, Get } from '@nestjs/common';
import {HealthService} from './health.service'

@Controller('healths')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    getHealth(): string {
        return this.healthService.getHealth();
    }
}
