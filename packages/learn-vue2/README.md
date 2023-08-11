# learn-vue2

测试vue2

## 项目预览

![preview.png](./preview.png)

## 启动项目
  
  ```bash
  npm install
  npm run dev
  ```

## 新模块开发流程

1. 在`src/modules`目录下新建模块目录, 如`src/modules/testpage`
2. 在`src/modules/testpage`目录下新建`index.vue`文件, 作为模块的入口文件
3. 在`src/router.js`中添加路由配置, 如:

  ```javascript
  {
    path: '/test',
    name: 'test',
    component: resolve => require(['@/pages/test'], resolve)
  }
  ```\
4. 在`src/components/Navbar.vue`中添加路由配置, 如:

  ```javascript
  {
    title: '测试',
    icon: 'mdi-clipboard-text-outline',
    linkto: '/test'
  }
  ```
