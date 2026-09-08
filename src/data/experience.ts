export interface Experience {
  company: { en: string; ja: string };
  companyUrl?: string;
  logo?: string;
  location?: { en: string; ja: string };
  role: { en: string; ja: string };
  period: { start: string; end: string | null };
  description: { en: string; ja: string };
  responsibilities: { en: string[]; ja: string[] };
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: { en: 'Sakana AI Co., Ltd.', ja: 'Sakana AI株式会社' },
    location: { en: 'Tokyo, Japan', ja: '東京都' },
    role: {
      en: 'Senior LLM Systems & Full-Stack Engineer',
      ja: 'シニアLLMシステム & フルスタックエンジニア',
    },
    period: { start: '2024-11', end: null },
    description: {
      en: 'Architected and delivered production LLM applications across model integration, retrieval, agent orchestration, evaluation, security, frontend, backend, data, and cloud infrastructure. Led technical decisions required to operate AI capabilities reliably beyond the prototype stage.',
      ja: 'モデル統合、検索、エージェントオーケストレーション、評価、セキュリティ、フロントエンド、バックエンド、データ、クラウド基盤まで、本番LLMアプリケーションを設計・実装。プロトタイプを超えてAI機能を安定運用するための技術判断を主導。',
    },
    responsibilities: {
      en: [
        'Designed end-to-end architectures for production LLM and full-stack applications',
        'Built multi-stage RAG pipelines using hybrid retrieval, query rewriting, metadata filtering, and reranking',
        'Developed tool-using agents with execution permissions, retry limits, and human-approval points',
        'Created evaluation datasets and regression pipelines for retrieval and generation quality',
        'Applied safeguards against prompt injection, unauthorized retrieval, and unsafe tool execution',
        'Developed Python/FastAPI services, React/Next.js interfaces, and PostgreSQL data models',
      ],
      ja: [
        '本番LLMおよびフルスタックアプリケーションのエンドツーエンドアーキテクチャを設計',
        'ハイブリッド検索、クエリ書き換え、メタデータフィルタ、リランキングを組み合わせた多段RAGパイプラインを構築',
        '実行権限、リトライ制限、人による承認ポイントを備えたツール利用エージェントを開発',
        '検索・生成品質のための評価データセットと回帰パイプラインを整備',
        'プロンプトインジェクション、不正検索、不安全なツール実行への対策を実装',
        'Python/FastAPIサービス、React/Next.js UI、PostgreSQLデータモデルを開発',
      ],
    },
    technologies: [
      'Python',
      'FastAPI',
      'TypeScript',
      'React',
      'Next.js',
      'LLM APIs',
      'RAG',
      'AI Agents',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
    ],
  },
  {
    company: { en: 'BIX Tech Corp', ja: 'BIX Tech Corp' },
    location: { en: 'Florida, USA', ja: '米国フロリダ' },
    role: {
      en: 'Generative AI & RAG Engineer',
      ja: '生成AI & RAGエンジニア',
    },
    period: { start: '2023-08', end: '2024-10' },
    description: {
      en: 'Designed and implemented retrieval-augmented generation systems that combined private document collections with large language models. Owned the pipeline from document ingestion and retrieval through prompt construction, generation, validation, and full-stack delivery.',
      ja: '社内ドキュメントと大規模言語モデルを組み合わせたRAGシステムを設計・実装。文書取り込みから検索、プロンプト構築、生成、検証、フルスタック提供まで一連のパイプラインを担当。',
    },
    responsibilities: {
      en: [
        'Built document-ingestion pipelines for PDF, HTML, and structured business data',
        'Designed text-cleaning, chunking, metadata-extraction, and embedding workflows',
        'Implemented semantic, keyword, and hybrid retrieval with metadata filtering and reranking',
        'Designed prompts that combined user queries with retrieved source material',
        'Evaluated retrieval relevance, answer correctness, groundedness, and hallucination risk',
        'Integrated RAG services with React and Next.js applications',
      ],
      ja: [
        'PDF、HTML、構造化業務データ向けの文書取り込みパイプラインを構築',
        'テキストクリーニング、チャンク分割、メタデータ抽出、埋め込み生成のワークフローを設計',
        'セマンティック・キーワード・ハイブリッド検索とリランキングを実装',
        'ユーザー質問と取得ソースを組み合わせたプロンプトを設計',
        '検索関連性、回答精度、根拠性、幻覚リスクを評価',
        'RAGサービスをReact / Next.jsアプリケーションへ統合',
      ],
    },
    technologies: [
      'Python',
      'FastAPI',
      'OpenAI API',
      'LangChain',
      'RAG',
      'Embeddings',
      'PostgreSQL',
      'React',
      'Next.js',
      'TypeScript',
      'Docker',
      'AWS',
    ],
  },
  {
    company: { en: 'BIX Tech Corp', ja: 'BIX Tech Corp' },
    location: { en: 'Florida, USA', ja: '米国フロリダ' },
    role: {
      en: 'NLP & AI Application Engineer',
      ja: 'NLP & AIアプリケーションエンジニア',
    },
    period: { start: '2021-04', end: '2023-07' },
    description: {
      en: 'Developed AI-enabled application features for processing, searching, classifying, and summarizing unstructured text. Combined Python-based model services with existing web applications and operational workflows.',
      ja: '非構造化テキストの処理、検索、分類、要約向けのAI機能を開発。Pythonベースのモデルサービスを既存のWebアプリケーションと業務フローへ統合。',
    },
    responsibilities: {
      en: [
        'Built Python services for text classification, summarization, and information extraction',
        'Integrated hosted NLP and language-model APIs with existing business applications',
        'Implemented semantic search based on similarity between queries and document embeddings',
        'Exposed model and search capabilities through FastAPI endpoints',
        'Added validation, retry, timeout, and error-handling controls around external model APIs',
        'Measured response quality, processing latency, token consumption, and API cost',
      ],
      ja: [
        'テキスト分類、要約、情報抽出向けのPythonサービスを構築',
        'ホスト型NLPおよび言語モデルAPIを既存の業務アプリケーションへ統合',
        'クエリと文書埋め込みの類似度に基づくセマンティック検索を実装',
        'FastAPIエンドポイントでモデルと検索機能を公開',
        '外部モデルAPIに検証、リトライ、タイムアウト、エラー処理を追加',
        '応答品質、処理遅延、トークン消費、APIコストを計測',
      ],
    },
    technologies: [
      'Python',
      'FastAPI',
      'LLM APIs',
      'Embeddings',
      'Vector Search',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
      'AWS',
    ],
  },
  {
    company: { en: 'BIX Tech Corp', ja: 'BIX Tech Corp' },
    location: { en: 'Florida, USA', ja: '米国フロリダ' },
    role: {
      en: 'Senior Full-Stack & Data Systems Engineer',
      ja: 'シニアフルスタック & データシステムエンジニア',
    },
    period: { start: '2018-05', end: '2021-03' },
    description: {
      en: 'Led the design and implementation of production web applications across frontend, backend, database, and infrastructure layers. Took ownership of system architecture, data-processing workflows, performance, reliability, and technical delivery.',
      ja: 'フロントエンド、バックエンド、データベース、インフラにわたる本番Webアプリケーションの設計・実装をリード。システムアーキテクチャ、データ処理、性能、信頼性、技術デリバリーを担当。',
    },
    responsibilities: {
      en: [
        'Designed end-to-end architectures for customer-facing and administrative applications',
        'Developed frontend interfaces using React, Vue.js, JavaScript, and TypeScript',
        'Built backend services, REST APIs, and background-processing workflows',
        'Optimized database schemas, indexes, queries, caching, and asynchronous jobs',
        'Implemented authentication, role-based authorization, and security controls',
        'Established CI/CD workflows and containerized services with Docker',
      ],
      ja: [
        '顧客向けおよび管理向けアプリケーションのエンドツーエンドアーキテクチャを設計',
        'React、Vue.js、JavaScript、TypeScriptでフロントエンドを開発',
        'バックエンドサービス、REST API、バックグラウンド処理を構築',
        'スキーマ、インデックス、クエリ、キャッシュ、非同期ジョブを最適化',
        '認証、ロールベース認可、セキュリティ制御を実装',
        'Dockerによるコンテナ化とCI/CDワークフローを整備',
      ],
    },
    technologies: [
      'TypeScript',
      'JavaScript',
      'React',
      'Vue.js',
      'Ruby on Rails',
      'REST API',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Docker',
      'AWS',
      'GitHub Actions',
    ],
  },
  {
    company: { en: 'Kistem Co., Ltd.', ja: '株式会社キステム' },
    location: { en: 'Nara-shi, Japan', ja: '奈良市' },
    role: {
      en: 'Backend Engineer',
      ja: 'バックエンドエンジニア',
    },
    period: { start: '2013-09', end: '2018-04' },
    description: {
      en: 'Designed and maintained backend services for database-driven web applications. Progressed from feature implementation to ownership of business logic, data integrity, external integrations, and production reliability.',
      ja: 'データベース駆動のWebアプリケーション向けバックエンドを設計・保守。機能実装から、ビジネスロジック、データ整合性、外部連携、本番信頼性の所有へと役割を拡大。',
    },
    responsibilities: {
      en: [
        'Developed backend applications and REST APIs using Ruby on Rails',
        'Designed relational database schemas, constraints, indexes, and migrations',
        'Implemented authentication, authorization, validation, and transaction processing',
        'Integrated payment, notification, and other third-party APIs',
        'Developed background jobs for asynchronous and scheduled processing',
        'Diagnosed production incidents and implemented permanent corrective changes',
      ],
      ja: [
        'Ruby on RailsでバックエンドアプリケーションとREST APIを開発',
        'リレーショナルスキーマ、制約、インデックス、マイグレーションを設計',
        '認証、認可、バリデーション、トランザクション処理を実装',
        '決済、通知などのサードパーティAPIを統合',
        '非同期・定期処理向けのバックグラウンドジョブを開発',
        '本番障害を調査し、恒久的な是正対応を実施',
      ],
    },
    technologies: [
      'Ruby on Rails',
      'JavaScript',
      'REST API',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Linux',
      'Nginx',
      'Git',
    ],
  },
  {
    company: { en: 'Sojin Co., Ltd.', ja: '株式会社創人' },
    location: { en: 'Nara-shi, Japan', ja: '奈良市' },
    role: {
      en: 'Frontend Engineer',
      ja: 'フロントエンドエンジニア',
    },
    period: { start: '2009-06', end: '2013-08' },
    description: {
      en: 'Developed production websites and browser-based interfaces for corporate clients. Transformed visual designs and business requirements into responsive, maintainable frontend implementations while collaborating with designers and backend engineers.',
      ja: '法人クライアント向けの本番WebサイトとブラウザUIを開発。デザインと要件を、保守しやすいレスポンシブなフロントエンド実装へ落とし込み、デザイナーおよびバックエンドエンジニアと協働。',
    },
    responsibilities: {
      en: [
        'Converted design mockups into standards-compliant HTML and CSS',
        'Developed interactive user-interface components using JavaScript and jQuery',
        'Integrated frontend pages with backend systems and content management platforms',
        'Implemented form validation, navigation, dynamic content, and asynchronous data updates',
        'Ensured consistent behavior across major browsers and device sizes',
        'Supported production releases and maintained existing client websites',
      ],
      ja: [
        'デザインモックを標準準拠のHTML/CSSへ実装',
        'JavaScriptとjQueryでインタラクティブなUIコンポーネントを開発',
        'フロントエンドをバックエンドおよびCMSと連携',
        'フォーム検証、ナビゲーション、動的コンテンツ、非同期更新を実装',
        '主要ブラウザとデバイスサイズでの一貫した挙動を確保',
        '本番リリースを支援し、既存クライアントサイトを保守',
      ],
    },
    technologies: ['HTML / CSS', 'JavaScript', 'jQuery', 'AJAX', 'PHP', 'MySQL'],
  },
  {
    company: { en: 'Independent', ja: '個人事業' },
    location: { en: 'Nara-shi, Japan', ja: '奈良市' },
    role: {
      en: 'Web Application Developer',
      ja: 'Webアプリケーション開発者',
    },
    period: { start: '2005-04', end: '2009-05' },
    description: {
      en: 'Independent web application developer. Completed projects for Japanese and international clients through direct contracts, referrals, and online collaboration.',
      ja: '個人のWebアプリケーション開発者として、直接契約、紹介、オンライン協働を通じて国内外のクライアント案件を担当。',
    },
    responsibilities: {
      en: [
        'Developed database-driven web applications based on client requirements',
        'Built user interfaces, server-side logic, and database operations',
        'Converted business requirements into technical specifications and workflows',
        'Designed relational database schemas for customers, reservations, products, and orders',
        'Integrated frontend components with server-side logic',
        'Maintained deployed systems and resolved application defects',
      ],
      ja: [
        'クライアント要件に基づくデータベース駆動のWebアプリケーションを開発',
        'UI、サーバサイドロジック、データベース処理を実装',
        '業務要件を技術仕様とワークフローへ落とし込み',
        '顧客、予約、商品、注文向けのリレーショナルスキーマを設計',
        'フロントエンドとサーバサイドロジックを統合',
        '本番システムの保守と不具合対応を実施',
      ],
    },
    technologies: ['HTML / CSS', 'JavaScript', 'PHP', 'MySQL', 'Linux'],
  },
];
