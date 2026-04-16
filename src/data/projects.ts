export interface Project {
  slug: string;
  title: string;
  description: { en: string; ja: string };
  overview: { en: string; ja: string };
  challenges: { en: string; ja: string };
  duration?: { en: string; ja: string };
  teamSize?: { en: string; ja: string };
  myRole?: { en: string; ja: string };
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'pato',
    title: 'pato（パト）',
    description: {
      en: 'Large-scale redevelopment of pato, Japan\'s leading entertainment matching service connecting executives with top-tier cast members. Serving 500,000+ matches across major cities nationwide.',
      ja: '国内No.1エンタメマッチングサービス「pato」の大規模リニューアル開発。全国主要都市で累計50万回以上のマッチングを実現するプラットフォーム。',
    },
    overview: {
      en: 'pato is a premium entertainment matching platform for executives, featuring two booking systems: PATOCALL (request a cast member to arrive within 30 minutes) and KOPATO (schedule in advance with a preferred cast). The large-scale redevelopment involved a complete overhaul of the matching engine, real-time messaging system, payment flow, and cast management features while maintaining service continuity.',
      ja: 'patoはエグゼクティブ層向けプレミアムエンタメマッチングサービスです。最短30分でキャストを呼べる「PATOCALL」と、事前に日程調整できる「KOPATO」の2つのシステムを搭載。大規模リニューアルではサービス継続を維持しながら、マッチングエンジン・リアルタイムメッセージング・決済フロー・キャスト管理機能の全面刷新を実施しました。',
    },
    challenges: {
      en: 'The biggest challenge was executing a large-scale architectural overhaul without service downtime, as the platform operates 24/7. We employed a strangler fig migration pattern, incrementally replacing legacy components while maintaining backward compatibility. Ensuring real-time messaging reliability across thousands of concurrent users also required careful WebSocket architecture design.',
      ja: '24時間365日稼働するサービスをダウンタイムなしで大規模刷新することが最大の課題でした。ストラングラーフィグパターンを採用し、後方互換性を保ちながらレガシーコンポーネントを段階的に置き換えていきました。数千の同時接続ユーザーを抱えるリアルタイムメッセージングの信頼性確保にも、WebSocketアーキテクチャの慎重な設計が必要でした。',
    },
    duration: { en: 'February 2020 – March 2021', ja: '2020年2月〜2021年3月' },
    teamSize: { en: '5 engineers', ja: '5名' },
    myRole: {
      en: 'Worked across the full stack in a cross-functional role — contributed to frontend UI development, backend API implementation, real-time messaging features, and QA. Handled diverse tasks across multiple areas of the platform throughout the redevelopment cycle.',
      ja: 'フルスタックにわたるオールラウンドな役割を担当。フロントエンドUI開発、バックエンドAPI実装、リアルタイムメッセージング機能、QAまで幅広く貢献。リニューアル期間を通じてプラットフォームの複数領域にまたがる多様なタスクを担当しました。',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'AWS'],
    demo: 'https://pato.today/u/guest',
    image: '/pato.png',
    featured: true,
  },
  {
    slug: 'pikapaka-btm',
    title: 'ピカパカ出張DX',
    description: {
      en: 'A cloud-based business travel management system handling booking, approval workflows, and consolidated invoicing for 3,500+ companies across Japan.',
      ja: '国内・海外の出張手配から承認ワークフロー、請求書一括精算まで対応したクラウド型出張管理システム。累計3,500社以上に導入。',
    },
    overview: {
      en: 'ピカパカ出張DX is a SaaS platform that streamlines corporate travel for both employees and administrators. It consolidates booking of domestic/international flights (132 airlines), hotels (640,000 properties), shinkansen, rental cars, and meeting rooms into a single interface. All purchases are billed via invoice, eliminating employee expense reimbursements entirely.',
      ja: 'ピカパカ出張DXは、出張者・管理者双方の業務を効率化するSaaSプラットフォームです。国内外の航空券（132社）、ホテル（64万軒）、新幹線、レンタカー、会議室の手配を一元化。すべて請求書後払いに対応し、立替精算を完全になくします。',
    },
    challenges: {
      en: 'The primary challenge was building a unified booking engine that aggregates inventory from dozens of external APIs (airlines, GDS, hotel chains) while maintaining real-time availability and consistent pricing. We implemented an async aggregation layer with fallback strategies and a caching tier to keep search response times under 2 seconds even under peak load.',
      ja: '最大の課題は、多数の外部API（航空会社、GDS、ホテルチェーン）からリアルタイム在庫・価格を集約する統合予約エンジンの構築でした。非同期集約レイヤーとフォールバック戦略、キャッシュ層を実装し、ピーク時でも検索レスポンスを2秒以内に維持することを実現しました。',
    },
    technologies: ['TypeScript', 'React', 'Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    duration: { en: 'April 2022 – March 2024', ja: '2022年4月〜2024年3月' },
    teamSize: { en: '8 engineers (3 frontend, 3 backend, 2 infrastructure)', ja: '8名（フロントエンド3名、バックエンド3名、インフラ2名）' },
    myRole: {
      en: 'As a full-stack lead engineer, I was responsible for the frontend architecture using React/Next.js, design and implementation of the booking aggregation API, and performance tuning. I also led code reviews, onboarded junior engineers, and drove the migration from a legacy jQuery codebase to a modern React stack.',
      ja: 'フルスタックリードエンジニアとして、React/Next.jsを用いたフロントエンドアーキテクチャの設計・実装、予約集約APIの設計と実装、パフォーマンスチューニングを担当。コードレビューのリードやジュニアエンジニアのオンボーディング、レガシーjQueryコードベースからReactへのモダン化移行も主導しました。',
    },
    demo: 'https://btm.pikapaka.co.jp/',
    image: '/pikapaka.png',
    featured: true,
  },
];
