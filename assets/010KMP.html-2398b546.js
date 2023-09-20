import{_ as a,o as t,c as p,e as s,b as n,d as e}from"./app-72993491.js";const o={},c=s(`<h1 id="kmp" tabindex="-1"><a class="header-anchor" href="#kmp" aria-hidden="true">#</a> KMP</h1><p>leetCode 28</p><h2 id="暴力" tabindex="-1"><a class="header-anchor" href="#暴力" aria-hidden="true">#</a> 暴力</h2><p>遇到一个符合就一个一个的找，时间复杂度为O(n*m)</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">stringIndexOf</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> childStr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> k <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> childStr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">,</span>k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> childStr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> childStr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> str<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> i
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">!==</span> childStr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h2><p>求每个位置的最长前缀</p><p>如下字符 &#39;aabaacbbcba&#39;<br> 对应每个位置前缀 [-1,0,1,0,1,2,0,0,0,0,0,1]</p><figure><img src="https://cdn.jsdelivr.net/gh/lxy951101/chart-bed/assets20230803213948.png" alt="两个字符串" tabindex="0" loading="lazy"><figcaption>两个字符串</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/lxy951101/chart-bed/assets20230803234353.png" alt="说明" tabindex="0" loading="lazy"><figcaption>说明</figcaption></figure><p>两个字符串进行逐字比较，比较到不相同的字符时，这个出现差异的位置看是不是前面有前缀相同，有前缀相同的意味着可以子串可以不用从头开始，而且父串也不用往后倒车，子串到那个前缀记录的位置去，接着往下走，如果没有一个前缀相同那说明前面肯定没走通，子串重新开始，父串接着走就行了，不用管之前重复的那些前缀有用没用</p>`,11),l=n("p",null,[e("时间复杂度"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])],-1),i=s(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 计算每个位置的前缀</span>
<span class="token keyword">function</span> <span class="token function">getNextArray</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> next<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cn <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> str<span class="token punctuation">[</span>cn<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            next<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">++</span>cn
        <span class="token punctuation">}</span>
        <span class="token comment">// 当前调到cn位置的字符，和i-1位置的字符配不上</span>
        <span class="token comment">// cn其实此时是配不上的那个位置，、</span>
        <span class="token comment">// 在next这个位置同时记录了这个位置的相同前缀字符串个数</span>
        <span class="token comment">// 理解难度大（然后这个前缀其实跟后面你又排到的前缀是一样的，相当于前缀中的前缀）</span>
        <span class="token comment">// 套娃就是前缀串中有前缀的前缀</span>
        <span class="token comment">// 然后这些原先算好的前缀可以后面接着用</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cn <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cn <span class="token operator">=</span> next<span class="token punctuation">[</span>cn<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            next<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> next
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token constant">KMP</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> childStr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> i2 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token function">getNextArray</span><span class="token punctuation">(</span>childStr<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i1 <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> i2 <span class="token operator">&lt;</span> childStr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i1<span class="token punctuation">]</span> <span class="token operator">===</span> childStr<span class="token punctuation">[</span>i2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i1<span class="token operator">++</span>
            i2<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i1<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            i2 <span class="token operator">=</span> next<span class="token punctuation">[</span>i2<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> i2 <span class="token operator">===</span> childStr<span class="token punctuation">.</span>length <span class="token operator">?</span> i1 <span class="token operator">-</span> i2 <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[c,l,i];function r(k,d){return t(),p("div",null,u)}const v=a(o,[["render",r],["__file","010KMP.html.vue"]]);export{v as default};