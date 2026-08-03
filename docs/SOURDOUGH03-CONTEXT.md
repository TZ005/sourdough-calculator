# SOURDOUGH03 — 对话上下文压缩

> **任务来源**：Codex 任务 `sourdough03`（桌面对话列表里第 3 条 sourdough 线程）
> **Session ID**：`019fb8bb-77af-7ea0-9399-ddbfb4895344`
> **Session 文件**：`C:\Users\Administrator\.codex\sessions\2026\07\31\rollout-2026-07-31T23-12-01-019fb8bb-77af-7ea0-9399-ddbfb4895344.jsonl`
> **时间范围**：2026-07-31 23:12 → 2026-08-02 16:58（约 41 小时）
> **总消息**：5819 条 jsonl，提取出 778 条有效对话（含 user/agent + 关键 reasoning）
> **挂掉位置**：用户发出 `"明天提醒一下再做"` 指令
> **生成时间**：2026-08-03（在新 Codex 任务中由 Codex 整理）

---

## 1. 项目基本信息

- **项目目录**：`G:\视频处理工具\sourdough-calculator\`
- **项目名**：Sourdough Hydration Calculator（酸面包水分计算器）
- **线上站点**：https://sourdough-hydrationcalculator.com/
- **技术栈**：Next.js 14（App Router，静态导出）+ Tailwind CSS 3.4 + JavaScript (JSX)
- **托管**：Cloudflare Pages（自动从 GitHub main 部署）
- **当前分支**：`main`，HEAD = `ed81c6e`（2026-08-03 00:12 +0800）
- **工作树**：基本干净，仅 `docs/SOURDOUGH01-CONTEXT.md` 未跟踪（上次会话交接文档）
- **参考项目（业务规则来源）**：`G:\视频处理工具\protein-payment\` —— protein-payment 是用户已上线的姊妹站点，**提供 Amazon 联盟 / SEO 升级清单 / 多市场扩张的完整模板**

## 2. 用户核心诉求（贯穿全程）

把 **protein-payment 的整套 SEO 打法**搬到 sourdough-calculator：

1. **联盟策略**：用 `sourdoughca0a-20` 作为 Amazon 联盟 ID（沿用 `proteinpayment-20` 同源规则）
2. **保号底线**：Amazon Associates 注册后 **180 天内必须促成 3 笔销售**，否则账号关闭
   - 域名 2026-07-21 注册，2026-07-22 上线 → **保号截止 2027-01-18**（还剩 ~138 天）
3. **GSC 数据驱动**：所有 SEO 决定看 Google Search Console 的曝光/排名/索引实际数据
4. **审计工具驱动**：用户从 `E:\AI破局\sourdough图\` 投喂 SEO 审计截图，每次扫描出问题就针对修
5. **不动没要求改的地方**：用户多次抱怨 assistant 越权改（#0080 误改 emoji 图标、#0610 误删联盟链接），已形成铁律 —— **只改明确指令**

## 3. 本次对话完成的工作

### 3.1 跨 29 个 commit 的 SEO 升级（按主题分组）

**Phase 1 — 首页整改**（7-31 晚）
- `2da06f3` 描述 178→144 字符 + favicon + FAQPage Schema + 首页顺序调整（计算器→图表→科普→FAQ→推荐工具→博客）+ 删写死假评分 `4.8/127`

**Phase 2 — 博客批量元数据修复**（7-31 ~ 8-1）
- `52f68d7` 25 篇博客元数据 / canonical / 社交分享 / 坏图片引用修复；didnt-rise 文章扩写
- `7d09684` bulk-fermentation 文案重写 + FAQ + 温度速查表

**Phase 3 — 关键词与回滚**（8-1）
- `e1e6305` keywords 127→<100 字符
- `b6fd743` **回滚** emoji→字母徽章（用户 #0080 反对后立刻回滚）

**Phase 4 — 信任信号 + 外联资产**（8-1）
- `db6e460` 加 `llms.txt`（AI 爬虫友好文件）
- `3ea611a` byline `By SourdoughCalc Team` + `/terms/` 页面 + 隐私链接 + 品牌名统一 + 修复 sitemap lastmod
- `3335e78` 7 篇关键文章加真实 PubMed / USDA / King Arthur 引用
- `37e68be` crispy-crust FAQ + 全站 `og:site_name` 统一
- `f33d229` 博客列表页 canonical + Blog Schema

**Phase 5 — 逐篇文章精修**（8-1 全天）
- `be7c0f8` best-sourdough-calculators 加 9 个外部引用
- `ff5453b` crispy-crust 9 个 H2 改问题式
- `c1e299d` sourdough-schedule 11 个 H2 改问题式 + 引用
- `1211462` whole-wheat 6 个 H2 改问题式 + 修复失效引用
- `259d84c` hydration 加引文 + 问题式标题
- `d990af3` pizza + 修 404
- `8e5a7a6` storage + 修 404
- `6a19bc5` levain + 修 404
- `fa85147` focaccia + bagels reframe

**Phase 6 — 反作弊**（8-1）
- `601b3a3` 51 处外链加 `rel="nofollow"`
- `644d983` 5 篇文章联盟链接从 3-6 个缩到 2 个

**Phase 7 — 外联资产**（8-1 晚）
- `62b62af` dev.to 第 2 篇英文版草稿
- `a3965f7` 移除 dev.to 草稿的 `canonical_url`（避免和第 1 篇冲突 → "has already been taken"）
- `9d444fb` X 帖子竖图 `outreach/x-post-vertical.png`（2160×2700）

**Phase 8 — 收尾**（8-2 早）
- `1fa5df4` about / contact / privacy / terms / embed 5 个静态页补 canonical
- `d0fc37b` `embed/` 从 sitemap 移除（保持 noindex 不被 sitemap 引用）

**Phase 9 — 新内容**（8-2 下午）
- `ed81c6e` 5 篇新 SEO 文章上线：
  - `/blog/sourdough-hydration-chart/`
  - `/blog/how-much-starter-to-use/`
  - `/blog/why-is-my-sourdough-sticky/`
  - `/blog/best-sourdough-bread-recipe/`
  - `/blog/sourdough-beginners-timeline/`

### 3.2 终极根因诊断 + 用户手动修复

**assistant 反复诊断的根因**：GSC 报 "Sitemap 是 HTML" → Cloudflare 把 Googlebot 拦截 → 给 Googlebot 返回 403 HTML，普通浏览器正常。

**2026-08-03 上午用户手动修复**：
- Cloudflare 后台 → Security → Bots → 关闭 Bot Fight Mode
- Cloudflare 后台 → Security → WAF → Custom rules → 加规则：`User Agent contains Googlebot → Skip All managed rules`

**实测验证（Googlebot UA）**：sitemap.xml 返 200 + application/xml，所有页面 + robots.txt 都能正常抓取。

### 3.3 用户后续动作（2026-08-03 用户报告）

- **dev.to 第 2 篇**：已发表（具体 canonical 处理方案待复核：之前 assistant 给过方案 A 用站内静态页 URL 当 canonical）
- **X.com 帖子**：已发 2 条（计划 3 条，剩 1 条"工具分享帖"待发，按节奏需过几天再发）
- **GSC URL 检查**：对 5 篇新文章请求过索引时撞 GSC 配额（每天 ~10 个请求上限），剩 6 个旧文章未索引等明天再申请
- **Cloudflare token 轮换**：用户明确说"不归我管"，跳过

## 4. 当前 GSC 数据快照（2026-08-03 上午用户截图）

```
收录状态
├─ 已编入索引       10
├─ 未编入索引       14
│  ├─ 已发现 - 尚未编入索引       8 个
│  └─ 已抓取 - 尚未编入索引       6 个
└─ 总展示量          24
```

### 4.1 "已抓取 - 尚未编入索引" 6 个（重点关注对象）

| URL | 上次抓取 |
|---|---|
| `/blog/bulk-fermentation/` | 2026-07-25 |
| `/blog/sourdough-discard/` | 2026-07-25 |
| `/blog/sourdough-for-beginners/` | 2026-07-25 |
| `/blog/bakers-percentage/` | 2026-07-25 |
| `/blog/sourdough-starter/` | 2026-07-25 |
| `/blog/best-sourdough-calculators/` | 2026-07-23 |

**关键观察**：6 个都是被 Google 在 **2026-07-23 ~ 07-25 抓过旧版本后拒绝的**。28 个 SEO commit 都在那之后才推送，所以 Cloudflare 修复后 Google 重新抓时它们已经是新版本，应会改善。

### 4.2 "已发现 - 尚未编入索引" 8 个

7 篇博客文章 + `/embed/`。前 7 个正常排队中；`/embed/` 是故意 `noindex`（`d0fc37b` 已把它从 sitemap 移除，但 Google 通过站内链接发现了它），**出现在这列表 = noindex 在工作的证据**，**不算问题**。

## 5. 已知经验 / 之前踩过的坑（必须记住）

| 序号 | 出错点 | assistant 修复 | 用户反应 |
|---|---|---|---|
| 1 | 误判"线上没 rel 属性"（脚本漏了 `<a>` 标签） | 重新抓原始 HTML 自我纠错 #0061 | 用户质疑 #0037 后承认错误 |
| 2 | 把 bulk-fermentation 卡片 emoji 改成字母徽章 | 回滚 `b6fd743` | 用户 #0080 立刻反对，秒改回滚 |
| 3 | 删联盟链接脚本误伤 | git 恢复 + 精确匹配重删 #0612 | 恢复后正常 |
| 4 | sitemap lastmod 被替换成 `$12026-08-01` | XML 解析器修补 #0318 | 修复后通过 |
| 5 | PowerShell 变量名冲突（`$_` 等） | 改名重跑 | 改了之后通过 |

### 5.1 沉淀的铁律

- **不动用户没明确要求改的内容**（#0080、#0189、#0193 反复强调）
- **改完必须做线上验收而不是只验本地构建**（#0061 教训，#0215 重复提醒）
- **"读完→计划→做→构建→测试→推送→部署→线上验证"循环不要中间停下来问**（#0112、#0124、#0128、#0203 反复要求）
- **报错要先看是不是工具缓存**：用户多次被 SEO 审计工具的旧数据骗（#0183、#0267）
- **批量替换一定要解析验证，不能盯着正则就觉得对**（sitemap `$12026-08-01` 教训）

## 6. 活跃 goal / 跨会话待办

`threadId: 019fc63a-57da-73f1-a56d-95ad94f29722` 当前状态：**blocked**（时间型阻碍）

**goal 目标**（2026-08-04 触发）：
1. 用户在 GSC URL 检查里对第 4.1 节的 6 个 URL 点"请求编入索引"
2. 等 3-7 天 Google 重新评估
3. 回 GSC 看 `已编入索引` 10 → 多少

**触发条件**：跨过 2026-08-04 北京时间，或用户显式说"接着上次的"

## 7. 关键文件路径速查表

| 用途 | 路径 |
|---|


下面是可直接复制粘贴到新 Codex 会话开头的内容：

````
你是接手一个酸面包水分计算器的网站项目。先别动代码。

【项目位置】G:\视频处理工具\sourdough-calculator\
【线上】https://sourdough-hydrationcalculator.com/
【技术栈】Next.js 14 (静态导出) + Tailwind + JSX；托管 Cloudflare Pages 自动部署
【商业模型】Amazon Associates 联盟（保号底线：2026-07-22 上线 → 2027-01-18 前完成 3 单销售）

【上一棒工作】sourdough03 会话做了 29 个 SEO commit：
- 首页整改（描述/favicon/FAQ Page/顺序）
- 25 篇博客元数据/canonical/社交卡片/坏图片修复
- 5 篇新 SEO 文章上线
- 反作弊（外链 nofollow + 联盟链接精简到 2/篇）
- Trust 信号（llms.txt / byline / Terms 页 / 引用源）
- 全套压缩在 docs/SOURDOUGH03-CONTEXT.md（约 15KB，10 节）

【当前问题根因】GSC 显示 0 点击、平均排名 43.3 → Cloudflare 之前把 Googlebot 拦截
（已在 2026-08-03 用户手动修复）

【当前 GSC】10 已索引 / 14 未索引（6 个待请求重新索引）

【你不能做的事 —— 用户亲自盯】
1. 不动 .tsx 代码除非明确说
2. 不动用户的 GSC / dev.to / X / Cloudflare 任何账号
3. 不重提 sitemap
4. 不"顺手多改点什么"
5. 不假设要继续加内容；新文章、新优化都要用户先点头

【你第一步要做】
1. 读 docs/SOURDOUGH03-CONTEXT.md 全文
2. 看 GSC 当前网页报告（"页面索引"那一页）
3. 报告当前数字、对比 8-03 的快照
4. 等我下一步指令
````

### 10.1 提示来源与可信度

- **作者**：Codex（2026-08-03）
- **依据**：完整上下文压缩在 `SOURDOUGH03-CONTEXT.md` 全文，以及 5819 条 jsonl 会话存档
- **保质期建议**：30 天以内可信；超过 30 天先核实：
  - 域名 `sourdough-hydrationcalculator.com` 是否仍注册
  - Cloudflare 项目是否存活
  - GitHub 仓库 `TZ005/sourdough-calculator` 访问权限
  - `docs/SOURDOUGH01-CONTEXT.md` / `docs/SOURDOUGH03-CONTEXT.md` 是否仍存在

### 10.2 三种粒度的接手 prompt（按场景选）

**A. 微启航（日常继续）** ~80 字

```
接着 sourdough03。先读 docs/SOURDOUGH03-CONTEXT.md。
GSC: 10 已索引 / 14 未索引。Cloudflare 修复生效。
等 3-7 天看 GSC 10 → 多少。
不要动 .tsx、不要改账号、不要重提 sitemap。
报告当前 GSC 状态，我按文档第 8 节走。
```

**B. 标准接手（隔几天 / 陌生 helper）** ~350 字，详见 SOURDOUGH03-CONTEXT.md 第 8 节

**C. 完整启动（陌生人接手 / 长期存档）** 即本节上方整段代码块
