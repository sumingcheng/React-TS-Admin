# React-TS-Admin

## 框架功能说明

1. 支持配置多种生产、开发环境
2. 通过细化和分包，使得 webpack 配置更清晰，支持按需加载
3. 在 git 提交前进行代码检查
4. 优化了打包速度和体积，支持自动生成 zip 文件和构建分析
5. 优化了打包界面，减少无关的输出信息
6. 集成了 Redux、Less、Ant Design、TailwindCSS、TypeScript，以及对 Axios 进行了二次封装
7. 兼容主流的浏览器
8. dev


## 待办

1. 搭建管理系统整体框架
2. 自动路由
3. 按照wetap的内容，按项完成
4. layout路由设计
5. 设置所有页面的路由&&默认跳转登录页
6. 封装自定义hooks控制菜单栏
7. 封装自定义hooks控制显示头部
8. 保持菜单menu高亮
9. 页面内部样式 css module
10. redux 菜单联动，数据流设计思想
11. 主流文件上传技术案例方案
12. 图片上传功能组件
13. 实现二级分类的课程新增功能
14. useEffect 拉取动态数据的设计思想



## 模块

### 1. 用户管理

1. **列出所有用户**:

   - `GET /users`

2. **查看用户详情**:

   - `GET /users/{id}`

3. **添加新用户** (JSONPlaceholder 的模拟接口只返回添加的数据，不会真正添加):

   - `POST /users`

   - Body:

     ```
     jsonCopy code{
       "name": "用户名",
       "username": "用户昵称",
       "email": "用户邮箱",
       ...
     }
     ```

4. **更新现有用户信息**:

   - `PUT /users/{id}`

   - Body:

     ```
     jsonCopy code{
       "name": "新的用户名",
       ...
     }
     ```

5. **删除用户**:

   - `DELETE /users/{id}`

### 2. 帖子管理

1. **列出所有帖子**:

   - `GET /posts`

2. **查看帖子详情，包括评论**:

   - `GET /posts/{id}`
   - `GET /posts/{id}/comments`

3. **根据用户列出帖子**:

   - `GET /posts?userId={userId}`

4. **添加新帖子**:

   - `POST /posts`

   - Body:

     ```
     jsonCopy code{
       "title": "帖子标题",
       "body": "帖子内容",
       "userId": "用户ID"
     }
     ```

5. **编辑帖子**:

   - `PUT /posts/{id}`

   - Body:

     ```
     jsonCopy code{
       "title": "新的帖子标题",
       ...
     }
     ```

6. **删除帖子**:

   - `DELETE /posts/{id}`

### 3. 评论管理

1. **列出所有评论或按帖子列出评论**:

   - `GET /comments`
   - `GET /comments?postId={postId}`

2. **添加新评论**:

   - `POST /comments`

   - Body:

     ```
     jsonCopy code{
       "postId": "帖子ID",
       "name": "评论者",
       "email": "评论者邮箱",
       "body": "评论内容"
     }
     ```

3. **编辑评论**:

   - `PUT /comments/{id}`

   - Body:

     ```
     jsonCopy code{
       "name": "新的评论者名称",
       ...
     }
     ```

4. **删除评论**:

   - `DELETE /comments/{id}`

### 4. 相册和照片管理

1. **列出所有相册**:

   - `GET /albums`

2. **查看相册内的照片**:

   - `GET /albums/{id}/photos`

3. **添加新的相册**:

   - `POST /albums`

   - Body:

     ```
     jsonCopy code{
       "userId": "用户ID",
       "title": "相册标题"
     }
     ```

4. **上传照片到相册**:

   - `POST /photos`

   - Body:

     ```
     jsonCopy code{
       "albumId": "相册ID",
       "title": "照片标题",
       "url": "照片链接",
       "thumbnailUrl": "缩略图链接"
     }
     ```

5. **删除照片或相册**:

   - `DELETE /photos/{id}`
   - `DELETE /albums/{id}`

### 5. 待办事项管理

1. **列出所有待办事项**:

   - `GET /todos`

2. **根据用户列出待办事项**:

   - `GET /todos?userId={userId}`

3. **标记待办事项为完成或未完成**:

   - `PUT /todos/{id}`

   - Body:

     ```
     jsonCopy code{
       "completed": true 或 false
     }
     ```

4. **添加新的待办事项**:

   - `POST /todos`

   - Body:

     ```
     jsonCopy code{
       "userId": "用户ID",
       "title": "待办事项标题"
     }
     ```

5. **编辑待办事项**:

   - `PUT /todos/{id}`

   - Body:

     ```
     jsonCopy code{
       "title": "新的待办事项标题",
       ...
     }
     ```

6. **删除待办事项**:

   - `DELETE /todos/{id}`

### 6. 仪表盘

因为JSONPlaceholder没有专门的统计接口，所以你需要自己在前端或者中间层进行数据聚合和统计。

### 7. 搜索和过滤

- **在用户、帖子或评论中进行搜索**:
  - `GET /users?name=搜索词`
  - `GET /posts?title=搜索词`
  - `GET /comments?body=搜索词`
- **根据不同的标准过滤内容**:
  - `GET /todos?completed=true 或 false`

### 8. 通知和活动日志

你可能需要在前端进行模拟，因为JSONPlaceholder没有专门的接口来显示活动日志。

### 9. 用户权限和角色管理

这部分完全需要在前端或者中间层进行模拟，JSONPlaceholder并不提供这方面的数据。
