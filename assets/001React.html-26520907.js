import{_ as o,r as c,o as l,c as p,a as s,b as a,d as t,e as i}from"./app-7b6a7290.js";const d={};function r(m,n){const e=c("Mermaid");return l(),p("div",null,[n[0]||(n[0]=s("h1",{id:"react",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#react","aria-hidden":"true"},"#"),a(" react")],-1)),n[1]||(n[1]=s("h2",{id:"react中数据结构",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#react中数据结构","aria-hidden":"true"},"#"),a(" React中数据结构")],-1)),t(e,{id:"mermaid-6",code:"eJx9Uc1Kw0AQvvcpltz7CoKCYkVRYgtC8JAmWxtIk5JuEbzWg0KxCpoW8S/ioRebiiCtFvMy3ew+hpPNxkiRXnZmv2++b2dma7Z7bNR1j6BttYBQq1098vRmHa3buIEdoik4TWg45W+Bcgg1CJmWhw1iuQ4qrwlgB5O6a2pK3OvxaFwpsdvT2J/G7zdSsLV/oClwyGsZN5q2TjAIhgE7P+Pha16beqFicSWRLUKZFHDsmAUIu01iNawTMGMzn4dX89mAdn0w+zvOhlXFnqbUkrB8FLXtgB+48eiSB924/xE/TWjUgU7pfV+qVGy4jmHZiSfoZf5LOib2UirNMiK1FnPkDv9QqSofcdNtkdW9kqbQUTSffLGLkD53ABC+KtbtCnDs7pGOHioJCKj8P2GYbUhcxCYWCjJMREAQH3fY9VBw8u28i4SPB9/s5VN2mzxf+AGy8tbl"}),n[2]||(n[2]=i(`<h2 id="fibernode-数据结构-react-18-2" tabindex="-1"><a class="header-anchor" href="#fibernode-数据结构-react-18-2" aria-hidden="true">#</a> FiberNode 数据结构 (React 18.2)</h2><p><code>FiberNode</code> 是 React 运行时最小的工作单元，既保存组件信息，也构成可遍历的 Fiber 树（单链表树结构）。</p><p>源码位置：<code>packages/react-reconciler/src/ReactFiber.new.js</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">FiberNode</span><span class="token punctuation">(</span>
  tag<span class="token operator">:</span> WorkTag<span class="token punctuation">,</span>        <span class="token comment">// 组件类型标记（FunctionComponent / ClassComponent / HostRoot 等）</span>
  pendingProps<span class="token operator">:</span> mixed<span class="token punctuation">,</span> <span class="token comment">// 即将被应用的新 props</span>
  key<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>  <span class="token comment">// 唯一标识，用于 diff 中复用节点</span>
  mode<span class="token operator">:</span> TypeOfMode<span class="token punctuation">,</span>    <span class="token comment">// 模式标记（ConcurrentMode / StrictMode 等）</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ================================================================</span>
  <span class="token comment">// 1. 实例信息 —— 描述这个 Fiber 对应哪个组件 / DOM 节点</span>
  <span class="token comment">// ================================================================</span>

  <span class="token comment">// 组件类型（WorkTag 枚举值）</span>
  <span class="token comment">//   0  = FunctionComponent</span>
  <span class="token comment">//   1  = ClassComponent</span>
  <span class="token comment">//   2  = IndeterminateComponent（尚未确定是函数还是类组件）</span>
  <span class="token comment">//   3  = HostRoot（根节点，即 ReactDOM.createRoot 创建的容器）</span>
  <span class="token comment">//   5  = HostComponent（浏览器环境下的 DOM 元素，如 div、span）</span>
  <span class="token comment">//   6  = HostText（文本节点）</span>
  <span class="token comment">//   7  = Fragment</span>
  <span class="token comment">//   9  = ContextConsumer</span>
  <span class="token comment">//   10 = ContextProvider</span>
  <span class="token comment">//   11 = ForwardRef</span>
  <span class="token comment">//   12 = Profiler</span>
  <span class="token comment">//   13 = SuspenseComponent</span>
  <span class="token comment">//   14 = MemoComponent</span>
  <span class="token comment">//   15 = SimpleMemoComponent</span>
  <span class="token comment">//   16 = LazyComponent</span>
  <span class="token comment">//   22 = SuspenseListComponent</span>
  <span class="token comment">//   24 = OffscreenComponent</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>

  <span class="token comment">// 唯一标识，和 element.key 对应，用于 reconciliation 时判断节点是否可复用</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>

  <span class="token comment">// JSX 中调用的组件，即 &lt;App /&gt; 中的 App（函数 / 类引用）</span>
  <span class="token comment">//   - HostComponent 时：字符串，如 &#39;div&#39;</span>
  <span class="token comment">//   - 自定义组件时：组件的函数或类本身</span>
  <span class="token comment">// 注意与 type 的区别：</span>
  <span class="token comment">//   elementType 是 JSX 中原始传入的类型（可能是 Lazy、Memo 包装的）</span>
  <span class="token comment">//   type 是解析后最终的类型（剥掉 Lazy / Memo 等外壳）</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>elementType <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 解析后的最终类型，与 elementType 可能不同</span>
  <span class="token comment">//   - FunctionComponent：函数本身</span>
  <span class="token comment">//   - ClassComponent：类本身</span>
  <span class="token comment">//   - HostComponent：字符串 &#39;div&#39; / &#39;span&#39; 等</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 对应的真实节点引用</span>
  <span class="token comment">//   - HostRoot：FiberRootNode 实例</span>
  <span class="token comment">//   - HostComponent / HostText：真实 DOM 节点</span>
  <span class="token comment">//   - 函数 / 类组件：组件实例（类组件为 this，函数组件始终为 null）</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stateNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// ================================================================</span>
  <span class="token comment">// 2. Fiber 树结构 —— 构成可遍历的单链表树（child → sibling → return）</span>
  <span class="token comment">//    React 从不递归遍历，而是用 while 循环 + 这三个指针完成 O(n) 深度优先遍历</span>
  <span class="token comment">// ================================================================</span>
  <span class="token comment">// 示意图：</span>
  <span class="token comment">//         Parent (Fiber)</span>
  <span class="token comment">//        /     |     \\</span>
  <span class="token comment">//   [child]  [sibling] [sibling]  -- 通过 sibling 链接兄弟节点</span>
  <span class="token comment">//     /  \\</span>
  <span class="token comment">//  ...  ...</span>
  <span class="token comment">//  每个子节点通过 return 指回父节点</span>

  <span class="token comment">// 父 Fiber，构成单向链回树根的路径</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>return <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 第一个子 Fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 下一个兄弟 Fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 在父节点的子列表中的位置索引，用于 reconciliation 中的 key 匹配</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// ref 对象 / 回调函数</span>
  <span class="token comment">//   - 对象形式：{ current: ... }（useRef / createRef）</span>
  <span class="token comment">//   - 回调形式：(instance) =&gt; void</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// React 18.2 新增：ref 的清理函数</span>
  <span class="token comment">//   当 ref 回调被替换或组件卸载时，用旧 ref 值调用此函数来清理副作用</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>refCleanup <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// ================================================================</span>
  <span class="token comment">// 3. 状态 &amp; Props —— 驱动组件更新的核心数据</span>
  <span class="token comment">// ================================================================</span>

  <span class="token comment">// 新的、即将生效的 props（从 JSX 或最新一次 setState 计算得来）</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pendingProps <span class="token operator">=</span> pendingProps<span class="token punctuation">;</span>

  <span class="token comment">// 已生效的 props，上次渲染确认后的 props 快照</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 更新队列（UpdateQueue），存储所有待处理的更新（setState / forceUpdate / hook 更新）</span>
  <span class="token comment">//   不同组件类型的 updateQueue 结构不同：</span>
  <span class="token comment">//     - ClassComponent：{ baseState, firstBaseUpdate, lastBaseUpdate, shared: { pending } }</span>
  <span class="token comment">//     - HostRoot：同上，state 为整个应用根 state</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 已生效的状态</span>
  <span class="token comment">//   - ClassComponent / HostRoot：最新的 state 值</span>
  <span class="token comment">//   - FunctionComponent：Hooks 链表头节点（Hooks 以单向链表形式挂载在 memoizedState 上）</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// Context 依赖集合</span>
  <span class="token comment">//   - 记录该 Fiber 订阅了哪些 Context（用于判断 Context 变化时是否需要更新）</span>
  <span class="token comment">//   - 结构：{ lanes: Lanes, firstContext: ContextDependency, responders: ... }</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>dependencies <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 渲染模式</span>
  <span class="token comment">//   - NoMode(0)：同步渲染（ReactDOM.render 默认）</span>
  <span class="token comment">//   - ConcurrentMode(1)：并发渲染（ReactDOM.createRoot）</span>
  <span class="token comment">//   - StrictMode(2)：严格模式</span>
  <span class="token comment">//   同时支持位掩码组合多个模式</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode<span class="token punctuation">;</span>

  <span class="token comment">// ================================================================</span>
  <span class="token comment">// 4. 副作用标记 —— 标记 Fiber 需要执行的 DOM 操作</span>
  <span class="token comment">// ================================================================</span>

  <span class="token comment">// 自身副作用标记（位掩码，单个位代表一种操作）</span>
  <span class="token comment">//   关键位：</span>
  <span class="token comment">//     Placement(0b000000000000000000000010)    → 插入 DOM</span>
  <span class="token comment">//     Update(0b000000000000000000001000)       → 更新 DOM 属性</span>
  <span class="token comment">//     Deletion(0b0000000000000000000001000)    → 删除 DOM</span>
  <span class="token comment">//     ChildDeletion(0b000000000000000000010000)→ 删除子节点</span>
  <span class="token comment">//     ContentReset(0b000000000000000000000001) → 清空文本内容</span>
  <span class="token comment">//     Ref(0b0000000000000000100000000)         → 附加 / 解绑 ref</span>
  <span class="token comment">//     Snapshot(0b0000000001000000000000000)    → 类组件 getSnapshotBeforeUpdate</span>
  <span class="token comment">//     Passive(0b00000100000000000000000000)    → useEffect 回调</span>
  <span class="token comment">//     LayoutMask：commit 阶段 layout 子阶段执行的 flags 集合</span>
  <span class="token comment">//   React 18 使用二进制位运算 → 一个 Fiber 可同时标记多种副作用</span>
  <span class="token comment">//   注意：从 effectTag 重命名为 flags（React 18 重构）</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>flags <span class="token operator">=</span> NoFlags<span class="token punctuation">;</span>

  <span class="token comment">// 子树副作用标记：表示子节点中是否存在某种副作用</span>
  <span class="token comment">//   React 18 用于优化 —— 无需遍历整个子树就能判断是否需要处理某个副作用</span>
  <span class="token comment">//   例如：子树中是否有 Placement、是否有 useEffect（Passive）</span>
  <span class="token comment">//   在 completeWork 阶段，子节点的 flags 会冒泡到父节点的 subtreeFlags 上</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>subtreeFlags <span class="token operator">=</span> NoFlags<span class="token punctuation">;</span>

  <span class="token comment">// 待删除的子 Fiber 数组</span>
  <span class="token comment">//   React 18 不再使用 effect list（firstEffect / lastEffect），</span>
  <span class="token comment">//   而是在 commit 阶段直接遍历 Fiber 树，子节点的删除记录在此数组中</span>
  <span class="token comment">//   在 commit 阶段的 mutation 子阶段统一处理</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>deletions <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// ================================================================</span>
  <span class="token comment">// 5. 调度优先级 —— Lane 模型</span>
  <span class="token comment">// ================================================================</span>

  <span class="token comment">// 当前 Fiber 上待处理的更新的优先级（位掩码）</span>
  <span class="token comment">//   - 每个二进制位代表一条&quot;车道&quot;，对应一个调度优先级</span>
  <span class="token comment">//   - 例：SyncLane(0b1) = 同步立即执行，DefaultLane(0b10000) = 默认并发优先级</span>
  <span class="token comment">//   - setState 会设置当前及祖先的 childLanes</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>

  <span class="token comment">// 子树中存在的更新的优先级（合并了所有子节点的 lanes）</span>
  <span class="token comment">//   - 用于复用检查：如果 childLanes 为空，说明整棵子树无需更新，可直接复用</span>
  <span class="token comment">//   - bailout 优化的核心判断依据</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>

  <span class="token comment">// ================================================================</span>
  <span class="token comment">// 6. 双缓冲 —— current 树 ↔ workInProgress 树</span>
  <span class="token comment">// ================================================================</span>

  <span class="token comment">// 指向另一棵 Fiber 树中对应的 Fiber 节点</span>
  <span class="token comment">//   - current.alternate = workInProgress</span>
  <span class="token comment">//   - workInProgress.alternate = current</span>
  <span class="token comment">//</span>
  <span class="token comment">//   React 维护两棵 Fiber 树：</span>
  <span class="token comment">//     current 树：屏幕当前显示对应的状态（已提交）</span>
  <span class="token comment">//     workInProgress 树：正在内存中构建的新状态</span>
  <span class="token comment">//</span>
  <span class="token comment">//   提交完成后，两棵树角色互换（通过 root.current 指针切换）</span>
  <span class="token comment">//   这种双缓冲机制避免了渲染过程中屏幕可见 DOM 被部分修改</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fiber-树遍历模型" tabindex="-1"><a class="header-anchor" href="#fiber-树遍历模型" aria-hidden="true">#</a> Fiber 树遍历模型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    HostRoot (tag=3)
                    │
                    │ child
                    ▼
                  App (FunctionComponent, tag=0)
                    │
                    │ child
                    ▼
                   div (HostComponent, tag=5)
                   /        \\
             child           sibling
              ▼                ▼
            h1 (tag=5)    p (tag=5)
            /      \\
       child    sibling
         ▼        ▼
    文本(tag=6)  span(tag=5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个节点通过 <code>child</code>、<code>sibling</code>、<code>return</code> 三个指针串联，React 用 <code>while</code> 循环而非递归来完成深度优先遍历（<code>performUnitOfWork</code>），时间复杂度 O(n)，且不会被长组件栈溢出打断。</p><h3 id="关键设计要点" tabindex="-1"><a class="header-anchor" href="#关键设计要点" aria-hidden="true">#</a> 关键设计要点</h3><table><thead><tr><th>设计</th><th>说明</th></tr></thead><tbody><tr><td><strong>双缓冲</strong></td><td>current 树 + workInProgress 树，通过 <code>alternate</code> 互指，commit 后交换角色，避免屏幕出现不完整的 UI</td></tr><tr><td><strong>Lane 模型</strong></td><td>31 位车道优先级，取代了旧的 <code>expirationTime</code> 模型，支持更细粒度的更新优先级和中断/恢复</td></tr><tr><td><strong>subtreeFlags</strong></td><td>子节点副作用向上冒泡，避免遍历整棵树来判断是否需要处理副作用，React 18 的核心性能优化</td></tr><tr><td><strong>deletions 数组</strong></td><td>取代了 React 17 的 effect list（firstEffect/lastEffect/nextEffect），简化了副作用遍历</td></tr><tr><td><strong>Hooks 链表</strong></td><td>函数组件的 Hooks 以单向链表挂载在 <code>memoizedState</code> 上，每个 Hook 通过 <code>next</code> 指针串联</td></tr></tbody></table><hr><h2 id="fiberrootnode-→-hostrootfiber-→-app-初始化链路" tabindex="-1"><a class="header-anchor" href="#fiberrootnode-→-hostrootfiber-→-app-初始化链路" aria-hidden="true">#</a> FiberRootNode → HostRootFiber → App 初始化链路</h2><blockquote><p><code>ReactDOM.createRoot(document.getElementById(&#39;root&#39;)).render(&lt;App /&gt;)</code> 的内存数据结构全景。</p></blockquote><p>源码位置：</p><ul><li><code>FiberRootNode</code> — <code>packages/react-reconciler/src/ReactFiberRoot.new.js</code></li><li><code>createContainer</code> / <code>createFiberRoot</code> — <code>packages/react-reconciler/src/ReactFiberRoot.new.js</code></li></ul><h3 id="结构全景图" tabindex="-1"><a class="header-anchor" href="#结构全景图" aria-hidden="true">#</a> 结构全景图</h3>`,15)),t(e,{id:"mermaid-108",code:"eJyllN1OE0EUx+95ismaQJtIIOGuCAlCGppArRXCRWPItjttN2x3N7O7IBoSQqBgrIJ8iaThIxLTGMHChUCxXvgoprPVOx/BMzNLs3wpxpt2ds6Zc/7nd85MWjMmUlmZ2GjofhNClpPMENnMor4Hgwnp13ZhCdWL2/Rgi20gd+e19Bi8ECKGYfep4wmpWbM7FXUcqUpXC9tsac7YnWyzDXbZ+l6StHXXV0vuwjEtllD/0OAAqp3s03dld+NVfXPWLcz8qFbpwSl9W+LBsa40+ZWE49GEFFaTmMQhftRQMA9JK6ss6s5p/WC3vpSH0+jbMaJzJXo4TVc/1U6mPamKSnDKVg1dVIhQmuijaRVripWQUoZuy6qOSURPGyF0h5XASuUpUg4hWLdD6Ht+GfUbls0EcCXcnFZ11cpiZcQgYyGkO5rGt00oQNUzA7KOrRBqR4GowddBEVPWtKScGmN1+A4xHfgJpHo2dS2E/vho73A8IV1QgQL8j4W6i2w509Xh5RC6WbuAD8dSXaHPX9LjI3dxqVbZowtlerhIT9eAPxqO3AQK4jRAQfgQ6kCBcwEik2XLNhalMEZXuzSGJ31VEmw7RPdtWGpSA1a+nRzOGepTrDxikQEHwhrO8SawoeoxzTY2VGiKOzumAl4PHexwVwvmGCts5fVAxEVTnntakzPQkqgRZoubOI9EYrfkPAGNj+gxYmQItiw/7vwc3d+AKXe3ZulZhU35evkPoCdU839Bp7KqBqXzegM/36+7H3dpedMtfhASRJRb8PcYxTQ5xblfS6knBoigF0LHFTztIpu49G5xmu6t08OZ+tls7ezzTQhk8xICuDhhR+c+vUbONHQQI+LakyZggPSBIKLzVXetfBmRoCBsIq37ZgcesdrXFx7OK3XLmo2JzmfOz9A9OXK3V4J+CvAeodZWJHm3TIKPbu9+glUsuENDkHCBcxftjZRcQIAuFupfVmj+qFZZdgvzwUZgGEhxEBb/dLCh6Pzg3xTxIRI2aDHY4JcbxOBcCtwA4X9DhQ+8oE2/AWCXZ9E="}),n[3]||(n[3]=s("h3",{id:"指针关系速查",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#指针关系速查","aria-hidden":"true"},"#"),a(" 指针关系速查")],-1)),t(e,{id:"mermaid-112",code:"eJx9kk1qwzAQhfc+xaBu2kWuUAiUkEB/gjddmFIcW6kERjJjmWx0id6gvxfrSfqkSNRtTDdCozf6Zt5I+84eGlWzo+uyIBrG3RPXvaJVWYmV3kkurXW3tpXiATJRoyvRWONqbSRvzN7m85EhjMzSuHgkTVtMgWsA13ZwgRfBdJ7SLxJiMJUYXO3ktJwCVemuTXHduUpgkWyQOFvofrM9qXTQfa6C7eMM5SictvCXvtyCvux7iuR0lSV4WEY2s5eu7m4qgYXOGD1NUzACWiwuvfh6fglBHJ/HsMJ1k6VX+mnK42kgovusvoUgWfHBPuTkcj4l0o92/6nQqCy+Yx+ewAf3UOA0Sx8hCLYTtdFZ+aTf38SHKRTfH0XIPw=="}),n[4]||(n[4]=s("h3",{id:"初始化步骤",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#初始化步骤","aria-hidden":"true"},"#"),a(" 初始化步骤")],-1)),t(e,{id:"mermaid-116",code:"eJxtVF1PG1cQfc+vGG2lyDxkYTGfTomEsFGRamgNVR9WfVjsa3uVZXe7e1corSqRKrZJgUIct00TmhSUiEoVSCFKZJHwZ5Dv2n7KX8jce3dNNkTyg+07c87MmTNTtpz1YtXwKKxkrwEsr8wWVnSlQIwizS7l1aJHDEoKjkNTRcemhmkTb0j5AW7cuAXL2jXM8IPVime4VZgr5GZXcroiU+bNVeKJPAzHMITWdEVTQT7PxWCfgR3VlVEVbLIOA5BFp0RSQ1+uesO3PPypDpIW7LIDMzD4HXONSqi0rqRjyq8cn3IsARqBsc0n7O0ZBLZpm9Q0LPMnUhLvkKJGZSY9qD0t8cZ0ZUyFzlmz+6TNaq96d1sf1RR4HrEpVnMVTkRd/Vv1KRbGm8MsDhLTjUm6cV0ZV+Ey6zu3hPHfBiSI1WCNOnveCH9/EbbewHWL3px13eHrFXozRhqXSBO6MqGCR2jg2YIJUglxZaPELvGRLk+IpHwuryusXmPHjzrt40xyGnBRb0FCUlFPcjAX9SZ8IdjQS8iA2AgqK5rUlUmsiCuHspVwJB+XnxyPaDsDrnHHcowSavUzEIusodqZRNPwi0gj9o9cIqmW8B9valLyTunKlAp+sUpKgRXFLNmRKaLQKRk6nfB3IbeYzRV0RVYL/UdvwpPXsczTujKtgusR1/DIvEf86jI1irdTvD/ZizTh9453e8H+xnMqGOOnhoDVtvqP67BuurLjt2fd/7fY7nb33UNWP82AYVHi2ZjJXRduNwaE0QqO4FKNqLBKKqbNwSHF9h502lv9jabkleLFkxIjYbt/ssZZQjlpY4LjK5oWmauaVgn7lNFyCBgpHSBC+xt77OWvkip8eo8HyL1hx3vhvw8GKz8Slcl3ny+/s+ZaRMoQVfobO48q5TXOYYBj8zW6pO7uP2MnT7mFpET1ZvjqgM+FeoTMW0bFH9BpER2eEA1viHBXGffHx2kLzhlYT0wgYXstuhpaOnnYlvL5BTyKWPyaST8ZvIYnRuM3RjyKg3c587UA99t07AyE9496B9u8Bwh3m6z2Qrxbxh0nQA8HPvlafM2Vy6RIYVgIJXTImqW8E9iDy6BFl0jDU6ThLfrk9FzpWPCgb/rNTbbZCHcO4WKjhR80QeSx3lGzd/+Uu2vn8P27u0lF5CHKLi3iYb/Yr0H/4HX/n8OwfRo+e8hOtsPNPUnw11H38T2I60AHdP/4u3O+j+7otDd65yfs+U639R9ifwAbEGqE"}),n[5]||(n[5]=s("h3",{id:"初始化后内存快照",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#初始化后内存快照","aria-hidden":"true"},"#"),a(" 初始化后内存快照")],-1)),t(e,{id:"mermaid-120",code:"eJyFUk1L60AU3fsrLnkgdWEV3y6+J/geioJIiYoLkZI2k3YwnQmTKYIiuFERlar4AwRdKPgBurAIuvCnSGPd+Re8M5N+RCquMrn33HPPOTN+wFeLZVdImP/XBxBVCyXhhmWYdGZHlqxJWiDC4VzOco9YywgA8AUbyfuUBF60ZBU5ky5lREwzn9vwSyD2T0EMjRWrQhAmbXi92vmo13TNp4xGZeItcrFiA6sGgS6HhHmUlWZcRiIbhvUaLPV1y/m/4OTnnYmJRBK8nR5BJtkBLw8QP9y91Q4bj+cDicr25JSTx2H0MsUjqawYgox0S39/t9AAyNVx5QaSCOZKkpJfLNPAS1UiiRgVDVa3jyGVlgZUSIXTNeLNKaAN60ACUtGx9AdydDwMh/pLchQ2EhnKdUr8eC6HyhFnuI3q4Y5qNww7qgWRVcGUlCNIme1Wn81mIRNfH2KALRqz9Wvii9O5JPFVGpq82yHHN/s69NptfH7QPLloXj7GZ/e9okeWH6NH/t7RY6TJFXc7UO/GaKlv4eIB3Wte78bPW436XqO++f50Azjk4Sojr5dP9b5hcBCsZIOFP2Otx4L95KQhbU1tkLJlQOr0DagHk7ZgAOpqsas+umVuLz38CS6rRZ0="}),n[6]||(n[6]=i("<blockquote><p><strong>关键结论</strong>: <code>FiberRootNode</code> 是整个应用的&quot;仪表盘&quot;，全局唯一。它的 <code>current</code> 指针在每次 commit 后切换到新树。HostRootFiber 是 Fiber 树的&quot;树桩&quot;——Fiber 树上所有节点的 <code>return</code> 最终都会追溯到它。HostRootFiber 和 FiberRootNode 通过 <code>stateNode</code> ↔ <code>current</code> 形成双向绑定。App Fiber 是用户代码的入口，挂在 HostRootFiber 的 <code>child</code> 上。</p></blockquote>",1))])}const v=o(d,[["render",r],["__file","001React.html.vue"]]);export{v as default};
