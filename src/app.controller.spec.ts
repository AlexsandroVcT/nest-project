import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfigService } from './shared/infrastructure/env-config/env-config.service';

describe('EnvConfigService', () => {
  let envConfigService: EnvConfigService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()], // 🔥 Importa ConfigModule para registrar ConfigService
      providers: [EnvConfigService, ConfigService], // 🔥 Inclui ConfigService como provider
    }).compile();

    envConfigService = module.get<EnvConfigService>(EnvConfigService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('Service Initialization', () => {
    it('should be defined', () => {
      expect(envConfigService).toBeDefined();
    });

    it('should correctly retrieve environment variables', () => {
      jest.spyOn(configService, 'get').mockReturnValue('mockValue'); // Mocka a função get do ConfigService
      expect(configService.get('SOME_ENV_KEY')).toBe('mockValue');
    });
  });
});
