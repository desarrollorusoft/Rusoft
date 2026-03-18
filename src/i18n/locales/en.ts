export default {
  nav: {
    home: 'Home',
    about: 'Our Company',
    contact: 'Contact',
    careers: 'Work with us',
  },
  footer: {
    location_label: 'Location',
    location_value: 'Gualeguaychú 2011, CABA, Argentina',
    email_label: 'Email',
    copyright: '© 2025 Rusoft. All rights reserved.',
  },
  pages: {
    home: {
      hero: {
        headline: 'We build the software your business needs to grow.',
        subheadline: 'We design and build custom web and mobile apps: intuitive, powerful, and made for success. Ready to take off?',
        cta: "Let's talk about your idea",
        cta_services: 'Our Services',
      },
      process: {
        title: 'Our Process',
        subtitle: 'A simple, iterative, measurable framework: from discovery to final delivery.',
        steps: [
          {
            title: 'Discovery & Analysis',
            text: 'We perform an exhaustive analysis of your needs, business objectives, and technical requirements. We document every feature and establish the project scope.',
          },
          {
            title: 'Planning & Design',
            text: 'We build the system architecture, design the user experience (UX/UI), and plan development sprints. We define the technologies and methodologies to use.',
          },
          {
            title: 'Agile Development',
            text: 'We implement the software following agile methodologies, with incremental releases and continuous feedback. We maintain constant communication throughout the process.',
          },
          {
            title: 'Testing & QA',
            text: 'We run thorough tests: unit, integration, functional, and performance. We guarantee the quality and stability of the software before delivery.',
          },
          {
            title: 'Deployment',
            text: 'We deploy the software to production, configure servers, and perform data migration if needed. We train your team.',
          },
        ],
        svg: {
          discovery: 'Discovery',
          design: 'Design',
          development: 'Development',
          testing: 'Testing',
          delivery: 'Final Delivery',
        },
      },
      services: {
        title: 'What We Do',
        items: {
          tax: {
            name: 'Tax Self-Management Systems',
            summary: 'Solutions to simplify and automate your fiscal and accounting obligations.',
          },
          invoicing: {
            name: 'Electronic Invoicing Systems',
            summary: 'We implement efficient and secure invoicing systems, compliant with current regulations.',
          },
          accounts: {
            name: 'Accounts Receivable / Payable Systems',
            summary: 'Advanced management of customer and supplier balances for precise financial control.',
          },
          stock: {
            name: 'Inventory Management Systems',
            summary: 'Optimize your inventory, reduce losses, and improve the efficiency of your supply chain.',
          },
          auditing: {
            name: 'Inspection Management',
            summary: 'Specialized systems to manage and automate inspection and audit processes.',
          },
          ai: {
            name: 'Artificial Intelligence Solutions',
            summary: 'We implement AI to automate processes, enable predictive analytics, and optimize business decisions.',
          },
          apis: {
            name: 'API & Microservices Development',
            summary: 'Scalable and modular architectures that enable efficient integration between systems and services.',
          },
          migration: {
            name: 'System Migration & Modernization',
            summary: 'We upgrade legacy systems to modern technologies, improving performance and maintainability.',
          },
          consulting: {
            name: 'Digital Transformation Consulting',
            summary: 'We guide companies through their digitalization journey with tailored strategies.',
          },
          bi: {
            name: 'Business Intelligence Systems',
            summary: 'Smart dashboards and reports that turn data into actionable insights for your business.',
          },
          mobile: {
            name: 'Mobile Application Development',
            summary: 'Native and hybrid apps for iOS and Android, designed to deliver the best user experience.',
          },
          process_audit: {
            name: 'Process Audit & Optimization',
            summary: 'We analyze and optimize your business processes to maximize efficiency and reduce operational costs.',
          },
        },
      },
      ai_section: {
        badge: 'Trending',
        title: 'Artificial Intelligence applied to your business',
        subtitle: 'We integrate AI into your processes to automate, predict, and scale. It\'s not the future — it\'s now.',
        cases: {
          automation: {
            title: 'Intelligent Automation',
            text: 'Automatic processing of documents, emails, and data with language models. Reduce manual tasks and human errors.',
          },
          chatbots: {
            title: 'Chatbots & Assistants',
            text: 'Conversational assistants integrated with your systems that answer questions, manage processes, and serve customers 24/7.',
          },
          analytics: {
            title: 'Predictive Analytics',
            text: 'Models that anticipate trends, detect anomalies, and optimize decisions based on your historical data.',
          },
          integration: {
            title: 'LLM Integration',
            text: 'We connect OpenAI, Claude, and other models to your workflows to boost your team\'s productivity.',
          },
        },
        cta: 'I want to integrate AI',
      },
      tech: {
        title: 'Technologies We Master',
      },
      stats: {
        label: 'By the numbers',
        clients: { value: '30+', label: 'Clients' },
        projects: { value: '50+', label: 'Projects delivered' },
        years: { value: '15+', label: 'Years of experience' },
        services: { value: '12', label: 'Services' },
      },
      testimonials: {
        label: 'Testimonials',
        title: 'What our clients say',
        items: [
          {
            quote: 'Rusoft demonstrated a deep understanding of our users\' needs, translating them into an interface that is both powerful and a delight to use.',
            author: 'Sofía García',
            role: 'Product Director, InnovaTech',
          },
          {
            quote: 'The self-management system they developed for us has been a game changer. The efficiency gains and error reduction are remarkable. An incredibly professional team!',
            author: 'Juan Pérez',
            role: 'Finance Manager, Logística Total',
          },
          {
            quote: 'From initial design to final deployment, the Rusoft team was collaborative and transparent. Their consulting helped us better define our product and launch it successfully.',
            author: 'Ana Rodríguez',
            role: 'CEO, EmprendeDigital',
          },
        ],
      },
      cta: {
        label: 'Next step',
        title: 'Got a project in mind?',
        subtitle: 'Tell us your idea and we\'ll get back to you with a proposal as soon as possible.',
        button: 'Let\'s talk',
      },
      clients: {
        title: 'Our Clients',
        subtitle: 'Companies that trust us',
        more_title: 'More clients',
        logo_alt: 'Logo of {name}',
        featured: {
          municipalidad: {
            highlights: [
              'Tax self-management system for taxpayers',
              'Inspection and debt management modules',
              'Collection tracking dashboards and reports',
              'Mobile app for taxpayers',
              'Integrated digital procedure management platform (workflow, notifications, tracking)',
              'Operational back-office with roles, audit, and reports',
              'Help desk, monitoring, and evolutionary maintenance',
            ],
          },
          enod: {
            highlights: [
              'Full traceability of tests and technical reports',
              'Daily log management and certificate issuance',
              'Approval workflow and audit',
              'Inventory management and real-time stock control',
              'Attendance tracking with validation and reports',
              'Automatic alerts and operational notifications',
              'Offline operation with automatic synchronization',
              'Ongoing technical support',
            ],
          },
          pastoriza: {
            highlights: [
              'Automatic weighing integrated with truck scale',
              'Vehicle movement management and traceability',
              'Alerts for weight deviations and anomalies',
              'Real-time operational reports',
            ],
          },
          demarco: {
            highlights: [
              'Stock and accounts receivable management',
              'Electronic invoicing and sales control',
              'Purchase and turnover indicators',
              'Price lists and discount policies',
              'Delivery note control and delivery traceability',
              'AFIP integration for issuance and validation',
              'Ongoing technical support',
            ],
          },
        },
      },
    },
    nosotros: {
      title: 'Our Company',
      intro: 'At <span class="brand-text">Rusoft</span> we believe technology is not an end in itself, but a real business enabler. We design and develop software that combines <span class="highlight-text">technical quality</span>, focus on the <span class="highlight-text">user</span>, and <span class="highlight-text">measurable</span> results. Our commitment is that every release makes a tangible difference.',
      history_title: 'Our history',
      history: "Rusoft was born with a simple conviction: to create software solutions that people enjoy using and that solve concrete problems. We grew alongside our clients, supporting their digitalization, process optimization, and expansion challenges. Along the way we consolidated a working style based on transparency, continuous improvement, and closeness: we don't believe in \"black box\" projects, but in integrating teams and sharing progress frequently.",
      how_we_work_title: 'How we work',
      how_we_work: 'Our methodology combines agile practices with solid product management. We start by understanding context and objectives, talk to users, map flows, and identify opportunities. Then we prototype to validate early and build in short cycles, delivering incremental value with technical quality. We bet on maintainable architecture, automated tests, and monitoring that shows what really matters.',
      quote: 'We build software that feels good to use and delivers value from the very first release. Our standard is that every delivery makes a real difference for the business.',
      what_we_do_title: 'What we do',
      what_we_do: 'We develop custom systems for various sectors: tax self-management, electronic invoicing, stock control, inspection management, and more. We also create web and mobile applications focused on user experience, third-party integrations, and KPI dashboards. Our differentiator is understanding the business process behind each request and measuring impact once in production.',
      team_title: 'Our team',
      team: 'We are a multidisciplinary team of developers, designers, and product specialists. We are united by curiosity, collaboration, and an obsession with details that elevate the experience. We foster honest feedback, clear documentation, and continuous learning. We believe the best innovation comes from open communication, focus, and autonomy to decide.',
      values_title: 'Values that define us',
      values: {
        transparency_title: 'Transparency',
        transparency: 'Full visibility of work, realistic estimates, and open conversations about risks and decisions.',
        quality_title: 'Pragmatic Quality',
        quality: 'Clean code, automated tests, and monitoring, avoiding unnecessary bureaucracy.',
        results_title: 'Results-Oriented',
        results: 'We prioritize what really moves the business needle and measure the impact of each release.',
        empathy_title: 'User Empathy',
        empathy: 'We design for people, not specifications. Usability is a requirement, not an ornament.',
      },
      commitment_title: 'Our commitment',
      commitment: 'Every project is a long-term relationship. We accompany the full cycle: discovery, design, development, deployment, and evolution. If something can be done better, we propose it. If an objective changes, we adapt. And if there are tough decisions, we make them with data and hand in hand with our clients.',
      design_title: 'Design & prototyping',
      design: 'We design with a user focus, validate with high-fidelity prototypes, and deliver continuously. Technical quality and usability guide every release.',
      closing: 'If you are thinking about starting a new product, modernizing systems, or integrating tools, we would love to chat. At <span class="brand-text">Rusoft</span> we combine strategy, design, and technology to bring your ideas to production with quality and speed.',
    },
    contacto: {
      title: 'Contact',
      subtitle: "Write to us and let's talk about your project.",
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone (optional)',
        phone_placeholder: 'E.g.: +1 555 123-4567',
        message: 'Message',
        submit: 'Send',
        sending: 'Sending...',
        success: 'Thank you! We will be in touch soon.',
        error: 'An error occurred. Please try again.',
      },
    },
    cv: {
      title: 'Upload Resume',
      subtitle: "Join our team. Upload your resume and let's talk about available opportunities.",
      form: {
        full_name: 'Full Name',
        email: 'Email',
        cv_file: 'Resume (PDF, DOC, DOCX)',
        submit: 'Send Resume',
        sending: 'Sending...',
        success: 'Thank you! We have received your resume. We will be in touch soon.',
        error: 'An error occurred while sending your resume. Please try again.',
      },
    },
  },
  meta: {
    home: {
      title: 'Rusoft - Custom Software Development & Systems | Software Factory Argentina',
      description: 'Rusoft is a software factory specializing in custom systems development, web applications, mobile apps, and artificial intelligence solutions. Software development services in Argentina.',
      keywords: 'software development, software factory, custom systems, web applications, mobile applications, artificial intelligence, development argentina',
    },
    nosotros: {
      title: 'About Us - Rusoft | Software Development Team',
      description: 'Meet the Rusoft team, specialists in custom software development with years of experience in modern technologies.',
      keywords: 'software development team, programmers argentina, developers, software factory team',
    },
    contacto: {
      title: 'Contact - Rusoft | Request Your Software Quote',
      description: 'Contact Rusoft to request a custom software development quote. Free consultation with no commitment.',
      keywords: 'contact software development, software quote, development consultation, contact rusoft',
    },
    cv: {
      title: 'Careers - Rusoft | Join Our Development Team',
      description: 'Join the Rusoft team. Upload your resume and explore available opportunities.',
      keywords: 'careers developers, programmer jobs argentina, development team jobs',
    },
  },
}
