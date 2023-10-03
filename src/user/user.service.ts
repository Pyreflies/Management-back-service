import {
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { jwtConstants } from 'src/jwt.constants';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
    constructor(
        private jwtService: JwtService,
        @InjectModel(User.name) private userModel: Model<User>,
    ) { }

}
