# 机场手册 - 导航与内容矩阵 (Navigation Content Matrix)

## 一、主导航矩阵 (Main Navigation Matrix)

| 导航名称 | 路由 URL | 核心职能 | 关联数据源 / 关联组件 | SEO/GEO 目标 |
| :--- | :--- | :--- | :--- | :--- |
| **机场推荐** | `/recommendations/` | 提供全局挑选坐标与框架 | `DecisionGuide.astro`, 编辑精选 | 覆盖“机场推荐”商业主词 |
| **新手入门** | `/beginner/` | 零基础普及概念与避坑 | 文章矩阵、术语词典 | 拦截小白信息检索词 |
| **套餐选择** | `/plans/` | 流量与预算精算模型 | 28 品牌套餐对比表 | 覆盖“机场套餐/月付/年付”意图 |
| **节点线路** | `/nodes/` | 地区与专线线路科普 | `encyclopedia.ts` | 覆盖“IPLC/IEPL/节点选择”意图 |
| **客户端教程** | `/clients/` | 跨平台软件下载与导入 | 4 大系统分类子路由 | 覆盖“Clash/小火箭教程”软件词 |
| **机场测评** | `/reviews/` | 品牌资料索引与评估方法 | `provider-review-matrix.md` | 覆盖“机场测评/跑路避坑” |
| **优惠信息** | `/coupons/` | 折扣码与限时活动 | `providers.ts` 中的 `coupon` 字段 | 覆盖“机场优惠码/便宜机场” |
| **常见问题** | `/faq/` | 100问完整解答库 | `faq.ts` 静态预渲染 | GEO / AI Search 结构化抓取 |
| **品牌服务库** | `/service/` | 28 大服务商完整索引 | `providers.ts` 28 品牌 Record | 品牌名搜索与导航查询 |

## 二、页脚导航矩阵 (Footer Matrix)

1. **主题合集**: 机场推荐 | 梯子推荐 | 魔法上网 | 节点专线 | 客户端导入
2. **知识库**: 网络术语词典 (`/encyclopedia/`) | 100个常见问题 (`/faq/`) | 预算计算器
3. **法律与规范**: Affiliate 透明度声明 | 隐私政策 | 免责声明
