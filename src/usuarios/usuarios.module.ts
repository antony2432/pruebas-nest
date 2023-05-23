import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './usuarios';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, Usuarios]
})
export class UsuariosModule {}
