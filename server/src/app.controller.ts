import {
  Controller,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SmsConfirmParamDto } from './dto/input/sms-confirm.dto';

@Controller()
@UsePipes(new ValidationPipe({ transform: true }))
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sms-confirm/:code')
  async authFromSms(@Param() param: SmsConfirmParamDto): Promise<boolean> {
    return this.appService.isValidCodeFromSms({ code: param.code });
  }
}
