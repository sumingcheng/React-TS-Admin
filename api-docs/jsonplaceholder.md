### 1. **用户管理**:

**a. 获取所有用户列表**:

- **接口名称**: List Users
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/users`

**b. 查看用户详情**:

- **接口名称**: User Details
- **HTTP 方法**: GET

**c. 添加新用户**:

- **接口名称**: Add User
- **HTTP 方法**: POST
- **URL**: `https://jsonplaceholder.typicode.com/users`
- **请求体**: `{ "name": "Your Name", ...otherFields }`

**d. 更新用户信息**:

- **接口名称**: Update User
- **HTTP 方法**: PUT
- **URL**: `https://jsonplaceholder.typicode.com/users/{id}`
- **请求体**: `{ "name": "Updated Name", ...otherFields }`

**e. 删除用户**:

- **接口名称**: Delete User
- **HTTP 方法**: DELETE
- **URL**: `https://jsonplaceholder.typicode.com/users/{id}`

### 2. **帖子管理**:

**a. 获取所有帖子**:

- **接口名称**: List Posts
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/posts`

**b. 查看帖子详情**:

- **接口名称**: Post Details
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/posts/{id}`

**c. 添加新帖子**:

- **接口名称**: Add Post
- **HTTP 方法**: POST
- **URL**: `https://jsonplaceholder.typicode.com/posts`
- **请求体**: `{ "title": "Your Title", "body": "Your Content", ...otherFields }`

**d. 更新帖子信息**:

- **接口名称**: Update Post
- **HTTP 方法**: PUT
- **URL**: `https://jsonplaceholder.typicode.com/posts/{id}`
- **请求体**: `{ "title": "Updated Title", "body": "Updated Content", ...otherFields }`

**e. 删除帖子**:

- **接口名称**: Delete Post
- **HTTP 方法**: DELETE
- **URL**: `https://jsonplaceholder.typicode.com/posts/{id}`

### 3. **评论管理**:

**a. 根据帖子 ID 获取评论**:

- **接口名称**: List Comments By Post
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/posts/{id}/comments`

**b. 查看评论详情**:

- **接口名称**: Comment Details
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/comments/{id}`

**c. 添加新评论**:

- **接口名称**: Add Comment
- **HTTP 方法**: POST
- **URL**: `https://jsonplaceholder.typicode.com/comments`
- **请求体**: `{ "postId": 1, "name": "Your Name", "email": "your@email.com", "body": "Your Comment", ...otherFields }`

**d. 更新评论**:

- **接口名称**: Update Comment
- **HTTP 方法**: PUT
- **URL**: `https://jsonplaceholder.typicode.com/comments/{id}`
- **请求体**: `{ "name": "Updated Name", "body": "Updated Comment", ...otherFields }`

**e. 删除评论**:

- **接口名称**: Delete Comment
- **HTTP 方法**: DELETE
- **URL**: `https://jsonplaceholder.typicode.com/comments/{id}`

### 4. **待办事项管理**:

**a. 获取所有待办事项**:

- **接口名称**: List Todos
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/todos`

**b. 查看待办事项详情**:

- **接口名称**: Todo Details
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/todos/{id}`

**c. 添加新待办事项**:

- **接口名称**: Add Todo
- **HTTP 方法**: POST
- **URL**: `https://jsonplaceholder.typicode.com/todos`
- **请求体**: `{ "title": "Your Task", "completed": false, ...otherFields }`

**d. 更新待办事项状态**:

- **接口名称**: Update Todo
- **HTTP 方法**: PUT
- **URL**: `https://jsonplaceholder.typicode.com/todos/{id}`
- **请求体**: `{ "completed": true }`

**e. 删除待办事项**:

- **接口名称**: Delete Todo
- **HTTP 方法**: DELETE
- **URL**: `https://jsonplaceholder.typicode.com/todos/{id}`

### 5. **相册管理**:

**a. 获取所有相册**:

- **接口名称**: List Albums
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/albums`

**b. 根据用户 ID 获取相册**:

- **接口名称**: List Albums By User
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/users/{id}/albums`

**c. 查看相册详情**:

- **接口名称**: Album Details
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/albums/{id}`

**d. 添加新相册**:

- **接口名称**: Add Album
- **HTTP 方法**: POST
- **URL**: `https://jsonplaceholder.typicode.com/albums`
- **请求体**: `{ "userId": 1, "title": "Your Album Title", ...otherFields }`

**e. 删除相册**:

- **接口名称**: Delete Album
- **HTTP 方法**: DELETE
- **URL**: `https://jsonplaceholder.typicode.com/albums/{id}`

### 6. **照片管理**:

**a. 根据相册 ID 获取照片**:

- **接口名称**: List Photos By Album
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/albums/{id}/photos`

**b. 查看照片详情**:

- **接口名称**: Photo Details
- **HTTP 方法**: GET
- **URL**: `https://jsonplaceholder.typicode.com/photos/{id}`

**c. 添加新照片**:

- **接口名称**: Add Photo
- **HTTP 方法**: POST
- **URL**: `https://jsonplaceholder.typicode.com/photos`
- **请求体**: `{ "albumId": 1, "title": "Your Photo Title", "url": "https://your-photo-url.com", "thumbnailUrl": "https://your-thumbnail-url.com", ...otherFields }`

**d. 删除照片**:

- **接口名称**: Delete Photo
- **HTTP 方法**: DELETE
- **URL**: `https://jsonplaceholder.typicode.com/photos/{id}`

