import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './cats/cats.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [ProductsModule, DatabaseModule, CatsModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
