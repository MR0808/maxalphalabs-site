export type CompanyStatus = 'Alpha' | 'Building' | 'Concept';

export interface Company {
    slug: string;
    name: string;
    category: string;
    description: string;
    status: CompanyStatus;
    hero: string;
    problem: string;
    solution: string;
    features: string[];
    roadmap: { phase: string; description: string }[];
}

export const companies: Company[] = [
    {
        slug: 'hyrelog',
        name: 'HyreLog',
        category: 'Compliance & Audit Logging',
        description:
            'Immutable audit logging infrastructure for modern SaaS platforms.',
        status: 'Alpha',
        hero: 'Immutable audit logging for modern SaaS platforms.',
        problem:
            'SaaS companies need reliable audit trails for compliance, debugging, customer trust and enterprise readiness, but most teams either build fragile internal logs or overpay for broad observability tools.',
        solution:
            'HyreLog provides API-first, tamper-evident audit logging with workspace-level ownership, region-aware data handling, retention controls and exportable evidence packs.',
        features: [
            'Immutable audit events',
            'Hash-chained integrity',
            'Workspace and project structure',
            'API keys and ingestion controls',
            'Exportable compliance evidence',
            'Region-aware architecture'
        ],
        roadmap: [
            {
                phase: 'Now',
                description:
                    'Alpha API with core ingestion and hash-chained event storage.'
            },
            {
                phase: 'Next',
                description:
                    'Workspace management, retention policies and evidence exports.'
            },
            {
                phase: 'Later',
                description:
                    'Enterprise compliance packs and multi-region deployment.'
            }
        ]
    },
    {
        slug: 'storyvue',
        name: 'Storyvue',
        category: 'Career Intelligence & Professional Growth',
        description:
            "Your living career record, automatically capturing achievements, skills and impact before they're forgotten.",
        status: 'Building',
        hero: 'Stop scrambling to remember your impact.',
        problem:
            'Most professionals only update their resume when they need a promotion, performance review or new role. By then, important achievements, project outcomes, leadership examples and measurable impacts have been forgotten, making it difficult to accurately demonstrate their value.',
        solution:
            'Storyvue helps professionals build a living career record through simple ongoing check-ins. It captures achievements, projects, skills and outcomes as they happen, then uses that information to generate evidence-backed resumes, career insights and professional growth opportunities.',
        features: [
            'Weekly career check-ins',
            'Achievement tracking',
            'Skill intelligence and analysis',
            'Career timeline',
            'AI-powered resume generation',
            'Performance review preparation',
            'Interview story generation',
            'Evidence-backed career insights'
        ],
        roadmap: [
            {
                phase: 'Now',
                description:
                    'Career journaling, achievement tracking and AI-assisted resume generation.'
            },
            {
                phase: 'Next',
                description:
                    'Skill mapping, performance review preparation and personalised career insights.'
            },
            {
                phase: 'Later',
                description:
                    'Career coaching, benchmarking, goal tracking and enterprise team development tools.'
            }
        ]
    },
    {
        slug: 'billingly',
        name: 'Billingly',
        category: 'Personal Finance',
        description:
            'Bill tracking, invoice parsing and payment reminders for individuals and small teams.',
        status: 'Building',
        hero: 'A smarter way to track bills before they become problems.',
        problem:
            'Bills arrive across email, PDFs, portals and paper. People forget due dates, miss payments or waste time manually tracking everything.',
        solution:
            'Billingly lets users add bills manually, paste email text, upload PDF invoices, extract key details and receive reminders before payments are due.',
        features: [
            'Bill dashboard',
            'Manual bill creation',
            'Email text parsing',
            'PDF text extraction',
            'Due date reminders',
            'Paid/unpaid tracking'
        ],
        roadmap: [
            {
                phase: 'Now',
                description:
                    'Bill dashboard with manual entry and due date tracking.'
            },
            {
                phase: 'Next',
                description:
                    'Email and PDF parsing to capture bill details automatically.'
            },
            {
                phase: 'Later',
                description:
                    'Smart reminders and shared tracking for small teams.'
            }
        ]
    },
    {
        slug: 'buxmate',
        name: 'Buxmate',
        category: 'Events & Payments',
        description:
            'Private event planning, guest coordination and shared expense tracking.',
        status: 'Building',
        hero: 'Private planning and payments for one-off group events.',
        problem:
            'Bucks parties, hens nights and group events often involve people who do not know each other, scattered communication, unclear RSVPs and awkward money collection.',
        solution:
            'Buxmate gives organisers a private event hub for guests, activities, RSVP tracking, shared costs, payments, updates and memories.',
        features: [
            'Private event pages',
            'Guest invitations',
            'Activity RSVP tracking',
            'Split payments by activity',
            'Shared top-up costs',
            'Comments, photos and updates'
        ],
        roadmap: [
            {
                phase: 'Now',
                description:
                    'Private event pages with guest invitations and RSVPs.'
            },
            {
                phase: 'Next',
                description: 'Activity planning and split payment flows.'
            },
            {
                phase: 'Later',
                description:
                    'Shared memories, comments and post-event coordination.'
            }
        ]
    },
    {
        slug: 'nudgely',
        name: 'Nudgely',
        category: 'Behaviour & Accountability',
        description:
            'Lightweight nudges that help people turn intentions into actions.',
        status: 'Concept',
        hero: 'Small nudges that turn intentions into action.',
        problem:
            'People often know what they want to do, but forget, delay or lose momentum.',
        solution:
            'Nudgely helps users create simple commitments, reminders and accountability loops that keep them moving.',
        features: [
            'Personal nudges',
            'Habit prompts',
            'Lightweight commitments',
            'Accountability reminders',
            'Progress tracking',
            'Behaviour-focused design'
        ],
        roadmap: [
            {
                phase: 'Now',
                description: 'Concept validation and core nudge mechanics.'
            },
            {
                phase: 'Next',
                description: 'Habit prompts and lightweight commitment flows.'
            },
            {
                phase: 'Later',
                description: 'Accountability loops and progress tracking.'
            }
        ]
    }
];

export function getCompanyBySlug(slug: string): Company | undefined {
    return companies.find((company) => company.slug === slug);
}

export function getAllCompanySlugs(): string[] {
    return companies.map((company) => company.slug);
}
