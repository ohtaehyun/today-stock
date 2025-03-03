import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FearGreedModule } from './fear-greed/fear-greed.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { StockHistoryModule } from './stock-history/stock-history.module';
import { TickerModule } from './ticker/ticker.module';
import { YahooFinanceModule } from './yahoo-finance/yahoo-finance.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [path.join(__dirname, "**/*.entity{.ts,.js}")],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false
      },
    }),
    ScheduleModule.forRoot(),
    FearGreedModule,
    StockHistoryModule,
    TickerModule,
    YahooFinanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
