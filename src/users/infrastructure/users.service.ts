import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'Esta ação adiciona um novo usuário';
  }

  findAll() {
    return `Esta ação retorna todos os usuários`;
  }

  findOne(id: number) {
    return `Esta ação retorna um #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `Esta ação atualiza um #${id} user`;
  }

  remove(id: number) {
    return `Esta ação remove um #${id} user`;
  }
}
