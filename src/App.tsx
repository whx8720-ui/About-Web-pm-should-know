import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Cpu, 
  Database, 
  Network, 
  GitBranch, 
  Layers, 
  Route, 
  DoorOpen, 
  ChevronRight, 
  ChevronLeft,
  Info,
  BookOpen,
  ArrowRight,
  Search
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sub-components
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("bg-white rounded-2xl shadow-sm border border-slate-200 p-6", className)}>
    {children}
  </div>
);

const SearchXRay = () => {
  const [showHtml, setShowHtml] = useState(true);
  const [showCss, setShowCss] = useState(true);
  const [showJs, setShowJs] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const suggestions = ["PM如何学技术", "前后端分离原理", "数据库事务是什么", "API 接口规范"];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          onClick={() => setShowHtml(!showHtml)}
          className={cn("px-3 py-1 text-xs font-bold rounded-full border transition-all", showHtml ? "bg-orange-500 text-white border-orange-600" : "bg-slate-100 text-slate-400 border-slate-200")}
        >
          {showHtml ? "骨架已开启 (HTML)" : "骨架已关 (页面消失)"}
        </button>
        <button 
          onClick={() => setShowCss(!showCss)}
          className={cn("px-3 py-1 text-xs font-bold rounded-full border transition-all", showCss ? "bg-blue-500 text-white border-blue-600" : "bg-slate-100 text-slate-400 border-slate-200")}
        >
          {showCss ? "装修已开启 (CSS)" : "演示裸奔 (CSS OFF)"}
        </button>
        <button 
          onClick={() => setShowJs(!showJs)}
          className={cn("px-3 py-1 text-xs font-bold rounded-full border transition-all", showJs ? "bg-amber-500 text-white border-amber-600" : "bg-slate-100 text-slate-400 border-slate-200")}
        >
          {showJs ? "动作已开启 (JS)" : "木头人模式 (JS OFF)"}
        </button>
      </div>

      <div className={cn(
        "min-h-[250px] border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-500",
        showHtml ? "bg-white" : "bg-slate-800 opacity-50"
      )}>
        {!showHtml ? (
          <p className="text-slate-500 font-mono text-sm italic">{"<Empty DOM: 没有HTML就像房子没有地基和砖头，一片虚无>"}</p>
        ) : (
          <div className={cn("w-full max-w-md", !showCss && "block")}>
            <div className={cn("flex flex-col items-center gap-6", !showCss && "items-start")}>
              {/* Logo Simulation */}
              <h1 className={cn(
                "text-5xl font-bold tracking-tighter transition-all",
                showCss ? "flex" : "block text-sm font-normal"
              )}>
                {showCss ? (
                  <>
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </>
                ) : (
                  "Google Logo (只是一个普通标题标签 <h1>)"
                )}
              </h1>

              {/* Search Box Simulation */}
              <div className="w-full relative">
                <input 
                  type="text" 
                  placeholder={showCss ? "在 Google 上搜索，或者输入一个 URL" : "输入框 <input>"}
                  value={searchValue}
                  onChange={(e) => showJs && setSearchValue(e.target.value)}
                  className={cn(
                    "w-full transition-all duration-300",
                    showCss 
                      ? "px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm" 
                      : "border-2 border-black p-1 text-base rounded-none"
                  )}
                />
                {!showJs && <div className="absolute top-0 right-2 text-[10px] bg-red-100 text-red-600 px-1 rounded animate-pulse">JS已关：输入无效</div>}
                
                {/* JS Logic Suggestion Simulation */}
                {showJs && searchValue.length > 0 && showCss && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-2xl border border-slate-100 mt-1 py-2 z-10">
                    {suggestions.map((s, i) => (
                      <div key={i} className="px-6 py-2 hover:bg-slate-50 text-sm cursor-pointer flex items-center gap-2">
                        <Search className="w-3 h-3 text-slate-400" /> {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className={cn("flex gap-3", !showCss && "flex-col")}>
                <button className={cn(
                  "transition-all",
                  showCss 
                    ? "px-4 py-2 bg-slate-50 border border-transparent rounded hover:border-slate-300 text-sm font-medium text-slate-600" 
                    : "border bg-white text-black p-1"
                )}>
                  {showCss ? "Google 搜索" : "按钮 <button>组件1"}
                </button>
                <button className={cn(
                  "transition-all",
                  showCss 
                    ? "px-4 py-2 bg-slate-50 border border-transparent rounded hover:border-slate-300 text-sm font-medium text-slate-600" 
                    : "border bg-white text-black p-1"
                )}>
                  {showCss ? "手气不错" : "按钮 <button>组件2"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="text-orange-600 bg-orange-50 p-2 rounded">
          <strong>HTML 定义：</strong><br/>
          &lt;h1&gt;Logo&lt;/h1&gt;<br/>
          &lt;input /&gt;<br/>
          &lt;button&gt;搜索&lt;/button&gt;
        </div>
        <div className="text-blue-600 bg-blue-50 p-2 rounded">
          <strong>CSS 定义：</strong><br/>
          border-radius: 50px;<br/>
          box-shadow: 0 4px 6px;<br/>
          color: #4285f4;
        </div>
        <div className="text-amber-600 bg-amber-50 p-2 rounded">
          <strong>JS 定义：</strong><br/>
          input.onchange = (val) =&gt; &#123;<br/>
          &nbsp;&nbsp;showDropdown(val);<br/>
          &#125;
        </div>
      </div>
    </div>
  );
};

const ShieldCheck = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// Data Types
interface EvolutionStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pmAnalogy: string;
  technicalTerm: string;
  techStack: {
    name: string;
    description: string;
    codeSnippet: string;
    icon: React.ElementType;
  }[];
  architecture: {
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
  dataFlow: {
    from: string;
    to: string;
    content: string;
  };
}

interface ArchitectureNode {
  id: string;
  label: string;
  type: 'client' | 'server' | 'db' | 'infra';
  x: number;
  y: number;
}

interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

// Stages Data
const STAGES: EvolutionStage[] = [
  {
    id: 'frontend',
    title: '第一阶段：前端深度解析',
    subtitle: 'HTML, CSS 与 JS 的分工',
    description: '前端不仅仅是“网页”，它是运行在用户浏览器里的程序。它由三种语言组成：HTML负责骨架，CSS负责皮囊，JS负责灵魂（动作）。',
    pmAnalogy: 'HTML是**房子结构**，CSS是**装修图纸**，JS则是**电灯开关和自动门**。',
    technicalTerm: 'Client side (Browser)',
    techStack: [
      { 
        name: 'HTML (结构)', 
        description: '定义页面有什么。比如：这里有一个“购买”按钮。', 
        codeSnippet: '<button id="buy-btn">\n  立即购买\n</button>',
        icon: Monitor 
      },
      { 
        name: 'JS (逻辑)', 
        description: '定义用户交互，例如发起接口调用。', 
        codeSnippet: 'btn.onclick = () => {\n  fetch("/api/order");\n}',
        icon: Cpu 
      }
    ],
    architecture: {
      nodes: [
        { id: 'browser', label: '浏览器 (渲染引擎)', type: 'client', x: 50, y: 50 }
      ],
      edges: []
    },
    dataFlow: {
      from: '代码',
      to: '屏幕',
      content: '解析 HTML 树 -> 应用 CSS 样式 -> 执行 JS 脚本'
    }
  },
  {
    id: 'api-routing',
    title: '第二阶段：路由与接口 (API)',
    subtitle: '信息是如何跨越网络的',
    description: '当用户点击“提交订单”时，前端 JS 会发起一个网络请求（Request）。“路由”就像是服务器内部的调度台，决定这个 URL 由哪组代码处理。',
    pmAnalogy: 'URL 是**收件地址**，路由是**分拣机器**，API 是**快递单**。',
    technicalTerm: 'RESTful API & Routing',
    techStack: [
      { 
        name: '接口报文 (JSON)', 
        description: '前后端交流的通用语言。简洁、键值对结构。', 
        codeSnippet: '{\n  "order_id": "12345",\n  "amount": 99.0,\n  "user_id": "PM_001"\n}',
        icon: Network 
      },
      { 
        name: '后端路由 (Route)', 
        description: '映射表。匹配 URL 到具体的业务逻辑函数。', 
        codeSnippet: 'app.post("/api/order", (req) => {\n  // 执行下单逻辑\n})',
        icon: Route 
      }
    ],
    architecture: {
      nodes: [
        { id: 'browser', label: '前端浏览器', type: 'client', x: 20, y: 50 },
        { id: 'server', label: '后端服务器', type: 'server', x: 80, y: 50 }
      ],
      edges: [
        { from: 'browser', to: 'server', label: 'HTTP POST /api/order' }
      ]
    },
    dataFlow: {
      from: '前端',
      to: '后端',
      content: 'Header: Auth-Token\nBody: { "item": "book" }'
    }
  },
  {
    id: 'gateway-micro',
    title: '第三阶段：网关与高并发',
    subtitle: '规模化后的“门岗与分流”',
    description: '当业务变得复杂，网关（Gateway）作为统一入口，负责鉴权、限流和请求转发（Proxy）。',
    pmAnalogy: '网关就是**大楼管理员**。检查身份证（鉴权），并把你带到正确的房间（转发）。',
    technicalTerm: 'API Gateway & Microservices',
    techStack: [
      { 
        name: '网关规则 (Auth)', 
        description: '在请求进入业务层前进行身份校验。', 
        codeSnippet: 'if (req.headers.token == null) {\n  return 401; // 拒之门外\n}',
        icon: DoorOpen 
      },
      { 
        name: '负载均衡 (LB)', 
        description: '将流量平均分配给多个“打工人”服务器。', 
        codeSnippet: 'proxy.forward("OrderService", \n  strategy="RoundRobin")',
        icon: Layers 
      }
    ],
    architecture: {
      nodes: [
        { id: 'browser', label: '用户端', type: 'client', x: 10, y: 50 },
        { id: 'gateway', label: '统一网关 (拦截+分流)', type: 'infra', x: 40, y: 50 },
        { id: 'svc_order', label: '订单服务', type: 'server', x: 80, y: 30 },
        { id: 'svc_user', label: '用户服务', type: 'server', x: 80, y: 70 }
      ],
      edges: [
        { from: 'browser', to: 'gateway', label: '全部请求' },
        { from: 'gateway', to: 'svc_order', label: '转发: /order' },
        { from: 'gateway', to: 'svc_user', label: '转发: /user' }
      ]
    },
    dataFlow: {
      from: '网关',
      to: '后端服务',
      content: '验证 Token -> 命中路由 -> 透明代理转发'
    }
  }
];

export default function ArchitectureEvolution() {
  const [currentStep, setCurrentStep] = useState(0);
  const stage = STAGES[currentStep];

  const nextStep = () => {
    if (currentStep < STAGES.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <BookOpen className="text-blue-600" />
            PM 架构演进课堂
          </h1>
          <p className="text-slate-500 mt-2 max-w-2xl">
            专为产品经理打造的零基础技术进阶实验室。从第一个按钮到支撑千万用户的平台，解密代码背后的逻辑。
          </p>
        </div>
        
        <div className="flex bg-slate-200 p-1 rounded-full w-fit">
          {STAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={cn(
                "h-2 w-8 md:w-16 rounded-full transition-all duration-300",
                currentStep === idx ? "bg-blue-600 shadow-md" : "bg-transparent hover:bg-slate-300"
              )}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Aspect: The Info Panel */}
        <div className="lg:col-span-4 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  Level {currentStep + 1}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  {stage.title}
                </h2>
                <p className="text-blue-600 font-medium">{stage.subtitle}</p>
              </div>

              <Card className="bg-blue-50/50 border-blue-100">
                <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  PM 大白话解释
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  “{stage.pmAnalogy}”
                </p>
              </Card>

              <div className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stage.description}
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">核心组件与形态</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {stage.techStack.map((tech, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600">
                            <tech.icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{tech.name}</p>
                            <p className="text-xs text-slate-500">{tech.description}</p>
                          </div>
                        </div>
                        <div className="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-blue-300 leading-tight border border-slate-700">
                          <pre className="whitespace-pre-wrap">{tech.codeSnippet}</pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <Card className="bg-emerald-50 border-emerald-100 mt-6">
            <h4 className="text-xs font-bold text-emerald-800 uppercase mb-2">信息流 (Data Flow)</h4>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="font-bold text-emerald-700">{stage.dataFlow.from}</span>
              <ArrowRight size={12} className="text-emerald-400" />
              <span className="bg-white px-2 py-1 rounded shadow-sm border border-emerald-100 text-slate-600 truncate flex-1">
                {stage.dataFlow.content}
              </span>
              <ArrowRight size={12} className="text-emerald-400" />
              <span className="font-bold text-emerald-700">{stage.dataFlow.to}</span>
            </div>
          </Card>

          <div className="flex gap-4 pt-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={cn(
                "flex-1 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                currentStep === 0 
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                  : "bg-white text-slate-900 border border-slate-300 hover:border-blue-400 active:scale-95 shadow-sm"
              )}
            >
              <ChevronLeft size={20} />
              上一步
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === STAGES.length - 1}
              className={cn(
                "flex-1 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                currentStep === STAGES.length - 1
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                  : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-200"
              )}
            >
              {currentStep === STAGES.length - 1 ? '已通关' : '下一步'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Aspect: The Interactive Architecture Map */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {currentStep === 0 ? (
            <Card className="flex-1 min-h-[400px] bg-white shadow-xl flex flex-col">
               <div className="mb-6">
                  <h3 className="text-slate-900 font-bold flex items-center gap-2">
                    <Monitor className="text-blue-600 w-5 h-5" />
                    技术可视化 X 光机：谷歌搜索框
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">尝试通过开关下方的按钮，看看 HTML/CSS/JS 分别剥离后的真实长相。</p>
               </div>
               <SearchXRay />
            </Card>
          ) : (
            <Card className="flex-1 min-h-[400px] relative overflow-hidden bg-slate-900 border-none shadow-xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="absolute top-4 left-6 z-10">
                <h3 className="text-white font-medium flex items-center gap-2">
                  <Layers className="text-blue-400 w-4 h-4" />
                  系统架构图 (技术视角)
                </h3>
                <p className="text-slate-400 text-xs">实时反映业务演进后的系统关系</p>
              </div>

              <div className="relative w-full h-full min-h-[350px]">
                <AnimatePresence>
                  {stage.architecture.edges.map((edge, i) => {
                    const from = stage.architecture.nodes.find(n => n.id === edge.from);
                    const to = stage.architecture.nodes.find(n => n.id === edge.to);
                    if (!from || !to) return null;

                    return (
                      <motion.svg
                        key={`edge-${stage.id}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                      >
                        <motion.line
                          x1={`${from.x}%`}
                          y1={`${from.y}%`}
                          x2={`${to.x}%`}
                          y2={`${to.y}%`}
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          animate={{ strokeDashoffset: [-20, 0] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        {edge.label && (
                          <foreignObject 
                            x={`${(from.x + to.x) / 2 - 10}%`} 
                            y={`${(from.y + to.y) / 2 - 2}%`} 
                            width="100" 
                            height="20"
                          >
                            <div className="text-[10px] text-blue-300 font-mono bg-slate-900/80 px-1 rounded inline-block">
                              {edge.label}
                            </div>
                          </foreignObject>
                        )}
                      </motion.svg>
                    );
                  })}

                  {stage.architecture.nodes.map((node) => (
                    <motion.div
                      key={`node-${stage.id}-${node.id}`}
                      layoutId={`node-${node.id}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                      className="absolute"
                      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      <div className={cn(
                        "w-24 md:w-32 p-3 rounded-xl border-2 flex flex-col items-center justify-center text-center gap-2 transition-colors",
                        node.type === 'client' && "bg-emerald-500/10 border-emerald-500 text-emerald-400",
                        node.type === 'server' && "bg-blue-500/10 border-blue-500 text-blue-400",
                        node.type === 'db' && "bg-amber-500/10 border-amber-500 text-amber-400",
                        node.type === 'infra' && "bg-purple-500/10 border-purple-500 text-purple-400"
                      )}>
                        {node.type === 'client' && <Monitor size={20} />}
                        {node.type === 'server' && <Cpu size={20} />}
                        {node.type === 'db' && <Database size={20} />}
                        {node.type === 'infra' && <Network size={20} />}
                        <span className="text-[10px] md:text-xs font-bold">{node.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Card className="flex items-start gap-4 hover:shadow-md transition-shadow">
               <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                 <Cpu size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900">演进逻辑</h4>
                 <p className="text-xs text-slate-500 mt-1">
                   {currentStep === 0 && "因为业务简单，所以只需前端。"}
                   {currentStep === 1 && "因为需要判断和权限，所以引入了后端大脑。"}
                   {currentStep === 2 && "因为需要长久记录用户资产，所以引入了数据库。"}
                   {currentStep === 3 && "因为业务极度复杂，所以引入了平台化设施。"}
                 </p>
               </div>
             </Card>
             <Card className="flex items-start gap-4 hover:shadow-md transition-shadow">
               <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
                 <Route size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900">核心痛点解决</h4>
                 <p className="text-xs text-slate-500 mt-1">
                   {currentStep === 0 && "解决了'让别人看到我'的问题。"}
                   {currentStep === 1 && "解决了'数据动态处理'的问题。"}
                   {currentStep === 2 && "解决了'数据永不丢失'的问题。"}
                   {currentStep === 3 && "解决了'多人开发不打架'和'系统无限扩展'的问题。"}
                 </p>
               </div>
             </Card>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-slate-900 text-white rounded text-[10px] font-mono">
              Architecture Engine v1.0
            </div>
            <p className="text-xs text-slate-400">
              数据流动驱动业务增长 &bull; 架构演进降低分工成本
            </p>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="text-xs flex items-center gap-1"><Monitor size={12}/> Frontend</span>
            <span className="text-xs flex items-center gap-1"><Cpu size={12}/> Backend</span>
            <span className="text-xs flex items-center gap-1"><Database size={12}/> Data</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
