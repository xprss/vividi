import { Module } from '@nestjs/common';
import { VibeModule } from './vibe/vibe.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [VibeModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
