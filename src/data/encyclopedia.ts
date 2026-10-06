export interface Term {
  slug: string;
  term: string;
  englishTerm: string;
  category: '线路原理' | '传输协议' | '订阅与配置' | '节点与计费' | '客户端与模式';
  summary: string;
  plainExplanation: string;
  whyUserNeedsToKnow: string;
  relatedProviders: string[];
  relatedTutorials: string[];
  relatedFaqs: string[];
}

export const terms: Term[] = [
  {
    slug: 'iplc',
    term: 'IPLC 专线',
    englishTerm: 'International Private Leased Circuit',
    category: '线路原理',
    summary: '国际私用出租线路，可以简单理解为跨境物理传输的“高速专用通道”。',
    plainExplanation: 'IPLC 相当于两地之间的直连点对点内网专线。数据不需要经过公网防火墙（GFW）的深层数据包检测（DPI），因此延迟极低且极度稳定，不会受特殊时期影响。',
    whyUserNeedsToKnow: '如果你对网络延迟要求极高，或者深夜/晚高峰看视频容易卡顿，优先选择包含 IPLC 专线的机场可以大幅提升连通体验。',
    relatedProviders: ['浪网', '飞猫云', 'EdgeNova 边缘节点', 'Sogo云', '飞为 Firefly'],
    relatedTutorials: ['/nodes/', '/beginner/'],
    relatedFaqs: ['IPLC 专线和 IEPL 专线有什么本质区别？', '为什么便宜机场和专线机场价格差距巨大？']
  },
  {
    slug: 'iepl',
    term: 'IEPL 专线',
    englishTerm: 'International Ethernet Private Line',
    category: '线路原理',
    summary: '国际乙太网专线，在二层以太网层面提供点对点私密传输通道。',
    plainExplanation: 'IEPL 与 IPLC 类似，也是一种不经过公网过过滤的独立跨境专线。它的灵活性更高，扩展性好，稳定性与 IPLC 基本持平。',
    whyUserNeedsToKnow: 'IEPL 与 IPLC 都是高端专线机场的代名词，购买套餐时两者效果接近，均优于普通公网直连节点。',
    relatedProviders: ['FlyV', '二猫云 2mao', 'U1S1', '光年梯'],
    relatedTutorials: ['/nodes/'],
    relatedFaqs: ['IPLC 专线和 IEPL 专线有什么本质区别？']
  },
  {
    slug: 'bgp',
    term: 'BGP 多线中转',
    englishTerm: 'Border Gateway Protocol',
    category: '线路原理',
    summary: '边界网关协议，能根据用户宽带运营商（电信/联通/移动）自动匹配最佳接入入口。',
    plainExplanation: '不同运营商的出海速度天差地别。BGP 节点就像一个智能交通枢纽，无论你是移动还是电信，都会自动引导你走最顺畅的入口进入机场内部网。',
    whyUserNeedsToKnow: '使用 BGP 中转的机场能有效缓解移动宽带打不开某些海外节点、或者电信晚高峰丢包严重的问题。',
    relatedProviders: ['浪网', '微风网络', '唯兔云 V2云', 'U1S1'],
    relatedTutorials: ['/nodes/'],
    relatedFaqs: ['如何根据运营商选择合适节点？', '什么是 BGP 入口与中转节点？']
  },
  {
    slug: 'vless',
    term: 'VLESS 协议',
    englishTerm: 'V2Ray Lightweight Encryption Protocol',
    category: '传输协议',
    summary: '新一代轻量化传输协议，去除了旧版复杂解密开销，传输效率更高。',
    plainExplanation: '比传统 VMess 协议更轻量、性能更好，配合 REALITY 技术能够实现出色的伪装，使得节点连接既快速又难以被拦截。',
    whyUserNeedsToKnow: '在相同的 VPS 服务器性能下，VLESS 节点能跑出更高的下载速度，在移动端也更加省电。',
    relatedProviders: ['浪网', '飞为 Firefly', 'FlyV', 'EdgeNova 边缘节点'],
    relatedTutorials: ['/beginner/'],
    relatedFaqs: ['VLESS 协议与 Trojan 协议相比哪个更好？']
  },
  {
    slug: 'trojan',
    term: 'Trojan 协议',
    englishTerm: 'Trojan Protocol',
    category: '传输协议',
    summary: '通过伪装成标准 HTTPS 网页流量来绕过检测的防封锁协议。',
    plainExplanation: 'Trojan 的核心逻辑是“伪装”。它把代理数据包包装得和你在淘宝或亚马逊购物时的加密 HTTPS 流量一模一样，防检测能力强。',
    whyUserNeedsToKnow: 'Trojan 节点在特殊时期表现相当稳健，如果你的常规 Shadowsocks 节点频繁失效，Trojan 是极佳备用方案。',
    relatedProviders: ['微风网络', '隐形人', 'Sogo云', '可信云'],
    relatedTutorials: ['/beginner/'],
    relatedFaqs: ['Trojan 协议为什么被称为模仿大师？', 'Trojan 节点在晚高峰抗封锁能力如何？']
  },
  {
    slug: 'hysteria2',
    term: 'Hysteria 2 协议',
    englishTerm: 'Hysteria 2 Protocol (UDP-based)',
    category: '传输协议',
    summary: '基于 UDP QUIC 开发的超高速暴力加速协议，特别适合弱网与高丢包环境。',
    plainExplanation: '传统 TCP 遇到丢包就会反复重传导致卡顿。Hysteria 2 采用定制 UDP 拥塞控制算法，即便在丢包率 20% 的拥挤线路上也能跑满带宽。',
    whyUserNeedsToKnow: '如果你的移动宽带或者晚高峰网络丢包严重，支持 Hysteria 2 的机场节点能大幅改善加载视频卡顿的问题。',
    relatedProviders: ['FlyV'],
    relatedTutorials: ['/beginner/'],
    relatedFaqs: ['什么是 Hysteria 2 协议？UDP 暴力加速原理？']
  },
  {
    slug: 'clash',
    term: 'Clash 客户端',
    englishTerm: 'Clash Client & Core',
    category: '客户端与模式',
    summary: '跨平台基于规则分流的知名代理客户端框架（衍生如 Clash Verge Rev / Stash 等）。',
    plainExplanation: 'Clash 可以根据规则决定：国内网站（如百度、淘宝）直连，海外网站（如 Google、YouTube）走机场代理，隐私或流媒体自动分流。',
    whyUserNeedsToKnow: 'Clash 是目前电脑端（Windows/Mac）使用最广泛的客户端，学会导入 Clash 订阅是小白入门机场的第一步。',
    relatedProviders: ['浪网', '飞猫云', 'FlyV', '二猫云 2mao', '梯子云'],
    relatedTutorials: ['/clients/windows/', '/clients/macos/'],
    relatedFaqs: ['什么是 Clash 订阅链接？', 'Clash 节点延迟显示 0ms 或 Timeout 是什么原因？']
  },
  {
    slug: 'shadowrocket',
    term: 'Shadowrocket (小火箭)',
    englishTerm: 'Shadowrocket iOS App',
    category: '客户端与模式',
    summary: 'iOS 平台最经典的轻量级网络代理软件，俗称“小火箭”。',
    plainExplanation: '只需在苹果 App Store（需美区或非中国区 Apple ID）下载，扫码或粘贴机场订阅，一键开启手机代理。',
    whyUserNeedsToKnow: 'iPhone 与 iPad 用户必备软件。支持节点自动测量延迟、规则分流与规则重定向。',
    relatedProviders: ['所有 28 个品牌全覆盖'],
    relatedTutorials: ['/clients/ios/'],
    relatedFaqs: ['iPhone / iPad 首次使用小火箭完整流程？', 'SS 协议在 iOS 小火箭上如何手动添加？']
  },
  {
    slug: 'node-multiplier',
    term: '节点倍率',
    englishTerm: 'Node Traffic Multiplier',
    category: '节点与计费',
    summary: '机场对不同节点结算流量时使用的扣费系数（如 1x, 0.5x, 3x, 5x）。',
    plainExplanation: '如果你在 3x 倍率节点下载了 1GB 的文件，你的套餐实际会被扣除 3GB 流量。1 倍率表示用 1GB 扣 1GB。',
    whyUserNeedsToKnow: '看套餐不能只看总 GB 数量。有的机场虽然给 1000GB，但速度快的节点全都是 5 倍率，实际相当于只有 200GB。浪网等机场标榜“全节点 1 倍率”即为实打实扣费。',
    relatedProviders: ['浪网', '二猫云 2mao', '飞猫云'],
    relatedTutorials: ['/plans/', '/beginner/'],
    relatedFaqs: ['机场的节点倍率是什么意思？', '为什么流量消耗突然变快？']
  },
  {
    slug: 'subscription-link',
    term: '订阅链接',
    englishTerm: 'Subscription URL',
    category: '订阅与配置',
    summary: '机场用来向客户端发放和更新节点配置信息的专属网址。',
    plainExplanation: '订阅链接就像是一张带有防伪印章的动态名片。你把它复制进 Clash 或小火箭，软件就会自动拉取最新的 50 个节点名称与 IP 地址。',
    whyUserNeedsToKnow: '切勿将订阅链接公开发布在社交平台。他人拿到你的订阅链接即可免费盗用你的套餐流量。',
    relatedProviders: ['所有 28 个品牌全覆盖'],
    relatedTutorials: ['/clients/'],
    relatedFaqs: ['什么是 Clash 订阅链接？', '订阅更新提示 404 或 Unauthorized 怎么解决？']
  }
];
