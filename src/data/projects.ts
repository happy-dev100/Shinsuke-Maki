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
    duration: { en: '13 months', ja: '13ヶ月' },
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
    slug: 'reservation-management-system',
    title: '店舗向け予約管理システム',
    description: {
      en: 'A full-stack reservation management web application for retail and service businesses — covering booking, payments, customer management, and an admin dashboard — built from requirements to production.',
      ja: '飲食・美容・施設など店舗向けのWeb予約管理システム。予約受付・オンライン決済・顧客管理・管理者ダッシュボードを一括搭載。要件定義から本番デプロイまで単独で担当。',
    },
    overview: {
      en: 'A SaaS-style reservation platform built for service businesses. Users can register via email or social login, make and manage reservations, and complete payments online. Store owners get a dedicated admin dashboard with reservation management, customer records, and sales reporting. Email notifications handle booking confirmations and reminders automatically.',
      ja: 'サービス業向けのSaaS型予約プラットフォーム。ユーザーはメールまたはSNSログインで登録し、予約・変更・キャンセルをセルフで操作できます。店舗側は管理画面から予約一覧・顧客管理・売上確認を一元管理。予約確認メールとリマインド通知は自動送信に対応しています。',
    },
    challenges: {
      en: 'The core challenge was building a reliable booking engine that prevents double-booking across concurrent requests while keeping the UI responsive. Implementing Stripe\'s webhook-based payment confirmation flow — ensuring payment status and reservation status stay in sync even when network interruptions occur — required careful idempotency handling and state machine design for the reservation lifecycle.',
      ja: '同時リクエストでの二重予約を防ぎながらUIのレスポンスを維持する予約エンジンの設計が最大の課題でした。StripeのWebhookベースの決済確認フローでは、ネットワーク断絶が発生しても決済状態と予約状態が同期されるよう、冪等性の担保と予約ライフサイクルのステートマシン設計を慎重に実装しました。',
    },
    duration: { en: '2 months', ja: '2ヶ月' },
    teamSize: { en: '1 engineer (solo)', ja: '1名（単独）' },
    myRole: {
      en: 'Sole engineer. Handled all phases: requirements definition, system design, frontend and backend implementation, Stripe integration, email notification setup, and production deployment on Vercel.',
      ja: '要件定義・システム設計・フロントエンド・バックエンド実装・Stripe連携・メール通知設定・Vercel本番デプロイまで全工程を単独で担当。',
    },
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'NextAuth.js', 'Resend', 'Vercel', 'Tailwind CSS'],
    featured: false,
  },
  {
    slug: 'moov-pos',
    title: 'MOOV リユース特化型クラウドPOS',
    description: {
      en: 'Feature development and API integration for MOOV, a cloud-based POS system specialized for resale and reuse businesses, with 1,500+ stores nationwide.',
      ja: '全国1,500店舗以上に導入されているリユース特化型クラウドPOSシステム「MOOV」の追加機能開発およびAPI連携を担当。',
    },
    overview: {
      en: 'MOOV is a cloud POS system built exclusively for the reuse and resale industry, covering purchase intake, inventory management, sales, and EC integration in a single platform. The project involved implementing additional features and external API integrations to extend the system\'s capabilities — including data linkage with external resale platforms and enhancements to the purchase intake and inventory tracking workflows.',
      ja: 'MOOVはリユース・リサイクル業に特化したクラウドPOSシステムで、買取・在庫管理・販売・EC連動を一元化するプラットフォームです。外部リユースプラットフォームとのデータ連携、買取受付フローの機能拡張、在庫トラッキングの改善など、追加機能開発とAPI連携の実装を担当しました。',
    },
    challenges: {
      en: 'The primary challenge was integrating with multiple external data sources — resale price APIs, EC platform inventory feeds, and payment terminal protocols — while preserving the stability of an already-running production system used daily across hundreds of stores. Careful API versioning and backward-compatible changes were essential throughout.',
      ja: '稼働中の本番システムの安定性を保ちながら、相場データAPI・ECプラットフォーム在庫フィード・決済端末プロトコルなど複数の外部データソースとの連携を実装することが最大の課題でした。数百店舗が日常的に使用するシステムへの変更のため、APIバージョン管理と後方互換性の確保を徹底しました。',
    },
    duration: { en: '4 months', ja: '4ヶ月' },
    teamSize: { en: '1 engineer (solo)', ja: '1名（単独）' },
    myRole: {
      en: 'Sole engineer responsible for requirements gathering, API design and implementation, integration testing, and production deployment of new features.',
      ja: '要件定義・API設計と実装・結合テスト・本番デプロイまで単独で担当。',
    },
    technologies: ['TypeScript', 'React', 'Node.js', 'REST API', 'PostgreSQL', 'Docker'],
    demo: 'http://moov.jp/',
    image: '/moov.png',
    featured: false,
  },
  {
    slug: 'purchase-management-system',
    title: '買取・在庫・売上管理システム',
    description: {
      en: 'An integrated web system for a recycling/resale business covering the full operational cycle — purchase intake, inventory tracking, and sales analytics — built from requirements to release.',
      ja: 'リユース事業者向けの統合業務システム。買取受付から在庫管理、売上分析ダッシュボードまでの業務フローをワンストップで管理。要件定義からリリースまで一貫して担当。',
    },
    overview: {
      en: 'A custom-built integrated management system designed to replace fragmented spreadsheet-based workflows. The system enables staff to process purchase intake through a streamlined UI, tracks inventory in real time across the floor, and provides management with a dashboard for sales performance and profit margin analysis. Delivered across all phases from requirements gathering through production release.',
      ja: 'バラバラなスプレッドシート管理を一元化するために開発した統合業務システム。スタッフが直感的に操作できる買取受付UI、リアルタイムで在庫状況を把握できる管理画面、管理者向けの売上・粗利分析ダッシュボードを搭載。要件定義・設計・開発・テスト・リリースまで全工程を一人で担当した。',
    },
    challenges: {
      en: 'The main challenge was modeling the purchase and inventory lifecycle accurately in the database. Each purchased item needs to be tracked individually through intake, assessment, pricing, shelving, sale, and disposal — all while maintaining accurate stock counts and cost basis for margin calculations. Careful schema design and transaction management were essential to ensure data consistency across concurrent operations.',
      ja: '最大の課題は、買取から販売までの在庫ライフサイクルをデータベース上で正確にモデリングすることでした。買取受付・査定・値付け・陳列・販売・廃棄の各ステータスを単品ごとに追跡しながら、正確な在庫数と原価を維持する必要がありました。並行操作でもデータ整合性を保つために、スキーマ設計とトランザクション管理を慎重に設計しました。',
    },
    duration: { en: '3 months', ja: '3ヶ月' },
    teamSize: { en: '1 engineer (solo)', ja: '1名（単独）' },
    myRole: {
      en: 'Sole engineer. Handled all phases independently: requirements gathering with the client, system design, frontend and backend implementation, testing, and production deployment.',
      ja: '担当エンジニア1名。クライアントとの要件定義から、システム設計、フロントエンド・バックエンド実装、テスト、本番リリースまで全工程を単独で担当。',
    },
    technologies: ['TypeScript', 'React', 'Next.js', 'PHP', 'MySQL', 'Tailwind CSS'],
    demo: 'https://www.talos-web.com/solutions/recycle/',
    image: '/talos.png',
    featured: false,
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
    duration: { en: '24 months', ja: '20ヶ月' },
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
