import awsBadge from '../../../assets/badge-aws-cloud-foundations.png';
import uxBootcampCert from '../../../assets/certificate-space-academy-ux-bootcamp.jpg';
import type { Content } from '../../../data/types';
import { projects } from './projects';

// المحتوى بالعربية الفصحى. الوقائع نفسها الواردة في النسختين الفرنسية والإنجليزية دون أي إضافة.
// أسماء الأشهر وفق الاستعمال التونسي/المغاربي.

export const content: Content = {
  role: 'مهندس برمجيات Full-Stack',
  intro:
    'مهندس برمجيات، خرّيج ESPRIT دفعة 2026، قضيت فصلًا دراسيًا ضمن برنامج تبادل في CESI بفرنسا. في مشروع التخرّج طوّرتُ بمفردي منصّة SaaS متعدّدة المستأجرين لإدارة المؤسسات التعليمية (Laravel وReact وPostgreSQL)، تتضمّن مؤشّرًا قابلًا للتفسير لخطر تعثّر التلاميذ، ومساعدًا لا يجيب إلا انطلاقًا من البيانات التي يحقّ للمستخدم الاطّلاع عليها. المنصّة منشورة اليوم وقيد التجربة في مؤسسة تعليمية.',
  location: 'نابل، تونس',
  heroFacts: ['شهادة مهندس، ESPRIT دفعة 2026', 'فصل تبادل، CESI كان (فرنسا)', 'مقيم في نابل، تونس'],

  pillars: [
    {
      title: 'ميزات مكتملة، لا أنصاف حلول',
      text: 'أتولّى الميزة من مخطّط قاعدة البيانات إلى الواجهة البرمجية ثم واجهة المستخدم، فتُسلَّم دون انتظار أطراف أخرى. Laravel وSpring Boot وASP.NET Core وNode.js · React وAngular.',
    },
    {
      title: 'تحكّم سليم في الوصول',
      text: 'عزل البيانات بين المستأجرين، والأدوار والصلاحيات، والمصادقة عبر JWT: الأجزاء التي يكلّف الخطأ فيها كثيرًا في برمجيات الأعمال.',
    },
    {
      title: 'ذكاء اصطناعي جدير بالثقة',
      text: 'مساعدات تستند إلى بيانات المستخدم وصلاحياته، ومؤشّرات تشرح أسبابها، وحلّ احتياطي حين يتعذّر النموذج أو تنقص البيانات.',
    },
  ],

  lookingFor: [
    { label: 'الوظيفة', value: 'مهندس برمجيات Full-Stack (مبتدئ)' },
    { label: 'أبرز نقاط القوة', value: 'Backend (Laravel وSpring Boot وASP.NET Core) · React / TypeScript · دمج نماذج LLM وتقنية RAG' },
    { label: 'المكان', value: 'تونس · فرنسا · عن بُعد' },
    { label: 'تاريخ البدء', value: 'فورًا' },
  ],

  about: [
    'أكثر ما أستمتع به هو المسار كاملًا: أن أفهم كيف يعمل الناس فعلًا، ثم أصمّم نموذج البيانات والواجهات البرمجية، وأبني واجهة المستخدم، وأضيف الذكاء حيث يفيد حقًّا — كمؤشّر خطر يستطيع المدرّسون قراءته، أو مساعد لا يرى إلا ما يحقّ للمستخدم رؤيته.',
    'قمت بذلك خلال أربع فترات تدريب، على أربع حزم تقنية مختلفة. في **Maison du Web** أمضيت ستة أشهر أطوّر بمفردي منصّة SaaS متعدّدة المستأجرين لإدارة المؤسسات التعليمية (Laravel وReact وInertia.js وPostgreSQL)، وهي اليوم منشورة وقيد التجربة في مؤسسة تعليمية، وقد سُلّمت إلى الشركة. وفي **L-Mobile** تولّيت وحدات من تطبيق لإدارة التدخّلات الميدانية بـ ASP.NET Core وReact، ضمن فريق من ثلاثة أشخاص. وفي **Krenova** طوّرت منصّة لإدارة الحملات بـ Node.js وReact.',
    'درست هندسة الإعلامية في **ESPRIT** بتونس، وقضيت فصلًا ضمن برنامج تبادل في **CESI École d’Ingénieurs** بمدينة كان الفرنسية، حيث شاركت في تأليف مشروع بحثي في تعلّم الآلة حول المتغيّرات الجينية. وقد علّمني العمل ضمن فرق هندسية فرنسية الانتقال بسلاسة بين اللغات وأساليب العمل.',
    'خارج البرمجة أُدرّس العزف على القيثارة، وقد علّمني ذلك عن الشرح الواضح أكثر مما علّمتني أيّ دورة.',
    'أبحث عن أول وظيفة بدوام كامل كمهندس Full-Stack، في تونس أو فرنسا أو عن بُعد.',
  ],

  experiences: [
    {
      company: 'Maison du Web',
      role: 'متدرّب مهندس برمجيات Full-Stack · مشروع التخرّج (PFE)',
      period: 'فيفري 2026 – أوت 2026',
      summary:
        'مشروع تخرّج مدّته ستة أشهر، أنجزته بمفردي: منصّة SaaS متعدّدة المستأجرين تتيح لعدّة مؤسسات تعليمية إدارة التلاميذ والأقسام وجداول الأوقات والدرجات والحضور والمدفوعات في مكان واحد، مع مؤشّر قابل للتفسير لخطر تعثّر التلاميذ ومساعد يحترم صلاحيات الوصول. نُشرت المنصّة، وهي قيد التجربة في مؤسسة تعليمية، وسُلّمت إلى Maison du Web.',
      contributions: [
        'تصميم وتطوير الميزات الوظيفية للتلاميذ والمدرّسين والأقسام وجداول الأوقات والدرجات والمدفوعات ولوحات التحكّم الإدارية.',
        'تطوير واجهات REST API وخدمات التطبيق مع عزل البيانات بين المستأجرين والتحكّم في الوصول حسب الأدوار.',
        'تصميم مؤشّر خطر قابل للتفسير يعتمد على الدرجات والغيابات والتأخيرات وتطوّر المستوى. تُذكر أسباب كل نتيجة، وتُعالَج الملفات غير المكتملة بدل إنتاج مؤشّرات مضلّلة.',
        'دمج مساعد RAG يعمل على نموذج LLM محلي (Ollama) لا يسترجع إلا البيانات التي يحقّ للمستخدم المتّصل الوصول إليها، ويعتمد إجابات قائمة على القواعد حين يتعذّر النموذج.',
        'العمل وفق منهجية Agile باستخدام Git وTaiga وPlantUML للتصميم والمتابعة والتوثيق التقني.',
      ],
      stack: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'RAG'],
      project: 'school-management-saas',
      featured: true,
    },
    {
      company: 'Krenova Consulting',
      role: 'متدرّب مطوّر برمجيات',
      period: 'جويلية 2025 – سبتمبر 2025',
      summary: 'تدريب هندسي لمدّة شهرين، أنجزته بمفردي: منصّة ويب على غرار Gleam.io تنظّم فيها العلامات التجارية مسابقات يشارك فيها الجمهور عبر إنجاز إجراءات على شبكات التواصل الاجتماعي.',
      contributions: [
        'تطوير واجهة REST API بـ Express على MongoDB: حملات تتضمّن إجراءات بقيمة نقاط، وروابط مشاركة، وعدّادات مشاركة ذرّية.',
        'تنفيذ التسجيل وتسجيل الدخول بكلمات مرور مشفّرة بـ bcrypt، ورموز JWT، وطبقة وسيطة للتحقّق من الرمز.',
        'بناء واجهة React بـ Tailwind CSS: لوحة تحكّم المنشئ، ومحرّر الحملات، وصفحة مشاركة الجمهور.',
      ],
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      project: 'gleam-inspired-platform',
    },
    {
      company: 'L-Mobile',
      role: 'متدرّب مطوّر Full-Stack',
      period: 'جويلية 2024 – سبتمبر 2024',
      location: 'نابل، تونس',
      summary: 'فريق من ثلاثة متدرّبين أعاد بناء تطبيق لإدارة التدخّلات الميدانية (Field Service) باستخدام ASP.NET Core (.NET 8) وReact.',
      contributions: [
        'تطوير وحدة المقالات (Articles) من البداية إلى النهاية: نماذج EF Core وعمليات الترحيل، وكائنات DTO، ووحدات تحكّم REST، وشاشات React.',
        'إنشاء الهيكل المشترك للتطبيق (شريط التنقّل، والقائمة الجانبية، والصفحة الرئيسية) وإدارة المستخدمين مع تسجيل الدخول وإنشاء الحساب.',
        'دمج وحدتي مع عمل الفريق على ملفات التدخّل، وحلّ التعارضات في عمليات ترحيل قاعدة البيانات.',
        'التعاون عبر فروع Git للميزات ومراجعات الشيفرة ضمن فريق Agile/Scrum.',
      ],
      stack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'React', 'REST APIs'],
      project: 'field-service-application',
    },
    {
      company: 'VioreDigital',
      role: 'متدرّب مطوّر Laravel',
      period: 'جويلية 2022 – أوت 2022',
      location: 'نابل، تونس',
      summary: 'أول تدريب: تطوير ميزات لتطبيق ويب لإدارة الفنادق باستخدام Laravel وMySQL.',
      contributions: [],
      stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    },
  ],

  education: [
    {
      school: 'ESPRIT — École Supérieure Privée d’Ingénierie et de Technologies',
      degree: 'الشهادة الوطنية للمهندس في هندسة الإعلامية (Génie Informatique)',
      period: '2021 – 2026',
      location: 'تونس',
      text: 'هندسة البرمجيات، والبرمجة كائنية التوجّه، والخوارزميات وهياكل البيانات، وتطوير الويب، وقواعد البيانات، وبنية التطبيقات، والذكاء الاصطناعي، وإدارة المشاريع البرمجية.',
    },
    {
      school: 'CESI École d’Ingénieurs',
      degree: 'فصل تبادل في هندسة البرمجيات (برنامج التبادل لدى ESPRIT)',
      period: 'فيفري 2025 – جوان 2025',
      location: 'كان، فرنسا',
      text: 'الدراسة في مدرسة مهندسين فرنسية والعمل باللغة الفرنسية ضمن فرق مشاريع متعدّدة الثقافات. شاركت في تأليف مشروع بحثي في تعلّم الآلة للتنبّؤ بالمتغيّرات الجينية المُمرِضة انطلاقًا من قاعدة ClinVar، قُدّم في شكل تقرير بحثي وملصق علمي.',
      project: 'ai-genetic-variants',
    },
  ],

  // عناوين الشهادات هي أسماؤها الرسمية لدى الجهات المانحة، لذا تبقى كما هي.
  certifications: [
    {
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services · AWS Academy',
      date: 'نوفمبر 2025',
      note: 'شارة تكوين · 20 ساعة',
      href: 'https://www.credly.com/badges/3160f154-785a-42e5-a350-139aeadf0768/public_url',
      hrefLabel: 'التحقّق عبر Credly',
      image: awsBadge,
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco Networking Academy',
      href: 'https://www.credly.com/badges/176c0081-546f-4e46-b806-835f49f9ec06/public_url',
      hrefLabel: 'التحقّق عبر Credly',
    },
    {
      title: 'TOEIC Listening & Reading — 795 / 990',
      issuer: 'ETS Global',
      date: 'ماي 2025',
      note: 'الاستماع 420 (B2) · القراءة 375 (B1) · صالحة حتى ماي 2027',
    },
    {
      title: 'Introduction to Front-End Development',
      issuer: 'Meta · Coursera',
      date: 'أفريل 2023',
      note: 'برنامج Meta Front-End Developer',
      href: 'https://coursera.org/verify/RJL97PPCEVTX',
      hrefLabel: 'التحقّق عبر Coursera',
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta · Coursera',
      date: 'سبتمبر 2023',
      note: 'برنامج Meta Front-End Developer',
      href: 'https://coursera.org/verify/2GP7EKLCX9HR',
      hrefLabel: 'التحقّق عبر Coursera',
    },
    {
      title: 'Version Control',
      issuer: 'Meta · Coursera',
      date: 'سبتمبر 2023',
      note: 'برنامج Meta Front-End Developer',
      href: 'https://coursera.org/verify/T2EVZYB2UBBQ',
      hrefLabel: 'التحقّق عبر Coursera',
    },
    {
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Google · Coursera',
      date: 'فيفري 2023',
      note: 'برنامج Google UX Design',
      href: 'https://coursera.org/verify/TQ6GP9LMRRV8',
      hrefLabel: 'التحقّق عبر Coursera',
    },
    {
      title: 'UX/UI Bootcamp',
      issuer: 'Space Academy',
      date: 'سبتمبر 2023',
      note: 'معسكر تدريبي مكثّف عن بُعد لمدّة 12 أسبوعًا',
      href: uxBootcampCert,
      hrefLabel: 'عرض الشهادة',
    },
  ],

  languages: [
    { name: 'العربية', level: 'اللغة الأم' },
    { name: 'الفرنسية', level: 'مستوى مهني' },
    { name: 'الإنجليزية', level: 'مستوى مهني (TOEIC 795، B2)' },
  ],

  activities: [
    {
      title: 'مدرّس قيثارة',
      org: 'Dimouzika Club، نابل',
      since: 'منذ سبتمبر 2023',
      text: 'تدريس القيثارة: شرح الأفكار بوضوح، والتحلّي بالصبر، وتنظيم الدروس، والتعامل مع أشخاص مختلفين جدًّا.',
    },
    {
      title: 'متطوّع',
      org: 'الهلال الأحمر التونسي',
      since: 'منذ 2019',
    },
  ],

  skillGroups: [
    {
      name: 'لغات البرمجة',
      core: ['Java', 'TypeScript', 'JavaScript', 'PHP', 'C#', 'Python', 'SQL'],
    },
    {
      name: 'الواجهة الأمامية (Frontend)',
      core: ['React', 'Angular', 'Inertia.js', 'React Query', 'Tailwind CSS', 'HTML5', 'CSS3'],
      also: ['Bootstrap', 'Angular Material'],
    },
    {
      name: 'الخادم (Backend)',
      core: ['Laravel', 'Spring Boot', 'Spring Security', 'ASP.NET Core', 'Entity Framework Core', 'Node.js', 'Express.js', 'تصميم REST API', 'JWT والتحكّم في الوصول حسب الأدوار', 'التقييم القابل للتفسير / محرّكات القواعد'],
      also: ['Symfony', 'Spring Cloud Gateway', 'Eureka'],
    },
    {
      name: 'قواعد البيانات',
      core: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    },
    {
      name: 'الذكاء الاصطناعي والذكاء التوليدي',
      core: [
        'دمج نماذج LLM (Ollama وOpenAI API)',
        'التوليد المعزّز بالاسترجاع (RAG)',
        'هندسة الأوامر (Prompt design)',
        'تعلّم الآلة باستخدام scikit-learn',
        'تقييم النماذج (Precision وRecall وROC)',
      ],
      exploring: ['الذكاء الاصطناعي الوكيلي (Agentic AI)', 'وكلاء الذكاء الاصطناعي واستدعاء الأدوات'],
    },
    {
      name: 'الأدوات وDevOps',
      core: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'GitHub Actions', 'Swagger / OpenAPI', 'Postman'],
      also: ['Linux', 'برمجة Shell'],
    },
    {
      name: 'التصميم والعمل الجماعي',
      core: ['Figma', 'تصميم UI/UX', 'Agile / Scrum', 'PlantUML / UML', 'التوثيق التقني'],
    },
  ],

  projects,
};
