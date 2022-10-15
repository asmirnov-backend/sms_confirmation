import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class SmsConfirmParamDto {
  @ApiProperty({ description: 'Code for auth' })
  @Type(() => Number)
  @IsInt()
  readonly code: number;
}
