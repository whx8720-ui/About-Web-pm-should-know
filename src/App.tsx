/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useNavigate,
  useLocation
} from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Database, 
  Layers, 
  HelpCircle, 
  Search, 
  ShoppingCart, 
  Star, 
  Share2, 
  Plus, 
  Minus, 
  MousePointer2, 
  Menu, 
  Zap,
  Activity,
  Shield,
  Box,
  Bot,
  BarChart3,
  HardDrive,
  Cpu as CpuIcon,
  MessageSquare,
  AlertCircle,
  LayoutGrid,
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft, 
  Info, 
  X, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { STAGES_DATA, StageData, TechTerm } from './data.ts';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Stage 6 Specific Demo: Aggregation Platform
 */
const Stage6AggregationPlatform = ({ 
  isStatic = false, 
  activeView: externalActiveView, 
  onViewChange 
}: { 
  isStatic?: boolean, 
  activeView?: 'base' | 'monitor' | 'gateway' | 'robot' | 'oss',
  onViewChange?: (view: 'base' | 'monitor' | 'gateway' | 'robot' | 'oss') => void
}) => {
  const [internalView, setInternalView] = useState<'base' | 'monitor' | 'gateway' | 'robot' | 'oss'>('base');
  const activeView = externalActiveView || internalView;
  const setActiveView = (view: any) => {
    if (onViewChange) onViewChange(view);
    else setInternalView(view);
  };

  const [showScreenshot, setShowScreenshot] = useState(false);

  const apps = [
    { name: 'AIGC视频生成', desc: 'AI驱动的短视频生成工具', icon: Zap, category: 'app' },
    { name: '视频助手', desc: '自动化内容创作', icon: Activity, category: 'app' },
    { name: '数据大屏', desc: '业务动态实时看板', icon: BarChart3, category: 'app' },
    { name: '安全中心', desc: '数据审计与防护', icon: Shield, category: 'app' },
    { name: '工作空间', desc: '团队协作环境', icon: Layers, category: 'app' },
    { name: '资源库', desc: '统一素材管理', icon: Database, category: 'app' },
    { name: 'API网关', desc: '流量审计、限流与成本管理', icon: Shield, category: 'admin', id: 'gateway' },
    { name: '监控大屏', desc: '全链路监控，系统状态监护仪', icon: Activity, category: 'admin', id: 'monitor' },
  ];

  const renderBase = () => (
    <div className="h-full bg-slate-50 flex flex-col p-6 overflow-auto">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <header className="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">基座管理主站 (图1)</h2>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">Base Platform for Microservices</p>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[9px] font-black rounded uppercase">Admin Mode</span>
          </div>
        </header>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <LayoutGrid size={16} className="text-slate-400" />
            <h3 className="text-sm font-bold text-slate-600">已接入业务应用</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {apps.filter(a => a.category === 'app').map((app, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <app.icon size={20} />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-800">{app.name}</h3>
                  <p className="text-[9px] text-slate-400">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-blue-500" />
            <h3 className="text-sm font-bold text-slate-600">基础设施 (微服务监控看板)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {apps.filter(a => a.category === 'admin').map((app, i) => (
              <button 
                key={i} 
                onClick={() => {
                  if (isStatic) return;
                  setActiveView(app.id as any);
                  setShowScreenshot(false);
                }}
                className={cn(
                  "bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 transition-all text-left group h-full",
                  !isStatic && "hover:bg-blue-500 hover:border-blue-500 cursor-pointer"
                )}
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <app.icon size={20} />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-800 group-hover:text-white transition-colors">{app.name}</h3>
                  <p className="text-[9px] text-slate-400 group-hover:text-white/70 transition-colors leading-relaxed">{app.desc}</p>
                </div>
                <div className="mt-auto pt-2 flex items-center gap-1 text-[8px] font-black text-blue-600 group-hover:text-white uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  { (app.id === 'monitor' || app.id === 'gateway') ? '进入监控模块' : '暂未开放演示' } <ChevronRight size={10} />
                </div>
              </button>
            ))}
          </div>
        </section>

      </div>
    </div>
  );

  const SubHeader = ({ title, showScreenshot, onToggleScreenshot }: { title: string, showScreenshot: boolean, onToggleScreenshot: () => void }) => (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button onClick={() => setActiveView('base')} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
          <ArrowLeft size={16} />
        </button>
        <h2 className="font-black text-sm text-slate-900 uppercase tracking-widest">{title}</h2>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={onToggleScreenshot}
          className={cn(
            "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border",
            showScreenshot ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white border-slate-200 text-slate-400 hover:border-blue-600 hover:text-blue-600"
          )}
        >
          {showScreenshot ? "📸 点击查看实时代码" : "👀 点击查看页面截图"}
        </button>
      </div>
    </header>
  );

  const ScreenshotPlaceholder = ({ figure }: { figure: string }) => (
    <div className="h-full bg-slate-100 flex flex-col items-center justify-center p-12 text-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      <div className="relative z-10 space-y-4">
        <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-slate-300 mx-auto">
          <Monitor size={48} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{figure}</h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
            (截图数据已脱敏处理)
            <br />
            如果该处未显示图片，请确保当前目录下存在对应的截图文件。
          </p>
        </div>
        <div className="pt-4 flex justify-center gap-2">
           <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-bold text-slate-400">STATUS: READY</div>
           <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[9px] font-bold text-blue-600">SOURCE: USER_UPLOAD</div>
        </div>
      </div>
    </div>
  );

  const renderMonitor = () => (
    <div className="h-full flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 bg-slate-50">
      <SubHeader title="监控大屏 (图2)" showScreenshot={showScreenshot} onToggleScreenshot={() => setShowScreenshot(!showScreenshot)} />
      {showScreenshot ? (
        <ScreenshotPlaceholder figure="Figure 2: Monitoring Dashboard" />
      ) : (
        <div className="flex-1 overflow-auto p-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-2 flex flex-col justify-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">status</span>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                 <span className="text-xs font-bold text-slate-800">运行中 (Stable)</span>
               </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-2 flex flex-col justify-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">uptime</span>
               <div className="text-sm font-black text-slate-800">14d 02h 15m</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-2 flex flex-col justify-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">mysql_status</span>
               <div className="text-xs font-bold text-emerald-600">Connected (Normal)</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-2 flex flex-col justify-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">redis_status</span>
               <div className="text-xs font-bold text-slate-400 italic">No Connection</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
               <div className="flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  <span>current_cpu_usage / all_cpu_usage</span>
                  <Activity size={16} className="text-blue-500" />
               </div>
               <div className="space-y-4">
                 <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold">
                       <span>进程 CPU (Current)</span>
                       <span>12.4%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: '12.4%' }} className="h-full bg-blue-500" />
                    </div>
                 </div>
                 <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold">
                       <span>整体 CPU (all_cpu_usage)</span>
                       <span>82.0%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: '82%' }} className="h-full bg-slate-300" />
                    </div>
                 </div>
               </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">disk_space / latency</span>
                  <HardDrive size={16} className="text-slate-400" />
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                     <p className="text-[9px] text-slate-400 font-bold uppercase">磁盘剩余 (disk_space)</p>
                     <p className="text-xl font-black text-slate-800 tracking-tight">42.8 GB</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] text-slate-400 font-bold uppercase">网络延迟 (network_latency)</p>
                     <p className="text-xl font-black text-rose-500 tracking-tight">12ms</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden p-8 flex flex-col items-center justify-center gap-8 min-h-[200px]">
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Microservice Topology View</span>
               <div className="flex items-center justify-center gap-12 w-full">
                  {['Service-A', 'Service-B', 'Service-C'].map(n => (
                    <div key={n} className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                          <Box size={24} />
                       </div>
                       <span className="text-[9px] font-bold text-slate-400 uppercase text-center leading-none">{n}<br/><span className="text-emerald-500">HEALTHY</span></span>
                    </div>
                  ))}
               </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderGateway = () => (
    <div className="h-full flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 bg-slate-50">
      <SubHeader title="API 网关 (图3)" showScreenshot={showScreenshot} onToggleScreenshot={() => setShowScreenshot(!showScreenshot)} />
      {showScreenshot ? (
        <ScreenshotPlaceholder figure="Figure 3: API Gateway Console" />
      ) : (
        <div className="flex-1 overflow-auto p-8 space-y-12">
           {/* Section 1: Infrastructure */}
           <div className="space-y-6">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3 before:h-px before:flex-1 before:bg-slate-100">
                1. 基础架构术语 (Infrastructure)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { label: '接入平台', code: 'Integration Platform', color: 'bg-blue-500' },
                   { label: '上游', code: 'Upstream / Provider', color: 'bg-emerald-500' },
                   { label: '网关节点', code: 'Gateway Node', color: 'bg-indigo-500' },
                   { label: '终点/端点', code: 'Endpoint', color: 'bg-orange-500' },
                 ].map(item => (
                   <div key={item.label} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className={cn("w-2 h-2 rounded-full mb-2", item.color)} />
                      <p className="text-xs font-bold text-slate-800">{item.label}</p>
                      <p className="text-[9px] text-slate-400 font-mono mt-1">{item.code}</p>
                   </div>
                 ))}
              </div>
           </div>

           {/* Section 2: Routing */}
           <div className="space-y-6">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3 before:h-px before:flex-1 before:bg-slate-100">
                2. 路由与分发术语 (Routing)
              </h4>
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                 {[
                   { label: '模型映射', code: 'Model Mapping' },
                   { label: '别名', code: 'Alias / Virtual Model' },
                   { label: '路由规则', code: 'Routing Rules' },
                   { label: '负载均衡', code: 'Load Balancing' },
                   { label: '重试机制', code: 'Retry Policy' },
                   { label: '回退策略', code: 'Fallback/Circuit Breaker' },
                 ].map(item => (
                   <div key={item.label} className="space-y-1 border-l-2 border-blue-500 pl-4">
                      <p className="text-[11px] font-bold text-slate-800">{item.label}</p>
                      <p className="text-[9px] text-blue-600 font-black uppercase tracking-tighter">{item.code}</p>
                   </div>
                 ))}
              </div>
           </div>

           {/* Section 3: Billing */}
           <div className="space-y-6 pb-8">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3 before:h-px before:flex-1 before:bg-slate-100">
                3. 计量与商业化术语 (Billing)
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                 {[
                   { label: '计费单元', code: 'Billing Unit / Token', value: '1,000' },
                   { label: '单价', code: 'Unit Price', value: '¥0.012' },
                   { label: '配额', code: 'Quota / Rate Limit', value: '1M/Day' },
                   { label: '余额', code: 'Balance', value: '¥4,290.00' },
                   { label: '成本分摊', code: 'Cost Allocation', value: 'Enabled' },
                   { label: '核算规则', code: 'Accounting Rules', value: 'Rules Set' },
                 ].map(item => (
                   <div key={item.label} className="bg-slate-900 p-5 rounded-2xl text-white flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[9px] text-white/40 font-bold uppercase">{item.label}</p>
                         <p className="text-[10px] font-mono text-blue-400">{item.code}</p>
                      </div>
                      <span className="text-lg font-black tracking-tighter">{item.value}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );

  const renderRobot = () => null;
  const renderOSS = () => null;

  return (
    <div className="h-full relative overflow-hidden bg-slate-900 rounded-2xl shadow-2xl border-[1px] border-slate-800">
       <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {activeView === 'base' && renderBase()}
          {activeView === 'monitor' && renderMonitor()}
          {activeView === 'gateway' && renderGateway()}
          {activeView === 'robot' && renderRobot()}
          {activeView === 'oss' && renderOSS()}
        </motion.div>
       </AnimatePresence>
    </div>
  );
};

/**
 * Reusable Page Demo Component
 */
const PageDemo = ({ 
  stage, 
  isHtmlDisabled = false, 
  isCssDisabled = false,
  externalTriggers = {},
  onAnnotationClick
}: { 
  stage: StageData, 
  isHtmlDisabled?: boolean, 
  isCssDisabled?: boolean,
  externalTriggers?: {
    showDomCode?: boolean;
    setApiStatus?: 'idle' | 'sending' | 'success';
    activeView?: any;
  },
  onAnnotationClick?: (id: string) => void
}) => {
  const [activeDomNode, setActiveDomNode] = useState<{tag: string, text: string, color: string} | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('7寸');
  const [showDomCode, setShowDomCode] = useState(false);
  const [apiStatus, setApiStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  // Sync external triggers
  useEffect(() => {
    if (externalTriggers.showDomCode !== undefined) {
      setShowDomCode(externalTriggers.showDomCode);
    }
  }, [externalTriggers.showDomCode]);

  useEffect(() => {
    if (externalTriggers.setApiStatus !== undefined) {
      setApiStatus(externalTriggers.setApiStatus);
    }
  }, [externalTriggers.setApiStatus]);

  const handleAddToCart = () => {
    setApiStatus('sending');
    setTimeout(() => {
      setApiStatus('success');
      setTimeout(() => setApiStatus('idle'), 3000);
    }, 1500);
  };

  if (stage.id === 1) {
    if (isHtmlDisabled) {
      return (
        <div className="h-full flex flex-col items-center justify-center bg-slate-50 font-mono p-8 text-slate-400">
          <div className="text-4xl mb-4">404</div>
          <div className="text-xs uppercase tracking-widest text-center">
            HTML Skeleton Removed:<br />
            No content, no tags, nothing to show.
          </div>
        </div>
      );
    }

    return (
      <div className={cn(
        "h-full flex flex-col items-center justify-center bg-white relative transition-all duration-500 overflow-hidden",
        isCssDisabled && "grayscale bg-slate-50 font-serif"
      )}>
        {/* Windows Explorer Frame Simulation */}
        <div className={cn(
          "w-full h-full flex flex-col transition-all",
          isCssDisabled && "items-start p-4"
        )}>
          {isCssDisabled ? (
            <div className="space-y-4">
              <h1 className="text-xl font-serif underline font-bold text-black">神英启蒙网 - 静态首页</h1>
              <div className="text-red-600 font-serif text-sm">
                您现在所在的网站就是神英启蒙网。这里有神奇的“科学探索”，有有趣的“文学园地”...
              </div>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li className="text-blue-800 underline">科学探索 (HTML Link)</li>
                <li className="text-blue-800 underline">启蒙数学 (HTML Link)</li>
                <li className="text-blue-800 underline">英语广场 (HTML Link)</li>
              </ul>
              <div className="text-xs border border-black p-2 mt-4 inline-block italic">
                [IMG: 启蒙数学图标.gif]
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col bg-[#C0C7C8] border-2 border-white">
              {/* Retro IE Title Bar */}
              <div className="bg-[#000080] text-white flex items-center justify-between px-2 py-0.5 select-none">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-white flex items-center justify-center">
                    <Monitor size={10} className="text-blue-900" />
                  </div>
                  <span className="text-[10px] font-bold">shenying - Microsoft Internet Explorer</span>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-4 h-4 bg-[#C0C7C8] border-t border-l border-white border-r border-b border-gray-800 flex items-center justify-center text-black text-[10px] leading-none active:border-inset">_</div>
                  <div className="w-4 h-4 bg-[#C0C7C8] border-t border-l border-white border-r border-b border-gray-800 flex items-center justify-center text-black text-[10px] leading-none active:border-inset">□</div>
                  <div className="w-4 h-4 bg-[#C0C7C8] border-t border-l border-white border-r border-b border-gray-800 flex items-center justify-center text-black text-[10px] leading-none active:border-inset">×</div>
                </div>
              </div>
              {/* Menu Bar */}
              <div className="flex gap-3 px-2 py-0.5 border-b border-gray-400 bg-[#C0C7C8] text-[10px] text-black">
                <span className="underline decoration-black">文件(F)</span>
                <span className="underline decoration-black">编辑(E)</span>
                <span className="underline decoration-black">查看(V)</span>
                <span className="underline decoration-black">收藏(A)</span>
                <span className="underline decoration-black">工具(T)</span>
                <span className="underline decoration-black">帮助(H)</span>
              </div>
              {/* URL Bar */}
              <div className="flex items-center gap-2 px-2 py-1 bg-[#C0C7C8] border-b border-gray-400 text-[10px]">
                <span className="text-slate-700 whitespace-nowrap">地址(D)</span>
                <div className="flex-1 bg-white border-inset border-2 px-1 py-0.5 flex items-center gap-1">
                   <div className="w-3 h-3 bg-blue-100 rounded-sm" />
                   <span className="text-black font-mono">http://www.shenying.com/index.htm</span>
                </div>
                <div className="flex items-center gap-1 bg-[#C0C7C8] border-outset border-2 px-2 py-0.5 shadow-sm active:border-inset">
                   <ArrowRight size={10} className="text-green-600" />
                   <span>转到</span>
                </div>
              </div>
              
              {/* Content Area - Simulated Retro Site with CSS */}
              <div className="flex-1 bg-white p-4 relative overflow-auto font-serif selection:bg-blue-600 selection:text-white">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4a90e2 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                
                <div className="relative z-10">
                  <header className="flex justify-between items-start mb-8">
                    <div className="space-y-4">
                      <div className="inline-block bg-blue-900 text-white px-4 py-1 text-xs">
                        05年05月06日 星期五 20:45
                      </div>
                      <div className="text-red-600 max-w-sm">
                        <p className="text-lg font-bold mb-2">您好！</p>
                        <p className="text-sm leading-relaxed">您现在所在的网站就是神英启蒙网。这里，有神奇的“科学探索”，有有趣的“文学园地”。还有锻炼思维能力的“启蒙数学”...</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-40 bg-gradient-to-b from-red-500 via-green-500 to-yellow-500 flex flex-col items-center justify-around text-white font-black text-xl py-4 shadow-lg border-2 border-slate-200">
                        <span>神</span><span>英</span><span>启</span><span>蒙</span>
                      </div>
                      <div className="mt-2 text-[10px] text-pink-600 font-bold">学 习 娱 乐 来 这 里 ！ ！</div>
                    </div>
                  </header>

                  <main className="grid grid-cols-2 gap-8">
                    <section className="space-y-4">
                      <h2 className="text-lg font-bold border-b-2 border-black pb-1">科学探索</h2>
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-black border-2 border-slate-300 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-tr from-green-900 to-black relative">
                            <div className="absolute top-4 left-4 w-12 h-12 bg-green-500 rounded-full blur-xl" />
                          </div>
                        </div>
                        <div className="flex-1 text-xs space-y-2">
                          <p>科学是无穷无尽的，要想知道真正的科学就来看看本网站的科学探索吧！</p>
                          <p className="text-red-500 cursor-pointer underline">*(点击进入)</p>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-2">
                      <h2 className="text-sm font-bold border-b border-dashed border-red-400">最近更新：</h2>
                      <ul className="text-[10px] space-y-2">
                         <li className="flex gap-1"><span className="text-red-600">■</span> 科学探索栏目新增了专门为小学生准备的《科学研究》栏目...</li>
                         <li className="flex gap-1"><span className="text-red-600">■</span> 趣味之窗栏目更新了搞笑明星 “拦截1角钱” 敬请参观...</li>
                      </ul>
                    </section>
                  </main>

                  <footer className="mt-12 text-center border-t-2 border-blue-800 pt-4 flex justify-around">
                     <div className="text-xs cursor-pointer group">
                        <div className="w-12 h-12 bg-slate-100 border border-slate-300 mx-auto mb-1 flex items-center justify-center group-hover:bg-blue-50">
                           <Layers size={20} className="text-slate-400" />
                        </div>
                        <span className="text-blue-800 underline">启蒙数学</span>
                     </div>
                     <div className="text-xs cursor-pointer group">
                        <div className="w-12 h-12 bg-slate-100 border border-slate-300 mx-auto mb-1 flex items-center justify-center group-hover:bg-blue-50">
                           <div className="font-serif font-black text-xl text-slate-300">E</div>
                        </div>
                        <span className="text-blue-800 underline">英语广场</span>
                     </div>
                  </footer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (stage.id === 2) {
    return (
      <div className="h-full bg-slate-100 p-2 md:p-3 overflow-auto flex flex-col font-sans relative">
        <div className="flex-1 flex flex-col min-h-0 bg-white shadow-xl rounded-xl overflow-hidden relative border border-slate-200">
          <div className="flex-1 flex flex-col md:flex-row overflow-auto">
            {/* Product Image Area */}
            <div className="w-full md:w-[40%] p-3 bg-white border-b md:border-b-0 md:border-r border-slate-100 shrink-0">
              <div 
                onMouseEnter={() => setActiveDomNode({ tag: 'img', text: '主图节点：JS 可以动态更换 src 属性来切换展示图。', color: 'bg-emerald-500' })}
                onMouseLeave={() => setActiveDomNode(null)}
                className="aspect-square bg-slate-50 rounded-lg overflow-hidden relative cursor-crosshair group flex items-center justify-center border border-slate-50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                <Monitor size={80} className="text-slate-200 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="grid grid-cols-4 gap-1.5 mt-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square bg-slate-50 border border-slate-100 rounded flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-1/2 h-1/2 bg-slate-200 rounded-sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info Area */}
            <div className="flex-1 p-4 md:p-5 flex flex-col min-w-0">
              <header className="space-y-1.5 mb-3">
                <h1 
                  onMouseEnter={() => setActiveDomNode({ tag: 'h1', text: '标题节点：存储了商品名称文字，修改它只需一行代码。', color: 'bg-blue-500' })}
                  onMouseLeave={() => setActiveDomNode(null)}
                  className="text-base font-bold text-slate-800 leading-snug cursor-default line-clamp-2"
                >
                  工控电脑一体机全封闭外嵌式电容电阻触摸屏加固防震防尘防爆
                </h1>
                <div className="flex items-center gap-3 text-[9px] text-slate-400">
                  <span className="text-rose-500 font-black">月销 2000+</span>
                  <span className="opacity-60">官方自营 · 免费配送</span>
                </div>
              </header>

              <div 
                onMouseEnter={() => setActiveDomNode({ tag: 'div', text: '价格节点：数值是动态渲染的，公式：1110 + (数量-1)*200。', color: 'bg-rose-500' })}
                onMouseLeave={() => setActiveDomNode(null)}
                className="bg-rose-50/50 p-3 rounded-lg border border-rose-100 mb-4 group cursor-default"
              >
                <div className="flex items-baseline gap-0.5">
                  <span className="text-rose-500 text-[10px] font-bold">¥</span>
                  <span className="text-rose-600 text-2xl font-black">{1110 + (quantity - 1) * 200}</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">核心规格 (DOM)</label>
                  <div className="flex flex-wrap gap-1.5">
                    {['7寸', '10.1寸', '15.6寸'].map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "px-2.5 py-1.5 rounded text-[9px] font-bold border transition-all",
                          selectedSize === size ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-100 text-slate-600 hover:border-slate-200"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 block">数量管理</label>
                    <div className="inline-flex items-center gap-0.5 p-0.5 bg-slate-50 border border-slate-100 rounded">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-5 h-5 flex items-center justify-center hover:bg-white rounded text-slate-400">
                        <Minus size={10} />
                      </button>
                      <span className="w-6 text-center text-[10px] font-bold text-slate-800">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="w-5 h-5 flex items-center justify-center hover:bg-white rounded text-slate-400">
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowDomCode(true)}
                    className="p-2 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-bold border border-blue-100 flex items-center gap-1 hover:bg-blue-100 transition-all border-dashed"
                  >
                    <Monitor size={10} /> 解析 DOM
                  </button>
                </div>
              </div>

              <footer className="mt-4 flex gap-2 pt-4 border-t border-slate-50">
                <button 
                  onClick={handleAddToCart}
                  onMouseEnter={() => setActiveDomNode({ tag: 'button', text: '提交动作：JS 从零件里收割数据，拼成 JSON 包发送。', color: 'bg-orange-600' })}
                  onMouseLeave={() => setActiveDomNode(null)}
                  className="flex-1 py-2.5 bg-amber-400 text-white rounded text-[10px] font-black shadow-lg shadow-amber-100 hover:bg-amber-500 transition-all flex items-center justify-center gap-1.5"
                >
                  <ShoppingCart size={12} /> 加入购物车
                </button>
                <button className="flex-1 py-2.5 bg-rose-500 text-white rounded text-[10px] font-black shadow-lg shadow-rose-100 hover:bg-rose-600 transition-all">
                  立即结算
                </button>
              </footer>
            </div>
          </div>
        </div>
        
        {/* Simplified Interaction Footer */}
        <div className="max-w-4xl mx-auto w-full mt-3 bg-slate-900 rounded-xl p-3 text-white hidden md:block">
          <div className="flex items-center justify-between gap-4">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                   <MousePointer2 size={16} />
                </div>
                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-0.5">交互原理：DOM 如何转化为数据？</h4>
                   <p className="text-[9px] opacity-60">DOM 节点是内存里的活对象，JS 脚本在点击时“收割”这些对象的属性（如 quantity），并组装成 JSON 发送给后端。</p>
                </div>
             </div>
             <button 
                onClick={() => setShowDomCode(!showDomCode)}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md text-[9px] font-black transition-colors"
             >
                {showDomCode ? '关闭透视' : '查看数据包透视'}
             </button>
          </div>
        </div>

        <AnimatePresence>
          {showDomCode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-x-8 bottom-20 z-50 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-3xl text-white font-mono"
            >
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">内存中的 JSON 转化实录</span>
                </div>
                <button onClick={() => setShowDomCode(false)} className="text-white/40 hover:text-white"><X size={14} /></button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                   <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Step 1: JS 抄录 DOM 零件</p>
                   <div className="bg-black/50 p-3 rounded-lg text-[10px] leading-relaxed">
                      <p className="text-blue-400">const q = document.querySelector('.qty').innerText; <span className="text-slate-600">// "{quantity}"</span></p>
                      <p className="text-blue-400">const s = document.querySelector('.size-active').innerText; <span className="text-slate-600">// "{selectedSize}"</span></p>
                   </div>
                </div>
                <div className="space-y-3">
                   <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Step 2: 序列化为后端 JSON</p>
                   <div className="bg-emerald-900/20 border border-emerald-500/20 p-3 rounded-lg text-[10px] text-emerald-300">
                      <pre>{JSON.stringify({
                        productId: 1024,
                        quantity: quantity,
                        spec: selectedSize,
                        timestamp: Date.now()
                      }, null, 2)}</pre>
                   </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                 <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping flex-shrink-0" />
                 <p className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">数据已就绪，点击“加入购物车”即可模拟数据传输给 Server</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (stage.id === 6) {
    return (
      <div className="h-full">
        <Stage6AggregationPlatform 
          isStatic={isHtmlDisabled} 
          activeView={externalTriggers.activeView} 
          onViewChange={(v) => onAnnotationClick && onAnnotationClick(v === 'base' ? '1' : v === 'monitor' ? '2' : '3')}
        />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 relative h-full overflow-hidden">
      <div className="max-w-xl mx-auto space-y-4">
        <div className="h-6 w-32 bg-slate-900 rounded flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest">
          {stage.pageDemo.title}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center">
              <stage.icon size={48} className="text-slate-200" />
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-3 w-full bg-slate-100 rounded" />
            <div className="h-3 w-full bg-slate-100 rounded" />
            <div className="h-6 w-20 bg-blue-600 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};


/**
 * Shared Layout Component
 */
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
            <BookOpen size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight">网站技术演化全景图 <span className="text-blue-600">PM版</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">关于</a>
          <a href="#" className="hover:text-blue-600 transition-colors">意见反馈</a>
        </div>
      </div>
    </header>
    <main>{children}</main>
    <footer className="py-12 bg-slate-50 border-t border-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-400 text-sm">© 2024 PM 架构成长站 · 构建结构化技术认知</p>
      </div>
    </footer>
  </div>
);

/**
 * Term Explanation Drawer
 */
const TermModal = ({ term, isOpen, onClose }: { term: TechTerm | null, isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && term && (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[100]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="relative bg-white shadow-2xl rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 md:p-8 pb-4 flex justify-between items-start border-b border-slate-100">
            <div>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-wider rounded">
                数据百科 · {term.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">{term.name}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={24} className="text-slate-400" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 custom-scrollbar">
            <section className="space-y-3">
              <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                通俗解释
              </h3>
              <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic">“{term.description}”</p>
            </section>

            {term.examples && term.examples.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  常见指令与元素 (Examples)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {term.examples.map((item, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-900 text-slate-100 font-mono text-[10px] rounded-lg shadow-sm border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            )}
            
            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PM 为什么要懂这个？</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {term.why}
              </p>
            </section>

            {term.associations && term.associations.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                  关联概念与逻辑 association
                </h3>
                <div className="grid gap-3">
                  {term.associations.map((assoc, idx) => (
                    <div key={idx} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{assoc.term}</span>
                        <span className="text-[9px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded uppercase font-black tracking-widest">{assoc.description}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed pl-3 border-l-2 border-slate-50 group-hover:border-blue-200 transition-all font-medium italic">
                        Relationship: {assoc.relation}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
          
          <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
            <button onClick={onClose} className="px-10 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-0.5">
              懂了，返回小册子
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

/**
 * Overview Page (Timeline)
 */
const OverviewPage = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [activeSection, setActiveSection] = useState('网页演示');
  const [activeConcept, setActiveConcept] = useState<TechTerm | null>(null);
  const [expandedConcepts, setExpandedConcepts] = useState<string[]>([]);

  const toggleConcept = (conceptName: string) => {
    setExpandedConcepts(prev => 
      prev.includes(conceptName) ? prev.filter(c => c !== conceptName) : [...prev, conceptName]
    );
  };
  // Interaction states for Stage 1 & 2 demo in overview
  const [demoHtmlDisabled, setDemoHtmlDisabled] = useState(false);
  const [demoCssDisabled, setDemoCssDisabled] = useState(false);
  const [demoShowDomCode, setDemoShowDomCode] = useState(false);
  const [stage6ActiveView, setStage6ActiveView] = useState<'base' | 'monitor' | 'gateway'>('base');
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const stage = STAGES_DATA.find(s => s.id === selectedId) || STAGES_DATA[0];
  const allTerms = STAGES_DATA.flatMap(s => s.techConcepts.flatMap(c => c.terms));

  const handleScrollToActive = (id: number) => {
    setSelectedId(id);
    setIsExpanded(false); // Reset expansion when changing stages
    if (timelineRef.current) {
      const container = timelineRef.current;
      const elements = Array.from(container.children);
      const activeElement = elements[id - 1] as HTMLElement;
      
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const toggleExpand = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (newState) {
      // Small delay to allow DOM to render before scrolling
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  useEffect(() => {
    handleScrollToActive(selectedId);
    setDemoHtmlDisabled(false);
    setDemoCssDisabled(false);
  }, [selectedId]);

  return (
    <div className="py-8 bg-slate-50 relative min-h-screen">
      {/* Floating Navigation FAB */}
      <div className="fixed bottom-10 right-10 z-[300] flex flex-col items-end gap-3">
        <AnimatePresence>
          {isNavOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-3xl p-3 w-48 mb-2 backdrop-blur-md bg-opacity-95"
            >
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 py-2 border-b border-slate-800 mb-2">地图索引</p>
              {[
                { id: '网页演示', label: '网页形态展示' },
                { id: '技术概念', label: '核心术语库' },
                { id: '数据流', label: '流量架构图' },
                { id: '痛点故事', label: '业务痛点' },
                { id: '演进图谱', label: '全量演进' }
              ].map(nav => (
                <button 
                  key={nav.id}
                  onClick={() => {
                    scrollToSection(nav.id);
                    setIsNavOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2.5 text-xs font-bold rounded-xl transition-all",
                    activeSection === nav.id ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  {nav.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-3xl flex items-center justify-center hover:bg-blue-600 transition-all border-2 border-slate-700 active:scale-90"
        >
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            从单机静态页到千万并发平台 <br />
            <span className="text-blue-600 font-extrabold underline decoration-blue-100 decoration-8 underline-offset-8">看懂网站如何一点点变厚？</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            点击下方里程碑里程碑，深度拆解互联网架构的演进逻辑。
          </p>
        </div>

      {/* Horizontal Timeline */}
      <div className="relative group overflow-hidden mb-12 bg-white/40 border-y border-slate-100 backdrop-blur-sm py-4">
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <div 
          ref={timelineRef}
          className="flex overflow-x-auto pb-8 px-[15%] md:px-[40%] no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory items-end h-40 border-b border-slate-100"
        >
          {STAGES_DATA.map((s) => (
            <div 
              key={s.id} 
              onClick={() => handleScrollToActive(s.id)}
              className="flex-shrink-0 w-48 md:w-64 flex flex-col items-center group snap-center cursor-pointer"
            >
              <motion.div 
                animate={{ 
                  scale: selectedId === s.id ? 1.1 : 0.9,
                  opacity: selectedId === s.id ? 1 : 0.4
                }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10",
                  selectedId === s.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                )}
              >
                <s.icon size={20} />
                {selectedId === s.id && (
                  <motion.div 
                    layoutId="active-ring"
                    className="absolute -inset-1.5 border-2 border-blue-600 rounded-full"
                  />
                )}
              </motion.div>
              <div className="mt-3 text-center">
                <span className={cn(
                  "text-[9px] font-bold uppercase tracking-widest block mb-0.5",
                  selectedId === s.id ? "text-blue-600" : "text-slate-400"
                )}>
                  {s.subtitle.split('：')[0]}
                </span>
                <h3 className={cn(
                  "font-bold transition-all whitespace-nowrap",
                  selectedId === s.id ? "text-base text-slate-900" : "text-xs text-slate-400 grayscale"
                )}>
                  {s.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Card Container */}
      <div className="max-w-7xl mx-auto px-4 mt-8 mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: Previews */}
              <div className="lg:w-3/5 p-6 border-r border-slate-100 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-black">
                      {stage.id}
                    </span>
                    {stage.name}
                  </h3>
                  <button 
                    onClick={toggleExpand}
                    className={cn(
                      "group flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs transition-all",
                      isExpanded 
                        ? "bg-slate-100 text-slate-600 hover:bg-slate-200" 
                        : "bg-slate-900 text-white hover:bg-blue-600"
                    )}
                  >
                    {isExpanded ? '收起详情' : '详细解读'}
                    <ChevronRight size={14} className={cn("transition-transform", isExpanded ? "rotate-90" : "group-hover:translate-x-0.5")} />
                  </button>
                </div>
                


                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      📸 典型形态 (网页缩略图)
                    </h4>
                    <button 
                      onClick={() => {
                        if (!isExpanded) setIsExpanded(true);
                        setTimeout(() => {
                          const demoEl = document.getElementById('网页演示');
                          demoEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 200);
                      }}
                      className="w-full aspect-[4/3] bg-slate-900 rounded-xl border-2 border-slate-800 flex items-center justify-center overflow-hidden relative group"
                    >
                      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                      <div className="w-[900px] h-[675px] scale-[0.18] sm:scale-[0.22] md:scale-[0.28] lg:scale-[0.32] origin-center bg-white rounded shadow-2xl pointer-events-none transform transition-transform group-hover:scale-[0.35]">
                        <PageDemo 
                          stage={stage} 
                          isHtmlDisabled={demoHtmlDisabled} 
                          isCssDisabled={demoCssDisabled} 
                          externalTriggers={{ 
                            showDomCode: demoShowDomCode,
                            activeView: stage6ActiveView
                          }}
                          onAnnotationClick={(id) => {
                            if (stage.id === 6) {
                               if (id === '1') setStage6ActiveView('base');
                               if (id === '2') setStage6ActiveView('monitor');
                               if (id === '3') setStage6ActiveView('gateway');
                            }
                          }}
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-100 transition-opacity">
                        <p className="text-[8px] text-white font-bold text-center">点击进入交互大图</p>
                      </div>
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      🔄 数据流走势
                    </h4>
                    <div className="aspect-[4/3] bg-blue-50/30 rounded-xl border border-blue-100 p-4 flex flex-col justify-center items-center gap-4">
                      <div className="text-[10px] text-slate-600 font-mono leading-relaxed text-center px-1">
                        {stage.summaryDataFlow}
                      </div>
                      <div className="relative w-full h-1 bg-blue-200 rounded-full">
                        <motion.div 
                          animate={{ left: ["0%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-400 blur-[0.5px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right: Info Panels */}
              <div className="lg:w-2/5 p-6 bg-slate-50/50 space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">核心痛点</h4>
                  <ul className="space-y-3">
                    {stage.painPoints.slice(0, 2).map((pain, pidx) => (
                      <li key={pidx} className="flex gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-[10px]">!</div>
                        <p className="text-[11px] text-slate-600 leading-tight">{pain.problem}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">核心演进</h4>
                  <div className="bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Zap size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-slate-900 truncate">关键演进</p>
                  <p className="text-[9px] text-slate-400 truncate">{stage.evolution.nextStageHint}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-slate-50 border-t border-slate-200"
            ref={detailsRef}
          >
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 relative lg:grid lg:grid-cols-12 gap-12">
              {/* Main Content Column (Left) */}
              <div className="lg:col-span-9 space-y-24">
                {/* Header Section */}
                <section className="space-y-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-full uppercase tracking-widest border border-blue-200 inline-block">
                      第 {stage.id} 阶段：架构演进深度拆解
                    </span>
                    <h1 className="text-4xl font-black text-slate-900 leading-tight">
                      {stage.name}
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
                      {stage.fullDescription}
                    </p>
                  </div>

                  <div className="p-8 bg-blue-600 rounded-[2rem] text-white shadow-2xl shadow-blue-100 relative overflow-hidden group">
                    <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform text-white">
                      <HelpCircle size={160} />
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-70 flex items-center gap-2">
                       PM 大白话解释
                    </h3>
                    <p className="text-2xl font-medium leading-relaxed italic relative z-10">
                      “{stage.pmAnalogy}”
                    </p>
                  </div>
                </section>

                {/* Section 1: Page Form Demo */}
                <section id="网页演示" className="space-y-12 scroll-mt-32">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-slate-900">网页形态深度演示</h3>
                    <p className="text-slate-400 mt-2 text-sm">通过下方模拟沙盒，体验真实的网页交互与技术反馈</p>
                  </div>

                  <div className="bg-slate-900 rounded-[3rem] p-4 md:p-10 shadow-2xl border-[12px] border-slate-800">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden aspect-[16/10] relative">
                      <div className="bg-slate-100 h-10 flex items-center px-4 gap-1.5 border-b border-slate-200">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex-1 max-w-md mx-auto h-6 bg-white rounded-lg border border-slate-200 flex items-center px-4 text-[11px] text-slate-400 font-mono">
                          https://product.manager.edu/evolution/stage-{stage.id}
                        </div>
                      </div>
                      
                      <div className="relative h-[calc(100%-2.5rem)]">
                        <PageDemo 
                          stage={stage} 
                          isHtmlDisabled={demoHtmlDisabled} 
                          isCssDisabled={demoCssDisabled} 
                          externalTriggers={{ 
                            showDomCode: demoShowDomCode,
                            activeView: stage6ActiveView
                          }}
                          onAnnotationClick={(id) => {
                            if (stage.id === 6) {
                               if (id === '1') setStage6ActiveView('base');
                               if (id === '2') setStage6ActiveView('monitor');
                               if (id === '3') setStage6ActiveView('gateway');
                            }
                          }}
                        />

                        {!demoHtmlDisabled && stage.pageDemo.annotations.map((ann) => (
                          <div 
                            key={ann.id}
                            style={{ left: `${ann.x}%`, top: `${ann.y}%` }}
                            className="absolute group z-20"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (stage.id === 6) {
                                if (ann.id === '1') setStage6ActiveView('base');
                                if (ann.id === '2') setStage6ActiveView('monitor');
                                if (ann.id === '3') setStage6ActiveView('gateway');
                              }
                            }}
                          >
                            <div className="relative">
                              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-xl shadow-blue-200 animate-pulse cursor-pointer border-2 border-white group-hover:scale-125 transition-transform">
                                {ann.id}
                              </div>
                              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 bg-slate-900 text-white p-4 rounded-2xl shadow-3xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none text-xs z-50">
                                <div className="flex items-center justify-between mb-2">
                                  <p className="font-bold flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                    {ann.title}
                                  </p>
                                </div>
                                <p className="opacity-70 leading-relaxed">{ann.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-slate-500 text-xs mt-8 italic uppercase tracking-[0.2em] font-black opacity-60">
                       {stage.pageDemo.description}
                    </p>
                  </div>
                </section>

                {/* Section 2: Tech Concepts */}
                {stage.techConcepts.length > 0 && (
                  <section id="技术概念" className="space-y-10 scroll-mt-32">
                    <div className="text-center lg:text-left max-w-2xl space-y-4">
                      <h3 className="text-3xl font-bold text-slate-900">核心技术概念库</h3>
                      <p className="text-slate-500 text-sm">点击术语展开详情，观察上方演示沙盒的实时变化</p>
                    </div>

                    <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm space-y-10">
                      {stage.techConcepts.map((cat, ci) => (
                        <div key={ci} className="space-y-6">
                          <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] flex items-center gap-4 before:h-px before:flex-1 before:bg-slate-100 after:h-px after:flex-1 after:bg-slate-100">
                            {cat.category}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {cat.terms.map((term, ti) => {
                              const isExpanded = expandedConcepts.includes(term.name);
                              return (
                                <div key={ti} className="flex flex-col">
                                  <button
                                    onClick={() => {
                                      toggleConcept(term.name);
                                      if (term.name === 'DOM') setDemoShowDomCode(true);
                                      if (term.name === 'HTML') setDemoCssDisabled(true);
                                      if (term.name === 'CSS') setDemoCssDisabled(false);
                                    }}
                                    className={cn(
                                      "w-full p-5 rounded-2xl border transition-all text-left flex items-center justify-between group",
                                      isExpanded ? "bg-slate-900 border-slate-900 shadow-xl" : "bg-white border-slate-100 hover:border-blue-200"
                                    )}
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm",
                                        isExpanded ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                                      )}>
                                        <Layers size={18} />
                                      </div>
                                      <div>
                                        <p className={cn("text-[13px] font-bold", isExpanded ? "text-white" : "text-slate-900")}>{term.name}</p>
                                        {!isExpanded && <p className="text-[10px] text-slate-400 mt-0.5">点击展开解析</p>}
                                      </div>
                                    </div>
                                    <ChevronRight size={18} className={cn("transition-transform", isExpanded ? "rotate-90 text-blue-400" : "text-slate-200 group-hover:text-blue-300")} />
                                  </button>
                                  
                                  <AnimatePresence>
                                    {isExpanded && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="p-6 bg-slate-50 border-x border-b border-slate-200 rounded-b-2xl mt-[-1px] space-y-4">
                                          <p className="text-sm text-slate-600 leading-relaxed font-medium">{term.description}</p>
                                          <div className="bg-blue-600 p-4 rounded-xl shadow-lg shadow-blue-100">
                                            <p className="text-[11px] text-blue-50 leading-relaxed">
                                              <span className="font-black mr-2 bg-white/20 px-2 py-0.5 rounded text-white tracking-widest">PM WHY</span>
                                              {term.why}
                                            </p>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Section 3: Data Flow */}
                <section id="数据流" className="space-y-10 scroll-mt-32">
                  <div className="text-center lg:text-left space-y-4">
                    <h3 className="text-3xl font-bold text-slate-900">数据流流向大不同</h3>
                    <p className="text-slate-500 text-sm">对比前后两个阶段的数据转换效率，理解网站如何从“加载”到“交互”</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-8 flex flex-col items-center">
                       <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Previous Architecture</h4>
                       <div className="w-full aspect-[16/6] bg-slate-50 rounded-2xl p-6 flex items-center justify-center gap-12 relative">
                          <div className="w-14 h-14 bg-white rounded-xl border border-slate-200 shadow-sm" />
                          <ArrowRight className="text-slate-200" size={24} />
                          <div className="w-14 h-14 bg-white rounded-full border border-slate-200 shadow-sm" />
                       </div>
                       <p className="text-xs font-bold text-slate-500 text-center tracking-wide">{stage.dataFlow.leftTitle}</p>
                    </div>
                    
                    <div className="bg-blue-600 rounded-[2.5rem] p-10 shadow-2xl shadow-blue-200 space-y-8 flex flex-col items-center relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                          <Monitor size={120} className="text-white" />
                       </div>
                       <h4 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Proposed Architecture</h4>
                       <div className="w-full aspect-[16/6] bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 flex items-center justify-center gap-12 relative z-10">
                          <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl shadow-lg">
                            <Monitor size={24} />
                          </div>
                          <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                            <ArrowRight className="text-white" size={24} />
                          </motion.div>
                          <div className="w-14 h-14 bg-white text-blue-600 flex items-center justify-center rounded-full shadow-lg">
                            <Database size={24} />
                          </div>
                       </div>
                       <p className="text-xs font-black text-white text-center tracking-wide uppercase">{stage.dataFlow.rightTitle}</p>
                    </div>
                  </div>
                </section>

                {/* Section 4: Evolution & Pain Points */}
                <section id="痛点故事" className="bg-slate-900 rounded-[3rem] p-12 md:p-20 space-y-16 scroll-mt-32 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                     <Zap size={240} className="text-white" />
                  </div>

                  <div className="text-center lg:text-left space-y-4 relative z-10">
                    <h3 className="text-3xl font-bold text-white">技术如何彻底击碎痛点？</h3>
                    <p className="text-slate-400 text-sm">每一个新技术的诞生，背后都是为了解决一个真实存在的商业或用户痛点</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    {stage.painPoints.map((pain, pi) => (
                      <div key={pi} className="bg-white/5 backdrop-blur border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-colors group">
                         <div className="space-y-8">
                            <div className="flex items-center gap-3">
                               <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Pain Point</div>
                               <div className="h-px flex-1 bg-white/10" />
                            </div>
                            <p className="text-2xl font-bold text-white leading-tight">“{pain.problem}”</p>
                            <div className="flex items-center gap-4 text-blue-400 font-bold group-hover:text-blue-300 transition-colors">
                               <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                               <span className="text-sm">引入 {pain.solution}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-20 border-t border-white/5 text-center relative z-10">
                     <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">通往下一阶段的钥匙</p>
                     <p className="text-2xl font-medium text-slate-100 max-w-2xl mx-auto italic">
                       “{stage.evolution.nextStageHint}”
                     </p>
                  </div>
                </section>

                {/* Section 5: Tech Stack Full View */}
                <section id="技术栈全表" className="space-y-10 scroll-mt-32 pb-32">
                  <div className="text-center lg:text-left space-y-4">
                    <h3 className="text-3xl font-bold text-slate-900">累计技术栈全景图</h3>
                    <p className="text-slate-500 text-sm">直观感受网站在这个阶段“变厚”的程度</p>
                  </div>

                  <div className="overflow-x-auto rounded-[2.5rem] border border-slate-200 bg-white shadow-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="p-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">架构维图</th>
                          {STAGES_DATA.slice(0, stage.id).map((s) => (
                            <th key={s.id} className={cn(
                              "p-8 text-[11px] font-black uppercase tracking-widest border-b border-slate-100 border-l text-center",
                              s.id === stage.id ? "text-blue-600 bg-blue-50/50" : "text-slate-300"
                            )}>
                              V{s.id} 阶段
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cat: '交互表现', stacks: ['HTML/CSS', 'JS/DOM', 'AJAX', 'React/Vue', 'TypeScript', 'Microfrontend', 'LLM UI'] },
                          { cat: '通信协议', stacks: ['HTTP/1.0', 'Cookie', 'REST API', 'GraphQL', 'gRPC', 'WebSocket', 'WebRTC'] },
                          { cat: '后端架构', stacks: ['Apache', 'MVC/PHP', 'Cluster', 'Node.js', 'Microsvc', 'Serverless', 'AI Agent'] },
                          { cat: '存储体系', stacks: ['Static', 'SQL', 'NoSQL', 'Redis', 'DataLake', 'VectorDB', 'CloudNative'] },
                        ].map((row, i) => (
                          <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                            <td className="p-8 text-sm font-bold text-slate-900 border-b border-slate-100">{row.cat}</td>
                            {STAGES_DATA.slice(0, stage.id).map((s, si) => (
                              <td key={si} className={cn(
                                "p-4 border-b border-slate-100 border-l text-center",
                                s.id === stage.id && "bg-blue-50/20"
                              )}>
                                <div className="flex flex-wrap justify-center gap-1">
                                   {row.stacks.slice(0, s.id).map((stk, sti) => (
                                     <span key={sti} className={cn(
                                       "px-2 py-1 rounded-md text-[10px] font-bold leading-none shadow-sm",
                                       sti === s.id - 1 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                                     )}>
                                       {stk}
                                     </span>
                                   ))}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              {/* Sticky Sidebar Navigation */}
              <nav className="hidden lg:block lg:col-span-3">
                <div className="sticky top-32 space-y-1 border-l-2 border-slate-200 pl-6 py-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">快速导航</p>
                  {[
                    { id: '网页演示', label: '网页形态演示' },
                    { id: '数据流', label: '流量架构图' },
                    { id: '技术概念', label: '核心术语库' },
                    { id: '痛点故事', label: '业务痛点' },
                    { id: '技术栈全表', label: '全量技术表' }
                  ].map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`} 
                      className="block py-1.5 text-[13px] font-bold text-slate-500 hover:text-blue-600 border-l-2 border-transparent -ml-[26px] pl-6 hover:border-blue-600 transition-all font-sans"
                    >
                      {sec.label}
                    </a>
                  ))}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <button 
                      onClick={() => setIsGlossaryOpen(true)}
                      className="flex items-center gap-2 text-[11px] font-bold text-slate-900 bg-white border border-slate-200 w-full px-4 py-2.5 rounded-xl shadow-sm hover:border-blue-300 transition-all justify-center"
                    >
                      <BookOpen size={12} className="text-blue-600" /> 全局术语词典
                    </button>
                    <button 
                      onClick={toggleExpand}
                      className="mt-3 flex items-center gap-2 text-[11px] font-bold text-slate-400 bg-slate-50 w-full px-4 py-2 rounded-lg hover:text-slate-600 transition-all justify-center"
                    >
                      收起详情返回
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Glossary Modal (Available anywhere on overview) */}
      <AnimatePresence>
        {isGlossaryOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGlossaryOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 text-center">术语词典 (Glossary)</h2>
                </div>
                <button onClick={() => setIsGlossaryOpen(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                  <X size={20} className="text-slate-400" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {allTerms.map((term, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      setActiveConcept(term);
                      setIsGlossaryOpen(false);
                    }}
                    className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-left transition-all"
                  >
                    <p className="font-bold text-slate-900 text-xs mb-1">{term.name}</p>
                    <p className="text-[10px] text-slate-500 line-clamp-2">{term.description}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <TermModal 
        isOpen={activeConcept !== null} 
        term={activeConcept} 
        onClose={() => setActiveConcept(null)} 
      />

      {/* Quick Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-white/90 backdrop-blur shadow-xl border border-slate-100 rounded-full px-5 py-2.5 gap-4 z-30 scale-90 md:scale-100">
        <div className="flex gap-1.5">
          {STAGES_DATA.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScrollToActive(s.id)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedId === s.id ? "bg-blue-600 w-6" : "bg-slate-200 hover:bg-slate-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Floating Navigation Bar (Right Side)
 */
const FloatingNav = ({ isCollapsed, onToggle, onHome }: { isCollapsed: boolean, onToggle: () => void, onHome: () => void }) => {
  const sections = [
    { id: '网页演示', label: '网页形态演示' },
    { id: '数据流', label: '流量架构图' },
    { id: '技术概念', label: '核心术语库' },
    { id: '痛点故事', label: '业务痛点' },
    { id: '技术栈全表', label: '全量技术表' }
  ];

  return (
    <motion.div 
      initial={false}
      animate={{ width: isCollapsed ? '56px' : '200px' }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col transition-all duration-300"
    >
      <div className="p-4 border-b border-slate-50 flex justify-center items-center">
        <p className={cn("text-[9px] font-black text-slate-300 uppercase tracking-widest transition-all", isCollapsed ? "opacity-0" : "opacity-100")}>
          快速导航
        </p>
        <button 
          onClick={onToggle}
          className={cn("absolute right-2 p-1.5 text-slate-300 hover:text-blue-600 transition-colors", !isCollapsed && "rotate-180")}
        >
          <ChevronLeft size={16} />
        </button>
      </div>

      <div className="flex-1 py-4 px-3 space-y-1">
        {sections.map((sec) => (
           <a 
              key={sec.id}
              href={`#${sec.id}`}
              className={cn(
                 "flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all hover:bg-blue-50 text-slate-600 hover:text-blue-600 group font-bold",
                 isCollapsed && "justify-center"
              )}
           >
              {!isCollapsed && <span className="text-[13px] whitespace-nowrap overflow-hidden">{sec.label}</span>}
              {isCollapsed && <div className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-blue-400 transition-colors" />}
           </a>
        ))}
      </div>
      
      <div className="p-3 border-t border-slate-50 space-y-2">
         <button 
           onClick={onHome}
           className={cn(
             "w-full py-2.5 rounded-xl border border-slate-100 flex items-center justify-center gap-2 text-slate-400 hover:text-slate-900 transition-all text-[11px] font-bold bg-slate-50/50",
             isCollapsed && "px-0"
           )}
         >
           {isCollapsed ? <ArrowLeft size={14} /> : <span>收起详情返回</span>}
         </button>
      </div>
    </motion.div>
  );
};

/**
 * Stage Detail Page
 */
const StageDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const stageId = parseInt(id || '1');
  const stage = STAGES_DATA.find(s => s.id === stageId) || STAGES_DATA[0];
  const [activeConcept, setActiveConcept] = useState<TechTerm | null>(null);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  // Interaction State for PageDemo
  const [interactionState, setInteractionState] = useState({
    isHtmlDisabled: false,
    isCssDisabled: false,
    demoTrigger: {
      showDomCode: false
    }
  });

  const handleTermClick = (term: TechTerm) => {
    setActiveConcept(term);
    
    // UI Interaction Logic
    if (term.name === 'HTML') {
       setInteractionState(prev => ({ ...prev, isHtmlDisabled: false, isCssDisabled: true }));
    } else if (term.name === 'CSS') {
       setInteractionState(prev => ({ ...prev, isHtmlDisabled: false, isCssDisabled: false }));
    } else if (term.name === 'DOM') {
       setInteractionState(prev => ({ ...prev, demoTrigger: { ...prev.demoTrigger, showDomCode: true } }));
    } else {
       // Reset for other terms if needed, or keep current
    }
  };

  // Collect all unique terms for the global dictionary
  const allTerms = STAGES_DATA.flatMap(s => s.techConcepts.flatMap(c => c.terms));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <div className="relative">
      {/* Sticky Sub Nav */}
      <div className="sticky top-16 z-30 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-14 justify-between min-w-[600px]">
          <Link to="/" className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest whitespace-nowrap">
            <ArrowLeft size={14} /> 返回全景图
          </Link>
          
          <div className="flex gap-1">
            {STAGES_DATA.map((s) => (
              <Link 
                key={s.id}
                to={`/stage/${s.id}`}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap",
                  s.id === stageId ? "bg-blue-600 text-white shadow-md shadow-blue-100" : "text-slate-400 hover:bg-slate-50"
                )}
              >
                {s.id}. {s.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsGlossaryOpen(true)}
            className="flex items-center gap-1.5 text-xs font-bold bg-slate-900 text-white px-4 py-1.5 rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            <BookOpen size={14} /> 全局术语表
          </button>
        </div>
      </div>

      {/* Global Glossary Modal */}
      <AnimatePresence>
        {isGlossaryOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGlossaryOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">术语词典 (Glossary)</h2>
                  <p className="text-sm text-slate-500 mt-1">网站技术演化全过程的核心术语汇总</p>
                </div>
                <button onClick={() => setIsGlossaryOpen(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                  <X size={24} className="text-slate-400" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allTerms.map((term, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      setActiveConcept(term);
                      setIsGlossaryOpen(false);
                    }}
                    className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/30 text-left transition-all"
                  >
                    <p className="font-bold text-slate-900 text-sm mb-1">{term.name}</p>
                    <p className="text-xs text-slate-500 line-clamp-2">{term.description}</p>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-slate-900 text-white text-center text-xs opacity-80">
                提示：点击术语查看通俗解释和 PM 应用场景
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:grid lg:grid-cols-12 gap-12">
        {/* Floating Right Nav */}
        <FloatingNav 
          isCollapsed={isNavCollapsed} 
          onToggle={() => setIsNavCollapsed(!isNavCollapsed)} 
          onHome={() => navigate('/')}
        />

        {/* Content Column */}
        <div className="lg:col-span-12 space-y-32">
          {/* Header */}
          <section className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-black rounded-full uppercase tracking-widest border border-blue-100">
                {stage.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {stage.name}
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
                {stage.fullDescription}
              </p>
            </motion.div>

            <div className="p-8 bg-blue-600 rounded-[2rem] text-white shadow-2xl shadow-blue-200 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform text-white">
                <Info size={200} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-70 flex items-center gap-2">
                <HelpCircle size={14} /> PM 大大白话解释
              </h3>
              <p className="text-2xl font-medium leading-relaxed italic relative z-10">
                “{stage.pmAnalogy}”
              </p>
            </div>
          </section>

          {/* Section 1: Page Form Demo */}
          <section id="网页演示" className="space-y-8 scroll-mt-40">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">📸 第一板块</h2>
                <h3 className="text-3xl font-bold text-slate-900">网页形态深度演示</h3>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-4 md:p-12 shadow-inner border-[12px] border-slate-800">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden aspect-[16/10] relative">
                <div className="bg-slate-100 h-8 flex items-center px-4 gap-1.5">
                   <div className="flex gap-1">
                     <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                   </div>
                   <div className="flex-1 max-w-sm mx-auto h-5 bg-white rounded flex items-center px-3 text-[10px] text-slate-400 font-mono">
                     https://architecture-edu.pm/stage/{stageId}
                   </div>
                </div>
                
                <div className="relative h-full">
                  <PageDemo 
                    stage={stage} 
                    isHtmlDisabled={interactionState.isHtmlDisabled} 
                    isCssDisabled={interactionState.isCssDisabled}
                    externalTriggers={interactionState.demoTrigger}
                  />

                  {stage.pageDemo.annotations.map((ann) => (
                    <motion.div 
                      key={ann.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      style={{ left: `${ann.x}%`, top: `${ann.y}%` }}
                      className="absolute group z-20"
                    >
                      <div className="relative">
                        <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-rose-200 animate-pulse cursor-pointer">
                          {ann.id}
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-slate-900 text-white p-3 rounded-xl shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none text-xs">
                          <p className="font-bold mb-1">{ann.title}</p>
                          <p className="opacity-70 leading-relaxed">{ann.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-center text-slate-500 text-sm mt-8 italic">
                “{stage.pageDemo.description}”
              </p>
            </div>
          </section>

          {/* Section 2: Data Flow */}
          <section id="数据流" className="space-y-8 scroll-mt-40">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">🔄 第二板块</h2>
                <h3 className="text-3xl font-bold text-slate-900">数据流流向大不同</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-6">
                 <h4 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                   以前的架构形态
                 </h4>
                 <div className="aspect-[16/6] bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-8">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg" />
                    <ArrowRight className="text-slate-200" />
                    <div className="w-12 h-12 bg-slate-100 rounded-full" />
                 </div>
                 <p className="text-sm font-medium text-slate-600 text-center">{stage.dataFlow.leftTitle}</p>
              </div>
              
              <div className="bg-blue-50/30 rounded-3xl p-8 border border-blue-100 space-y-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl">当前阶段</div>
                 <h4 className="flex items-center gap-2 text-sm font-bold text-blue-600/60 uppercase tracking-widest">
                    本阶段演进 <ArrowRight size={16} />
                 </h4>
                 <div className="aspect-[16/6] bg-white border-2 border-blue-200 rounded-2xl shadow-lg shadow-blue-100 p-4 flex items-center justify-center gap-8 relative z-10">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                      <Monitor size={20} />
                    </div>
                    <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      <ArrowRight className="text-blue-600" />
                    </motion.div>
                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg shadow-blue-200">
                      <Database size={20} />
                    </div>
                 </div>
                 <p className="text-sm font-bold text-blue-900 text-center">{stage.dataFlow.rightTitle}</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto text-center">
              {stage.dataFlow.description}
            </p>
          </section>

          {/* Section 3: Tech Concepts */}
          <section id="技术概念" className="space-y-12 scroll-mt-40">
            <div className="text-center">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">🏷️ 第三板块</h2>
              <h3 className="text-3xl font-bold text-slate-900">核心技术概念分类拆解</h3>
              <p className="text-slate-500 text-sm mt-3">点击卡片，查看 PM 维度的通俗定义</p>
            </div>

            <div className="space-y-12">
              {stage.techConcepts.map((cat, ci) => (
                <div key={ci} className="space-y-6">
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-4 before:h-[1px] before:flex-1 before:bg-slate-100 after:h-[1px] after:flex-1 after:bg-slate-100">
                    {cat.category}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cat.terms.map((term, ti) => (
                      <motion.button
                        key={ti}
                        whileHover={{ y: -4 }}
                        onClick={() => handleTermClick(term)}
                        className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 text-left transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 flex items-center justify-center mb-3 transition-colors">
                          <Layers size={16} />
                        </div>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{term.name}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block group-hover:text-blue-400">查看详情解释</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Pain Points */}
          <section id="痛点故事" className="bg-rose-50 rounded-[3rem] p-12 space-y-10 scroll-mt-40">
             <div className="text-center space-y-2">
                <h2 className="text-xs font-bold text-rose-300 uppercase tracking-widest">😣 第四板块</h2>
                <h3 className="text-3xl font-bold text-rose-900">这一阶段解决了什么头疼问题？</h3>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8">
               {stage.painPoints.map((pain, pi) => (
                 <div key={pi} className="bg-white/60 p-8 rounded-3xl border border-rose-100 hover:bg-white transition-colors group">
                    <div className="flex gap-4 items-start">
                       <div className="bg-rose-100 text-rose-600 p-2 rounded-xl text-xs font-bold">PAIN</div>
                       <div className="space-y-4">
                          <p className="text-lg font-bold text-slate-900 leading-snug">“{pain.problem}”</p>
                          <div className="flex items-center gap-3 text-rose-500 font-bold text-sm">
                             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /> 
                             引入 {pain.solution}
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          </section>

          {/* Section 5: Evolution */}
          <section id="演进来去" className="space-y-12 scroll-mt-40">
             <div className="relative border-y-2 border-dashed border-slate-100 py-12">
               <div className="flex flex-col md:flex-row items-center gap-12">
                 <div className="flex-1 space-y-6">
                    <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest">上一阶段遗留的问题</h4>
                    <div className="space-y-3">
                      {stage.evolution.previousProblems.map((prob, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                          • {prob}
                        </div>
                      ))}
                    </div>
                 </div>
                 
                 <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-200">
                    <ArrowRight size={32} />
                 </div>

                 <div className="flex-1 space-y-6">
                    <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest">本阶段新产生的问题</h4>
                    <div className="space-y-3">
                      {stage.evolution.newProblems.map((prob, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-blue-900 font-bold">
                          <Info className="text-blue-400" size={14} /> {prob}
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
               
               <div className="mt-16 text-center">
                  <p className="text-slate-400 text-sm mb-4">通往下一阶段的钥匙：</p>
                  <p className="text-xl font-bold text-slate-700 max-w-lg mx-auto">
                    {stage.evolution.nextStageHint}
                  </p>
               </div>
             </div>
          </section>

          {/* Section 6: Tech Stack Table */}
          <section id="技术栈全表" className="space-y-8 scroll-mt-40 pb-20">
             <div>
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">📊 第六板块</h2>
                <h3 className="text-3xl font-bold text-slate-900">累计技术栈全景表</h3>
             </div>
             
             <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">技术领域</th>
                      {STAGES_DATA.slice(0, stageId).map((s) => (
                        <th key={s.id} className={cn(
                          "p-6 text-xs font-black uppercase tracking-widest border-b border-slate-100 border-l min-w-[120px]",
                          s.id === stageId ? "text-blue-600 bg-blue-50/50" : "text-slate-400"
                        )}>
                          阶段 {s.id}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: '前端语言/框架', stacks: ['HTML/CSS', 'JavaScript', 'Templating', 'React/Vue', 'TypeScript', 'Microfrontend', 'LLM UI'] },
                      { cat: '网络与通信', stacks: ['HTTP/1.0', 'AJAX', 'REST API', 'GraphQL', 'gRPC', 'WebSocket', 'Edge Compute'] },
                      { cat: '后端/服务器', stacks: ['Apache', 'PHP/Java', 'MVC', 'Node.js', 'Microservices', 'Serverless', 'AI Agent'] },
                      { cat: '存储与数据库', stacks: ['Filesystem', 'SQL', 'NoSQL', 'Cache', 'Data Lake', 'Vector DB', 'Auto Scale'] },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="p-6 text-sm font-bold text-slate-900 border-b border-slate-100">{row.cat}</td>
                        {STAGES_DATA.slice(0, stageId).map((s, si) => (
                          <td key={si} className={cn(
                            "p-6 text-sm text-slate-500 border-b border-slate-100 border-l transition-colors",
                            s.id === stageId && "bg-blue-50/30"
                          )}>
                            <div className="flex flex-col gap-1">
                               {row.stacks.slice(0, s.id).map((stk, sti) => (
                                 <span key={sti} className={cn(
                                   "px-2 py-0.5 rounded text-[10px] w-fit font-bold",
                                   sti === s.id - 1 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                                 )}>
                                   {stk}
                                 </span>
                               ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </section>
        </div>
      </div>

      {/* Term Explanation Drawer */}
      <TermModal 
        isOpen={activeConcept !== null} 
        term={activeConcept} 
        onClose={() => setActiveConcept(null)} 
      />
    </div>
  );
};

/**
 * Main App Component
 */
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/stage/:id" element={<StageDetailPage />} />
          <Route path="*" element={<OverviewPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
