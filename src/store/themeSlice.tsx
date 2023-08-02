// "createSlice" 是一个函数，它接收一个配置对象，然后返回一个包含 reducer 和 action creators 的对象
import {createSlice} from "@reduxjs/toolkit";

// 使用 "createSlice" 函数创建一个名为 "theme" 的 slice
// 这个 slice 包含一个 reducer 和一个名为 "toggleTheme" 的 action creator
const themeSlice = createSlice({
  // 这个 slice 的名字，用于生成 action types
  name: "theme",

  // 这个 slice 的初始状态，我们默认主题是 "light"
  initialState: "light",

  // 一个对象，它的每个键都是一个 action creator 的名字，对应的值是一个 reducer 函数
  // 在这个例子中，我们只有一个名为 "toggleTheme" 的 action creator，
  // 对应的 reducer 函数接收当前的 state（即当前的主题），然后返回新的 state（即新的主题）
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

// 从 "themeSlice" 中导出 "toggleTheme" action creator
// 这样，我们就可以在其他文件中导入并使用它了
export const {toggleTheme} = themeSlice.actions;

// 导出 "themeSlice" 的 reducer
// 这个 reducer 是用来处理和主题相关的 actions 的
// 它接收当前的 state 和一个 action，然后根据这个 action 返回新的 state
export default themeSlice.reducer;
