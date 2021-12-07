import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'test2',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })],
  
})
export class AppModule {}
