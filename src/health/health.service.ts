import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    getHealth(): string {
        return 'Hello Ashish this is your nestApp on minikube'
    }
}
