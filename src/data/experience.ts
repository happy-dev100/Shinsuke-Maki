export interface Experience {
  company: string;
  companyUrl?: string;
  logo?: string;
  role: { en: string; ja: string };
  period: { start: string; end: string | null };
  description: { en: string; ja: string };
  responsibilities: { en: string[]; ja: string[] };
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Freelance',
    role: {
      en: 'Freelance Full-Stack Engineer & AI Specialist',
      ja: 'フリーランス フルスタックエンジニア & AIスペシャリスト',
    },
    period: { start: '2025-10', end: null },
    description: {
      en: 'Independent freelance engineer specializing in full-stack web development and AI integration. Working with clients across Japan and internationally to deliver high-impact solutions solo — with the productivity of a full team.',
      ja: 'フルスタックWeb開発とAI統合を専門とするフリーランスエンジニア。国内外のクライアントと直接連携し、チームに匹敵する生産性で高品質なソリューションを一人で提供。',
    },
    responsibilities: {
      en: [
        'Designing and delivering end-to-end web applications independently for clients in Japan and overseas',
        'Integrating LLM-based features (OpenAI API, RAG pipelines, prompt engineering) into production products',
        'Building AI-powered automation tools that reduce client operational costs',
        'Collaborating asynchronously with overseas developers (Vietnam, India) on cross-border projects',
        'Consulting on AI adoption strategy and technical architecture for early-stage startups',
      ],
      ja: [
        '国内外クライアント向けにエンドツーエンドのWebアプリケーションを単独で設計・納品',
        'LLMベースの機能（OpenAI API・RAGパイプライン・プロンプトエンジニアリング）のプロダクト組み込み',
        'クライアントの業務コスト削減を実現するAI自動化ツールの構築',
        'ベトナム・インドの海外開発者と非同期でクロスボーダープロジェクトを推進',
        'スタートアップ向けのAI導入戦略・技術アーキテクチャのコンサルティング',
      ],
    },
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'LangChain', 'RAG', 'Python', 'Vercel', 'AWS'],
  },
  {
    company: '株式会社創人',
    role: {
      en: 'Lead Full-Stack Engineer',
      ja: 'リードフルスタックエンジニア',
    },
    period: { start: '2022-04', end: '2025-09' },
    description: {
      en: 'Lead engineer responsible for frontend architecture, API design, and mentoring junior engineers on a large-scale SaaS product.',
      ja: '大規模SaaSプロダクトのリードエンジニアとして、フロントエンドアーキテクチャの設計、API開発、ジュニアエンジニアのメンタリングを担当。',
    },
    responsibilities: {
      en: [
        'Led migration from a legacy jQuery codebase to a modern React/Next.js architecture',
        'Designed and implemented the unified booking aggregation API integrating 130+ airline and 640,000+ hotel inventory sources',
        'Reduced search response time from 6 seconds to under 2 seconds through async aggregation and caching strategies',
        'Collaborated with overseas developers in Vietnam on feature development and code reviews',
        'Mentored 3 junior engineers and established frontend coding standards across the team',
      ],
      ja: [
        'レガシーjQueryコードベースをReact/Next.jsへモダン化する移行をリード',
        '130社以上の航空会社・64万軒以上のホテル在庫を統合する予約集約APIの設計・実装',
        '非同期集約とキャッシュ戦略により検索レスポンスを6秒から2秒以内に短縮',
        'ベトナムの海外開発者と連携して機能開発・コードレビューを推進',
        '3名のジュニアエンジニアをメンタリングし、フロントエンドのコーディング標準を整備',
      ],
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    company: '株式会社創人',
    role: {
      en: 'Senior Full-Stack Engineer',
      ja: 'シニアフルスタックエンジニア',
    },
    period: { start: '2019-07', end: '2022-03' },
    description: {
      en: 'Senior engineer at a Nara-based web development firm. Led full-stack development for a wide range of client projects — from corporate sites to large-scale EC and business systems — while beginning to explore AI-assisted development.',
      ja: '奈良市内のWeb制作会社でシニアエンジニアとして活躍。コーポレートサイトから大規模EC・業務システムまで幅広いクライアント案件をフルスタックでリード。この頃からAI活用の探索も開始。',
    },
    responsibilities: {
      en: [
        'Led development of 10+ web applications from requirements gathering to production deployment',
        'Established code review processes and internal documentation standards, improving team consistency',
        'Collaborated with a remote developer in India on an international EC platform project',
        'Built a reusable React component library adopted across all client projects',
        'Integrated Stripe and PayPay payment gateways into multiple e-commerce platforms',
      ],
      ja: [
        '要件定義から本番デプロイまで10件以上のWebアプリケーション開発をリード',
        'コードレビュー体制と社内ドキュメント標準を整備し、チームの品質と一貫性を向上',
        'インドのリモート開発者と連携して国際向けECプラットフォームを開発',
        'すべてのクライアント案件で活用された再利用可能なReactコンポーネントライブラリを構築',
        '複数のECプラットフォームへStripeおよびPayPay決済ゲートウェイを統合',
      ],
    },
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Stripe', 'Vue.js'],
  },
  {
    company: '株式会社創人',
    role: {
      en: 'Web Developer',
      ja: 'Webデベロッパー',
    },
    period: { start: '2017-03', end: '2019-06' },
    description: {
      en: 'Joined as a junior developer at a Nara-based web development company. Built practical skills across the full stack through hands-on delivery of corporate websites and business applications for local and regional clients.',
      ja: '奈良市内のWeb制作会社にジュニアとして入社。地域・全国のクライアント向けにコーポレートサイトや業務アプリを実際に納品しながら、フルスタックのスキルを実践的に習得。',
    },
    responsibilities: {
      en: [
        'Built and maintained corporate websites and business systems for 30+ clients using PHP, JavaScript, and MySQL',
        'Independently delivered a complete CMS-based website from design to launch within 3 weeks',
        'Transitioned self-taught skills to professional React and Node.js development',
        'Supported senior engineers in system design discussions and gradually took on larger responsibilities',
      ],
      ja: [
        'PHPとJavaScript、MySQLを使って30社以上のクライアントのサイト・業務システムを構築・保守',
        'CMSベースのWebサイトをデザインからリリースまで3週間で単独納品',
        '独学のスキルを活かしてReact・Node.jsによるプロ水準の開発へと移行',
        'シニアエンジニアのシステム設計議論をサポートしながら段階的に担当範囲を拡大',
      ],
    },
    technologies: ['JavaScript', 'PHP', 'jQuery', 'MySQL', 'React', 'Node.js', 'HTML', 'CSS'],
  },
];
