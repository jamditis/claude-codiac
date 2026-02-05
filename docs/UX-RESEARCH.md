# Claude Codiac: UX research for viral shareability

Research compiled from analysis of Spotify Wrapped, BuzzFeed quizzes, GitHub Wrapped/Skyline, Receiptify, Monkeytype, Co-Star, and viral quiz design patterns.

---

## Key findings by example

### Spotify Wrapped

**What makes it work:**
- Bold, vibrant gradients with annual design refresh (2025 went "analog/mixtape" aesthetic)
- Story-based reveal with swipeable cards (Instagram Stories format)
- Personalized data transformed into identity statements ("You're in the top 1% of listeners...")
- Mobile-first, vertical (9:16) format designed for Stories/TikTok
- Interactive controls let users adjust experience speed

**Key stats:**
- 200 million+ engaged users within first 24 hours (2025)
- 116,000+ mentions driven by "Listening Age" shareable feature
- 2024 backlash taught them: users want "quirky, shareable insights" not generic summaries

**Design patterns:**
- Dynamic progress bars with mood-themed backgrounds
- Colorful infographics with playful language
- Each screen is a complete shareable unit
- Brand watermark subtle but present

Sources: [NoGood](https://nogood.io/blog/spotify-wrapped-marketing-strategy/), [The Brand Hopper](https://thebrandhopper.com/2025/06/10/a-case-study-on-spotify-wrapped-the-storytelling-phenomenon/), [Meltwater](https://www.meltwater.com/en/blog/spotify-wrapped-listening-age-analysis), [Fast Company](https://www.fastcompany.com/91451332/spotify-wrapped-2025-goes-analog-in-the-age-of-ai)

---

### BuzzFeed quizzes

**Why they go viral:**
- Exploit "self-serving bias": results are always flattering or neutral
- Feed identity formation: results become "badges" people display
- 30-40% of human speech is about ourselves; quizzes validate this
- Results are easy categories to describe without vulnerability

**Key stats:**
- Quizzes average 51,968 Facebook shares vs. 15,527 for top articles (Kissmetrics)
- Visual quizzes (with images/GIFs) are 40x more likely to be shared

**What makes results shareable:**
- Guessing something about the person ("What City Should You Actually Live In?")
- "Actually" in titles implies hidden truth being revealed
- Results explain WHY someone got that result
- Results connect person to admirable group/character

**Design patterns:**
- Large, image-based answer options
- Progress indicator through questions
- Results page = identity card ready for screenshot
- Minimal text, maximum personality

Sources: [HuffPost](https://www.huffpost.com/entry/buzzfeed-quiz-how-do-they-work_n_4810992), [Fast Company](https://www.fastcompany.com/3026627/how-buzzfeed-made-the-online-quiz-irresistible), [LeadQuizzes](https://www.leadquizzes.com/blog/the-ultimate-guide-on-how-to-make-a-buzzfeed-quiz-that-goes-viral/), [Psychology Today](https://www.psychologytoday.com/us/blog/positively-media/202506/tell-me-my-story-from-myers-briggs-to-buzzfeed)

---

### GitHub Wrapped / Git Skyline

**What developers respond to:**
- 3D visualization (Skyline) makes abstract data tangible and "printable"
- Year-in-review format borrowed from Spotify
- Top projects, language breakdown, commit trends
- Clean, shareable format designed for Twitter/LinkedIn

**Key insight:**
Developers want to celebrate their work publicly but rarely have "professional" ways to do so. These tools give permission to brag.

**Design patterns:**
- Dark mode default (matches IDE aesthetic)
- Stats presented as achievements
- Download options (STL for 3D printing, PNG for sharing)
- GitHub integration feels official/trustworthy

Sources: [Web Designer Depot](https://webdesignerdepot.com/git-wrapped-the-github-year-in-review-you-didnt-know-you-needed/), [GitHub - GitHubWrapped](https://github.com/mtwn105/GitHubWrapped), [Codegram](https://www.codegram.com/case-studies/github-skyline/)

---

### Receiptify

**Why it went viral:**
- Simple, single-purpose concept (music as receipt)
- Instant gratification: one click, immediate result
- Nostalgic design (receipt aesthetic evokes memories)
- Perfect screenshot format (narrow, tall)

**Design patterns:**
- Monospace font mimics thermal receipt printer
- "Wrinkled paper" texture adds authenticity
- Minimal UI: time period selector + generate button
- Result is PNG ready for download/share

**Key insight:**
Constraint breeds creativity. The receipt format is limiting but that's what makes it memorable and shareable.

Sources: [Studio for Creative Inquiry](https://studioforcreativeinquiry.org/project/receiptify), [VCGamers](https://www.vcgamers.com/news/en/receiptify-how-to-make-aesthetic-spotify-receipts-for-your-playlist/)

---

### Monkeytype

**What makes stats feel rewarding:**
- Clean, minimalist interface (no distractions)
- Real-time feedback during test
- Results breakdown: WPM, accuracy, keystroke analysis
- Word-by-word color coding shows exactly where you struggled
- Historical tracking creates "beat your score" loop

**Design patterns:**
- CSS custom properties for extensive theming
- Chart visualization of performance over time
- Downloadable CSV for data nerds
- Dark mode with configurable accent colors

**Key insight:**
Stats are most engaging when they tell a story of progress. Show users where they were vs. where they are.

Sources: [Monkeytype](https://monkeytype.com/), [GitHub - Monkeytype](https://github.com/monkeytypegame/monkeytype), [DeepWiki](https://deepwiki.com/monkeytypegame/monkeytype/3.2-typing-test-interface)

---

### Co-Star (astrology app)

**Why notifications go viral:**
- One notification per day (creates anticipation, not fatigue)
- "Brutally honest" tone that surprises users
- Short, screenshot-ready format
- Users screenshot and share as memes on Twitter

**Design aesthetic:**
- Dark theme with minimalist illustrations
- AI-generated content feels personalized
- Friendship comparison feature drives social engagement
- "Day at a Glance" = single shareable insight

**Key insight:**
Being provocative or "savage" creates shareability. Users share things that made them laugh, gasp, or feel "called out."

Sources: [Medium - DeMagSign](https://medium.com/demagsign/how-the-design-of-the-astrology-app-co-star-is-conquering-the-masses-d6b6d235c806), [Code Brew Labs](https://www.code-brew.com/develop-an-astrology-app-like-co-star/)

---

## Recommendations for Claude Codiac

### Visual design

**Color palette:**
Use vibrant gradients but developer-friendly. Suggested approach:
- Primary: Deep purple to electric blue gradient (cosmic/zodiac feel)
- Accent: Bright cyan or coral for highlights
- Background: Dark (#0f0f23 or similar) with subtle noise texture
- Text: High-contrast white with softer gray for secondary

```css
:root {
  --bg-dark: #0f0f23;
  --bg-card: #1a1a2e;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-cosmic: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-cyan: #00d9ff;
  --accent-coral: #ff6b6b;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
}
```

**Typography:**
- Large, bold numbers for key stats (48-72px)
- Monospace for code-related metrics (JetBrains Mono, Fira Code)
- Sans-serif for body text (Inter, system-ui)

**Results reveal:**
- Build anticipation with loading animation (cosmic/orbital theme)
- Reveal stats one at a time with staggered animations
- Each stat card should be screenshot-worthy on its own
- Final "compatibility score" should be the climax

### UX flow

**Ideal structure (4 steps max):**
1. **Landing** - Hook + single CTA ("Compare your Claude usage")
2. **Upload** - Drag-drop zone with clear instructions, progress indicator
3. **Processing** - Animated wait state (builds anticipation)
4. **Results** - Scrollable/swipeable reveal with share CTAs

**Upload phase:**
```
[Drag your usage report here]
   or
 [Choose file]

Supported: JSON export from Claude Code
```

- Show file name after selection
- Validate immediately, show error inline if wrong format
- Progress bar during processing (even if fake for short operations)

**Progress indicators:**
- Partially filled progress bar increases completion rates
- Keep steps to 3-5 maximum
- Show step names, not just numbers ("Upload" > "Analyze" > "Results")

### Results page structure

**Recommended sections:**

1. **Hero stat** - Single most impressive/interesting metric
   - Big number, cosmic background, shareable on its own
   - Example: "You asked Claude to write 847 functions this month"

2. **Personality breakdown** - The "zodiac" moment
   - Assign a developer archetype based on usage patterns
   - Example: "The Architect" / "The Debugger" / "The Refactorer"
   - Include playful description (2-3 sentences)

3. **Comparison insights** (if comparing two users)
   - Compatibility percentage with cosmic visualization
   - "You both love..." / "You differ on..."
   - Complementary strengths angle

4. **Quick stats grid** - 4-6 key metrics
   - Total conversations
   - Most-used language
   - Average conversation length
   - Favorite time to code

5. **Share CTA** - Prominent but not blocking content

### Shareability

**Aspect ratios:**
| Platform | Ratio | Pixels | Use case |
|----------|-------|--------|----------|
| Instagram/TikTok Stories | 9:16 | 1080x1920 | Full results card |
| Instagram Feed | 4:5 | 1080x1350 | Single stat highlight |
| Twitter/X | 16:9 | 1600x900 | Comparison summary |
| Square (universal) | 1:1 | 1080x1080 | Safe fallback |

**Share implementation:**
```html
<!-- Primary: Copy link (works everywhere) -->
<button onclick="copyToClipboard()">Copy link</button>

<!-- Secondary: Native share (mobile) -->
<button onclick="navigator.share({...})">Share</button>

<!-- Tertiary: Download image -->
<button onclick="downloadPNG()">Download image</button>
```

**Why copy > social buttons:**
- 99.8% of mobile users never tap social share buttons (Moovweb study)
- Users prefer to customize their message when sharing
- Copy-to-clipboard is universal across platforms

**Branding in shareable:**
- Small logo in corner (not center)
- URL at bottom: `claudecodiac.app`
- Don't clutter the content; trust users to find you

### Engagement hooks

**FOMO triggers:**
- "See what other developers discovered about their coding style"
- "Your friend [name] shared their Claude Codiac"
- "Join 10,000+ developers who've compared their usage"

**Curiosity gaps:**
- Tease result before requiring upload: "Are you an Architect or a Debugger?"
- Show sample results on landing page
- "What does your Claude usage say about you?"

**Identity formation:**
- Assign memorable archetypes (like zodiac signs)
- Make results feel like a badge: "I'm a Debug Wizard"
- Enable comparison to create conversation

**Brutally honest option (Co-Star style):**
Consider a toggle for "roast mode" that gives savage but funny feedback:
- "You asked Claude to explain the same regex 14 times"
- "Your commit messages are 47% 'fix'"

### Copy patterns that work

**DO use:**
- "Your [X] says you're a [Y]"
- "You and [friend] are [X]% compatible"
- Active voice, second person ("You wrote...")
- Specific numbers over vague statements
- Playful comparisons ("You code more at 2am than most people code all day")

**DON'T use:**
- Generic statements that could apply to anyone
- Passive constructions
- Jargon without payoff
- Negative framing without humor

---

## Must-have checklist for launch

### Core functionality
- [ ] Single-file upload with drag-drop
- [ ] JSON validation with helpful error messages
- [ ] Processing state with animation
- [ ] Results page with key stats
- [ ] Developer archetype assignment
- [ ] Mobile-responsive design

### Shareability
- [ ] Copy link to clipboard button
- [ ] Download results as PNG (1080x1350 for Instagram)
- [ ] Native share API integration (mobile)
- [ ] Unique URL per result for sharing
- [ ] Open Graph meta tags for link previews
- [ ] Brand watermark on shareable image

### Visual polish
- [ ] Dark mode (default)
- [ ] Gradient backgrounds on key cards
- [ ] Staggered reveal animations
- [ ] Loading state with cosmic theme
- [ ] Large, bold stat numbers
- [ ] Monospace font for code metrics

### Engagement
- [ ] Memorable archetype names
- [ ] At least one "wow" or "haha" stat per result
- [ ] Comparison mode for two users
- [ ] Compatibility percentage with visual
- [ ] "Share your result" CTA (non-blocking)

### Technical
- [ ] Client-side only (no server needed for MVP)
- [ ] Fast: results in under 3 seconds
- [ ] Works on mobile browsers
- [ ] Graceful handling of incomplete/old data formats

---

## CSS patterns to implement

### Animated gradient background

```css
.cosmic-bg {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Glassmorphism card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
}
```

### Big stat number

```css
.stat-number {
  font-size: clamp(48px, 10vw, 96px);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Staggered reveal animation

```css
.stat-card {
  opacity: 0;
  transform: translateY(20px);
  animation: reveal 0.5s ease forwards;
}

.stat-card:nth-child(1) { animation-delay: 0.1s; }
.stat-card:nth-child(2) { animation-delay: 0.2s; }
.stat-card:nth-child(3) { animation-delay: 0.3s; }
.stat-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Progress indicator

```css
.progress-steps {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.progress-step {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.progress-step.active {
  background: var(--accent-cyan);
}

.progress-step.complete {
  background: var(--gradient-primary);
}
```

### Share button cluster

```css
.share-cluster {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

.share-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.share-btn:hover {
  transform: scale(1.05);
}

.share-btn.primary {
  background: var(--gradient-primary);
  color: white;
  border: none;
}

.share-btn.secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## Developer archetype ideas

Based on Claude Code usage patterns, assign users one of these:

| Archetype | Trigger | Description |
|-----------|---------|-------------|
| The Architect | High ratio of planning/design conversations | You think before you type. Your code has structure others can only dream of. |
| The Debugger | Many "fix", "error", "why" queries | You're the person everyone calls when things break. Detective energy. |
| The Speedrunner | Short conversations, high volume | You know what you want and you get it fast. No time for pleasantries. |
| The Explorer | Diverse topics, learning-focused | Curious about everything. Your browser has 47 tabs open right now. |
| The Perfectionist | Many revision/refactor requests | "Good enough" isn't in your vocabulary. You'll iterate until it's right. |
| The Night Owl | Peak usage after midnight | Your best code happens when everyone else is asleep. |
| The Pair Programmer | Long, conversational sessions | Claude isn't a tool to you; it's a collaborator. |

---

## Compatibility scoring (for comparison mode)

When comparing two users:

```javascript
// Example compatibility factors
const factors = {
  languageOverlap: 0.3,      // Same languages = higher
  timingAlignment: 0.2,      // Same coding hours = higher
  conversationStyle: 0.25,   // Similar length/depth = higher
  topicDiversity: 0.25       // Complementary interests = higher
};

// Generate compatibility percentage
// Include playful descriptors:
// 90-100%: "Cosmic soulmates"
// 70-89%: "Strong orbital alignment"
// 50-69%: "Interesting tension"
// 30-49%: "Opposites attract...maybe"
// 0-29%: "Chaotic energy"
```

---

## References

- [Spotify Wrapped Marketing Strategy](https://nogood.io/blog/spotify-wrapped-marketing-strategy/)
- [BuzzFeed Quiz Psychology](https://www.huffpost.com/entry/buzzfeed-quiz-how-do-they-work_n_4810992)
- [GitHub Wrapped](https://github.com/mtwn105/GitHubWrapped)
- [Co-Star Design Analysis](https://medium.com/demagsign/how-the-design-of-the-astrology-app-co-star-is-conquering-the-masses-d6b6d235c806)
- [Progress Bar UX](https://pageflows.com/resources/progress-bar-ux/)
- [Social Media Image Sizes 2026](https://blog.hootsuite.com/social-media-image-sizes-guide/)
- [Share Button UX](https://css-tricks.com/ux-considerations-for-web-sharing/)
- [FOMO Marketing Psychology](https://kadence.com/knowledge/the-psychology-of-fomo-urgency-and-scarcity-and-how-brands-use-it/)
- [Dark Mode UI Best Practices](https://blog.logrocket.com/ux-design/dark-mode-ui-design-best-practices-and-examples/)
- [Animated Gradients CSS](https://www.sliderrevolution.com/resources/css-animated-gradient/)
