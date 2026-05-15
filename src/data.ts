import { 
  Monitor, 
  Cpu, 
  Database, 
  Network, 
  Layers, 
  ShieldCheck, 
  Zap, 
  BarChart, 
  Globe,
  ShoppingCart,
  Lock,
  Cloud,
  BrainCircuit,
  LucideIcon
} from 'lucide-react';

export interface Annotation {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
}

export interface TechTerm {
  name: string;
  description: string;
  why: string;
  category: string;
  examples?: string[];
  associations?: {
    term: string;
    description: string;
    relation: string;
  }[];
}

export interface StageData {
  id: number;
  name: string;
  subtitle: string;
  shortDesc: string;
  tags: string[];
  icon: LucideIcon;
  
  // Summary Card Content
  summaryDescription: string;
  summaryDataFlow: string;
  
  // Detail Page Content
  fullDescription: string;
  pmAnalogy: string;
  pageDemo: {
    title: string;
    description: string;
    annotations: Annotation[];
  };
  dataFlow: {
    leftTitle: string;
    rightTitle: string;
    description: string;
  };
  techConcepts: {
    category: string;
    terms: TechTerm[];
  }[];
  painPoints: {
    problem: string;
    solution: string;
  }[];
  evolution: {
    previousProblems: string[];
    newProblems: string[];
    nextStageHint: string;
  };
}

export const STAGES_DATA: StageData[] = [
  {
    id: 1,
    name: "纯静态商品小册子",
    subtitle: "第一阶段：万物之始",
    shortDesc: "最初的网页，就像一张电子海报。你看到的所有按钮、文字、图片都是代码写死的。",
    tags: ["HTML", "CSS", "URL"],
    icon: Monitor,
    summaryDescription: "核心解决：让别人通过网络看到我的信息。全手动维护，改一个错别字都要重新上传整个文件。",
    summaryDataFlow: "浏览器 ->(请求HTML) -> Web服务器 ->(返回静态文件) -> 浏览器渲染",
    fullDescription: "在这个阶段，互联网刚刚起步。网页就像是报纸的电子版，主要用于信息的单向展示。",
    pmAnalogy: "就像一家实体店的招牌和橱窗。它告诉别人你是做什么的，长什么样，但你不能在橱窗里直接下单或者改价格。",
    pageDemo: {
      title: "Google 搜索首页示范",
      description: "经典的简洁搜索页面",
      annotations: [
        { id: "1", x: 50, y: 30, title: "HTML：骨架", description: "定义了网页上的 'Google' Logo、输入框和按钮这些元素。" },
        { id: "2", x: 35, y: 45, title: "CSS：皮肤", description: "控制输入框的圆角边框、Logo的绚丽色彩和整体的居中布局。" },
        { id: "3", x: 10, y: 5, title: "URL：地址", description: "浏览器地址栏里的链接，带你准确找到存储在服务器上的这个文件。" }
      ]
    },
    dataFlow: {
      leftTitle: "本地文件",
      rightTitle: "云端访问",
      description: "这一阶段没有数据库，所有内容都存在 .html 文件里。"
    },
    techConcepts: [
      {
        category: "基础语言",
        terms: [
          { 
            name: "HTML", 
            description: "超文本标记语言，网页的骨架。", 
            why: "需要一种跨平台的通用文档格式。", 
            category: "基础",
            examples: ["<html>", "<head> (存放元数据)", "<body> (页面主体内容)", "<a> (创建超链接)", "<img> (插入图片)", "<h1>-<h6> (分级标题)"],
            associations: [
              { term: "CSS", description: "骨肉相连", relation: "HTML 负责‘有什么’，CSS 负责‘长什么样’。没有 CSS，HTML 看起来就像是古老的文本文件。" },
              { term: "DOM", description: "动态接口", relation: "浏览器加载 HTML 后会生成 DOM 树。这是后来 JavaScript 能够操纵网页元素的前提。" },
              { term: "URL", description: "寻址定位", relation: "URL 告诉浏览器在哪里找到这个 HTML 文件。" }
            ]
          },
          { 
            name: "CSS", 
            description: "层叠样式表，网页的皮肤。", 
            why: "为了让结构与表现分离，方便维护和美化。", 
            category: "样式",
            examples: ["color: #333 (颜色)", "font-size: 14px (字号)", "padding: 10px (内边距)", "display: flex (布局)", "border-radius: 8px (圆角)"],
            associations: [
              { term: "HTML", description: "渲染目标", relation: "CSS 通过‘选择器’锚定 HTML 标签。它是 HTML 的视觉插件。" },
              { term: "JavaScript", description: "动态皮肤", relation: "JS 可以动态修改 CSS 属性，实现呼吸灯、平滑位移等视觉交互。" }
            ]
          }
        ]
      },
      {
        category: "网络协议",
        terms: [
          {
            name: "URL",
            description: "统一资源定位符，网页在互联网上的门牌号。",
            why: "网络上有几万亿个文件，没有唯一的门牌号就无法找到对应的网页。",
            category: "协议",
            examples: ["http://", "domain.com", "/index.html", "?query=search"],
            associations: [
              { term: "HTML", description: "目标文件", relation: "URL 的终点通常是一个 HTML 文件。" },
              { term: "HTTP", description: "搬运规则", relation: "根据 URL 找到地址后，浏览器用 HTTP 协议去求取文件内容。" }
            ]
          }
        ]
      }
    ],
    painPoints: [
      { problem: "信息无法跨越物理距离进行数字化展示", solution: "通过 HTML 标记语言，把文字和图片‘结构化’，让浏览器能像读报纸一样读出网页内容。" },
      { problem: "早期的数字化文档排版极其混乱、极难阅读", solution: "引入 CSS 样式表，给 HTML 骨架披上外衣，实现了字体、颜色和布局的统一美化。" },
      { problem: "海量数字化文件在互联网上难以精准‘查址’定位", solution: "依靠 URL（统一资源定位符），给每个网页发了一个唯一的‘身份证号’，输入链接即刻触达。" }
    ],
    evolution: {
      previousProblems: ["无联网访问能力"],
      newProblems: ["内容维护成本极高", "用户无法交互"],
      nextStageHint: "用户想在页面上点点按按，甚至想做点算术题。"
    }
  },
  {
    id: 2,
    name: "交互与动态呈现",
    subtitle: "第二阶段：灵魂注入",
    shortDesc: "JavaScript 的加入让网页“活”了过来，可以弹窗、校验表单、甚至做计算器。",
    tags: ["JavaScript", "DOM", "事件"],
    icon: Zap,
    summaryDescription: "核心解决：用户与页面的互动。浏览器不再只是展示器，它变成了一个运行小程序的环境。",
    summaryDataFlow: "HTML/CSS 加载 -> JS 运行 -> 监听用户点击 -> 动态修改页面局部",
    fullDescription: "随着 JavaScript 的完善，开发者开始在页面上添加各种交互效果，网页开始变得有趣起来。",
    pmAnalogy: "橱窗里多了一个自动门 and 感应灯。虽然店里还没人，但至少你走近时，它会给你点反应。",
    pageDemo: {
      title: "电商产品详情页场景",
      description: "现代交互式页面的基础：动态更新局部内容",
      annotations: [
        { id: "1", x: 75, y: 35, title: "DOM 节点：零件索引", description: "点击库存、颜色选项时，JS 通过‘索引’找到价格节点。你会发现，改价格其实就是改这个零件的属性。" },
        { id: "2", x: 85, y: 75, title: "加入购物车：业务动作", description: "点击时，JS 会从 DOM 零件里抠出数量和规格，打包成数据发给服务器，而不是把零件本身发过去。" },
        { id: "3", x: 45, y: 40, title: "查看 DOM 原型 (Code)", description: "点击此处，解剖这个网页！看看浏览器内存里到底存的是什么样的‘活代码’。" }
      ]
    },
    dataFlow: {
      leftTitle: "静态展示",
      rightTitle: "动态反馈",
      description: "逻辑开始从服务器（如果有的话）向浏览器端转移。"
    },
    techConcepts: [
      {
        category: "脚本语言",
        terms: [
          { 
            name: "JavaScript", 
            description: "网页的灵魂脚本。", 
            why: "在用户电脑上直接运行计算，无需等待服务器，实现即时反馈。", 
            category: "逻辑",
            examples: ["console.log() (日志)", "document.querySelector() (查找零件)", "addEventListener() (监听点击)", "fetch() (请求数据)"],
            associations: [
              { term: "DOM", description: "控制对象", relation: "JS 是‘驾驶员’，DOM 是‘方向盘和油门’。JS 通过 DOM 接口让页面动起来。" },
              { term: "HTML", description: "宿主环境", relation: "JS 运行在 HTML 提供的容器中，为枯燥的静态文本注入生命力。" },
              { term: "AJAX", description: "异步通信", relation: "JS 的异步能力让页面可以在不刷新的情况下更新局部数据。" }
            ]
          },
          { 
            name: "DOM", 
            description: "文档对象模型。你可以把它理解为网页在内存里的‘零件索引图’。", 
            why: "浏览器把死代码转成了可以被 JS 操控的‘活对象’。没有它，JS 就不知道该改哪里。", 
            category: "结构",
            examples: ["document.getElementById()", "element.innerHTML (改文字)", "element.style (改样式)", "node.appendChild() (加零件)"],
            associations: [
              { term: "JavaScript", description: "总控制台", relation: "JS 几乎所有的浏览器操作都是通过 DOM 实现的。JS 发令，DOM 执行。" },
              { term: "HTML", description: "源码蓝图", relation: "HTML 是写在纸上的样板，DOM 是在工厂生产出来的实物模型。" }
            ]
          }
        ]
      },
      {
        category: "交互原理",
        terms: [
          {
            name: "事件 (Event)",
            description: "网页感受到的一切动作，如点击、滑动、输入。",
            why: "为了让程序知道用户想干什么，并即时做出响应。",
            category: "交互",
            examples: ["onclick (点击)", "onmouseover (悬停)", "onkeydown (按键)", "onsubmit (提交)"],
            associations: [
              { term: "JavaScript", description: "监听器", relation: "JS 负责监听这些事情的发生，并执行对应的逻辑代码。" }
            ]
          }
        ]
      }
    ],
    painPoints: [
      { problem: "点击复杂的计算逻辑会导致浏览器卡死", solution: "当时只能优化代码，减少计算量。" },
      { problem: "刷新页面，之前输入的表单全没了", solution: "依然没有后端和数据库，数据无法持久化。" }
    ],
    evolution: {
      previousProblems: ["网页是死板的"],
      newProblems: ["无法保存用户数据", "所有用户看到的内容都一样"],
      nextStageHint: "我们需要一个‘大脑’在云端记账，让每个用户看到属于自己的信息。"
    }
  },
  {
    id: 3,
    name: "动态网站与服务端逻辑",
    subtitle: "第三阶段：大脑进场",
    shortDesc: "引入后端语言和数据库。网站开始有“记忆”了，用户可以注册、登录、存数据。",
    tags: ["PHP/Java", "SQL", "服务器"],
    icon: Database,
    summaryDescription: "核心解决：数据持久化。根据不同用户动态生成不同的 HTML 页面。",
    summaryDataFlow: "浏览器 ->(请求) -> 服务器(写PHP/Java) -> 查数据库 ->(拼装HTML) -> 浏览器",
    fullDescription: "这是传统网站的黄金时代。数据库的引入让我们可以开发博客、论坛和最初的社交网络。",
    pmAnalogy: "店里请了一位经理，还配了一个保险柜。经理会查看你的会员卡（登录），然后从账本里翻出你的偏好信息。",
    pageDemo: {
      title: "有个人中心的长青论坛",
      description: "典型服务器端渲染(SSR)页面",
      annotations: [
        { id: "1", x: 10, y: 10, title: "Session/Cookie", description: "让服务器记得你是谁。" },
        { id: "2", x: 50, y: 50, title: "动态内容", description: "内容是从数据库里实时捞出来的。" }
      ]
    },
    dataFlow: {
      leftTitle: "前台窗口",
      rightTitle: "后台工厂",
      description: "服务器成了生产 HTML 的工厂，数据库是原材料仓库。"
    },
    techConcepts: [
      {
        category: "后端技术",
        terms: [
          { 
            name: "数据库 (DB)", 
            description: "专门存数据的大账本。", 
            why: "硬盘文件读写效率低，需要专门软件处理复杂关系并提供快速索引。", 
            category: "存储",
            examples: ["MySQL (关系型)", "Redis (高速缓存)", "MongoDB (非关系型)"],
            associations: [
              { term: "SQL", description: "查账指令", relation: "SQL 是人类指挥数据库查账的指令集。" },
              { term: "后端逻辑", description: "取餐员", relation: "后端逻辑从数据库取数据给前端展示。" }
            ]
          },
          { 
            name: "后端逻辑 (Server Logic)", 
            description: "运行在远程服务器上的‘工厂流水线’。", 
            why: "处理保密逻辑（如改价）、大规模运算及多用户协作数据汇总。", 
            category: "逻辑",
            examples: ["Node.js", "PHP", "Java", "Python"],
            associations: [
              { term: "数据库", description: "仓库", relation: "逻辑处理原材料（数据），产出成果（网页内容）。" },
              { term: "HTTP", description: "运输线", relation: "通过 HTTP 协议把生产好的内容运送到用户的浏览器。" }
            ]
          }
        ]
      },
      {
        category: "通信基础",
        terms: [
          {
            name: "HTTP",
            description: "超文本传输协议。浏览器和服务器之间的‘通用语言’。",
            why: "为了让全球不同的电脑都能明白彼此在要什么、发什么。",
            category: "协议",
            examples: ["GET (获取)", "POST (发送)", "200 OK (成功)", "404 Not Found (找不着)"],
            associations: [
              { term: "URL", description: "航标", relation: "URL 确定目的地，HTTP 确定运输规则。" }
            ]
          }
        ]
      }
    ],
    painPoints: [
      { problem: "点个赞都要全局刷新页面", solution: "当时受限于架构，必须重新请求整个页面。" },
      { problem: "流量一大，服务器就宕机", solution: "单台服务器的计算能力达到瓶颈。" }
    ],
    evolution: {
      previousProblems: ["没有用户数据记忆"],
      newProblems: ["每动一下都要白屏加载", "维护困难，HTML和代码拧在一起"],
      nextStageHint: "能不能只更新我想改的那一小块地方？让网页像 App 一样流畅。"
    }
  },
  {
    id: 4,
    name: "单页应用 (SPA) 与工程化",
    subtitle: "第四阶段：丝滑体验",
    shortDesc: "前端框架（React/Vue）出现。网页只加载一次，之后只交换数据，不白屏刷新。",
    tags: ["React/Vue", "AJAX", "组件化"],
    icon: Globe,
    summaryDescription: "核心解决：交互体验。网页的行为越来越像原生的手机 App。",
    summaryDataFlow: "浏览器 ->(请求数据JSON) -> 后端 ->(返回数据) -> 前端动态画出界面",
    fullDescription: "前后端彻底分离。后端只提供原始数据，前端变成了一个独立运行的大软件。",
    pmAnalogy: "店里变成了一站式商场。你不用出门重进（刷新）就能在不同楼层（页面）穿梭，服务员只负责递送你点的小菜（数据）。",
    pageDemo: {
      title: "现代化协作工具",
      description: "典型的 SPA 应用",
      annotations: [
        { id: "1", x: 30, y: 60, title: "前端路由", description: "切换页面无需请求服务器，只有内容变。" },
        { id: "2", x: 80, y: 20, title: "组件化", description: "页面由一个个乐高积木一样的零件拼成。" }
      ]
    },
    dataFlow: {
      leftTitle: "独立前端应用",
      rightTitle: "纯数据后端",
      description: "前后端通过 API（数据接口）交流，不再互相混合代码。"
    },
    techConcepts: [
      {
        category: "前端架构",
        terms: [
          { 
            name: "React/Vue", 
            description: "现代前端框架，网页的乐高说明书。", 
            why: "以前改一点东西要拆掉整个页面重建，现在框架能精准找到要改的地方局部‘无感’替换。", 
            category: "框架",
            examples: ["Component (组件)", "State (状态)", "Virtual DOM (虚拟DOM)"],
            associations: [
              { term: "SPA", description: "应用模式", relation: "框架是实现单页应用这种‘丝滑’体验的技术选型。" },
              { term: "组件化", description: "思维方式", relation: "把页面拆成按钮、导航栏、侧边栏独立开发。" }
            ]
          },
          { 
            name: "AJAX / 请求", 
            description: "网页的‘秘密搬运工’。", 
            why: "为了让网页在不刷新的情况下（不白屏），偷偷去服务器取最新的数据（如点赞数）。", 
            category: "通信",
            examples: ["axios", "fetch", ".then()", "JSON"],
            associations: [
              { term: "HTTP", description: "运输工具", relation: "AJAX 使用 HTTP 协议作为运输方式。" },
              { term: "后端 API", description: "取货窗口", relation: "AJAX 去后端的 API 窗口取数据。" }
            ]
          }
        ]
      },
      {
        category: "用户体验",
        terms: [
          {
            name: "SPA (单页应用)",
            description: "整个网站就是一个 App，点按钮不白屏刷新。",
            why: "消除‘加载中’的焦虑感，提供接近手机原生 App 的极致体验。",
            category: "模式",
            associations: [
              { term: "React/Vue", description: "实现工具", relation: "这些框架让开发复杂的 SPA 变得简单。" }
            ]
          }
        ]
      }
    ],
    painPoints: [
      { problem: "首屏加载特别慢", solution: "通过代码分割和预渲染解决。" },
      { problem: "百度搜不到内容（SEO差）", solution: "这导致了 SSR/SSG 技术的再次流行。" }
    ],
    evolution: {
      previousProblems: ["白屏刷新感强"],
      newProblems: ["代码量爆炸，难以管理", "由于分工细，联调变难了"],
      nextStageHint: "业务变大了，我们需要更稳、更深的服务支撑交易。"
    }
  },
  {
    id: 5,
    name: "电商业务与复杂中后台",
    subtitle: "第五阶段：金融级稳健",
    shortDesc: "开始处理钱、库存和多角色权限。数据一致性和安全性成了第一要务。",
    tags: ["事务", "鉴权", "HTTPS"],
    icon: ShoppingCart,
    summaryDescription: "核心解决：业务安全与合规。系统需要抗住促销高峰，保证钱不错、货不乱。",
    summaryDataFlow: "用户行为 -> 严密的身份校验 -> 数据库事务处理 -> 回滚/提交 -> 多维监控",
    fullDescription: "这不仅是页面的堆砌，更是业务流程的编排。我们需要考虑分布式事务和资金安全。",
    pmAnalogy: "普通小店变成了带有银行分部的**超级卖场**。每个柜台都需要复杂的权限检查，且每一笔账都绝不能出错。",
    pageDemo: {
      title: "双11大促结算页",
      description: "高可靠业务系统",
      annotations: [
        { id: "1", x: 60, y: 50, title: "强一致性", description: "库存扣减和扣款必须是原子操作。" }
      ]
    },
    dataFlow: {
      leftTitle: "业务动作",
      rightTitle: "安全内核",
      description: "所有操作都需要经过身份识别（鉴权）和日志留存。"
    },
    techConcepts: [
      {
        category: "系统安全",
        terms: [
          { name: "事务 (Transaction)", description: "要么全成功，要么全失败。", why: "保证转账等操作不会出现半截子状态。", category: "数据库" },
          { name: "JWT/OAuth", description: "身份令牌。", why: "在分布式系统里证明你是你。", category: "安全" }
        ]
      }
    ],
    painPoints: [
      { problem: "活动瞬时流量让数据库锁死", solution: "引入缓存 (Redis) 和消息队列 (MQ)。" },
      { problem: "一个小改动导致全系统崩溃", solution: "开始考虑模块解耦，为微服务铺路。" }
    ],
    evolution: {
      previousProblems: ["业务逻辑简单"],
      newProblems: ["系统变成了一个巨大的‘巨无霸’，改不动", "发布版本要通宵看护"],
      nextStageHint: "能不能把这个大帝国拆成多个自治的小镇？"
    }
  },
  {
    id: 6,
    name: "聚合平台与微服务基座",
    subtitle: "第六阶段：数字化聚合帝国",
    shortDesc: "将巨无霸拆解为模块，多团队异步协作。核心在于‘基座’与‘应用’的分离，通过网关与监控掌控全局。",
    tags: ["微服务", "API网关", "OSS", "机器人监控"],
    icon: Cloud,
    summaryDescription: "核心解决：组织效能与系统扩展性。不同团队在统一基座上各司其职，互不干扰，通过高度自动化的基座进行状态监督。",
    summaryDataFlow: "流量网关(看门人) -> 聚合基座(载体) -> 子应用A/B/C -> 统一监控 & 告警机器人",
    fullDescription: "整个系统演进为‘聚合平台’模式。多个研发团队可以在互不感知的情况下，像插拔U盘一样往系统里增加新功能。基座提供 API 网关、对象存储和实时监控等公共基础设施。",
    pmAnalogy: "从一栋大楼进化成了**智慧园区**。基座是园区的物业和水电（网关、OSS、服务器），子应用则是租入园区的各种店铺。物业通过大屏（监控）和对讲机（机器人）确保整个园区稳健运行。",
    pageDemo: {
      title: "聚合平台管理面板",
      description: "‘基座+子应用’的微服务形态。深度交互演示：点击 1, 2, 3 可快速切换监控视角。",
      annotations: []
    },
    dataFlow: {
      leftTitle: "流量网关",
      rightTitle: "分布式集群",
      description: "流量经过网关进行全量审计，再被精准分发至各子应用所在的节点。"
    },
    techConcepts: [],
    painPoints: [
      { problem: "几百个功能挤在一起，任何一个小改动都要全量测试重发", solution: "微服务化。把功能拆成独立小包，每个团队负责自己的那一块，独立更新。" },
      { problem: "根本不知道线上哪个模块崩了，用户报修后才知道", solution: "实时监控+告警机器人。系统在用户感知前先‘感知’，第一时间通知研发维护。" },
      { problem: "大量图片、视频素材把服务器硬盘挤爆了", solution: "引入 OSS（对象存储）。服务器只负责逻辑，文件全部‘离岸’存储，无限扩容。" }
    ],
    evolution: {
      previousProblems: ["巨无霸式架构"],
      newProblems: ["微服务间链路追踪极其复杂", "基座崩了则全平台崩"],
      nextStageHint: "系统太庞大了，我们需要引入 AI 实现智能运维 and 自动化修复。"
    }
  },
  {
    id: 7,
    name: "数据智能与 AI 驱动",
    subtitle: "第七阶段：智慧生命体",
    shortDesc: "不仅是代码，更有模型。系统开始预测用户行为，并自动生成内容。",
    tags: ["AI", "大数据", "个性化"],
    icon: BrainCircuit,
    summaryDescription: "核心解决：效率与个性化。系统不再只是工具，而是具有‘理解力’的伙伴。",
    summaryDataFlow: "行为采集 -> 数据湖 -> 模型计算 -> 个性化预测 -> AI 动态生成 UI",
    fullDescription: "前端开始通过大模型生成，后端开始由数据预测驱动。我们进入了智能时代。",
    pmAnalogy: "这不再只是个商场，这还是个**读心者**。你一进门，它就知道你想买什么，并为你量身定制一条动线。",
    pageDemo: {
      title: "AI 助手对话界面",
      description: "数据驱动的智能终端",
      annotations: [
        { id: "1", x: 50, y: 80, title: "个性化推荐", description: "你看到的和邻居看到的内容完全不同。" }
      ]
    },
    dataFlow: {
      leftTitle: "海量行为",
      rightTitle: "预训练模型",
      description: "数据不再只是存储，而是被训练成了智慧。"
    },
    techConcepts: [
      {
        category: "前沿趋势",
        terms: [
          { name: "AI Agent", description: "能自主行动的程序。", why: "超越‘点一下动一下’，实现全自动服务。", category: "模型" },
          { name: "数据湖", description: "数据的原始海洋。", why: "为了存储成千上万TB的非结构化数据。", category: "存储" }
        ]
      }
    ],
    painPoints: [
      { problem: "算力成本极其昂贵", solution: "算力调度优化和端侧大模型。" },
      { problem: "算法黑盒，结果不可控", solution: "可解释性 AI 和严格的提示词工程。" }
    ],
    evolution: {
      previousProblems: ["系统是刻板的程序"],
      newProblems: ["隐私边界模糊", "真假信息难辨"],
      nextStageHint: "人类与技术的边界将进一步模糊。"
    }
  }
];
