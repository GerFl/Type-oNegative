import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'sendmeapp_db',
      entities:[__dirname + '/**/*.entity{.ts,.js'],
      synchronize:true,
       }),
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService],
})
export class AppModule {}