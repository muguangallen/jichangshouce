export interface FaqItem {
  id: number;
  category: string;
  question: string;
  answerHtml: string;
  primaryKeyword: string;
  searchIntent: string;
}

export const faqs: FaqItem[] = [
  // 1. 机场推荐 / 选择 (18 题)
  {
    id: 1,
    category: '机场推荐 / 选择',
    question: '小白买机场应该先看哪些参数？',
    primaryKeyword: '机场推荐怎么选',
    searchIntent: '商业决策',
    answerHtml: `<p>第一次购买机场时，不要被虚夸的“千兆速率”或“上百个国家节点”所吸引。小白用户建议优先关注以下四个核心维度：</p>
    <ul>
      <li><strong>月流量配额与倍率：</strong>确认每月流量（如 150GB）是否够用，并检查节点是否有 3x 或 5x 的高倍率扣费陷阱。</li>
      <li><strong>付款周期与门槛：</strong>尽量选择支持<strong>月付</strong>的服务商（如 20~30 元/月），切忌一开始就购买数百元的大额年付套餐。</li>
      <li><strong>线路类型：</strong>区分普通公网直连与 BGP 中转 / IPLC 专线。晚高峰观看 4K 视频或使用 AI，专线线路体验明显更优。</li>
      <li><strong>客户端支持度：</strong>确认是否提供自研极简客户端，或者是否附带清晰的 Clash、小火箭导入图文教程。</li>
    </ul>`
  },
  {
    id: 2,
    category: '机场推荐 / 选择',
    question: '为什么不建议新手直接买大额年付套餐？',
    primaryKeyword: '机场年付风险',
    searchIntent: '风险防范',
    answerHtml: `<p>尽管很多机场的年付套餐折算下来月均价格很便宜，但直接购买大额年付存在以下不可忽视的风险：</p>
    <p>1. <strong>跑路与失联风险：</strong>网络服务商的运营成本（如专线租金、服务器运维）随政策与成本波动，部分缺乏实力的机场可能中途关站跑路。</p>
    <p>2. <strong>线路质量变动：</strong>某些机场在前期推广时速度极快，随着用户激增而未及时扩容，晚高峰速度可能严重下滑。</p>
    <p>3. <strong>运营商封锁：</strong>特殊时期某些 IP 可能会被阻断，年付用户往往面临退费无门的情况。因此新手强烈建议先月付体验 1~3 个月。</p>`
  },
  {
    id: 3,
    category: '机场推荐 / 选择',
    question: '便宜机场和高端专线机场差距在哪里？',
    primaryKeyword: '性价比机场推荐',
    searchIntent: '预算比较',
    answerHtml: `<p>10元/月的便宜机场与40元/月的高端专线机场，核心差距在于<strong>网络入口与传输介质</strong>：</p>
    <ul>
      <li><strong>便宜机场（公网直连/普通中转）：</strong>数据直接在公网上出海，晚高峰（20:00~23:00）极易受到运营商 QOS 限速，丢包率高达 15%~30%，看视频容易频繁缓冲。</li>
      <li><strong>高端机场（IPLC/IEPL 内网专线）：</strong>数据走跨境物理内网专线出海，不过公网防火墙深层检测，丢包率趋近于 0%，延迟极低且全天候平稳。</li>
    </ul>`
  },
  {
    id: 4,
    category: '机场推荐 / 选择',
    question: '如何判断一家机场是否稳定？',
    primaryKeyword: '稳定机场推荐',
    searchIntent: '评估方法',
    answerHtml: `<p>判断一家机场是否稳定，可以观察以下几个标志性特征：</p>
    <p>1. <strong>线路冗余度：</strong>是否具备多个 BGP 入口与备用专线，出现打雷断纤或机房故障时能否秒级自动切换。</p>
    <p>2. <strong>运营时长与口碑：</strong>运营 1~2 年以上的老牌服务商比新开张一周的“性价比爆款”可靠得多。</p>
    <p>3. <strong>客服与 Telegram 交流群活跃度：</strong>出现节点波动时，官方是否有通告并迅速修复，工单响应速度是否正常。</p>`
  },
  {
    id: 5,
    category: '机场推荐 / 选择',
    question: '月流量 100GB 到底够不够用？',
    primaryKeyword: '机场套餐流量',
    searchIntent: '消费规划',
    answerHtml: `<p>100GB 月流量是否够用完全取决于你的日常使用场景：</p>
    <ul>
      <li><strong>轻度上网党（够用）：</strong>仅用于查阅网页、使用 ChatGPT/Claude、微信/Telegram 聊天、看 Twitter，每月消耗通常在 15GB~40GB 之间。</li>
      <li><strong>中度视频党（勉强）：</strong>看 1080P 高清视频每小时消耗约 1.5GB~3GB，每天看 1~2 小时，100GB 刚好够用。</li>
      <li><strong>重度 4K 党（不够）：</strong>YouTube / Netflix 的 4K 串流每小时消耗 7GB~12GB，建议选择 300GB 以上的大流量套餐。</li>
    </ul>`
  },
  {
    id: 6,
    category: '机场推荐 / 选择',
    question: '机场的节点倍率是什么意思？',
    primaryKeyword: '节点倍率',
    searchIntent: '概念理解',
    answerHtml: `<p>节点倍率是机场对用户结算流量时使用的扣费系数：</p>
    <p>• <strong>1.0x 倍率（标准）：</strong>使用 1GB 结算 1GB 流量。</p>
    <p>• <strong>0.5x 倍率（优惠）：</strong>使用 1GB 只扣除 0.5GB 流量，常用于冷门节点或下载专用节点。</p>
    <p>• <strong>3.0x / 5.0x 倍率（高消耗）：</strong>使用 1GB 实际会被扣除 3GB 或 5GB 流量。通常用于顶级 IPLC 专线或极速 8K 节点。选购套餐时切记留意节点列表中是否有隐藏的高倍率。</p>`
  },
  {
    id: 7,
    category: '机场推荐 / 选择',
    question: '购买机场前需要测试哪些功能？',
    primaryKeyword: '机场试用',
    searchIntent: '购买指导',
    answerHtml: `<p>首次购买月付套餐或试用包后，建议进行以下三项关键测试：</p>
    <p>1. <strong>晚高峰（21:00）速度测试：</strong>在上网最拥堵的时段打开 YouTube 播放 4K 视频，观察 Connection Speed 是否稳定在 50,000 Kbps 以上。</p>
    <p>2. <strong>流媒体与 AI 解锁测试：</strong>测试香港/日本/美国节点能否正常登录 ChatGPT 及播放 Netflix 独播剧集。</p>
    <p>3. <strong>全天连通稳定性：</strong>观察是否有频繁断连、节点响应超时（Timeout）等情况。</p>`
  },
  {
    id: 8,
    category: '机场推荐 / 选择',
    question: '多设备家庭用户怎么挑机场？',
    primaryKeyword: '多设备机场',
    searchIntent: '场景匹配',
    answerHtml: `<p>多设备家庭用户（如手机、电脑、iPad、Apple TV 电视盒同时在线）挑选机场时，重点看<strong>设备连接政策（Device Limit）</strong>：</p>
    <p>优先选择像<strong>飞猫云</strong>、<strong>二猫云 2mao</strong> 等支持 5~8 台设备或“不限设备数量”的服务商。如果机场限制只能 2 台设备在线，多设备登录会导致先登录的设备被强制踢下线或封禁订阅。</p>`
  },
  {
    id: 9,
    category: '机场推荐 / 选择',
    question: '自研客户端机场适合新手吗？',
    primaryKeyword: '自研客户端机场',
    searchIntent: '工具选择',
    answerHtml: `<p>非常适合。对于零基础小白来说，配置 Clash Verge、Shadowrocket 需要解压、粘贴订阅 URL、选择规则模式等步骤，门槛较高。</p>
    <p>像<strong>浪网</strong>等提供自研一键客户端的服务商，下载软件后输入账号密码即可直接连接，大大降低了新手上手门槛。后期熟悉后再切换到 Clash 等通用客户端即可。</p>`
  },
  {
    id: 10,
    category: '机场推荐 / 选择',
    question: '独立 IP 机场适合哪些业务？',
    primaryKeyword: '独立IP机场',
    searchIntent: '业务场景',
    answerHtml: `<p>常规机场节点都是成百上千人共享同一个公网 IP，容易触发验证码。独立 IP（或定制专线）适合以下高敏感业务：</p>
    <ul>
      <li><strong>TikTok 跨境运营/直播：</strong>避免因共享 IP 被关联封号。</li>
      <li><strong>海外电商风控：</strong>亚马逊、Shopify 店铺后台登录。</li>
      <li><strong>AI 开发与 API 调用：</strong>防范 OpenAI 针对共享机房 IP 的批量封号。</li>
    </ul>`
  },
  {
    id: 11,
    category: '机场推荐 / 选择',
    question: '跑路概率高的机场有什么特征？',
    primaryKeyword: '机场跑路预警',
    searchIntent: '安全防范',
    answerHtml: `<p>跑路风险高的机场通常具有以下特征，遇到请提高警惕：</p>
    <p>1. <strong>无理超低价年付：</strong>如“9.9 元包年 1000GB/月”，价格严重违背服务器与带宽成本。</p>
    <p>2. <strong>客服与沟通渠道缺失：</strong>无 Telegram 交流群，工单数天无人回复。</p>
    <p>3. <strong>频繁更换域名且未通知：</strong>主站频繁打不开且没有任何故障公告。</p>`
  },
  {
    id: 12,
    category: '机场推荐 / 选择',
    question: '如何根据运营商选择合适节点？',
    primaryKeyword: '运营商节点匹配',
    searchIntent: '网络调优',
    answerHtml: `<p>中国三大运营商的出海路由特点不同：</p>
    <p>• <strong>中国电信：</strong>国际出口拥堵，优先选择 IPLC 专线或 CN2 GIA/BGP 中转节点。</p>
    <p>• <strong>中国联通：</strong>出海宽带相对充裕，直连与普通 BGP 中转体验均较好。</p>
    <p>• <strong>中国移动：</strong>移动出海限制多、经常拦截特定 IP，建议优先选择移动专线入口或支持 Hysteria 2 协议的节点。</p>`
  },
  {
    id: 13,
    category: '机场推荐 / 选择',
    question: '出差党备用机场怎么买最划算？',
    primaryKeyword: '备用机场推荐',
    searchIntent: '灵活消费',
    answerHtml: `<p>对于经常出差、或者主用机场出现故障时临时救急的用户，最划算的购买方式是<strong>不限时流量包（一次性计费包）</strong>。</p>
    <p>例如浪网等机场提供的一次性流量包，购买后流量不会在月底被清零，只要账号有效就可以放半年甚至一年，用多少扣多少，非常适合作为防失联的第二备用机场。</p>`
  },
  {
    id: 14,
    category: '机场推荐 / 选择',
    question: '游戏加速需要专门买游戏机场吗？',
    primaryKeyword: '游戏加速推荐',
    searchIntent: '场景匹配',
    answerHtml: `<p>外服外网游戏（如 Steam 亚服、英雄联盟台服、绝地求生）对<strong>延迟（Ping）与丢包率</strong>极度敏感。普通的 HTTP/Web 机场节点未经 UDP 转发优化，容易出现游戏断连。</p>
    <p>如果主要打游戏，建议选择支持 UDP 转发且具备 IPLC 专线（延迟稳定在 30ms~50ms）的机场，或配合 UU、奇游等专用游戏加速器使用。</p>`
  },
  {
    id: 15,
    category: '机场推荐 / 选择',
    question: 'ChatGPT 频繁封 IP 怎么选机场？',
    primaryKeyword: 'AI机场推荐',
    searchIntent: '场景匹配',
    answerHtml: `<p>ChatGPT 与 Claude 等 AI 平台对数据中心 IP 风控极严。选择支持 AI 工具的机场应关注：</p>
    <p>1. 节点是否具备<strong>住宅 IP (Residential IP) / 原生 IP</strong> 解锁。</p>
    <p>2. 机场官方是否有专门针对 OpenAI 优化的节点组（通常标记为 OpenAI / ChatGPT 专用）。</p>`
  },
  {
    id: 16,
    category: '机场推荐 / 选择',
    question: '4K 视频重度用户月流量要买多少？',
    primaryKeyword: '4K视频机场流量',
    searchIntent: '流量精算',
    answerHtml: `<p>YouTube / Netflix 的 4K 60fps 串流码率通常在 25Mbps~45Mbps 之间：</p>
    <p>• 观看 1 小时约消耗 <strong>7GB ~ 12GB</strong> 流量。</p>
    <p>• 如果每天观看 2 小时 4K 视频，单月仅视频消耗就高达 400GB~600GB。重度用户建议直接购买 <strong>400GB/月~800GB/月</strong> 的进阶或高端套餐。</p>`
  },
  {
    id: 17,
    category: '机场推荐 / 选择',
    question: '免费梯子和付费机场有什么本质区别？',
    primaryKeyword: '免费梯子vs付费机场',
    searchIntent: '安全普及',
    answerHtml: `<p>俗话说“免费的往往是最昂贵的”。免费梯子与付费机场有三大本质区别：</p>
    <p>1. <strong>安全与隐私：</strong>免费梯子通常通过出售用户的浏览历史、插入弹窗广告甚至注入恶意代码盈利。</p>
    <p>2. <strong>速率与稳定性：</strong>免费梯子几万人挤一条挤爆的公网宽带，速度极慢；付费机场租用专用 BGP / IPLC 线路。</p>
    <p>3. <strong>解锁能力：</strong>免费 IP 基本已被 Google、Netflix、ChatGPT 全线封锁。</p>`
  },
  {
    id: 18,
    category: '机场推荐 / 选择',
    question: '机场退款政策通常是怎样的？',
    primaryKeyword: '机场退款规则',
    searchIntent: '维权了解',
    answerHtml: `<p>由于网络数字商品的特殊性，大部分机场<strong>不支持无理由退款</strong>，或者仅在以下条件满足时才允许退款：</p>
    <p>• 购买 24 小时内且已用流量小于 1GB / 5GB。</p>
    <p>• 因机场全站技术故障导致所有节点超过 48 小时完全无法连通。</p>
    <p>购买前请务必先仔细阅读服务商的 TOS 服务条款。</p>`
  },

  // 2. Clash / 订阅 (14 题)
  {
    id: 19,
    category: 'Clash / 订阅',
    question: '什么是 Clash 订阅链接？',
    primaryKeyword: 'Clash订阅原理',
    searchIntent: '概念科普',
    answerHtml: `<p>Clash 订阅链接是机场生成的一串包含加密 Token 的网络 URL。在 Clash 软件中输入该 URL 后，软件会自动下载格式为 YAML 的配置文件，里面包含了最新的服务器节点列表、加密协议、密钥以及分流路由规则。</p>`
  },
  {
    id: 20,
    category: 'Clash / 订阅',
    question: 'Clash 订阅导入失败显示 Invalid URL 怎么解决？',
    primaryKeyword: 'Clash导入报错',
    searchIntent: '排障教程',
    answerHtml: `<p>出现 Invalid URL 或 Network Error 错误通常由以下原因造成：</p>
    <p>1. <strong>复制了多余字符：</strong>检查链接开头或结尾是否有空格、换行符或中文标点。</p>
    <p>2. <strong>官网订阅域名被墙：</strong>开启已有代理后再尝试更新订阅，或联系客服获取备用订阅域名。</p>
    <p>3. <strong>使用了不支持的客户端：</strong>确认链接是标准 Clash 格式还是小火箭格式，必要时使用机场面板内置的“一键导入 Clash”功能。</p>`
  },
  {
    id: 21,
    category: 'Clash / 订阅',
    question: 'Clash Verge 与 Clash Nyanpasu 有什么区别？',
    primaryKeyword: 'Clash分支版本',
    searchIntent: '工具选择',
    answerHtml: `<p>原版 Clash Premium 停止维护后，衍生出了几个主流开源 UI 分支：</p>
    <p>• <strong>Clash Verge Rev：</strong>基于 Tauri 框架开发，界面现代美观，内存占用极低，目前 Windows / Mac 平台最推荐的开源客户端。</p>
    <p>• <strong>Clash Nyanpasu：</strong>支持 Mihomo (Clash Meta) 内核的高颜值开源客户端，自定义功能丰富。</p>`
  },
  {
    id: 22,
    category: 'Clash / 订阅',
    question: '如何开启 Clash 的 TUN 模式？',
    primaryKeyword: 'Clash TUN模式',
    searchIntent: '软件设置',
    answerHtml: `<p>TUN 模式（虚拟网卡模式）可以接管整台电脑的所有网络流量（包括不支持系统代理的软件、UWP 应用与终端命令行）：</p>
    <p>1. 在 Clash Verge 主界面找到“Service Mode”（服务模式）并点击 Install 安装服务。</p>
    <p>2. 开启“TUN Mode”开关即可。开启后打游戏或在 CMD 终端使用 curl / git 均会自动走代理。</p>`
  },
  {
    id: 23,
    category: 'Clash / 订阅',
    question: 'Clash 节点延迟显示 0ms 或 Timeout 是什么原因？',
    primaryKeyword: 'Clash节点超时',
    searchIntent: '排障教程',
    answerHtml: `<p>• <strong>显示 0ms：</strong>通常是由于 DNS 解析失败或本地网络完全未联通。</p>
    <p>• <strong>显示 Timeout：</strong>说明本地到该服务器节点的 IP 连接超时，可能该节点服务器宕机、正在维护或 IP 被阻断。可右键更新订阅或切换到其他正常节点。</p>`
  },
  {
    id: 24,
    category: 'Clash / 订阅',
    question: 'Clash 订阅转换安全吗？需要注意什么？',
    primaryKeyword: 'Clash订阅转换',
    searchIntent: '安全隐私',
    answerHtml: `<p>在线订阅转换（将 SS / VLESS 转换成 Clash 格式）存在<strong>第三方服务器泄漏订阅 Token</strong> 的风险。建议：</p>
    <p>1. 优先使用机场官网面板自带的一键 Clash 转换导出。</p>
    <p>2. 如需第三方转换，选择已知开源且声誉良好的公共转换站，或自己使用 Docker 本地搭建 subconverter 转换工具。</p>`
  },
  {
    id: 25,
    category: 'Clash / 订阅',
    question: '如何在 Clash 中配置规则分流？',
    primaryKeyword: 'Clash分流规则',
    searchIntent: '进阶设置',
    answerHtml: `<p>Clash 默认预装了智能分流规则：</p>
    <p>• <strong>Rule（规则模式）：</strong>国内网站直连，海外被封锁网站走代理（推荐日常使用）。</p>
    <p>• <strong>Global（全局模式）：</strong>所有流量全部强制走所选节点。</p>
    <p>• <strong>Direct（直连模式）：</strong>绕过代理，直接使用本地宽带冲浪。</p>`
  },
  {
    id: 26,
    category: 'Clash / 订阅',
    question: 'Clash 的 Rule 模式与 Global 模式有什么区别？',
    primaryKeyword: 'Clash模式区别',
    searchIntent: '概念科普',
    answerHtml: `<p>Rule 模式会根据匹配规则列表自动判断：访问淘宝/微信走本地网络，速度最快且省流量；访问 YouTube 自动切到节点。Global 模式则不分青红皂白把所有流量都发往海外节点，容易导致访问国内网页极慢甚至弹出异地登录安全警报。</p>`
  },
  {
    id: 27,
    category: 'Clash / 订阅',
    question: 'Clash 自动更新订阅失败怎么处理？',
    primaryKeyword: 'Clash订阅更新',
    searchIntent: '排障教程',
    answerHtml: `<p>更新失败时：1. 先开启现有的可联通节点代理，再点击更新。2. 如果原域名已失效，登录机场官网重新复制最新的订阅 URL。3. 检查软件是否设置了过短的更新频率被服务器防火墙拦截。</p>`
  },
  {
    id: 28,
    category: 'Clash / 订阅',
    question: '局域网内其他设备如何共享 Clash 代理？',
    primaryKeyword: 'Clash局域网共享',
    searchIntent: '进阶设置',
    answerHtml: `<p>在电脑端 Clash 开启“Allow LAN”（允许局域网连接）选项。然后在同一 Wi-Fi 下的手机或 PS5 游戏机网络设置中，手动添加 HTTP 代理，IP 填写电脑的局域网 IP（如 192.168.1.X），端口填写 Clash 提示的端口（默认 7890）。</p>`
  },
  {
    id: 29,
    category: 'Clash / 订阅',
    question: 'Clash 占用内存过高怎么优化？',
    primaryKeyword: 'Clash性能优化',
    searchIntent: '软件设置',
    answerHtml: `<p>1. 升级内核至最新版 Mihomo (Clash Meta)。2. 在配置中关闭不需要的连接日志打印（Log Level 设为 Error）。3. 减少节点列表中数千个无效或重复节点的冗余载入。</p>`
  },
  {
    id: 30,
    category: 'Clash / 订阅',
    question: '为什么 Clash 开启后电脑无法正常上网？',
    primaryKeyword: 'Clash断网排障',
    searchIntent: '排障教程',
    answerHtml: `<p>经典问题：通常是因为 Clash 非正常退出（如电脑直接关机或强制杀掉进程），导致 Windows 系统代理未正常关掉。解决方法：打开 Windows 设置 -> 网络和 Internet -> 代理，关闭“使用代理服务器”手动开关即可恢复。</p>`
  },
  {
    id: 31,
    category: 'Clash / 订阅',
    question: '如何在 Mac 平台上优雅使用 Stash / Clash？',
    primaryKeyword: 'Mac Clash配置',
    searchIntent: '平台教程',
    answerHtml: `<p>Mac 用户推荐使用 <strong>Stash for macOS</strong> 或 <strong>Clash Verge Rev (macOS 版)</strong>。支持原生 Apple Silicon (M1/M2/M3) 芯片架构，配合菜单栏快捷控制开关，体验非常丝滑。</p>`
  },
  {
    id: 32,
    category: 'Clash / 订阅',
    question: 'Clash 配置文件格式损坏怎么修复？',
    primaryKeyword: 'Clash YAML修复',
    searchIntent: '排障教程',
    answerHtml: `<p>删除当前损坏的配置文件，重新从机场面板复制最新的订阅链接重新下载。避免手动修改 YAML 文本时混入不合规的缩进空格或中文全角字符。</p>`
  },

  // 3. SS (Shadowsocks) (10 题)
  {
    id: 33,
    category: 'SS',
    question: 'Shadowsocks (SS) 协议现在还安全稳定吗？',
    primaryKeyword: 'SS协议安全性',
    searchIntent: '技术理解',
    answerHtml: `<p>标准的原始 SS 协议如果直接搭建在公网上出海，容易被识别阻断。但如果结合<strong>BGP 中转或 IPLC 专线</strong>，SS 协议因为轻量、开销小、兼容性极佳，依然是各大机场最主流且稳健的传输协议之一。</p>`
  },
  {
    id: 34,
    category: 'SS',
    question: 'SS 协议与 AEAD 加密方式是什么原理？',
    primaryKeyword: 'SS AEAD加密',
    searchIntent: '技术普及',
    answerHtml: `<p>AEAD（如 chacha20-ietf-poly1305 或 aes-256-gcm）赋予了 SS 协议认证加密能力。它不仅加密内容，还防止密文被主动探测与篡改，极大提升了防拦截安全性。</p>`
  },
  {
    id: 35,
    category: 'SS',
    question: '为什么有的 SS 节点不需要复杂伪装？',
    primaryKeyword: 'SS中转节点',
    searchIntent: '线路原理',
    answerHtml: `<p>因为这些 SS 节点的数据运行在机场租用的内部中转隧道或 IPLC 专线上。数据在过境前就已经在内网完成传输，因此不需要像公网直连节点那样做复杂的伪装。</p>`
  },
  {
    id: 36,
    category: 'SS',
    question: 'SS 协议在 iOS 小火箭上如何手动添加？',
    primaryKeyword: 'SS小火箭添加',
    searchIntent: '手动配置',
    answerHtml: `<p>打开 Shadowrocket -> 点击右上角“+”号 -> 类型选择 Shadowsocks -> 依次填入服务器 IP、端口、密码与加密方式（如 aes-256-gcm），点击保存即可。</p>`
  },
  {
    id: 37,
    category: 'SS',
    question: 'SS 协议在软路由 OpenWrt 上兼容性如何？',
    primaryKeyword: 'SS软路由兼容',
    searchIntent: '硬件部署',
    answerHtml: `<p>兼容性极佳。几乎所有软路由插件（PassWall、ShadowsocksR Plus+、Clash）均原生无缝支持 SS 协议，硬件 CPU 占用低。</p>`
  },
  {
    id: 38,
    category: 'SS',
    question: 'SS 协议容易被封锁吗？',
    primaryKeyword: 'SS封锁风险',
    searchIntent: '网络安全',
    answerHtml: `<p>公网直连的裸 SS 协议极易被墙。但只要机场配置了中转或专线入口，SS 协议就非常安全稳定。</p>`
  },
  {
    id: 39,
    category: 'SS',
    question: 'SS 2022 新标准提升了哪些性能？',
    primaryKeyword: 'SS 2022协议',
    searchIntent: '技术演进',
    answerHtml: `<p>SS 2022 规范重新设计了握手协议与重放保护机制，降低了延迟并进一步提升了抗主动探测的能力。</p>`
  },
  {
    id: 40,
    category: 'SS',
    question: '单端口多用户 SS 模式是什么？',
    primaryKeyword: 'SS架构模式',
    searchIntent: '技术普及',
    answerHtml: `<p>机场常用的后端架构，所有用户共享一个服务器端口，通过不同的密码和 Token 区分流量结算，节省服务端资源。</p>`
  },
  {
    id: 41,
    category: 'SS',
    question: 'SS 节点 UDP 转发支持打游戏吗？',
    primaryKeyword: 'SS UDP转发',
    searchIntent: '场景匹配',
    answerHtml: `<p>只要机场服务端与客户端开启了 UDP 转发支持，SS 节点即可用于语音通话和游戏连麦。</p>`
  },
  {
    id: 42,
    category: 'SS',
    question: 'SS 节点链接 ss:// 包含哪些参数？',
    primaryKeyword: 'SS URi格式',
    searchIntent: '参数解析',
    answerHtml: `<p>包含了 Base64 编码的加密方式、密码、服务器地址、端口号以及节点名称（#号后的备注）。</p>`
  },

  // 4. Trojan (10 题)
  {
    id: 43,
    category: 'Trojan',
    question: 'Trojan 协议为什么被称为模仿大师？',
    primaryKeyword: 'Trojan协议原理',
    searchIntent: '技术科普',
    answerHtml: `<p>Trojan 放弃了传统复杂的加密识别特征，直接模仿互联网上最常见的 HTTPS 流量。墙去探测时，Trojan 服务器会返回一个真实的普通网页，从而实现隐匿。</p>`
  },
  {
    id: 44,
    category: 'Trojan',
    question: 'Trojan 协议需要绑定真实域名吗？',
    primaryKeyword: 'Trojan TLS域名',
    searchIntent: '伪装原理',
    answerHtml: `<p>是的。Trojan 依赖标准 TLS 证书，服务端必须绑定一个有效的域名并配置 SSL 证书才能正常工作。</p>`
  },
  {
    id: 45,
    category: 'Trojan',
    question: 'Trojan 与 VLESS 协议相比哪个更好？',
    primaryKeyword: 'Trojan vs VLESS',
    searchIntent: '协议对比',
    answerHtml: `<p>两者都是目前最出色的代理协议。Trojan 标准化程度高、兼容性好；VLESS 性能开销更低，结合 REALITY 技术时无需自备域名。</p>`
  },
  {
    id: 46,
    category: 'Trojan',
    question: 'Trojan 节点在晚高峰抗封锁能力如何？',
    primaryKeyword: 'Trojan抗封锁',
    searchIntent: '稳定性分析',
    answerHtml: `<p>抗封锁能力极强。在公网直连线路中，Trojan 的存活率明显高于旧版 Shadowsocks。</p>`
  },
  {
    id: 47,
    category: 'Trojan',
    question: '如何检查 Trojan 节点的 TLS 证书是否有效？',
    primaryKeyword: 'Trojan证书检查',
    searchIntent: '故障排查',
    answerHtml: `<p>客户端通常有“允许不安全证书 (Allow Insecure)”选项。如果机场服务端证书过期，开启该选项可临时应急，但建议联系客服更新证书。</p>`
  },
  {
    id: 48,
    category: 'Trojan-Go 特点',
    question: 'Trojan-Go 相比标准 Trojan 增加了哪些功能？',
    primaryKeyword: 'Trojan-Go特点',
    searchIntent: '技术进阶',
    answerHtml: `<p>Trojan-Go 增加了多路复用 (Mux)、websocket 传输以及路由分流支持，提高了并发传输效率。</p>`
  },
  {
    id: 49,
    category: 'Trojan',
    question: '在 Shadowrocket 中导入 Trojan 节点步骤？',
    primaryKeyword: 'Trojan小火箭导入',
    searchIntent: '软件教程',
    answerHtml: `<p>扫描机场提供的 trojan:// 格式二维码，或者点击订阅链接一键同步导入即可。</p>`
  },
  {
    id: 50,
    category: 'Trojan',
    question: 'Trojan 节点在软路由 PassWall 中的设置要点？',
    primaryKeyword: 'Trojan Passwall',
    searchIntent: '软路由教程',
    answerHtml: `<p>确保 PassWall 的 Trojan 依赖组件完整，节点配置中的 SNI 域名与节点提供的证书域名保持一致。</p>`
  },
  {
    id: 51,
    category: 'Trojan',
    question: 'Trojan 协议对 VPS 性能消耗大吗？',
    primaryKeyword: 'Trojan资源消耗',
    searchIntent: '性能评估',
    answerHtml: `<p>因为涉及 TLS 加解密，CPU 消耗略高于 SS，但现代 CPU 加速指令集已使其开销几乎可以忽略。</p>`
  },
  {
    id: 52,
    category: 'Trojan',
    question: '为什么 Trojan 节点有时握手延迟较高？',
    primaryKeyword: 'Trojan TLS握手',
    searchIntent: '排障分析',
    answerHtml: `<p>首次连接需要完成 TLS 三次握手过程。开启客户端多路复用 (Mux) 功能可有效降低后续请求的握手开销。</p>`
  },

  // 5. 梯子 / 魔法机场 / 魔法上网 (8 题)
  {
    id: 53,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '梯子和机场是一回事吗？',
    primaryKeyword: '梯子与机场区别',
    searchIntent: '概念澄清',
    answerHtml: `<p>在日常语境中两者常混用。“梯子”是早年间对所有翻墙软件（如 VPN、Lantern）的通俗统称；“机场”则是特指采用 Shadowsocks/V2Ray/Clash 协议架构、提供几十上百个节点与订阅链接的服务商。</p>`
  },
  {
    id: 54,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '什么是“魔法上网”？小白入门基本流程？',
    primaryKeyword: '魔法上网入门',
    searchIntent: '流程指南',
    answerHtml: `<p>“魔法上网”是网友对科学上网的幽默代称。小白入门仅需三步：1. 选择并购买一个机场月付套餐。2. 在手机或电脑下载对应客户端（如 Clash 或小火箭）。3. 导入机场订阅链接并选择节点开启连接。</p>`
  },
  {
    id: 55,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '使用魔法机场会泄露个人隐私或账号安全吗？',
    primaryKeyword: '魔法上网安全',
    searchIntent: '隐私科普',
    answerHtml: `<p>现代网站全站采用 HTTPS 强加密。机场只能看到你访问了哪个域名（如 google.com），但绝不可能看到你在网站内部输入的账号密码或支付信息。注意切勿在不信任的免费梯子上进行敏感操作即可。</p>`
  },
  {
    id: 56,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '自己搭建梯子好还是买付费机场好？',
    primaryKeyword: '自建梯子vs买机场',
    searchIntent: '决策对比',
    answerHtml: `<p>自建 VPS 成本高（单台 VPS 约 $5/月）、单 IP 极易被墙且没有专线加速；付费机场几十个节点共享专线成本，性价比与稳定性远高于自建。</p>`
  },
  {
    id: 57,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '为什么公共免费梯子非常危险？',
    primaryKeyword: '免费梯子风险',
    searchIntent: '安全提醒',
    answerHtml: `<p>免费梯子往往通过中间人攻击注入广告、偷窃设备剪贴板、甚至贩卖用户真实 IP 作为黑客肉鸡，存在极高安全风险。</p>`
  },
  {
    id: 58,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '魔法上网过程中手机电池消耗快怎么办？',
    primaryKeyword: '魔法上网耗电优化',
    searchIntent: '性能调优',
    answerHtml: `<p>代理软件在后台需要持续解析数据包。建议切换为更省电的 VLESS / SS 协议节点，或者关闭不必要的实时日志打印。</p>`
  },
  {
    id: 59,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '在国内使用魔法机场法律风险有哪些？',
    primaryKeyword: '魔法上网合规与安全',
    searchIntent: '法律常识',
    answerHtml: `<p>遵循“文明上网”原则。仅用于正常学习、查阅学术资料、代码开发或追剧，切勿浏览、传播非法违法信息。</p>`
  },
  {
    id: 60,
    category: '梯子 / 魔法机场 / 魔法上网',
    question: '更换网络服务商（如电信换移动）对梯子有影响吗？',
    primaryKeyword: '宽带运营商梯子匹配',
    searchIntent: '网络常识',
    answerHtml: `<p>会有一定影响。不同运营商的出海出口不同，如果使用的是包含 BGP 智能中转的机场，机场会自动为你适配最佳移动/电信入口。</p>`
  },

  // 6. 节点 / 地区 / 线路 (14 题)
  {
    id: 61,
    category: '节点 / 地区 / 线路',
    question: 'IPLC 专线和 IEPL 专线有什么本质区别？',
    primaryKeyword: 'IPLC与IEPL区别',
    searchIntent: '专线科普',
    answerHtml: `<p>两者均为跨境私用内网专线。IPLC 作用于物理电路层，IEPL 作用于以太网二层。在实际使用体验中，两者均具备极低延迟与零丢包特性，无需纠结区别。</p>`
  },
  {
    id: 62,
    category: '节点 / 地区 / 线路',
    question: '为什么香港节点延迟最低，但有时打不开某些网站？',
    primaryKeyword: '香港节点特点',
    searchIntent: '节点选择',
    answerHtml: `<p>香港物理距离最近，物理延迟通常仅 10ms~30ms。但某些海外服务（如 ChatGPT 或部分锁区手游）封锁了香港 IP 区段，此时需要切换到日本或新加坡节点。</p>`
  },
  {
    id: 63,
    category: '节点 / 地区 / 线路',
    question: '日本、新加坡、韩国节点分别适合什么场景？',
    primaryKeyword: '节点地区匹配',
    searchIntent: '场景选择',
    answerHtml: `<p>• <strong>日本节点：</strong>延迟低且稳定，解锁 DMM、Pixiv、Anime 及 ChatGPT。<br>• <strong>新加坡节点：</strong>东南亚服务器中转，完美解锁 Disney+ 及 TikTok。<br>• <strong>韩国节点：</strong>适合玩韩服手游及访问特定韩国网站。</p>`
  },
  {
    id: 64,
    category: '节点 / 地区 / 线路',
    question: '美国节点延迟高，为什么大家看视频都选它？',
    primaryKeyword: '美国节点优势',
    searchIntent: '流媒体选择',
    answerHtml: `<p>美国节点的带宽资源极其丰富且成本低，加上原生 IP 库庞大，极少出现视频锁区或画质被降级的问题。</p>`
  },
  {
    id: 65,
    category: '节点 / 地区 / 线路',
    question: '什么是 BGP 入口与中转节点？',
    primaryKeyword: 'BGP中转原理',
    searchIntent: '线路解析',
    answerHtml: `<p>BGP 节点在靠近用户端机房设置多个运营商入口，收集流量后再通过内部加密隧道统一发往海外出口节点，能有效解决公网卡顿。</p>`
  },
  {
    id: 66,
    category: '节点 / 地区 / 线路',
    question: '直连节点（如 CN2 GIA/9929）还值得买吗？',
    primaryKeyword: '直连线路评价',
    searchIntent: '线路对比',
    answerHtml: `<p>CN2 GIA (电信) 与 9929 (联通) 是公网优质直连线路，在非特殊时期体验良好，但在大促或特殊敏感期依然存在阻断风险。</p>`
  },
  {
    id: 67,
    category: '节点 / 地区 / 线路',
    question: '为什么节点延迟显示的 ms 数字不能代表下载速度？',
    primaryKeyword: '延迟与速度区别',
    searchIntent: '技术科普',
    answerHtml: `<p>延迟 (Ping) 表示数据来回的响应时间快慢；下载速度 (Mbps) 表示管道的水流量大小。延迟低只代表网页打开响应快，看 4K 视频依然取决于带宽大小。</p>`
  },
  {
    id: 68,
    category: '节点 / 地区 / 线路',
    question: '什么是原生 IP (Residential IP)？为什么解锁 AI 需要它？',
    primaryKeyword: '原生IP含义',
    searchIntent: 'AI解锁',
    answerHtml: `<p>原生 IP 是指该 IP 注册地与机房物理所在地一致的住宅/家宽 IP。AI 平台极易拦截机房广播 IP，原生 IP 能完美伪装成当地真实居民上网。</p>`
  },
  {
    id: 69,
    category: '节点 / 地区 / 线路',
    question: '机场的“冷门地区节点”（如阿根廷、土耳其）有什么用？',
    primaryKeyword: '冷门节点场景',
    searchIntent: '锁区服务',
    answerHtml: `<p>常用于 Steam、YouTube Premium 或 Spotify 等海外服务低价区（俗称“阿根廷/土耳其人”）的账号注册与订阅付款。</p>`
  },
  {
    id: 70,
    category: '节点 / 地区 / 线路',
    question: '节点列表里的“自动选择 / Auto”靠谱吗？',
    primaryKeyword: 'Auto节点组',
    searchIntent: '软件设置',
    answerHtml: `<p>Auto 节点组会自动定期测速并切换到延迟最低的节点。大部分情况下靠谱，但在看连续剧时频繁切换 IP 可能会触发网站重新登录。</p>`
  },
  {
    id: 71,
    category: '节点 / 地区 / 线路',
    question: '什么是 Hysteria 2 协议？UDP 暴力加速原理？',
    primaryKeyword: 'Hysteria2协议',
    searchIntent: '协议前沿',
    answerHtml: `<p>基于 UDP 的拥塞控制协议，专门针对网络环境差、高丢包率的线路进行发包补充，实现跑满带宽的目标。</p>`
  },
  {
    id: 72,
    category: '节点 / 地区 / 线路',
    question: '为什么有些节点限制 P2P BT 下载？',
    primaryKeyword: '机场禁止BT原因',
    searchIntent: '规则理解',
    answerHtml: `<p>P2P 下载会产生巨大的并发连接并容易收到海外版权机构的滥用投诉 (DMCA Warning)，会导致机场服务器 IP 被封禁。</p>`
  },
  {
    id: 73,
    category: '节点 / 地区 / 线路',
    question: '入口点打雷断纤对专线节点有什么影响？',
    primaryKeyword: '专线故障原因',
    searchIntent: '网络常识',
    answerHtml: `<p>跨境海底光缆或陆缆如果遭遇自然灾害物理断裂，专线节点会出现临时中断，需要等待备用路由切换或光缆修复。</p>`
  },
  {
    id: 74,
    category: '节点 / 地区 / 线路',
    question: '如何测试节点真正的丢包率与出海带宽？',
    primaryKeyword: '节点丢包测试',
    searchIntent: '测试方法',
    answerHtml: `<p>使用客户端内置的 Benchmark 工具，或者访问 Fast.com / Speedtest.net 选择海外目标服务器进行多线程实测。</p>`
  },

  // 7. 套餐 / 价格 / 优惠 (10 题)
  {
    id: 75,
    category: '套餐 / 价格 / 优惠',
    question: '机场月付、季付、半年付与年付的价格折扣逻辑？',
    primaryKeyword: '机场折扣逻辑',
    searchIntent: '精算对比',
    answerHtml: `<p>机场为了资金回笼通常会为长期订阅提供折扣（如年付赠送 2 个月流量）。但考虑风险，建议首选月付，体验满意后再考虑季付或年付。</p>`
  },
  {
    id: 76,
    category: '套餐 / 价格 / 优惠',
    question: '不限时（一次性计费）流量包适合哪些人群？',
    primaryKeyword: '不限时流量包',
    searchIntent: '套餐选择',
    answerHtml: `<p>适合出差频繁、轻度备用、或不想有按月续费压力的用户。购买一次可用半年甚至更久。</p>`
  },
  {
    id: 77,
    category: '套餐 / 价格 / 优惠',
    question: '机场优惠码在哪输入？怎么使用？',
    primaryKeyword: '机场优惠码使用',
    searchIntent: '购物指南',
    answerHtml: `<p>在机场官网选择好套餐结算时，在订单确认页面找到“优惠码 / Coupon”输入框（如 FlyV 的优惠码 fly20），点击应用即可享受折扣。</p>`
  },
  {
    id: 78,
    category: '套餐 / 价格 / 优惠',
    question: '套餐绑定的设备数量限制（Device Limit）如何计算？',
    primaryKeyword: '机场设备限制',
    searchIntent: '使用规则',
    answerHtml: `<p>按同时与节点建立连接的公网 IP 或独立设备数计算。同一台路由器下的所有设备通常算作 1 台设备。</p>`
  },
  {
    id: 79,
    category: '套餐 / 价格 / 优惠',
    question: '流量用完后是在续费日重置还是需要额外购买？',
    primaryKeyword: '机场流量重置',
    searchIntent: '套餐规则',
    answerHtml: `<p>按月套餐会在每月的账单日（如每月 15 号）自动重置流量。若中途用尽，可选择提前重置套餐或购买临时叠加流量包。</p>`
  },
  {
    id: 80,
    category: '套餐 / 价格 / 优惠',
    question: '为什么同样的 100GB，不同机场价格相差数倍？',
    primaryKeyword: '机场定价差异',
    searchIntent: '商业分析',
    answerHtml: `<p>价格差异核心在于成本：专线带宽租金是普通公网带宽的数倍，且高价机场通常包含原生 IP 解锁与更及时的客服支持。</p>`
  },
  {
    id: 81,
    category: '套餐 / 价格 / 优惠',
    question: '团队商业套餐与个人套餐在保障上有何不同？',
    primaryKeyword: '机场团队套餐',
    searchIntent: '商业服务',
    answerHtml: `<p>商业套餐配额更高、允许多 IP 高并发访问，部分机场提供独立 IP 与专属客服 SLA 保障。</p>`
  },
  {
    id: 82,
    category: '套餐 / 价格 / 优惠',
    question: '机场支持哪些支付方式？USDT 支付安全吗？',
    primaryKeyword: '机场支付方式',
    searchIntent: '交易安全',
    answerHtml: `<p>常见支持支付宝与微信第三方原生/聚合支付。部分机场支持 USDT 加密货币支付，隐私度更高。</p>`
  },
  {
    id: 83,
    category: '套餐 / 价格 / 优惠',
    question: '续费时原有的优惠码还能重复使用吗？',
    primaryKeyword: '机场续费优惠',
    searchIntent: '促销政策',
    answerHtml: `<p>大部分促销优惠码为“首单一次性折扣”，续费时需看优惠码说明是否支持循环折扣 (Recurring Discount)。</p>`
  },
  {
    id: 84,
    category: '套餐 / 价格 / 优惠',
    question: '套餐升降级补差价规则是怎样的？',
    primaryKeyword: '机场套餐升级',
    searchIntent: '服务退改',
    answerHtml: `<p>在后台点击升级套餐，系统会自动折算当前套餐剩余天数的价值并抵扣新套餐费用。</p>`
  },

  // 8. 设备 / 导入 (8 题)
  {
    id: 85,
    category: '设备 / 导入',
    question: 'iPhone / iPad 首次使用小火箭 (Shadowrocket) 完整流程？',
    primaryKeyword: 'iOS小火箭导入',
    searchIntent: '设备教程',
    answerHtml: `<p>1. 使用非中国区 Apple ID 登录 App Store 下载 Shadowrocket。<br>2. 打开小火箭，点击右上角“+”号选择类型为 Subscribe。<br>3. 粘贴机场订阅链接，点击保存并下拉刷新节点列表。<br>4. 选择低延迟节点，开启顶部未连接开关并允许添加 VPN 配置。</p>`
  },
  {
    id: 86,
    category: '设备 / 导入',
    question: '安卓手机没有 Google Play 如何下载 V2RayNG / sing-box？',
    primaryKeyword: '安卓客户端下载',
    searchIntent: '设备教程',
    answerHtml: `<p>可在 GitHub 官方发布页 (Releases) 直接下载安装包 APK 文件，或通过机场面板提供的官方镜像下载点安装。</p>`
  },
  {
    id: 87,
    category: '设备 / 导入',
    question: 'Mac 苹果电脑推荐使用哪款客户端？',
    primaryKeyword: 'Mac客户端推荐',
    searchIntent: '软件选择',
    answerHtml: `<p>推荐使用 Clash Verge Rev (macOS 版) 或 Stash for Mac。体验流畅且适配 Apple Silicon M 系列芯片。</p>`
  },
  {
    id: 88,
    category: '设备 / 导入',
    question: 'Windows 电脑开机自动启动机场客户端设置？',
    primaryKeyword: 'Windows客户端开机启动',
    searchIntent: '设置指南',
    answerHtml: `<p>在 Clash Verge 设置选项中勾选“Start on Windows Boot”（开机自启）与“Silent Start”（最小化到托盘启动）即可。</p>`
  },
  {
    id: 89,
    category: '设备 / 导入',
    question: 'Apple TV 电视盒怎么安装配置小火箭或 Stash？',
    primaryKeyword: 'AppleTV机场配置',
    searchIntent: '客厅设备',
    answerHtml: `<p>tvOS 17 系统已原生支持 VPN 扩展。在 tvOS App Store 下载 Shadowrocket 或 Stash，通过同 iCloud 账号一键同步配置。</p>`
  },
  {
    id: 90,
    category: '设备 / 导入',
    question: '软路由 (OpenWrt/PassWall/Clash) 订阅导入注意事项？',
    primaryKeyword: '软路由机场配置',
    searchIntent: '硬件部署',
    answerHtml: `<p>避免在软路由中开启多个代理插件导致规则冲突。导入前确认节点包含的协议插件已在 OpenWrt 中安装。</p>`
  },
  {
    id: 91,
    category: '设备 / 导入',
    question: '多设备共用一个订阅链接会被封号吗？',
    primaryKeyword: '订阅多设备共享',
    searchIntent: '规则理解',
    answerHtml: `<p>只要总同时在线设备数没有超过机场套餐规定的 Device Limit，共享订阅链接不会被封号。</p>`
  },
  {
    id: 92,
    category: '设备 / 导入',
    question: '安卓系统“电池优化”导致后台断网怎么办？',
    primaryKeyword: '安卓后台断网',
    searchIntent: '故障解决',
    answerHtml: `<p>在安卓系统设置 -> 应用管理 -> V2RayNG/Clash 中，将电池策略修改为“无限制 / 不优化”，并允许后台自启。</p>`
  },

  // 9. 排障 / 安全 / 购买前 (8 题)
  {
    id: 93,
    category: '排障 / 安全 / 购买前',
    question: '为什么机场晚上 8 点到 11 点容易卡顿？',
    primaryKeyword: '晚高峰卡顿排障',
    searchIntent: '故障诊断',
    answerHtml: `<p>晚 8 到 11 点是全国网民用网高峰期，运营商国际出口带宽极度拥堵。普通直连线路受 QOS 影响大，切换到 IPLC 专线节点可完美解决。</p>`
  },
  {
    id: 94,
    category: '排障 / 安全 / 购买前',
    question: '网页显示 403 Forbidden 或 Cloudflare 验证码过不去？',
    primaryKeyword: 'Cloudflare验证码',
    searchIntent: '访问排障',
    answerHtml: `<p>说明当前节点的 IP 被该网站或 Cloudflare 标记为高风险机房 IP。切换到原生住宅 IP 节点或换一个冷门地区节点即可过验。</p>`
  },
  {
    id: 95,
    category: '排障 / 安全 / 购买前',
    question: '订阅更新提示 404 或 Unauthorized 怎么解决？',
    primaryKeyword: '订阅404报错',
    searchIntent: '排障教程',
    answerHtml: `<p>404 表示订阅链接 URL 已失效或机场更换了域名；Unauthorized 表示套餐已过期或被暂停，登录机场官网重置订阅或续费即可。</p>`
  },
  {
    id: 96,
    category: '排障 / 安全 / 购买前',
    question: '如何确认机场官网是不是镜像站或钓鱼站？',
    primaryKeyword: '机场防钓鱼',
    searchIntent: '安全防范',
    answerHtml: `<p>认准官方 Telegram 通告频道公布的域名，不随意点击 Telegram 私信中陌生人发送的所谓的“官网镜像折扣链接”。</p>`
  },
  {
    id: 97,
    category: '排障 / 安全 / 购买前',
    question: '机场 TG 交流群里需要注意什么防骗规则？',
    primaryKeyword: 'TG群防骗',
    searchIntent: '社区安全',
    answerHtml: `<p>任何在 TG 私信声称是“客服”并主动要求你转账、索要账号密码或订阅 URL 的都是骗子，官方客服绝不会私信索要敏感信息。</p>`
  },
  {
    id: 98,
    category: '排障 / 安全 / 购买前',
    question: '连接机场后导致本地微信或网银打不开怎么办？',
    primaryKeyword: '代理绕过中国IP',
    searchIntent: '分流设置',
    answerHtml: `<p>检查客户端是否误开到了“Global 全局模式”。切换为“Rule 规则模式”，或者确保分流规则中包含了 Direct 中国 IP 绕过即可。</p>`
  },
  {
    id: 99,
    category: '排障 / 安全 / 购买前',
    question: '如何测试自己的真实的 DNS 是否发生泄漏？',
    primaryKeyword: 'DNS泄漏测试',
    searchIntent: '安全测试',
    answerHtml: `<p>访问 dnsleaktest.com 进行标准测试。如果测试结果中出现的 DNS 服务器全是海外运营商（如 Cloudflare/Google），说明 DNS 没有泄漏。</p>`
  },
  {
    id: 100,
    category: '排障 / 安全 / 购买前',
    question: '机场客服响应慢或提示工单系统延迟怎么处理？',
    primaryKeyword: '客服工单沟通',
    searchIntent: '维权处理',
    answerHtml: `<p>在工单中附带清晰的错误截图与客户端日志，或者加入官方 Telegram 交流群在管理员在线时礼貌询问。</p>`
  }
];
