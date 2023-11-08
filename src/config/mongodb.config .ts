import { registerAs } from '@nestjs/config';
import { IsJSON, IsOptional } from 'class-validator';
import { MongodbConfigType } from './config.type';
import validateConfig from 'src/utils/validate-config';

class EnvironmentVariablesValidator {
  // @IsJSON()
  @IsOptional()
  MONGODB_URL: string;
}

export default registerAs<MongodbConfigType>('MDB_URL', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);
  return {
    MDB_URL: process.env.MDB_URL,
  };
});
