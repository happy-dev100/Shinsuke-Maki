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
  {
    slug: 'saas-analytics-platform',
    title: 'SaaS Analytics Platform',
    description: {
      en: 'A real-time analytics dashboard for e-commerce businesses, processing over 1M events per day with sub-second query performance.',
      ja: 'ECビジネス向けのリアルタイム分析ダッシュボード。1日100万件以上のイベントを処理し、サブ秒のクエリパフォーマンスを実現。',
    },
    overview: {
      en: 'This platform was built to help e-commerce businesses make data-driven decisions in real-time. The system ingests clickstream events, processes them through a pipeline, and surfaces insights through an intuitive dashboard. Key features include funnel analysis, cohort tracking, A/B test results, and customizable reports.',
      ja: 'ECビジネスがリアルタイムでデータドリブンな意思決定を行えるよう構築したプラットフォームです。クリックストリームイベントを取り込み、パイプラインで処理し、直感的なダッシュボードでインサイトを提供します。ファネル分析、コホートトラッキング、A/Bテスト結果、カスタマイズ可能なレポートなどの機能を備えています。',
    },
    challenges: {
      en: 'The main challenge was achieving real-time performance at scale. We solved this by implementing a write-optimized TimescaleDB schema, using materialized views for common queries, and adding Redis for hot data caching. This reduced average dashboard load time from 8 seconds to under 400ms.',
      ja: 'スケールでのリアルタイムパフォーマンスの達成が主な課題でした。書き込み最適化されたTimescaleDBスキーマ、よく使うクエリへのマテリアライズドビュー、ホットデータのRedisキャッシュを実装することで解決。ダッシュボードの平均読み込み時間を8秒から400ms以下に短縮しました。',
    },
    duration: { en: 'January 2022 – August 2022', ja: '2022年1月〜2022年8月' },
    teamSize: { en: '5 engineers (2 frontend, 2 backend, 1 data engineer)', ja: '5名（フロントエンド2名、バックエンド2名、データエンジニア1名）' },
    myRole: {
      en: 'Led frontend development and co-designed the event ingestion pipeline. Built the dashboard UI with React, implemented the charting layer using D3.js, and optimized TimescaleDB queries for real-time performance.',
      ja: 'フロントエンド開発をリードし、イベント取り込みパイプラインの共同設計を担当。ReactでダッシュボードUIを構築し、D3.jsを用いたチャートレイヤーを実装。リアルタイムパフォーマンスのためのTimescaleDBクエリ最適化も行いました。',
    },
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'TimescaleDB', 'Redis', 'Docker', 'AWS'],
    github: 'https://github.com/shinsuke-maki/saas-analytics',
    demo: 'https://analytics-demo.example.com',
    featured: true,
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description: {
      en: 'A collaborative project management tool with real-time updates, built for teams of up to 100 members.',
      ja: '最大100名のチーム向けに構築された、リアルタイム更新機能付きのコラボレーティブなプロジェクト管理ツール。',
    },
    overview: {
      en: 'A full-featured task management application inspired by tools like Linear and Jira. Teams can create projects, assign tasks, set priorities and deadlines, and track progress through Kanban and list views. Real-time collaboration is powered by WebSockets.',
      ja: 'LinearやJiraからインスピレーションを得た本格的なタスク管理アプリケーション。チームはプロジェクト作成、タスクの割り当て、優先度や期限の設定、カンバン・リストビューでの進捗追跡が可能。リアルタイムコラボレーションはWebSocketで実現。',
    },
    challenges: {
      en: 'Implementing real-time collaboration without conflicts required careful design. We used optimistic UI updates on the client side and an event-sourcing pattern on the backend to ensure consistency. WebSocket reconnection with state reconciliation was particularly tricky to implement correctly.',
      ja: '競合なしのリアルタイムコラボレーション実装には慎重な設計が必要でした。クライアント側のオプティミスティックUI更新とバックエンドのイベントソーシングパターンで一貫性を確保。WebSocket再接続と状態の調整の実装が特に複雑でした。',
    },
    duration: { en: 'April 2021 – September 2021', ja: '2021年4月〜2021年9月' },
    teamSize: { en: '4 engineers (2 frontend, 2 backend)', ja: '4名（フロントエンド2名、バックエンド2名）' },
    myRole: {
      en: 'Designed the GraphQL schema and implemented real-time subscriptions via WebSocket. Built the Kanban board UI and drag-and-drop interactions. Also responsible for the overall system architecture and database design.',
      ja: 'GraphQLスキーマの設計とWebSocketによるリアルタイムサブスクリプションの実装を担当。カンバンボードUIとドラッグ&ドロップのインタラクションを構築。システム全体のアーキテクチャとデータベース設計も担当しました。',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'Prisma', 'Socket.io', 'Redis'],
    github: 'https://github.com/shinsuke-maki/task-manager',
    demo: 'https://tasks-demo.example.com',
    featured: true,
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: {
      en: 'A headless e-commerce platform with custom CMS, Stripe integration, and multi-currency support.',
      ja: 'カスタムCMS、Stripe連携、多通貨対応を備えたヘッドレスECプラットフォーム。',
    },
    overview: {
      en: 'A production-ready headless e-commerce solution built for a Japanese retail client. The system handles product catalog management, inventory tracking, order processing, and customer management. Supports multiple payment methods including credit cards and PayPay.',
      ja: '日本の小売クライアント向けに構築された本番環境対応のヘッドレスECソリューション。商品カタログ管理、在庫追跡、注文処理、顧客管理を処理。クレジットカードとPayPayを含む複数の決済方法に対応。',
    },
    challenges: {
      en: 'Handling concurrent inventory updates during flash sales was the biggest challenge. We implemented distributed locking with Redis to prevent overselling, and used database transactions to ensure atomicity of stock decrement and order creation operations.',
      ja: 'フラッシュセール中の同時在庫更新の処理が最大の課題でした。Redisの分散ロックで在庫超過を防止し、在庫減算と注文作成操作の原子性を確保するためにデータベーストランザクションを使用しました。',
    },
    duration: { en: 'June 2020 – October 2020', ja: '2020年6月〜2020年10月' },
    teamSize: { en: '3 engineers (1 frontend, 1 backend, 1 full-stack)', ja: '3名（フロントエンド1名、バックエンド1名、フルスタック1名）' },
    myRole: {
      en: 'Sole full-stack engineer responsible for the entire application. Designed the data model, built the REST API, implemented Stripe payment flows, and developed the storefront with Next.js. Also handled Vercel deployment and CI/CD pipeline setup.',
      ja: 'アプリケーション全体を担当した唯一のフルスタックエンジニア。データモデル設計、REST API構築、Stripe決済フロー実装、Next.jsを使ったストアフロント開発を担当。VercelへのデプロイおよびCI/CDパイプラインの構築も行いました。',
    },
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Vercel'],
    github: 'https://github.com/shinsuke-maki/ecommerce',
    featured: true,
  },
  {
    slug: 'developer-portfolio',
    title: 'Developer Portfolio',
    description: {
      en: 'This very portfolio site — built with Next.js, Tailwind CSS, and next-intl for bilingual (JP/EN) support.',
      ja: 'このポートフォリオサイト自体。Next.js、Tailwind CSS、next-intlで日英バイリンガル対応。',
    },
    overview: {
      en: 'A fast, accessible, and fully static portfolio site with bilingual support. All content is managed through TypeScript data files and MDX blog posts — no CMS or database required.',
      ja: '高速でアクセシブルな完全静的ポートフォリオサイト。バイリンガル対応。コンテンツはTypeScriptデータファイルとMDXブログ記事で管理。CMSやDBは不要。',
    },
    challenges: {
      en: 'Building a truly seamless bilingual experience required careful thought about routing, state management, and content structure. next-intl provided an excellent foundation, and structuring content as typed TypeScript objects made it easy to maintain consistency across languages.',
      ja: 'シームレスなバイリンガル体験の構築には、ルーティング、状態管理、コンテンツ構造について慎重に検討が必要でした。next-intlが優れた基盤を提供し、型付きTypeScriptオブジェクトとしてコンテンツを構造化することで言語間の一貫性を維持しやすくなりました。',
    },
    duration: { en: 'January 2024 – January 2024', ja: '2024年1月〜2024年1月' },
    teamSize: { en: 'Solo project', ja: '個人開発' },
    myRole: {
      en: 'Designed and built the entire site solo. Handled all aspects including UI/UX design, bilingual content structure, animation system, and Vercel deployment.',
      ja: 'サイト全体を一人で設計・構築。UI/UXデザイン、バイリンガルコンテンツ構造、アニメーションシステム、Vercelへのデプロイまですべてを担当しました。',
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-intl', 'MDX', 'Resend', 'Vercel'],
    github: 'https://github.com/shinsuke-maki/portfolio',
    demo: '/',
    featured: false,
  },
  {
    slug: 'realtime-chat',
    title: 'Real-Time Chat App',
    description: {
      en: 'A scalable real-time messaging application supporting rooms, direct messages, file sharing, and emoji reactions.',
      ja: 'ルーム、ダイレクトメッセージ、ファイル共有、絵文字リアクションをサポートするスケーラブルなリアルタイムメッセージングアプリ。',
    },
    overview: {
      en: 'A Slack-inspired messaging platform built to demonstrate real-time architecture at scale. The system handles thousands of concurrent connections using Socket.io with Redis pub/sub for cross-server message distribution.',
      ja: 'スケールでのリアルタイムアーキテクチャを実証するために構築したSlackインスパイアのメッセージングプラットフォーム。Redisのpub/subを使ったSocket.ioで、サーバー間メッセージ配信を行いながら数千の同時接続を処理。',
    },
    challenges: {
      en: 'Scaling WebSocket connections across multiple server instances required a pub/sub architecture. We used Redis as the message broker between Socket.io instances, which allowed horizontal scaling without message loss.',
      ja: '複数のサーバーインスタンス間でのWebSocket接続のスケーリングにはpub/subアーキテクチャが必要でした。Socket.ioインスタンス間のメッセージブローカーとしてRedisを使用し、メッセージ損失なしの水平スケーリングを実現しました。',
    },
    duration: { en: 'September 2019 – November 2019', ja: '2019年9月〜2019年11月' },
    teamSize: { en: '2 engineers (1 frontend, 1 backend)', ja: '2名（フロントエンド1名、バックエンド1名）' },
    myRole: {
      en: 'Responsible for the full backend including WebSocket server architecture, Redis pub/sub messaging layer, MongoDB schema design, and AWS EC2 deployment. Also contributed to the React frontend for real-time UI updates.',
      ja: 'WebSocketサーバーアーキテクチャ、Redis pub/subメッセージングレイヤー、MongoDBスキーマ設計、AWS EC2へのデプロイなどバックエンド全体を担当。リアルタイムUI更新のReactフロントエンドにも貢献しました。',
    },
    technologies: ['React', 'Node.js', 'Socket.io', 'Redis', 'MongoDB', 'Express', 'AWS EC2'],
    github: 'https://github.com/shinsuke-maki/realtime-chat',
    featured: false,
  },
];
