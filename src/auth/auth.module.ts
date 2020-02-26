import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from "./auth.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserRepository} from "./database/user.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: []
})
export class AuthModule {
}
