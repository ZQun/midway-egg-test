import { Controller, Get, Provide, Post, ALL, Body, Inject } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {

  @Inject()
  ctx: any

  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }

  @Post('/add')
  async add(
    @Body(ALL) body: any
  ) {

    console.log('-->body', body);
    console.log('-->body', this.ctx.request.body);

    return 'ok'
  }
}
