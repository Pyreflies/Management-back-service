import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, AuthSchema,Token,TokenSchema  } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule} from '@nestjs/jwt';
import { jwtConstants } from 'src/jwt.constants';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: User.name, schema: AuthSchema },{ name: Token.name, schema: TokenSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class AuthModule {}
