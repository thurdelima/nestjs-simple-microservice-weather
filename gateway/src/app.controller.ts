import { Body, Controller, Get, Post, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { IRequest } from './interfaces/irequest.interface';
import { IResponse } from './interfaces/iresponse.interface';

@Controller('temp')
export class AppController {
  //constructor(private readonly appService: AppService) {}

  constructor(
    @Inject('CELSIUS_SERVICE') private readonly celsiusService: ClientProxy
  ) { }

  @Post()
  async getTemp(@Body() city: IRequest): Promise<any> {
    
    const celsiusSrvReponse: IResponse = await this.celsiusService
    .send('GET_TEMP_CELSIUS', city).toPromise();

    return { data : celsiusSrvReponse };

  }
}
