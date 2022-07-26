import { Module } from '@nestjs/common';
import { DateScalar } from 'src/common/scalars/data.scalar';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService, DateScalar],
})
export class UsersModule {}
