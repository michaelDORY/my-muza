import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      `mongodb+srv://michaelDORY:P609hnq7ySYVF62M@cluster0.jpuyc.mongodb.net/my-muza?retryWrites=true&w=majority`,
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
  ],
})
export class AppModule {}
