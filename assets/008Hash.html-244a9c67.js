import{_ as t,o as l,c as e,b as s,d as a,e as n}from"./app-72993491.js";const p={},i=s("h1",{id:"哈希函数和哈希表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#哈希函数和哈希表","aria-hidden":"true"},"#"),a(" 哈希函数和哈希表")],-1),c=s("h2",{id:"哈希函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#哈希函数","aria-hidden":"true"},"#"),a(" 哈希函数")],-1),o=s("p",null,"out = f(in)",-1),m=s("ol",null,[s("li",null,[a("in -> ∞ out -> s md5 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mn",null,"2"),s("mn",null,"64")]),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(2^{64}-1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"64")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a(" sha1 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mn",null,"2"),s("mn",null,"128")]),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(2^{128} - 1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"128")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])]),s("li",null,"相同的输入必然得到相同的输出，没有任何随机成分"),s("li",null,"不同的输入可能导致相同的输出（哈希碰撞），因为输入是无限的，输出是有限的")],-1),r=s("p",null,"离散性越好（分布越均匀）的哈希函数越好",-1),u=s("h3",{id:"用途",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#用途","aria-hidden":"true"},"#"),a(" 用途")],-1),h=s("h4",{id:"限定内存大文件处理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#限定内存大文件处理","aria-hidden":"true"},"#"),a(" 限定内存大文件处理")],-1),d=s("p",null,[a("假设有一个大文件，大文件中都是无符号整数，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a("~"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"32")]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2^{32} - 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"32")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(",0~42亿+，现在给你1G内存，返回出现次数最多的数")],-1),k=s("p",null,"Hash表 key(int) 4B, value(int) 4B 次数 最差情况需要32G内存",-1),g=s("p",null,"通过哈希函数，把每个数哈希函数处理后生成的数字模上100，得出0-99的数字，发送到100个小文件里，对于每一个小文件使用哈希表，这样内存就不会暴，每个小文件使用32G/100内存，每个小文件单独统计，统计完一个统计下一个（哈希函数相同的值一定进同一个文件了，不同数的值一定均分了）",-1),v=s("h2",{id:"哈希表生成",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#哈希表生成","aria-hidden":"true"},"#"),a(" 哈希表生成")],-1),y=s("p",null,[a("你加值得时候生成的都是均匀分布的哈希值，当其中某个哈希值分配的数值过多，超过阈值K，就扩容，扩容的次数为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mi",null,"N")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(\\log_{N})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2342em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])]),a(" ，全要重新计算哈希值，全部重新挂，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(N)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mclose"},")")])])]),a(" 代价,总的扩容代价 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mi",null,"N")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(N\\log_{N})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2342em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])]),a("。哈希表在使用增删改查过程中在理论上是O(n)级别的，但是实际使用中可以认为是O(1)级别的")],-1),b=n(`<h3 id="题" tabindex="-1"><a class="header-anchor" href="#题" aria-hidden="true">#</a> 题</h3><h4 id="设计randompool结构" tabindex="-1"><a class="header-anchor" href="#设计randompool结构" aria-hidden="true">#</a> 设计RandomPool结构</h4><p>【题目】<br> 设计一种结构，在该结构中有如下三个功能:<br> insert (key):将某个key加入到该结构，做到不重复加入delete(key):将原本在结构中的某个key移除<br> getRandom() :等概率随机返回结构中的任何一个key。【要求】<br> insert、 delete和getRandom方法的时间复杂度都是0(1)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">RandomPool</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// str =&gt; index</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// index =&gt; str</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>indexKeyMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap<span class="token punctuation">.</span>size
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> size<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>indexKeyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap<span class="token punctuation">.</span>size
        <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">const</span> lastKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>indexKeyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>lastIndex<span class="token punctuation">)</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>lastKey<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>indexKeyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> lastKey<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>indexKeyMap<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>keyIndexMap<span class="token punctuation">.</span>size <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>indexKeyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>random<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="布隆过滤器" tabindex="-1"><a class="header-anchor" href="#布隆过滤器" aria-hidden="true">#</a> 布隆过滤器</h4><p>解决类似黑名单系统或者爬虫去重</p><p>黑名单：<br> 100亿 url的大文件（每个url64B）<br> 经典 HashSet 6400亿B，640G内存</p><p>爬虫去重: 爬某个网站，要深度遍历其内部的url，开了1000个线程，这时候需要防止线程访问同一个url</p><p>失误类型</p><ol><li>黑名单-&gt;白名单 ×</li><li>白名单-&gt;黑名单（万分之一）</li></ol><p>布隆过滤器存在一定失误，但是可以使内存使用变得很低，只存在白名单误识别为黑名单，可以通过人工干预的方式降低到万分之一。失误率是不可避免的。</p><p>准备一个m位的位图，如何往里放呢？<br> url1，通过hash1函数，生成out1，然后%m，然后通过hash2函数，生成out2，然后%m，总共通过k个hash函数，生成k个out，最终值放到位图中，然后你去查黑名单的时候，如果通过这个k个hash函数都命中了，那说明就是黑名单，一个不黑就认为不是黑名单的。</p><p>失误率位图大小起决定性作用，K也起作用，k太大或太小都会导致失误率过大</p><figure><img src="https://cdn.jsdelivr.net/gh/lxy951101/chart-bed/assets20230802025537.png" alt="失误率与M和K的关系" tabindex="0" loading="lazy"><figcaption>失误率与M和K的关系</figcaption></figure><p>::: warn<br> 布隆过滤器只和这个有关:n样本量，p失误率;(单样本大小无关)<br> ::: warn</p><h5 id="公式" tabindex="-1"><a class="header-anchor" href="#公式" aria-hidden="true">#</a> 公式</h5>`,16),x=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m"),s("mo",null,"="),s("mo",null,"−"),s("mfrac",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"∗"),s("mi",null,"l"),s("mi",null,"n"),s("mi",null,"P")]),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("msub",null,[s("mi",null,"n"),s("mn",null,"2")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])])])]),s("annotation",{encoding:"application/x-tex"},"m = -\\frac{n * lnP}{(ln_{2})^{2}}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.4001em","vertical-align":"-0.52em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8801em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3173em"}},[s("span",{style:{top:"-2.357em","margin-left":"0em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.143em"}},[s("span")])])])])]),s("span",{class:"mclose mtight"},[s("span",{class:"mclose mtight"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7463em"}},[s("span",{style:{top:"-2.786em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"∗"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"P")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.52em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])],-1),w=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"="),s("mfrac",null,[s("mi",null,"m"),s("mi",null,"n")]),s("mo",null,"∗"),s("mi",null,"l"),s("msub",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"≈"),s("mfrac",null,[s("mi",null,"m"),s("mi",null,"n")]),s("mo",null,"∗"),s("mn",null,"0.7")]),s("annotation",{encoding:"application/x-tex"},"k = \\frac{m}{n} *ln_{2} \\approx \\frac{m}{n}*0.7")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0404em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0404em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.7")])])])],-1),f=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"p"),s("mtext",null,"真")]),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"−"),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mo",null,"−"),s("mfrac",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"∗"),s("msub",null,[s("mi",null,"k"),s("mtext",null,"真")])]),s("msub",null,[s("mi",null,"m"),s("mtext",null,"真")])])])])]),s("annotation",{encoding:"application/x-tex"},"p_{\\text{真}} = 1 - e^{-\\frac{n *k_{\\text{真}}}{m_{\\text{真}}}}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3283em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord cjk_fallback mtight"},"真")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2607em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2607em"}},[s("span",{style:{top:"-3.5178em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},[s("span",{class:"mopen nulldelimiter sizing reset-size3 size6"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0613em"}},[s("span",{style:{top:"-2.656em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.3448em","margin-left":"0em","margin-right":"0.1em"}},[s("span",{class:"pstrut",style:{height:"2.6833em"}}),s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord cjk_fallback mtight"},"真")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3385em"}},[s("span")])])])])])])])]),s("span",{style:{top:"-3.2255em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line mtight",style:{"border-bottom-width":"0.049em"}})]),s("span",{style:{top:"-3.5653em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"∗"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.3448em","margin-left":"-0.0315em","margin-right":"0.1em"}},[s("span",{class:"pstrut",style:{height:"2.6833em"}}),s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord cjk_fallback mtight"},"真")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3385em"}},[s("span")])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5858em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter sizing reset-size3 size6"})])])])])])])])])])])])])],-1),z=n(`<h5 id="位图" tabindex="-1"><a class="header-anchor" href="#位图" aria-hidden="true">#</a> 位图</h5><p>位图 bit arr，bit map</p><p>int[] 100 4字节 32bit 400字节 long[] 100 8字节 64bit 800字节 bit[] 100 1bit 12.5字节</p><h6 id="如何做比特数组" tabindex="-1"><a class="header-anchor" href="#如何做比特数组" aria-hidden="true">#</a> 如何做比特数组？</h6><p>拿基础类型拼</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BitArray</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 用数字 ，1个数字是一个32位数</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span>pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr
        <span class="token comment">// 把pos位的状态拿出来</span>
        <span class="token keyword">const</span> numIndex <span class="token operator">=</span> pos <span class="token operator">/</span> <span class="token number">32</span><span class="token punctuation">;</span> <span class="token comment">// 定位出这个位在哪个数上</span>
        <span class="token keyword">const</span> bitIndex <span class="token operator">=</span> pos <span class="token operator">%</span> <span class="token number">32</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>numIndex<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span> <span class="token punctuation">(</span>bitIndex<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token function">set</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr
        <span class="token keyword">const</span> numIndex <span class="token operator">=</span> <span class="token number">178</span> <span class="token operator">/</span> <span class="token number">32</span><span class="token punctuation">;</span> <span class="token comment">// 定位出这个位在哪个数上</span>
        <span class="token keyword">const</span> bitIndex <span class="token operator">=</span> <span class="token number">178</span> <span class="token operator">%</span> <span class="token number">32</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 请把178位的状态改为1</span>
            arr<span class="token punctuation">[</span>numIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>numIndex<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>bitIndex<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 请把178位的状态改为0</span>
            arr<span class="token punctuation">[</span>numIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>numIndex<span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token operator">~</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> bitIndex<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一致性哈希原理" tabindex="-1"><a class="header-anchor" href="#一致性哈希原理" aria-hidden="true">#</a> 一致性哈希原理</h2><p>为了扩容时，降低数据迁移的成本</p><h3 id="应用场景-分布式服务器" tabindex="-1"><a class="header-anchor" href="#应用场景-分布式服务器" aria-hidden="true">#</a> 应用场景：分布式服务器</h3><p>逻辑服务器 对于不同的key通过hash取模，找到对应的数据服务器<br> 数据服务器</p><p>key的选择一定要保证低频、高频、中频都有数量，这样才能做到负载均衡</p><p>增加机器或者减少机器时，数据的迁移时全量的，代价很高，所以需要哈希一致性</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>构建一个哈希环，平均分布数据服务器，获取哈希值顺时针最近的那一台</p><p>加新的机器时，可以只迁移一台机器的</p><p>减机器的时候，也只需要迁移一台机器的</p><p>问题1： 机器少的时候如何均分环，如何做到负载均衡？<br> 使用虚拟节点技术<br> m1分配1000个节点，m2也是，m3也是 让这些点去抢环<br> 新增机器的时候则让m4来抢环，也是1000个节点</p><p>而且一致性哈希可以分配单个数据服务器的节点个数，性能好的可以多分配</p>`,18),_=[i,c,o,m,r,u,h,d,k,g,v,y,b,x,w,f,z];function M(I,O){return l(),e("div",null,_)}const K=t(p,[["render",M],["__file","008Hash.html.vue"]]);export{K as default};