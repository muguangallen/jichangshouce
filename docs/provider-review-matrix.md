# 机场手册 - 服务商评审矩阵 (Provider Review Matrix)

本文档定义全站 28 个品牌的静态数据记录、排序逻辑及 Affiliate 合规标准。

## 一、品牌全景表 (28 Brands)

### 前六固定品牌 (Top 6 Fixed)
1. **浪网 (`langwang`)** - https://varnexa.wavenetaff.com/#/?code=B74yNBrX (VLESS, BGP, 自研客户端)
2. **暮光加速 (`muguang`)** - https://varnexa.twilightaff.com/#/?code=7JJkL0nQ (内部 source note 曾包含重复 https 前缀，已按统一正确公开链接处理)
3. **飞猫云 (`feimao`)** - https://flycat1.flycatvipaff.cc/#/?code=5x2GffAy (IPLC, 2.5Gbps, 多设备)
4. **微风网络 Breezenet (`breezenet`)** - https://edp01.breezenetaff.com/#/?code=I7kVjWNj (BGP 专线, 多节点)
5. **梯子云 (`laddercloud`)** - https://varnexa.ladderaff.com/#/?code=xYcmEPCS (高性价比, 大流量)
6. **隐形人 (`invisible`)** - https://varnexa.invisibleaff.com/#/?code=imh34Zc0 (隐密性专线, 备用首选)

### 第 7 名至第 28 名品牌 (Remaining 22 Fixed Order)
7. **飞为 Firefly (`firefly`)** - IPLC + VLESS
8. **FlyV (`flyv`)** - IEPL / Hysteria 2, 专属优惠码 `fly20`
9. **灵动云 (`lingdong`)** - 高速中转
10. **星岛梦 StarDream (`stardream`)** - 解锁流媒体与 AI
11. **光速云 LightSpeed (`lightspeed`)** - 高可用专线
12. **唯兔云 V2云 (`v2yun`)** - 稳定老牌中转
13. **U1S1 (`u1s1`)** - BGP + IEPL, 多设备支持
14. **极连云 (`jilian`)** - 便捷快连
15. **全球云 (`quanqiu`)** - 海外多区域覆盖
16. **光年梯 (`guangnian`)** - IPLC/IEPL, 大流量包
17. **Sogo云 (`sogoyun`)** - IPLC, 全平台支持
18. **宇宙云 YuZhou (`yuzhou`)** - 极致弹性套餐
19. **二猫云 2mao (`2mao`)** - IEPL, 60+ 节点, 不限设备
20. **一翻云 1fly (`1fly`)** - 翻墙稳定中转
21. **EdgeNova 边缘节点 (`edgenova`)** - IPLC, 2.5Gbps, 原生 IP
22. **可信云 (`kexinyun`)** - 安全稳定
23. **速界 SuJie (`sujie`)** - 低延迟线路
24. **快狸 KuaiLi (`kuaili`)** - 极速到账
25. **无忧 (`wuyou`)** - 无忧备用包
26. **灵猫 (`lingmao`)** - 灵活计费
27. **闪跃 FlashLeap (`flashleap`)** - 极速响应
28. **跨界 (`kuajie`)** - 跨境业务专用

## 二、排序与声明规则
- **排序确定性**: 首页与列表页严格按照上述 1~28 固定顺序渲染，禁止使用 `Math.random()` 客户端动态随机打乱。
- **缺失数据规则**: 缺少延迟/速度实测数据的品牌，统一在数据层填入 `null`，前端优雅渲染为“暂无测试数据”或“暂无公开信息”。
- **Affiliate 外链标准**: 凡商业入口、购买与注册链接，统一封装于 `<AffiliateLink>` 组件，强行附带 `target="_blank"` 与 `rel="sponsored nofollow noopener"` 属性。
