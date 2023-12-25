初始化项目
npm init -y
安装ts以及ts-node
npm i -D typescript
npm i -D ts-node @types/node

初始化ts配置
npx tsc --init --rootDir src --outDir build

建立目录和文件
mkdir src
touch src/index.ts

安装网络库
npm i axios 

package.json 配置
```
{
  "name": "node_ts_stu",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.10.5",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "dependencies": {
    "axios": "^1.6.2"
  }
}

```
