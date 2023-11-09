import { Module } from '@nestjs/common';
import { mygetway } from './mygetway';

@Module({
  providers: [mygetway],
})
export class getwayModule {
  constructor() {
    console.log('my getway');
  }
}
