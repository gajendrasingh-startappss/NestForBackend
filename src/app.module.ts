import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import databaseConfig from './config/database.config';
import authConfig from './config/auth.config';
import appConfig from './config/app.config';
import mailConfig from './config/mail.config';
import fileConfig from './config/file.config';
import facebookConfig from './config/facebook.config';
import googleConfig from './config/google.config';
import twitterConfig from './config/twitter.config';
import appleConfig from './config/apple.config';
import path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthAppleModule } from './auth-apple/auth-apple.module';
import { AuthFacebookModule } from './auth-facebook/auth-facebook.module';
import { AuthGoogleModule } from './auth-google/auth-google.module';
import { AuthTwitterModule } from './auth-twitter/auth-twitter.module';
import { I18nModule } from 'nestjs-i18n/dist/i18n.module';
import { HeaderResolver } from 'nestjs-i18n';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { ForgotModule } from './forgot/forgot.module';
import { MailModule } from './mail/mail.module';
import { HomeModule } from './home/home.module';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AllConfigType, MongodbConfigType } from './config/config.type';
import { SessionModule } from './session/session.module';
import { MailerModule } from './mailer/mailer.module';
//nikhil
import mongodbConfig from './config/mongodb.config ';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { getwayModule } from './getway/getwayModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        authConfig,
        appConfig,
        mailConfig,
        fileConfig,
        facebookConfig,
        googleConfig,
        twitterConfig,
        appleConfig,
        mongodbConfig,
      ],
      envFilePath: ['.env'],
    }),
    // TypeOrmModule.forRootAsync({
    //   useClass: TypeOrmConfigService,
    //   dataSourceFactory: async (options: DataSourceOptions) => {
    //     return new DataSource(options).initialize();
    //   },
    // }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        fallbackLanguage: configService.getOrThrow('app.fallbackLanguage', {
          infer: true,
        }),
        loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService<AllConfigType>) => {
            return [
              configService.get('app.headerLanguage', {
                infer: true,
              }),
            ];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService<MongodbConfigType>) => ({
        uri: configService.get('MDB_URL', {
          infer: true,
        }),
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    ProductModule,
    // UsersModule,
    // FilesModule,
    // AuthModule,
    // AuthFacebookModule,
    // AuthGoogleModule,
    // AuthTwitterModule,
    // AuthAppleModule,
    // ForgotModule,
    // SessionModule,
    // MailModule,
    // MailerModule,
    HomeModule,
    getwayModule,
  ],
})
export class AppModule {}
