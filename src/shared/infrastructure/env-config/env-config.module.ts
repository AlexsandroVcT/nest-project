import { EnvConfigService } from '../../infrastructure/env-config/env-config.service';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot()], // 🔥 ConfigModule importado corretamente
  providers: [EnvConfigService, ConfigService], // 🔥 Corrigido: Apenas uma instância de EnvConfigService
  exports: [EnvConfigService, ConfigService], // 🔥 ConfigService e EnvConfigService acessíveis para outros módulos
})
export class EnvConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return {
      module: EnvConfigModule,
      imports: [
        ConfigModule.forRoot({
          ...options,
          envFilePath: [join(__dirname, `../../../../.env${process.env.NODE_ENV}`)],
        }),
      ],
      providers: [EnvConfigService, ConfigService], // 🔥 Correto agora!
      exports: [EnvConfigService, ConfigService], // 🔥 Garantindo que os serviços estejam acessíveis
    };
  }
}
