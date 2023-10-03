import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule} from '@nestjs/jwt';
import { jwtConstants } from 'src/jwt.constants';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Database'),
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions:{expiresIn:jwtConstants.expiresIn},
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
