# AGENTS.md - Make It Real H2 Frontend Demo

## 项目目标

构建一个面向 eufyMake E1 存量用户的高保真内容社区前端 Demo。产品优先帮助 SMB 用户发现可售商品，同时保留兴趣型 Maker 的创意发现体验。

MIR 负责内容发现、信任建立、作者关系和资产关联；具体设计、项目管理与打印执行由 eufyMake Studio 承接。

## 产品边界

- 社区核心内容对象：Product Idea、Skill、Material、Project、Creator。
- Product Idea 不是独立供给资产，而是面向消费决策的结构化机会专题页；它组织用户场景、机会判断和实现路径，并通过关联 Project 提供真实证据。
- Product Idea 保留独立 URL，但不建设作者、评论、独立投稿、版本管理和后台维护体系；其内容由平台根据 Skill、Material、Project、Creator 等资产聚合维护。
- Product Idea 页面不得做成单件商品详情或纯 Project 瀑布流，应依次回答：适合谁、为什么可能值得做、真实证据是什么、有哪些实现路径、测试前还存在哪些不确定性。
- MIR 不承载完整设计工作台、打印任务管理、经营后台或复杂 POD 流程。
- 所有实际制作行为通过上下文按钮引导至 eufyMake Studio。
- SMB 商业信息是增强层，不得挤压非商业 Maker 的兴趣内容。

## 技术约定

- 使用 React + TypeScript + Vite。
- 样式使用原生 CSS，集中维护设计变量，避免引入重量级 UI 框架。
- 使用 React Router 管理页面路由。
- Demo 数据集中放在 `src/data/`，页面不得散落重复硬编码。
- 通用组件放在 `src/components/`，页面放在 `src/pages/`。
- 图标优先使用 `lucide-react`，不使用 emoji 充当界面图标。
- 本轮 Demo 以桌面 Web 端为交付范围，目标视口为 1280px–1600px。
- 移动端仅保留基础降级样式，不作为本轮设计与验收范围。

## 目录结构

```text
src/
  assets/       本地图片与静态资源
  components/   通用组件
  data/         Demo 数据和类型
  pages/        路由页面
  styles/       全局样式与设计变量
  App.tsx       路由与全局布局
  main.tsx      应用入口
```

## 设计原则

- 视觉优先服务高质量作品图片和商品发现，避免后台工具感。
- 左侧边栏仅承载社区导航、收藏/关注与 Studio 出口。
- 首页优先提供四类核心任务入口，再通过 Product Idea、Skill、Material、Project、Creator 的关联内容帮助用户完成判断；五类对象不是必须顺序访问的固定漏斗。
- 同一内容通过 `Make to Sell` 与 `Make for Fun` 等筛选满足不同动机，不强制用户选择身份。
- 卡片只展示帮助当前浏览决策的信息，详细工艺参数进入详情页。
- `AI Concept` 与 `Verified Print` 必须有清晰区分。
- 交互按钮必须有真实反馈；禁止只做不可点击的装饰按钮。

## 数据与内容

- Demo 使用本地模拟数据，不连接生产接口。
- 商业数据必须标注为估算值，不伪装成真实经营数据。
- 外部素材只用于内部 Demo，保留来源可替换性。
- 不写入密钥、Token、用户隐私或生产环境地址。

## 验证要求

每次较大修改后至少运行：

```bash
npm run build
```

交付前还需：

- 检查主要路由无白屏、无控制台阻断错误。
- 检查首页与五类核心详情页。
- 检查收藏、关注、搜索、筛选和 Studio 跳转提示。
- 检查 1440px 桌面视口的首页、列表页和核心详情页布局。

## 清理约定

- 临时截图和调试产物放在 `/tmp`，不进入项目目录。
- 不提交 `node_modules/`、`dist/`、系统缓存文件。
- 废弃组件确认无引用后再删除；删除操作必须先征得 Ryan 同意。
