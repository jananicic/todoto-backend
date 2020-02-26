import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {databaseProviders} from "./database/database.providers";

@Module({
    imports: [TypeOrmModule.forRoot(databaseProviders), AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
