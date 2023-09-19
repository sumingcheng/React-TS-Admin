import { FrontModel, HttpBindNormal } from '@/utils/FrontModel'

export class Demo extends FrontModel {
  @HttpBindNormal('1') code: string = 'admin1'
  @HttpBindNormal('2') message: string = 'admin2'
  @HttpBindNormal('3') pageInfo: string = 'admin3'

  constructor() {
    super()
  }
}
