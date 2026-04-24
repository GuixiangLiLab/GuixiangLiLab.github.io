// 声明所有 .css 文件的导入类型（解决全局 CSS 导入报错）
declare module "*.css" {
  const content: string;
  export default content;
}