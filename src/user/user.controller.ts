import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('User')
@ApiTags('User') // Add a tag for this controller
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all User';
  }
}
