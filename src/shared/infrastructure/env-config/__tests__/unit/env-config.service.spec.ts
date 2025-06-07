import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfigService } from '../../env-config.service';

describe('EnvConfigService', () => {
  let envConfigService: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()], // 🔥 Garante que ConfigService está registrado
      providers: [EnvConfigService, ConfigService], // 🔥 Adiciona ConfigService como provider
    }).compile();

    envConfigService = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(envConfigService).toBeDefined();
  });
});
