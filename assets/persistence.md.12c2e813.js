import{o as n,c as s,a}from"./app.8320d959.js";const e='{"title":"持久化","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用驱动","slug":"使用驱动"}],"relativePath":"persistence.md","lastUpdated":1620872164438}',p={},t=a('<h1 id="持久化"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h1><p>你可能已经发现，前文中，我们向模型中存入的数据，在<strong>页面刷新后就会丢失</strong>。</p><p>别担心，这是因为我们没有配置存储驱动的原因。存储驱动决定了我们将数据存储在哪里，不同的驱动在增删改查的用法上，都是一致的，只是有些驱动可能会为你提供一些额外的专有 Api。</p><h2 id="使用驱动"><a class="header-anchor" href="#使用驱动" aria-hidden="true">#</a> 使用驱动</h2><p>下面让我们为模型添加 <code>LocalStorage</code> 驱动，安装驱动：</p><div class="language-sh line-numbers-mode"><pre><code>npm i kurimudb-driver-localstorage@4\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>在模型上，声明我们要使用的驱动即可：</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><div class="highlighted"> </div><br><br><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="token comment">// /models/configState.js</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Models <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> LocalStorageDriver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-driver-localstorage&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">class</span> ConfigState <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      driver<span class="token operator">:</span> LocalStorageDriver<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>现在再试试看，数据会不会丢失？后面的驱动章节，我们将会为你详细介绍 Kurimudb 提供的各种驱动，和教你如何编写自己的驱动，来完全掌控数据存储的逻辑。</p>',9);p.render=function(a,e,p,r,o,l){return n(),s("div",null,[t])};export default p;export{e as __pageData};
