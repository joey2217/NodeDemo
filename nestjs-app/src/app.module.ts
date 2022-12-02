import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test',
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
});

@Module({
  imports: [typeOrmModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
