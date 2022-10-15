import { Injectable } from '@nestjs/common';
import { IsValidCodeFromSmsParams } from './interfaces/is-valid-code-from-sms.params.interface';

@Injectable()
export class AppService {
  async isValidCodeFromSms(params: IsValidCodeFromSmsParams): Promise<boolean> {
    return params.code === 123456;
  }
}
