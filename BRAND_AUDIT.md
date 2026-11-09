# Portfolio Brand Audit — Yosri Hamrouni

*Content and positioning review, 2026-11-05. Based on the live copy in `src/data/*.ts` and `src/components/*.tsx`. No code or design was changed.*

---

## 1. Executive assessment

**Score now: 57 / 100. With the rewrite below: about 78 / 100** (the rest depends on facts only you can supply, listed in §13).

The portfolio is **honest and well-evidenced**, and that is less common than it should be. The case studies are specific, the claims hold up, and there is a real product demo with a public repo. An engineering manager who reads the School SaaS and ClinVar pages will take you seriously.

The problem is the **top of the page**. The first screen, the "Looking for" list and the skills grid say "a graduate who can do everything." The case studies say something sharper: *someone who builds business software with real permission models, and adds AI to it carefully — scoped to what the user may see, explainable, with a fallback.* That sharper identity is your strongest asset, and right now a visitor only finds it after two minutes of reading.

Four things will cost you contacts:
1. **There is no email address anywhere on the site** (`profile.email` is `null`). The contact section's main action is a CV download.
2. **The headline is generic.** "Full-stack applications and AI-powered solutions" fits thousands of portfolios.
3. **Six target roles** (Full-Stack, Backend, Java/Spring, React, Software Engineer, GenAI) make you look undecided, not flexible.
4. **On two projects (Builderz, Krenova) your contribution is vague** ("Worked on…", "Worked with…"). That puts doubt on the rest.

---

## 2. First-impression test

### First 5 seconds
- **What the visitor sees:** an "Available for full-time roles" pill, the headline *"Software engineer building full-stack applications and AI-powered solutions."*, a portrait labelled "Software Engineer · Full-Stack · AI".
- **Who I think you are:** a junior full-stack developer who mentions AI. Clear enough to file you, not enough to remember you.
- **Role I'd associate:** Junior Full-Stack Developer.
- **What is missing:** anything specific. "AI-powered solutions" is a phrase recruiters have learned to skip. No proof point (a SaaS, a demo, a company name) appears above the fold.

### First 30 seconds
- **What the visitor reads:** the intro sentence, three pillars (*Build / Engineer / Integrate intelligence*), then About.
- **Do I understand your offer?** Partly. The pillars are lists of nouns ("REST APIs, backend services, frontend interfaces, databases and third-party integrations"). They describe activities, not value. *Build* and *Engineer* overlap.
- **Technical strengths?** Breadth is clear. Depth is not yet visible.
- **Reason to continue?** Yes, mostly thanks to the photo and the clean presentation, not the copy.
- **Employable and credible?** Employable, yes. Credible only once I reach Experience. The Maison du Web entry is the first thing that impresses.

### First 2 minutes
- **Are the projects convincing?** The School SaaS is: there's a 2:24 demo, a public repo, the tenant-isolation and explainability challenges are real engineering problems, and the "rules before ML" choice shows judgment. The ClinVar project is also convincing: real numbers, honest limits.
- **Can I see your contributions?** On School SaaS, L-Mobile and ClinVar, yes. On Builderz, no: four bullets beginning "Worked on/with" across a ten-module team project. On Krenova there are generic bullets and no screenshots.
- **Do I understand the complexity?** For the SaaS, yes. But the **RAG assistant is one sentence**. An AI-curious engineering manager will ask which model, what is retrieved, and how permission scoping is enforced. The answer isn't there.
- **Would I interview you?** For a junior full-stack role, likely yes. For a GenAI role, not yet.
- **Questions or doubts I'd have:**
  - Did you build the PFE alone or in a team? ("Designed and built" vs. About's "contributed across".)
  - Was the SaaS ever used by a real school, or is it a prototype?
  - What exactly did *you* build in Builderz?
  - "Four internships": one is a 2022 Laravel internship with a single vague bullet.
  - Can you work in France (work authorization)? The site says "Tunisia first · France · Remote" without addressing it.
  - The site is in English and the CV is French only.
  - How do I email you?

---

## 3. Professional identity assessment

| Question | What the portfolio currently says |
|---|---|
| Who am I? | A 2026 ESPRIT graduate, full-stack, interested in AI. |
| What kind of engineer? | A generalist web developer who has used many stacks. |
| Strongest traits | Honesty and precision (case studies credit the team, admit limits, give real metrics); end-to-end ownership (data model → API → UI); adaptability across stacks. |
| What is interesting | A real multi-tenant SaaS with permission-scoped RAG and explainable risk scoring; an ML research project done in France; a UX bootcamp background. |
| What makes it credible | Video demo, public repo, verified certificates, quantified ML results, an honest "what went wrong" on L-Mobile. |
| What differentiates you | **Not the stack list.** It's *how* you add AI: scoped to permissions, explainable, with a fallback when data is thin. Few graduates show that judgment. Currently buried. |
| International experience | Underused. It's a hero micro-tag ("CESI France exchange") and one cliché sentence ("a useful test of adaptability"). No dates. The ClinVar project, the concrete output of that mobility, isn't linked to it. |
| Clear career direction? | No. Six target roles. |
| Software + applied AI combination? | Present in the case studies, diluted at the top. |
| Too broad? | **Yes.** Seven skill groups, ~40 tools, 10 certifications (including CCNA and Unix scripting), and a 444-line UX case study. Each item is true; together they blur the picture. |

**Gap between intended and perceived identity:** you want to read as *"full-stack + AI engineer."* What a visitor perceives in the first 30 seconds is *"full-stack generalist who lists AI."* The AI only becomes credible inside the SaaS case study.

---

## 4. Value proposition analysis

### What problems you can help a company solve (from evidence, not the stack list)
- **Turn a messy operational workflow into one web application**: school administration, field service, construction projects. Every internship was a business application with roles, records and dashboards.
- **Get the permission model right**: multi-tenant data isolation, RBAC, JWT. This is where business apps usually break.
- **Add AI features that a business can trust**: an assistant that only sees what the user may see, a risk score that explains itself, an ML component that degrades to rules when data is missing.
- **Ramp up on an unfamiliar stack fast**: Laravel, ASP.NET Core, Node, Spring Boot in four years, with features shipped in each.

### Realistic responsibilities as a first hire
- Own a feature end to end: schema, migrations, API, UI, tests.
- Build internal tools and back-office modules.
- Integrate LLM APIs / RAG into an existing product, with the access-control and fallback thinking already shown.
- Work in Agile with Git, code review and written design docs (PlantUML).

### Why full-stack + AI is worth more than either alone
A pure AI developer can call an LLM. You can call it **from inside a real app's permission model**, which is the hard part in production. A pure frontend or backend developer needs someone else to finish a feature. You don't.

### Three positioning options

| | **1. Full-Stack Engineer with AI capabilities** | **2. GenAI Developer with full-stack skills** | **3. Junior Software Engineer, broad background** |
|---|---|---|---|
| Target audience | Product companies, SaaS, agencies, ESNs in Tunisia/France adding AI to products | AI startups, AI teams in larger firms | Any company hiring juniors; ESNs |
| Strengths | Matches all 4 internships; AI is a credible *plus*; widest market | Hot market; your RAG + ML work fits | Safest; zero over-claim |
| Weaknesses | Must stay concrete or "AI" sounds like a buzzword | Your AI evidence is one RAG feature, OpenAI calls and one ML study. "Agentic AI" is listed as *exploring*. You'd be compared with candidates who have eval pipelines, agents, fine-tuning | Throws away your differentiator; you blend in with every graduate |
| Opportunities | Full-stack / backend roles at product companies, "AI-enabled product" teams | Junior AI engineer, LLM application developer | Generalist junior roles, consulting |
| Recruiter perception | "Solid full-stack junior who can also do the AI feature" — memorable | "Ambitious, but where's the AI depth?" | "Fine, but why him over the other 200?" |
| Credibility today | **High** | Medium-low | High, low impact |

### Recommendation: **Option 1. Full-Stack Software Engineer who builds business applications and integrates AI responsibly.**
It is what your evidence proves. It covers the roles you actually want (full-stack, backend, Java/React) under one title instead of six. It keeps AI as the reason to remember you without inviting a depth comparison you'd lose today. You can shift towards Option 2 later, once you have one or two AI-first projects (agents, evaluation, retrieval quality) to show.

---

## 5. Content audit, section by section

### Hero
- **Current:** "Software engineer building full-stack applications and AI-powered solutions." + "Recent ESPRIT engineering graduate focused on full-stack development, backend engineering and generative AI. I like building practical software products that combine reliable engineering with intelligent capabilities."
- **Communicates:** generalist, recent grad, AI interest.
- **Problems:** "AI-powered solutions" and "intelligent capabilities" are empty phrases. Three focus areas in one sentence. It opens with "recent graduate", the least distinctive fact. No proof.
- **Missing:** what kind of software, one proof point.
- **Value or activity?** Activity.

### Pillars (Build / Engineer / Integrate intelligence)
- **Problem:** noun lists; *Build* and *Engineer* overlap; nothing a visitor remembers. The third pillar is the best and should carry the most weight.

### About
- **Title** "From engineering school to shipping real applications." — decent, but "shipping" implies production releases. Confirm that's true or soften it.
- **Para 1** leads with schools and the cliché "adapt quickly and communicate clearly".
- **Para 2** "four internships… quite different stacks" is good evidence of range. The "contributed across" wording conflicts with the case study's "designed and built".
- **Para 3** ("What I enjoy most is the whole path…") is **the best paragraph on the site**. It's authentic and specific. Move it to the front.
- **Para 4** is generic ("contribute from the start and keep growing").
- **"Looking for" card:** six roles. It reads as undecided.
- **Languages:** good, keep.

### Stats band (04 internships · 06 case studies · 10 certifications · 03 languages)
- Counts of items already on the page. "10 certifications" invites scrutiny: several are introductory Coursera courses, "AI For Everyone" and "Unix Tools" with no issuer. It also interrupts the flow from Experience to Projects. **Remove it**, or replace it with facts (see §10).

### Experience
- **Maison du Web:** strong. Missing: team size or solo, and whether the product was deployed or piloted.
- **Krenova:** "Gleam.io-inspired" tells a non-technical recruiter nothing. The bullets are generic. Inconsistency: Experience says *"Integrated… the OpenAI API"*, the case study says *"explored AI-assisted features"*. Pick the true one.
- **L-Mobile:** specific and honest; keep.
- **VioreDigital:** one vague bullet and the filler "laid my foundations". Compress to one line.

### Skills ("The tools I build with")
- ~40 items in 7 groups. Several "core" items have no visible evidence on the site: **GitHub Actions, Docker** (only "ran the stack" in Builderz), **Java / Spring Boot** (only Builderz, with a vague contribution), **Python** (ClinVar notebooks and an "experimental" ML service, which is fair). **Angular** is listed under *also*, yet Builderz is an Angular app. **"Explainable rule-based systems"** as an AI skill will make technical reviewers wince. It's good engineering, but it isn't AI. Present it as what it is.
- No link between skills and the projects that prove them.

### Education
- ESPRIT entry: course list, fine.
- **CESI: no dates**, the cliché "useful test of adaptability", and the research project in one clause. This is your international story and it's underused.
- **Certifications:** 10 is too many at equal weight. AWS (verifiable) and TOEIC carry weight. Group the Meta/Google Coursera courses into one line. CCNA, AI For Everyone and Unix Tools add noise for software roles.
- **Beyond code:** guitar teacher is human and relevant (explaining things clearly), keep it. Red Crescent: "Volunteer involvement with the Tunisian Red Crescent" says nothing new. Add what you did, or keep it to one line.

### Contact
- "Let's talk about your team" / "Ready to collaborate": fine, slightly generic.
- **No email.** This is the biggest conversion problem on the site.
- CV is **French only**, on an English site.
- France availability with no word on work authorization: a French recruiter's first question.

### Calls to action
- Hero: "View projects" + "Download CV". OK. Consider a primary action that points straight to the flagship case study ("Watch the 2-min SaaS demo"). It's your strongest asset.

---

## 6. Project storytelling assessment

### School Management SaaS (PFE, Maison du Web) — *flagship*
**Demonstrates:** problem-solving ✅ · full-stack ✅ · backend/frontend integration ✅ (Inertia) · architecture ✅ (tenant scoping, policies) · applied AI ✅ partly · real-world need ✅.
**What should stick:** *"He built a multi-tenant SaaS where the AI respects the same permissions as the rest of the app, and explains itself."*
**Weaknesses:**
- **The AI is under-told.** The RAG assistant is one bullet. Add (only if true): which LLM, what is indexed, how the retrieval is filtered by tenant and role, what happens when no answer is found.
- **"AI-based risk detection" vs. "rule-based engine".** The current page is honest that it's rule-based with an experimental ML layer. Keep it that way. In the hero/pillars, don't call the rule engine "AI". Call it *explainable risk scoring*. The judgment ("rules first, because teachers must understand the score and historical data was thin") is the impressive part.
- **Outcome is weak:** "Delivered as my final-year engineering project." If there was a defence grade, a pilot school, or a handover to the company, say so. If not, end on what you learned or what's next.
- **Team context missing:** solo or team?

### Builderz (ESPRIT team project)
**What should stick (currently):** nothing about *you*.
**Weaknesses:** four "Worked on/with" bullets; a 17-item stack; "Team member" role; "ten modules" without saying which were yours. "Spring Boot microservices" (plural) while the architecture shows one backend service + gateway + Eureka. A reviewer may call that an overstatement.
**Fix:** name your module(s) and what you built in them. Describe it as "a Spring Boot backend behind a Spring Cloud Gateway with Eureka discovery", not "microservices", unless there were several business services. Trim the visible stack to the 6–8 that matter.

### Gleam.io-inspired Platform (Krenova)
**What should stick:** "Node/React product work with third-party APIs." Currently it reads like a generic assignment: no screenshots, generic bullets, outcome is "hands-on experience".
**Fix:** rename it to describe what it is ("Social campaign & giveaway platform"), list 2–3 features you personally built, and settle the OpenAI wording. If you can't add specifics, **demote it to the Experience section only** and drop the case study. A thin case study weakens the strong ones next to it.

### Field Service Application (L-Mobile)
**What should stick:** "He owned a module end to end in a team, and handled the merge problems." Good.
**Weaknesses:**
- "About 10 of the project's 36 commits" undersells you and invites the wrong comparison. Drop the count. "Owned the Articles and Users modules and the shared app shell" is stronger and just as true.
- The outcome states publicly that the team prototype stored unhashed passwords and trusted client-side roles. That honesty is good in an interview, but on a public page it can read as criticism of a former host company. Reframe it as *"What I'd do differently"* and keep it about your own learning. Only mention "hardening my fork" if that work exists or is clearly in progress.

### AI for Pathogenic Genetic Variants (CESI)
**What should stick:** "He can run an ML experiment properly and is honest about the results." This is the best evidence of scientific rigour on the site (real metrics, class imbalance identified, recall prioritised over accuracy).
**Fix:** link it explicitly to your France mobility (it *is* your international story). Keep the honest numbers. Engineering managers trust "F1 0.45 on the pathogenic class, here's why" more than inflated claims.

### Warda (UX/UI bootcamp)
**What should stick:** "He has product and user-research sense, not just code."
**Risk:** it's the longest case study, for a 2023 bootcamp project, on an engineering portfolio. Keep it, but **place it last** and frame it as a product-thinking signal ("why my interfaces are usable"), not a career direction. Otherwise it adds a fourth identity (designer).

### Recommended order
1. School SaaS · 2. ClinVar ML · 3. Field Service · 4. Builderz (once contribution is clarified) · 5. Warda · (Krenova only if strengthened).
Reason: lead with the two projects that prove *software + AI*, then team engineering, then breadth.

---

## 7. Main weaknesses and missed opportunities

**Could make a recruiter lose interest:**
- A generic headline with buzzwords ("AI-powered solutions", "intelligent capabilities").
- Six target roles → "doesn't know what he wants."
- A skills wall without links to proof.
- The vague Builderz/Krenova contributions make them look like academic assignments.

**Could make a recruiter hesitate to contact you:**
- **No email.**
- A French-only CV on an English site.
- France listed as a target with no word on work authorization or relocation.
- A public critique of a former host company's prototype security.
- "10 certifications" inflation.

**Missed opportunities:**
- The **"AI that respects permissions and explains itself"** theme exists in your work but is never stated.
- The **CESI mobility + ClinVar research** pairing is your international story, and it's split across three sections.
- The **demo video** is the most persuasive asset on the site and isn't promoted above the fold.
- **Guitar teaching** shows you can explain things clearly, a real signal for team fit. It's at the bottom.

---

## 8. Recommended professional identity

**A. Positioning (one sentence)**
> A full-stack software engineer who builds business applications end to end, and adds AI features that respect the app's permissions and can explain their results.

**B. Main headline**
> **Full-stack engineer. Business software, with AI that earns its place.**

Plainer alternative, if you want zero cleverness: *"Full-stack software engineer — web applications with practical AI features."*

**C. Value proposition**
> I take an operational workflow (admissions, grades, service orders, project requests) and turn it into a web application: data model, APIs, interface and access control. When AI genuinely helps, I add it the same careful way: scoped to what each user may see, explainable, and with a fallback when data is missing.

**D. About section** — see §10.

**E. 20-second elevator pitch**
> "I'm Yosri, a software engineer who just graduated from ESPRIT, with an exchange semester at CESI in France. For my final-year project I built a multi-tenant school management SaaS in Laravel and React. That included a student risk score teachers can actually understand, and an assistant that only answers from data the user is allowed to see. What I like is building the whole feature, from the database to the screen, and adding AI only where it makes the product better. I'm looking for my first full-time full-stack role."

**F. Three recruiter takeaways**
1. **He builds complete business applications**: four internships, data model to UI, real permission models.
2. **He adds AI responsibly**: permission-scoped RAG, explainable scoring, honest ML evaluation.
3. **He's international and adaptable**: Tunisia and France, Arabic/French/English, four different stacks.

---

## 9. Multiple audience perspectives

| Audience | Needs | With the rewrite |
|---|---|---|
| **HR recruiter** | Title, location, availability, languages, how to contact, in 10 seconds | Single title, clear availability line, email visible, English + French CV |
| **Engineering manager** | Depth, ownership, judgment, code | Contributions named per project, RAG/architecture detail, repo + demo, honest trade-offs |
| **Employer** | "Where would he fit on my team?" | "Own a feature end to end; take the AI integration ticket", stated explicitly |

**Conflicts and the balance:**
- *HR wants keywords; engineers distrust keyword walls.* → Keep a compact skills section with keywords, but link each core skill to the project that proves it.
- *HR wants a short story; engineers want detail.* → Plain-language hero and project taglines; technical depth inside the case studies (already the structure, keep it).
- *Broad role coverage vs. clear identity.* → One title ("Full-Stack Software Engineer"), with backend / Java / React mentioned as *strengths* rather than separate target roles.

---

## 10. Rewritten portfolio content (before → after)

> Facts marked **[confirm]** need your input. Anything I couldn't verify is left out or flagged, not invented.

### Hero

**Badge**
- Before: `Available for full-time roles`
- After: `Open to full-time roles · from now` *(add a start date if you have one)*
- Why: availability is the first thing recruiters filter on; "from now" removes a question.

**Headline (H1)**
- Before: *Software engineer building full-stack applications and AI-powered solutions.*
- After: **I build full-stack business applications — and add AI where it actually helps.**
- Why: says *what kind* of software and *how* you use AI; drops the buzzword; keeps both halves of your identity in one breath.

**Intro**
- Before: *Recent ESPRIT engineering graduate focused on full-stack development, backend engineering and generative AI. I like building practical software products that combine reliable engineering with intelligent capabilities.*
- After: *Software engineer, ESPRIT 2026, with an exchange semester at CESI in France. My final-year project was a multi-tenant school management SaaS (Laravel, React, PostgreSQL) with an explainable student-risk score and an assistant that only answers from data the user is allowed to see.*
- Why: a proof point replaces adjectives; the international experience shows up in the first 10 seconds; "graduate" moves to second position.

**Primary CTA**
- Before: `View projects`
- After: `Watch the 2-min product demo` → School SaaS page / video. Secondary: `See all projects`, `Download CV (EN / FR)` **[confirm English CV]**
- Why: the demo is your most convincing asset.

**Photo card label**
- Before: `Software Engineer` · `Full-Stack · AI`
- After: `Full-Stack Software Engineer` · `Tunisia ↔ France`

**Micro-facts row**
- Before: `ESPRIT Engineering · 2026` · `Nabeul, Tunisia` · `CESI France exchange`
- After: `Engineering degree, ESPRIT 2026` · `Exchange semester, CESI Caen (France)` · `Based in Nabeul, Tunisia`

### Pillars → "What I bring"

| Before | After |
|---|---|
| **Build** — Full-stack applications, REST APIs, backend services, frontend interfaces, databases and third-party integrations. | **Complete features, not halves** — I take a feature from database schema to API to interface, so it ships without hand-offs. Laravel, Spring Boot, ASP.NET Core, Node · React, Angular. |
| **Engineer** — Software architecture, authentication, multi-tenant data management and code that stays maintainable. | **Access control done right** — Multi-tenant data isolation, roles and permissions, JWT authentication: the parts of business software that are expensive to get wrong. |
| **Integrate intelligence** — LLM integrations, RAG-based assistants, explainable rule engines and AI-assisted workflows inside real products. | **AI that users can trust** — Assistants grounded in the user's own data and permissions, scores that explain their reasons, and a fallback when data is missing. |

Why: each pillar now states a *benefit* and backs it with a tool list, instead of being the tool list.

### About

**Title**
- Before: *From engineering school to shipping real applications.*
- After: *I like owning the whole path, from workflow to working software.*
- Why: leads with your most authentic line; avoids implying production "shipping" unless that's true **[confirm]**.

**Body**
> What I enjoy most is the whole path: understanding how people actually work, designing the data model and APIs, building the interface, then adding intelligence where it genuinely helps — like a risk score teachers can read, or an assistant that only sees what the user is allowed to see.
>
> I've done that in four internships, on four different stacks. At **Maison du Web** I spent six months building a multi-tenant school management SaaS (Laravel, React, Inertia, PostgreSQL) **[confirm: alone / in a team of N]**. At **L-Mobile** I owned a module of a field-service app in ASP.NET Core and React. At **Krenova** I built features for a campaign platform in Node.js and React.
>
> I studied computer engineering at **ESPRIT** in Tunisia and spent an exchange semester at **CESI École d'Ingénieurs** in Caen, France, where I co-led a machine-learning research project on genetic variants. Working in French engineering teams made me comfortable switching languages and ways of working.
>
> Outside code I teach guitar, which has taught me more about explaining things clearly than any course.
>
> I'm looking for my first full-time role as a full-stack engineer, in Tunisia, in France or remotely.

Why: opens with what's distinctive; evidence before credentials; the international story is concrete (a project, not "adaptability"); one human detail; one clear ask.

**"Looking for" card**
- Before: 6 chips (Junior Full-Stack, Junior Backend, Java/Spring Boot, React, Software Engineer, Junior AI/GenAI)
- After:
  - **Role:** Full-Stack Software Engineer (junior)
  - **Strongest on:** backend (Laravel, Spring Boot, ASP.NET Core) · React / TypeScript · LLM & RAG integration
  - **Where:** Tunisia · France **[confirm wording: e.g. "open to relocation — would need a work permit"]** · Remote
  - **Start:** immediately **[confirm]**
- Why: one identity, still searchable by every keyword you had.

### Stats band
- Before: `04 Internships · 06 Case studies · 10 Certifications · 03 Working languages`
- After: **remove**. If you want a band, use facts: `6-month PFE · 4 internships · 2 countries · 3 languages`.
- Why: counts of on-page items read as padding; "10 certifications" invites scrutiny.

### Experience

**Section title**
- Before: *Career timeline*
- After: *Where I've built software*

**Maison du Web**
- Summary — Before: *Six-month engineering project: a multi-tenant school management SaaS that centralizes academic and administrative workflows, with AI-assisted student risk detection.*
- After: *Six-month final-year project: a multi-tenant SaaS that lets several schools run students, classes, schedules, grades, attendance and payments in one place, with an explainable student-risk score and a permission-aware assistant.* **[add: team size; deployed/piloted?]**
- Bullets: keep as they are (they're good). Change bullet 3 to: *"Designed an explainable risk score from grades, absences, late arrivals and progression. Each result lists its reasons, and incomplete records are handled instead of producing misleading scores."*

**Krenova**
- Before: *Contributed to a Gleam.io-inspired web platform for interactive campaigns and user engagement.*
- After: *Built features for a web platform where brands run giveaway and engagement campaigns that users join through social-media actions.* **[confirm]**
- Bullets: replace with 2–3 specific features you built **[need from you]**. Align the OpenAI wording with the case study ("integrated" or "prototyped", whichever is true).

**L-Mobile** — keep; it's the best-written entry.

**VioreDigital**
- Before: summary + *"Worked on application features of a Laravel and MySQL hotel management web application."*
- After (one line, no bullets): *First internship: features for a hotel management web app in Laravel and MySQL.*

### Projects

**Section title**
- Before: *Selected work / Featured projects*
- After: *Selected work / Projects, and what I did on each*

**Taglines**

| Project | Before | After |
|---|---|---|
| School SaaS | A multi-tenant platform for academic and administrative management, with AI-assisted student risk detection. | One platform for many schools, with data kept separate, an explainable student-risk score and an assistant that respects each user's permissions. |
| ClinVar ML | Machine learning on 64,000 ClinVar variants to flag mutations that may cause disease. | *(keep: specific and strong)* · add context chip: "Research · exchange semester in France" |
| Field Service | A service-management web app built by a team of three interns with ASP.NET Core (.NET 8) and React. | I owned the inventory and user modules, and the shared app shell, of a field-service app built by three interns in ASP.NET Core and React. |
| Builderz | A construction management platform with an Angular front office and back office, running on Spring Boot microservices. | A construction management platform (Angular + Spring Boot behind an API gateway). I built **[your modules]**. |
| Gleam-inspired | A web platform for interactive campaigns and user engagement. | Rename → **Social Campaign Platform**: Brands run giveaway campaigns that users join through social actions; React + Node.js + MongoDB. |
| Warda | A mobile app for ordering and sending flowers across Tunisia — from user research to high-fidelity screens. | *(keep)* · move to last, category "Product design (UX bootcamp)" |

**School SaaS — outcome**
- Before: *Delivered as my final-year engineering project. The rule-based engine is the functional reference; the ML component remains experimental…*
- After: *Delivered and defended as my final-year engineering project **[add grade / company handover / pilot if true]**. The rule-based score is what the product uses. The ML layer stays experimental until there's enough historical data to beat the rules, a trade-off I'd make again.*

**School SaaS — add an "How the assistant works" block** (only with real facts) **[need from you]**: model/provider · what is indexed · how retrieval is filtered by institution and role · behaviour when no answer is found.

**Builderz — contribution** **[need from you]**
- Before: *Worked on the Spring Boot backend… Worked with JWT… Worked with the AI-assisted features… Ran the stack with Docker…*
- After (template): *Built the **[X]** and **[Y]** modules end to end: JPA entities, REST endpoints, Angular screens. Implemented **[JWT filter / role checks / the OpenAI request analysis]**. Wrote the Docker Compose setup **[if you did]**.*

**Field Service — contribution, last bullet**
- Before: *Worked in an Agile/Scrum setup with Git feature branches — about 10 of the project's 36 commits.*
- After: *Worked in Scrum with Git feature branches and code review.*

**Field Service — outcome**
- Before: *…authentication was the weak spot of this prototype — passwords were not hashed and roles were trusted on the client — so I am hardening my fork…*
- After: *My first full-stack project in a professional team. What I'd do differently: put authentication on the server from day one (hashed passwords, JWT, server-side role checks). I'm applying that in my own fork* **[only if true]**.

**Gleam-inspired outcome**
- Before: *Hands-on experience with the JavaScript ecosystem and third-party API integration in a product setting.*
- After: state one thing that worked **[need from you]**, or remove the case study and keep the Experience entry.

### Skills

**Title**
- Before: *Core capabilities / The tools I build with*
- After: *Skills / What I've used in real projects*

**Structure:** keep the groups; add "used in: School SaaS, Builderz…" under each core group.

**Content changes:**
- **AI & GenAI** — core: `LLM API integration (OpenAI)`, `Retrieval-Augmented Generation (RAG)`, `Prompt design`, `scikit-learn / ML evaluation`. Move **"Explainable rule-based systems"** to Backend as `Explainable scoring / rule engines`. Remove "AI-assisted workflows" (vague). Keep "Exploring: AI agents & tool calling". That's honest and signals direction.
- **Frontend** — move **Angular** to core (Builderz).
- **Backend** — move Symfony out unless a project shows it.
- **Tools** — keep **GitHub Actions** only if a repo uses it **[confirm]**; otherwise move it to "also".
- **Languages** — C/C++ can go; they add nothing for these roles.

### Education

**CESI entry**
- Before: *Studied in a French engineering school and worked in multicultural project teams — a useful test of adaptability and communication across backgrounds. Research project: machine learning to predict pathogenic genetic variants from ClinVar.*
- After: *Exchange semester **[dates]** in a French engineering school. Worked in French in multicultural project teams, and co-authored a machine-learning research project predicting pathogenic genetic variants from ClinVar (report + scientific poster). → See the project*
- Why: concrete output instead of a soft-skill claim; adds dates; links to proof.

**Certifications** — show 3 prominently, group the rest:
1. AWS Academy Graduate — Cloud Foundations (Credly)
2. TOEIC 795 / 990
3. Meta Front-End Developer courses (3 courses, Coursera) · Google UX Foundations
- Fold CCNA, AI For Everyone and Unix Tools into a collapsed "Other" line, or drop them.

**Beyond code**
- Guitar teacher: keep as is; it's good.
- Red Crescent — Before: *"Volunteer involvement with the Tunisian Red Crescent."* After: *"Volunteer since 2019: **[what you do — events, first aid, logistics]**."* Or keep only the title line.

### Contact

**Title** — keep *Let's talk about your team*.

**Badge**
- Before: `Ready to collaborate`
- After: `Replies within 24 hours` *(only if you'll keep that promise)*, or remove the badge.

**Body**
- Before: *I'm looking for my first full-time role as a software engineer — in Tunisia, in France or remote. If you're hiring or want to discuss a project, I'd be glad to hear from you.*
- After: *I'm looking for my first full-time role as a full-stack engineer, in Tunisia, in France or remotely, and I can start right away **[confirm]**. The fastest way to reach me is email.*

**Channels**
- Add: **Email** **[your professional address]**, listed first.
- CV: `Download CV — English` · `Version française` **[confirm English CV]**.

### Page title / meta
- Before: `Yosri Hamrouni — Software Engineer`
- After: `Yosri Hamrouni — Full-Stack Software Engineer`

---

## 11. Before-and-after summary

| Element | Before (what visitors take away) | After |
|---|---|---|
| 5-second read | "Junior full-stack dev who mentions AI" | "Full-stack engineer who builds business apps and adds AI carefully" |
| Target role | 6 options | 1 title, strengths listed |
| AI claim | "AI-powered solutions" | "Assistant scoped to user permissions; explainable score" |
| International | A micro-tag | A sentence in the hero + project link |
| Proof above the fold | none | PFE description + demo CTA |
| Contact | LinkedIn / GitHub / CV (French) | Email first + EN/FR CV |
| Weakest projects | Vague contributions | Named modules, or demoted |

---

## 12. Score

| Criterion | Weight | Now | After rewrite* |
|---|---|---|---|
| Clarity of identity | 20% | 60 | 85 |
| Value proposition | 20% | 45 | 80 |
| Credibility | 15% | 75 | 85 |
| Differentiation | 15% | 50 | 75 |
| Project storytelling | 15% | 65 | 75 |
| Recruiter conversion potential | 15% | 50 | 80 |
| **Weighted total** | | **57** | **~80** |

*The "after" scores assume the **[confirm]** items get answered. Builderz and Krenova storytelling stays capped until their contributions are specific.

**Final recruiter impression after the rewrite:**
> "Full-stack junior with a real SaaS demo, solid on permissions and backend, and one of the few graduates whose AI work shows judgment rather than hype. International, trilingual, easy to contact. Worth a first call."

---

## 13. What I need from you before implementing

1. **Email address** to show on the site.
2. **PFE:** solo or team (how many)? Deployed, piloted or handed over? Defence grade (if you want it shown)?
3. **RAG assistant:** which model/provider, what's indexed, how retrieval is filtered by tenant/role?
4. **Builderz:** which modules/features did *you* build?
5. **Krenova:** 2–3 features you personally built; was the OpenAI work shipped or exploratory?
6. **L-Mobile fork:** is the auth hardening done, in progress, or planned?
7. **English CV:** do you have one (or want one)?
8. **France:** how to phrase work authorization / relocation?
9. **CESI dates**, and **start availability**.
10. **GitHub Actions / Docker:** which repo shows them?
