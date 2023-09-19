import { MenuProps } from 'antd'
import React from 'react'
import { FrontModel, HttpBindNormal } from '@/utils/FrontModel'

export type MenuItem = Required<MenuProps>['items'][number]

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

export class Demo extends FrontModel {
  @HttpBindNormal('1') code = 'admin'
  @HttpBindNormal('2') message = 'admin'
  @HttpBindNormal('3') pageInfo = 'admin'

  constructor() {
    super()
  }
}
