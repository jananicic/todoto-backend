import {Connection} from 'typeorm';
import {User} from './user.entity';
import {DATABASE_CONNECTION, USER_REPOSITORY} from "./constants";

export const userProviders = [
    {
        provide: USER_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: [DATABASE_CONNECTION],
    },
];