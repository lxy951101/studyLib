# 其他

## 如何实现一个虚拟列表

目前为止虽然我用过虚拟列表，但是还没有实际实现过虚拟列表，如果让我来实现虚拟列表的话，我会先考虑导出两个组件，一个组件是列表组件，一个组件是列表中的元素包裹器。先从简单的组件说起，元素包裹器，是一个插槽或者一个抽象组件，然后当该组件挂载后，需要告知父组件自己的高度，方便父组件来调度，这里我选择的方式是父组件provide提供一个map用来记录每个元素的高度，同时需要父组件提供一个ResizeObserver，当包裹器发生大小改变时，应该要改变每个元素的高度。然后我们再说父组件，在我的设想中，父组件中应该提供一个map存储所有的元素，一个map用来存储当前渲染的元素叫viewMap，一个map用来存储从未渲染的元素unusedMap（这些元素我不知道大小），然后每当挂载新包装器或者包装器高度变化时，我就重新计算下当前active元素的索引或者key值，初始的时候索引是0，拿到新的active元素索引，我就更新下这个其实也就是当前页面第一个元素吗，然后我就重新设置，因为该值之前的元素我都算过了，我都记录他们的高度，因此我就能算出本次滚动条变化的幅度，我就滚动下。同时往里面添加元素，添加多少合适，我就给出用户一个每个包裹器内容最小高度，让他输入，然后滚动多高，我就添加多少个。同时至于这个虚拟列表的最小高度，也可以通过这个包裹器的内容最小高度来计算出来，然后虚拟列表的最小高度应该是随着一个一个元素被加载过，最后这个高度应该是可以完全算出来的。暂时就这么想的吧

## 谈谈如何做到性能优化

### 指标

既然我们谈到了性能优化，那么就说下性能优化的指标是什么，我们需要知道性能的指标才能针对不同情况进行优化

1. 首屏渲染时间：SPA首屏渲染时间使用performance并一定准确，应该使用MutationObserver，当body元素变化最剧烈达到最大时就是首屏加载完的时间
2. 白屏时间：可以采用times = (performance.timing.domComplete - performance.timing.navigationStart) / 1000
3. 网络环境数据：拿到两张不同尺寸的加载事件在请求图片之前打一个时间点，图片onload完之后再打一个时间点，文件体积 / 加载时间就可以获取到大概的网速了。
4. 阻塞、帧率看长任务：看有没有长任务，通过PerformanceObserver entryType为longTask来判断，看一定时间内出现多少个长任务

### 方案

分两个层面，网络层面和渲染层面

#### 网络层面

+ 构建策略：基于构建工具(Webpack/Rollup/Parcel/Esbuild/Vite/Gulp)
+ 图像策略：基于图像类型(JPG/PNG/SVG/WebP/Base64)
+ 分发策略：基于内容分发网络(CDN)
+ 缓存策略：基于浏览器缓存(强缓存/协商缓存)

##### 构建策略

从时间层面上，减少打包时间，方法有缩减打包范围，缓存副本，定向搜索，提前构建，并行构建。从空间层面上减少打包体积，方法有分割代码，摇树优化，动态垫片，按需加载，作用提升，压缩资源，可视结构。

1. 通过配置include，exclude缩小搜索的范围，避免不必要的转义。
2. 配置cache缓存Loader对文件的编译副本，好处是再次编译只编译修改过的文件
3. 配置resolve提高文件搜索速度，好处是定向指定必须文件路径
4. 配置DLLPlugin将第三库提前打包
5. 配置thread-loader将单进程转换为多进程，释放CPU多核并发的优势，使用swc-loader或esbuild代替babel
6. 配置BundleAnalyzer分析打包文件结构，找出体积过大的原因
7. 分割各个模块代码，提取公用部分
8. 删除项目中未引用的代码，摇树优化只对esm模块生效
9. 通过垫片服务根据ua来获取垫片
10. 异步路由异步组件单独打包，使用时加载，减轻首屏压力
11. 分析模块依赖关系，把打包好的模块合并到一个函数，减少函数声明和内存花销（concatenateModules: true）
12. 压缩HTML、CSS、JS代码，有所字体、图像、音频视频

##### 分发策略

1. 所有静态资源走CDN，开发阶段确定哪些资源是静态资源
2. 把静态资源和主页面置于不同域名下，避免请求带上cookie

##### 缓存策略

减少网络传输带来的损耗，提高网页访问速度  
利用Cache-Control:max-age=1年

#### 渲染层面

1. CSS策略：基于CSS规则
2. DOM策略：基于DOM操作
3. 阻塞策略：基于脚本加载
4. 异步更新测略：基于异步更新

##### CSS策略

1. 避免出现超过三层的嵌套规则
2. 避免为ID选择器添加多余选择器
3. 避免使用标签选择器代替类选择器
4. 避免使用通配选择器，只对目标节点声明规则
5. 避免重复匹配重复定义，关注可继承属性
6. 使用tailwindcss+purgecss减少样式代码
7. 尽量少使用会引起回流的属性，比如height等

##### DOM策略

1. 缓存DOM计算属性
2. 避免过多DOM操作
3. 使用DOMFragment缓存批量化DOM操作
4. 在异步任务中修改DOM时把其包装成微任务

##### 阻塞策略

1. 脚本与DOM/其他脚本的依赖关系很强：对`<script>`设置defer，下载完后，在dom解析完之后、触发DOMContentLoaded之前执行
2. 脚本与DOM/其它脚本的依赖关系不强：对`<script>`设置async，对顺序要求不强

## 进程与线程的关系（美图）

进程是指在系统中运行的一个应用程序。线程是系统分配处理器时间资源的基本单元。对于操作系统而言，其调度单元是线程。一个进程至少包括一个线程，通常将该线程称为主线程。一个进程从主线程开始进而创建一个或多个附加线程，就是多线程的多任务。一个进程就好比一个沙箱，沙箱之间是禁止往来的，可以通过协议共享内存来进行沟通。执行功能的是线程。

## 知道内存里的堆和栈吗？一个进程有几个堆几个栈？一个线程呢？（美图）

堆是大家共有的空间，在系统运行中分配给程序，然后程序用完了回收。栈是线程独有的，保存其运行状态和局部自动变量。每个线程都有自己的一个栈，每个进程都有自己的一个堆。在JS中将变量、函数、类、常量等存放在堆中，当执行某个函数或者代码片段，将该代码片段，放入执行栈中，并创建函数的执行上下文放到堆里，当执行到块级作用域也会创建环境上下文，当执行其内部新的函数时新函数入栈，执行完后出栈，如果入栈的函数太多，超过限制，而一直不出栈就会造成像我们平时说的JS递归调用栈溢出问题。

## 谈一谈浏览器下的JS的单线程（美图）

作为浏览器的脚本语言，JS的主要用途是与用户互动，那就离不开界面的呈现，界面的呈现伴随的大量的DOM的增删，大量的反复渲染，也就是布局和回流。如果是JS是多线程的，那么如果布局在两个线程中发生了不同的改变又该以谁为准呢，当然我们可以增加锁机制，但这会大大增加浏览器的复杂性。因为JS是单线程的，在某一时刻只能执行某个任务，并且会阻塞其他任务执行，所以JS有一个事件循环的机制来实现异步任务。JS被加载后会先执行同步任务，并将异步任务加载到事件队列中，当同步任务执行完毕后，JS会循环判事件队列队头是否有任务存在，如果有就会执行该任务，值得一提的事，每次JS执行完宏任务后会先执行完所有的微任务，再执行下一个宏任务。

## 用过哪些设计模式？装饰器模式你是怎么用的？(作业帮)

单例模式，比如SDK本身就是一个单例具有eventEmitter；工厂模式，比如SDK中Recorder，通过getRecorder获得，然后将Recorder注册到LRUCache中缓存；发布订阅模式，eventEmitter；享元模式，其实React的DOM渲染我认为采用的就是一种享元模式，因为同一个位置相同组件是不会销毁重新生成的，而是使用之前的。防抖函数装饰器。

## 场景：一个列表页，从某一页点进详情页了，想要返回的时候能回到上一次看的位置(小米)

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
```

## 情景：一个分页列表，连续点击翻页，会出现页面数据错乱的问题（比如第二页展示了第三页的数据），可能是因为什么原因导致的。怎么解决（高涂）

1. 分页数据的话，这个数据后台是否是缓存的，会不会是刚刚更新过，有没有楼层机制
2. 是不是没做防抖，导致多次调到下一页
3. 是不是没写key

## TS：泛型怎么理解、用在哪了都、一些内置API pick，readonly有没有用到（百度）

泛型是就是对类型的参数化，比如Map我就可以给他一个泛型，比如key必须是String,value必须是数字，数组我也可以给他一个约束，包括字面量对象等，我还可以给一个默认类型=any，比如我发送请求，希望结果如何如何。pick从属性中提取某些属性，readonly将所有属性设为可读,还有Required，infer用来推断，Omit等等。自己也写了些工具，ValueOf,Merge,Copy等