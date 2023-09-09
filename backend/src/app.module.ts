import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CartModule } from './cart/cart.module'
import { ProductModule } from './product/product.module'
import { dataSourceOptions } from 'data-source'
import { AuthModule } from './auth/auth.module'
import { User } from './auth/entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CartModule,
    ProductModule,
    AuthModule,
    TypeOrmModule.forRoot(dataSourceOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
