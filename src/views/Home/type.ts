import { FrontModel, HttpBindNormal } from '@/utils/FrontModel'

export class Demo extends FrontModel {
  @HttpBindNormal('1') code = 'admin1'
  @HttpBindNormal('2') message = 'admin2'
  @HttpBindNormal('3') pageInfo = 'admin3'

  constructor() {
    super()
  }
}
