export interface Job {
  id: string
  title: string
  company: string
  description: string
  location: string
  category: string
  externalUrl: string
  postedDate: string
}

export const availableJobs: Job[] = [
  {
    id: '1',
    title: 'Junior Logistikplanerare',
    company: 'Coop Logistik',
    description:
      'Vi söker en junior logistikplanerare som vill vara med och optimera våra logistikflöden. Du får arbeta med moderna verktyg och tillsammans med ett erfaret team.',
    location: 'Stockholm',
    category: 'Logistik',
    externalUrl: 'https://example.com/jobs/1',
    postedDate: '2024-12-15',
  },
  {
    id: '2',
    title: 'Produktionstekniker',
    company: 'Volvo',
    description:
      'Har du teknisk bakgrund och vill vara med i världsledande fordonstillverkning? Som produktionstekniker får du arbeta med automatisering och processutveckling.',
    location: 'Göteborg',
    category: 'Teknik',
    externalUrl: 'https://example.com/jobs/2',
    postedDate: '2024-12-14',
  },
  {
    id: '3',
    title: 'Supply Chain Trainee',
    company: 'Coop Logistik',
    description:
      'Vår trainee-program ger dig möjlighet att lära dig supply chain management från grunden. Du roterar mellan olika avdelningar och får bred erfarenhet.',
    location: 'Göteborg',
    category: 'Trainee',
    externalUrl: 'https://example.com/jobs/3',
    postedDate: '2024-12-13',
  },
  {
    id: '4',
    title: 'Junior Software Developer',
    company: 'Volvo',
    description:
      'Bli en del av vårt digitala team som utvecklar framtidens fordon. Du får arbeta med moderna teknologier inom embedded systems och mjukvaruarkitektur.',
    location: 'Stockholm',
    category: 'IT',
    externalUrl: 'https://example.com/jobs/4',
    postedDate: '2024-12-12',
  },
  {
    id: '5',
    title: 'Lagerkoordinator',
    company: 'Coop Logistik',
    description:
      'Som lagerkoordinator ansvarar du för att säkerställa effektiv hantering av varuflöden. Vi söker dig som är strukturerad och gillar att arbeta i högt tempo.',
    location: 'Malmö',
    category: 'Logistik',
    externalUrl: 'https://example.com/jobs/5',
    postedDate: '2024-12-11',
  },
  {
    id: '6',
    title: 'Quality Engineer',
    company: 'Volvo',
    description:
      'Vi söker en quality engineer som vill säkerställa högsta kvalitet i vår produktion. Du arbetar med kvalitetssäkring, testning och kontinuerlig förbättring.',
    location: 'Göteborg',
    category: 'Kvalitet',
    externalUrl: 'https://example.com/jobs/6',
    postedDate: '2024-12-10',
  },
  {
    id: '7',
    title: 'Transportplanerare',
    company: 'Coop Logistik',
    description:
      'Planera och optimera våra transportrutter för att säkerställa leveranser i tid. Du får arbeta med moderna planeringsverktyg och vara en viktig länk i kedjan.',
    location: 'Stockholm',
    category: 'Logistik',
    externalUrl: 'https://example.com/jobs/7',
    postedDate: '2024-12-09',
  },
  {
    id: '8',
    title: 'Data Analyst',
    company: 'Volvo',
    description:
      'Som data analyst får du arbeta med stora datamängder och hjälpa oss att fatta datadrivna beslut. Du analyserar produktionsdata och identifierar förbättringsområden.',
    location: 'Stockholm',
    category: 'IT',
    externalUrl: 'https://example.com/jobs/8',
    postedDate: '2024-12-08',
  },
  {
    id: '9',
    title: 'Inköpsassistent',
    company: 'Coop Logistik',
    description:
      'Vi söker en inköpsassistent som vill lära sig mer om strategiskt inköp. Du får arbeta med leverantörskontakter, prissättning och beställningar.',
    location: 'Göteborg',
    category: 'Inköp',
    externalUrl: 'https://example.com/jobs/9',
    postedDate: '2024-12-07',
  },
  {
    id: '10',
    title: 'Junior Product Manager',
    company: 'Klarna',
    description:
      'Vill du vara med och forma framtidens betalningslösningar? Som junior product manager får du arbeta med användarupplevelse, dataanalys och produktutveckling i ett innovativt team.',
    location: 'Stockholm',
    category: 'Produkt',
    externalUrl: 'https://example.com/jobs/10',
    postedDate: '2024-12-06',
  },
  {
    id: '11',
    title: 'Frontend Developer',
    company: 'Klarna',
    description:
      'Bli en del av vårt tech-team som bygger snabba och användarvänliga betalningslösningar. Du arbetar med React, TypeScript och moderna frontend-verktyg.',
    location: 'Stockholm',
    category: 'IT',
    externalUrl: 'https://example.com/jobs/11',
    postedDate: '2024-12-05',
  },
  {
    id: '12',
    title: 'UX Designer',
    company: 'Klarna',
    description:
      'Som UX designer får du möjlighet att förbättra användarupplevelsen för miljoner kunder. Du arbetar med användartester, prototyper och designsystem.',
    location: 'Stockholm',
    category: 'Design',
    externalUrl: 'https://example.com/jobs/12',
    postedDate: '2024-12-04',
  },
  {
    id: '13',
    title: 'Säkerhetsingenjör',
    company: 'Autoliv',
    description:
      'Vi utvecklar säkerhetssystem för fordon över hela världen. Som säkerhetsingenjör får du arbeta med krocktester, sensorsystem och säkerhetsstandarder.',
    location: 'Vårgårda',
    category: 'Säkerhet',
    externalUrl: 'https://example.com/jobs/13',
    postedDate: '2024-12-03',
  },
  {
    id: '14',
    title: 'Embedded Software Engineer',
    company: 'Autoliv',
    description:
      'Utveckla inbyggda system för avancerade säkerhetslösningar. Du arbetar med C/C++, realtidssystem och hårdvarunära programmering.',
    location: 'Vårgårda',
    category: 'IT',
    externalUrl: 'https://example.com/jobs/14',
    postedDate: '2024-12-02',
  },
  {
    id: '15',
    title: 'Testingenjör',
    company: 'Autoliv',
    description:
      'Säkerställ kvaliteten på våra säkerhetssystem genom omfattande testning. Du arbetar med automatiserade tester, simuleringar och kvalitetssäkring.',
    location: 'Vårgårda',
    category: 'Kvalitet',
    externalUrl: 'https://example.com/jobs/15',
    postedDate: '2024-12-01',
  },
  {
    id: '16',
    title: 'Riskanalytiker',
    company: 'Skandia',
    description:
      'Analysera och hantera finansiella risker inom försäkringsbranschen. Du får arbeta med dataanalys, riskmodellering och regulatoriska krav.',
    location: 'Stockholm',
    category: 'Finans',
    externalUrl: 'https://example.com/jobs/16',
    postedDate: '2024-11-30',
  },
  {
    id: '17',
    title: 'Digital Marknadsförare',
    company: 'Skandia',
    description:
      'Driv digital marknadsföring och kundkommunikation. Du arbetar med kampanjer, SEO, sociala medier och analys av marknadsdata.',
    location: 'Stockholm',
    category: 'Marknadsföring',
    externalUrl: 'https://example.com/jobs/17',
    postedDate: '2024-11-29',
  },
  {
    id: '18',
    title: 'IT Support Specialist',
    company: 'Skandia',
    description:
      'Stöd våra användare med tekniska frågor och IT-lösningar. Du arbetar med helpdesk, systemadministration och användarutbildning.',
    location: 'Göteborg',
    category: 'IT',
    externalUrl: 'https://example.com/jobs/18',
    postedDate: '2024-11-28',
  },
]
