import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MovieService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MovieService],
})
export class AppModule {}
