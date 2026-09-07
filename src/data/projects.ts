export interface Project {
  slug: string;
  title: { en: string; ja: string };
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
    slug: 'agentic-workflow-platform',
    title: {
      en: 'Agentic Workflow Automation Platform',
      ja: 'エージェント型ワークフロー自動化基盤',
    },
    description: {
      en: 'An LLM orchestration system that interprets user requests, selects authorized tools, calls internal APIs, and maintains state across multi-step workflows.',
      ja: 'ユーザー要求を解釈し、許可されたツールを選択して社内APIを呼び出し、複数ステップのワークフロー状態を維持するLLMオーケストレーション基盤。',
    },
    overview: {
      en: 'Built at Sakana AI as a production agent platform. The system routes natural-language requests to authorized tools, calls internal APIs, and keeps workflow state across multi-step operations with validation, execution limits, auditability, and human approval for sensitive actions.',
      ja: 'Sakana AIで構築した本番エージェント基盤。自然言語の要求を許可済みツールへ振り分け、社内APIを呼び出し、検証・実行制限・監査・機微操作の人的承認を備えながら複数ステップの状態を維持します。',
    },
    challenges: {
      en: 'The core challenge was letting agents act on real business systems without losing control. Tool schemas, execution permissions, state transitions, retry limits, and human-approval gates were required so complex operational processes could be automated while remaining auditable and safe.',
      ja: '実業務システム上でエージェントを動かしつつ制御を失わないことが最大の課題でした。ツールスキーマ、実行権限、状態遷移、リトライ制限、人的承認を設計し、複雑な運用プロセスを自動化しながら監査可能性と安全性を維持しました。',
    },
    myRole: {
      en: 'Senior LLM Systems & Full-Stack Engineer. Owned architecture, agent orchestration, API integration, and production delivery.',
      ja: 'シニアLLMシステム & フルスタックエンジニアとして、アーキテクチャ、エージェント制御、API連携、本番デリバリーを担当。',
    },
    technologies: ['Python', 'FastAPI', 'TypeScript', 'React', 'Next.js', 'AI Agents', 'Function Calling', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    featured: true,
  },
  {
    slug: 'secure-enterprise-rag',
    title: {
      en: 'Secure Enterprise RAG Platform',
      ja: 'セキュア企業向けRAG基盤',
    },
    description: {
      en: 'A multi-source knowledge system with document-level permissions, hybrid retrieval, reranking, citations, and evaluation pipelines.',
      ja: '文書単位の権限管理、ハイブリッド検索、リランキング、引用、評価パイプラインを備えた複数ソースのナレッジ基盤。',
    },
    overview: {
      en: 'Architected a production RAG platform for private organizational data. The system ingests multiple sources, enforces document-level access control through ingestion and retrieval, and returns grounded answers with citations plus evaluation coverage for relevance and safety.',
      ja: '社内の非公開データを対象にした本番RAG基盤。複数ソースを取り込み、取り込みから検索まで文書単位のアクセス制御を徹底し、引用付きの根拠ある回答と、関連性・安全性の評価を提供します。',
    },
    challenges: {
      en: 'Access restrictions had to hold across ingestion and retrieval, not only at the UI. Hybrid retrieval, reranking, and citation tracking were combined with permission filters so answers stayed grounded in authorized documents only.',
      ja: 'アクセス制限はUIだけでなく、取り込みと検索の全経路で守る必要がありました。ハイブリッド検索、リランキング、引用追跡を権限フィルタと組み合わせ、認可済み文書だけに根拠を限定しました。',
    },
    myRole: {
      en: 'Led RAG architecture, retrieval design, permission model, and evaluation integration.',
      ja: 'RAGアーキテクチャ、検索設計、権限モデル、評価連携を主導。',
    },
    technologies: ['Python', 'FastAPI', 'RAG', 'Embeddings', 'Vector Databases', 'Hybrid Search', 'Reranking', 'PostgreSQL', 'Next.js', 'AWS'],
    featured: true,
  },
  {
    slug: 'enterprise-knowledge-assistant',
    title: {
      en: 'Enterprise Knowledge Assistant',
      ja: 'エンタープライズナレッジアシスタント',
    },
    description: {
      en: 'A RAG application that ingests internal documents, retrieves relevant passages, and generates answers grounded in authorized source material.',
      ja: '社内文書を取り込み、関連箇所を検索し、認可されたソースに根拠を置いた回答を生成するRAGアプリケーション。',
    },
    overview: {
      en: 'Built at BIX Tech as a unified natural-language interface over distributed organizational knowledge. The assistant retrieves supporting passages, constructs grounded prompts, and preserves links to evidence so users can verify answers.',
      ja: 'BIX Techで構築した、分散した社内ナレッジへの自然言語インターフェース。関連箇所を検索し、根拠付きプロンプトを組み立て、回答の裏付けリンクを残します。',
    },
    challenges: {
      en: 'Documents lived in different formats and systems. Ingestion, chunking, metadata, and hybrid retrieval had to produce relevant context without leaking unauthorized material, while keeping citations visible to end users.',
      ja: '文書は形式もシステムもバラバラでした。取り込み、チャンク分割、メタデータ、ハイブリッド検索で関連コンテキストを作りつつ、未認可データの漏洩を防ぎ、引用を利用者へ見える形で残す必要がありました。',
    },
    myRole: {
      en: 'Owned the RAG pipeline from ingestion and retrieval through prompt construction, generation, and frontend integration.',
      ja: '取り込み・検索からプロンプト構築、生成、フロントエンド統合までRAGパイプラインを担当。',
    },
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'LangChain', 'RAG', 'Embeddings', 'React', 'Next.js', 'PostgreSQL', 'Docker'],
    featured: true,
  },
  {
    slug: 'llm-evaluation-observability',
    title: {
      en: 'LLM Evaluation and Observability System',
      ja: 'LLM評価・可観測性システム',
    },
    description: {
      en: 'Automated test suites and production monitoring for prompt versions, model configurations, retrieved context, outputs, latency, failures, and cost.',
      ja: 'プロンプト版、モデル設定、取得コンテキスト、出力、遅延、障害、コストを対象にした自動テストと本番モニタリング。',
    },
    overview: {
      en: 'Implemented evaluation and observability so model and prompt changes could be released with evidence. The system tracks retrieved context, generated outputs, groundedness, latency, failures, token use, and cost across prompt and model versions.',
      ja: 'モデルやプロンプトの変更を根拠付きでリリースできるよう、評価と可観測性を実装。取得コンテキスト、生成結果、根拠性、遅延、障害、トークン、コストを版ごとに追跡します。',
    },
    challenges: {
      en: 'Quality regressions were hard to see until users reported them. Automated datasets and production monitors made retrieval and generation changes measurable and shortened failure diagnosis.',
      ja: '品質劣化はユーザー報告まで見えにくい状態でした。評価データセットと本番モニタで検索・生成の変更を測定可能にし、障害切り分けを早めました。',
    },
    myRole: {
      en: 'Designed evaluation datasets, regression pipelines, and production monitoring for LLM systems.',
      ja: 'LLM向けの評価データセット、回帰パイプライン、本番モニタリングを設計。',
    },
    technologies: ['Python', 'FastAPI', 'LLM Evaluation', 'RAG', 'PostgreSQL', 'Docker', 'AWS'],
    featured: true,
  },
  {
    slug: 'document-analysis-extraction',
    title: {
      en: 'Document Analysis and Structured Extraction Platform',
      ja: '文書分析・構造化抽出基盤',
    },
    description: {
      en: 'An LLM workflow that summarizes documents and extracts validated fields into predefined schemas.',
      ja: '文書を要約し、定義済みスキーマへ検証済みフィールドを抽出するLLMワークフロー。',
    },
    overview: {
      en: 'Developed a document-analysis platform that turns unstructured files into consistent, searchable records. Structured generation, schema validation, and recovery paths keep extracted fields usable by downstream business workflows.',
      ja: '非構造化ファイルを一貫した検索可能なレコードへ変換する文書分析基盤。構造化生成、スキーマ検証、リカバリ経路により、抽出項目を後続業務で使える状態に保ちます。',
    },
    challenges: {
      en: 'Model output was inconsistent across document types. Schema validation, structured outputs, and fallback behavior were required to produce reliable fields instead of free-form text.',
      ja: '文書タイプごとにモデル出力がばらつきました。スキーマ検証、構造化出力、フォールバックにより、自由記述ではなく信頼できる項目を得る必要がありました。',
    },
    myRole: {
      en: 'Designed the extraction workflow, validation layer, and integration with downstream data stores.',
      ja: '抽出ワークフロー、検証層、後続データストアとの連携を設計。',
    },
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'LangChain', 'Structured Outputs', 'PostgreSQL', 'TypeScript'],
    featured: true,
  },
  {
    slug: 'rag-evaluation-framework',
    title: {
      en: 'RAG Evaluation Framework',
      ja: 'RAG評価フレームワーク',
    },
    description: {
      en: 'Test datasets and automated evaluation workflows for retrieval relevance, groundedness, completeness, latency, and cost.',
      ja: '検索関連性、根拠性、完全性、遅延、コストを測るテストデータセットと自動評価ワークフロー。',
    },
    overview: {
      en: 'Created a framework that makes prompt, model, and retrieval changes measurable. Automated suites score relevance, groundedness, answer completeness, latency, and cost so quality regressions are caught before release.',
      ja: 'プロンプト、モデル、検索の変更を測定可能にするフレームワーク。関連性、根拠性、回答の完全性、遅延、コストを自動採点し、リリース前に品質劣化を検出します。',
    },
    challenges: {
      en: 'Teams were changing prompts and models without a shared baseline. A repeatable evaluation set reduced the risk of undetected regressions when retrieval or generation settings moved.',
      ja: '共通の基準がないままプロンプトやモデルが変わっていました。再現可能な評価セットにより、検索や生成設定の変更で見逃されがちな劣化を減らしました。',
    },
    myRole: {
      en: 'Built the datasets, scoring workflows, and reporting used to compare retrieval and generation changes.',
      ja: '検索・生成変更を比較するためのデータセット、採点ワークフロー、レポートを構築。',
    },
    technologies: ['Python', 'FastAPI', 'LangChain', 'RAG', 'LLM Evaluation', 'Docker'],
    featured: true,
  },
  {
    slug: 'semantic-document-search',
    title: {
      en: 'Semantic Document Search System',
      ja: 'セマンティック文書検索システム',
    },
    description: {
      en: 'A document-processing pipeline that extracts text, generates embeddings, and retrieves relevant content using vector similarity.',
      ja: 'テキスト抽出、埋め込み生成、ベクトル類似度による関連コンテンツ検索を行う文書処理パイプライン。',
    },
    overview: {
      en: 'Built a semantic search system so users could find contextually relevant information without relying only on exact keyword matches. Documents are extracted, segmented, embedded, and queried by similarity.',
      ja: '完全一致のキーワードだけに頼らず、文脈的に関連する情報を見つけられるセマンティック検索。文書を抽出し、分割し、埋め込み、類似度で検索します。',
    },
    challenges: {
      en: 'Keyword search missed paraphrased or conceptually related content. Embedding-based retrieval required careful chunking and metadata so results stayed precise enough for operational use.',
      ja: 'キーワード検索では言い換えや概念的に近い内容を逃していました。埋め込み検索では、業務利用に耐える精度を出すためにチャンク分割とメタデータを慎重に設計しました。',
    },
    myRole: {
      en: 'Implemented the extraction, embedding, and vector-search services and exposed them through FastAPI.',
      ja: '抽出、埋め込み、ベクトル検索サービスを実装し、FastAPIで公開。',
    },
    technologies: ['Python', 'FastAPI', 'Embeddings', 'Vector Search', 'PostgreSQL', 'Docker', 'AWS'],
    featured: true,
  },
  {
    slug: 'text-classification-service',
    title: {
      en: 'Automated Text Classification Service',
      ja: '自動テキスト分類サービス',
    },
    description: {
      en: 'A Python service that classifies incoming documents and messages by topic, intent, or workflow category.',
      ja: '受信文書やメッセージをトピック、意図、ワークフローカテゴリで分類するPythonサービス。',
    },
    overview: {
      en: 'Developed a classification service that routes unstructured content to downstream processes. Incoming documents and messages are labeled by topic, intent, or workflow category to reduce manual sorting.',
      ja: '非構造化コンテンツを後続処理へ振り分ける分類サービス。受信文書とメッセージをトピック、意図、ワークフローカテゴリでラベル付けし、手作業の仕分けを減らします。',
    },
    challenges: {
      en: 'Inbound content was noisy and inconsistently labeled. The service needed stable categories, retry/timeout handling around model APIs, and enough accuracy to replace manual triage.',
      ja: '受信内容はノイズが多く、ラベルも不揃いでした。安定したカテゴリ設計、モデルAPIのリトライ/タイムアウト、手作業の仕分けを置き換えられる精度が必要でした。',
    },
    myRole: {
      en: 'Built the classification service, API integration, and operational controls around external model calls.',
      ja: '分類サービス、API連携、外部モデル呼び出しの運用制御を構築。',
    },
    technologies: ['Python', 'FastAPI', 'LLM APIs', 'PostgreSQL', 'Docker', 'AWS'],
    featured: true,
  },
  {
    slug: 'marketplace-modernization',
    title: {
      en: 'Online Marketplace Modernization',
      ja: 'オンラインマーケットプレイス刷新',
    },
    description: {
      en: 'Modernized a production marketplace across customer interfaces, admin functions, backend services, and database workflows.',
      ja: '顧客向け画面、管理機能、バックエンド、データベース処理にわたる本番マーケットプレイスの刷新。',
    },
    overview: {
      en: 'Refactored a live marketplace and introduced clearer service boundaries for order, payment, and account operations. The work covered customer UI, administrative functions, backend services, and data workflows.',
      ja: '稼働中のマーケットプレイスをリファクタし、注文、決済、アカウント処理のサービス境界を明確化。顧客UI、管理機能、バックエンド、データ処理まで対象にしました。',
    },
    challenges: {
      en: 'Legacy components were tightly coupled, which made new features risky. Clearer boundaries and incremental refactors improved maintainability without stopping production operations.',
      ja: 'レガシー部品の結合が強く、新機能追加が危険でした。境界の整理と段階的リファクタにより、本番を止めずに保守性を上げました。',
    },
    myRole: {
      en: 'Led architecture, full-stack implementation, and delivery of the modernization work.',
      ja: 'アーキテクチャ、フルスタック実装、刷新のデリバリーをリード。',
    },
    technologies: ['TypeScript', 'React', 'Vue.js', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    featured: true,
  },
  {
    slug: 'transaction-reporting-platform',
    title: {
      en: 'Transaction Data and Reporting Platform',
      ja: '取引データ・レポーティング基盤',
    },
    description: {
      en: 'Data-processing workflows and administrative reporting for orders, payments, refunds, and account activity.',
      ja: '注文、決済、返金、アカウント活動向けのデータ処理と管理レポート。',
    },
    overview: {
      en: 'Developed ingestion, validation, transformation, and reporting for operational transaction data. Filtering, aggregation, export, and scheduled processing let operations teams investigate activity and generate reports more efficiently.',
      ja: '運用上の取引データに対する取り込み、検証、変換、レポートを開発。フィルタ、集計、エクスポート、定期処理により、運用チームが調査とレポート作成を効率よく行えるようにしました。',
    },
    challenges: {
      en: 'Critical business data was spread across systems and spreadsheets. Centralizing processing while keeping aggregates accurate under concurrent updates required careful schema and job design.',
      ja: '重要な業務データが複数システムとスプレッドシートに散在していました。同時更新下でも集計精度を保ちつつ処理を一元化するため、スキーマとジョブ設計を慎重に行いました。',
    },
    myRole: {
      en: 'Designed the data workflows, reporting functions, and scheduled processing used by operations.',
      ja: '運用向けのデータワークフロー、レポート機能、定期処理を設計。',
    },
    technologies: ['TypeScript', 'Ruby on Rails', 'PostgreSQL', 'MySQL', 'Redis', 'AWS'],
    featured: true,
  },
  {
    slug: 'marketplace-transaction-backend',
    title: {
      en: 'Marketplace Transaction Management System',
      ja: 'マーケットプレイス取引管理システム',
    },
    description: {
      en: 'Backend functionality for user accounts, product listings, orders, payments, cancellations, and administrative operations.',
      ja: 'ユーザーアカウント、出品、注文、決済、キャンセル、管理操作向けのバックエンド機能。',
    },
    overview: {
      en: 'Developed at Kistem as the backend for an online marketplace. The system centralized accounts, listings, orders, payments, cancellations, and admin operations so transaction records stayed consistent across customer and administrative views.',
      ja: '株式会社キステムで開発したオンラインマーケットプレイスのバックエンド。アカウント、出品、注文、決済、キャンセル、管理操作を一元化し、顧客側と管理側で取引記録の一貫性を保ちました。',
    },
    challenges: {
      en: 'Order and payment state had to stay consistent across incomplete, failed, and duplicated requests. Relational constraints, transactions, and careful status handling were essential.',
      ja: '不完全、失敗、重複リクエストがあっても注文と決済の状態を一致させる必要がありました。リレーショナル制約、トランザクション、ステータス管理が不可欠でした。',
    },
    myRole: {
      en: 'Backend engineer responsible for business logic, data models, and production reliability.',
      ja: 'ビジネスロジック、データモデル、本番信頼性を担当したバックエンドエンジニア。',
    },
    technologies: ['Ruby on Rails', 'REST API', 'PostgreSQL', 'MySQL', 'Redis', 'Linux'],
    featured: true,
  },
  {
    slug: 'payment-service-integration',
    title: {
      en: 'External Payment Service Integration',
      ja: '外部決済サービス連携',
    },
    description: {
      en: 'Server-side payment authorization, transaction-status handling, callback processing, and failure-recovery workflows.',
      ja: 'サーバ側の決済認可、取引ステータス処理、コールバック、障害リカバリワークフロー。',
    },
    overview: {
      en: 'Implemented payment authorization, status handling, callbacks, and recovery so online payments stayed reliable when requests were incomplete, failed, or duplicated.',
      ja: '決済認可、ステータス処理、コールバック、リカバリを実装し、不完全・失敗・重複リクエストがあってもオンライン決済の信頼性を維持しました。',
    },
    challenges: {
      en: 'Payment providers send delayed or duplicate callbacks. Idempotent handling and explicit state transitions were required to avoid double charges and missing confirmations.',
      ja: '決済事業者のコールバックは遅延や重複があり得ます。二重課金や確認漏れを避けるため、冪等な処理と明確な状態遷移が必要でした。',
    },
    myRole: {
      en: 'Implemented the payment integration, callback processing, and failure-recovery paths.',
      ja: '決済連携、コールバック処理、障害リカバリ経路を実装。',
    },
    technologies: ['Ruby on Rails', 'REST API', 'PostgreSQL', 'Redis', 'Linux'],
    featured: true,
  },
  {
    slug: 'online-booking-system',
    title: {
      en: 'Online Booking and Client Management System',
      ja: 'オンライン予約・顧客管理システム',
    },
    description: {
      en: 'A web application for reservation booking, availability checking, and maintaining customer and booking records with an administrative interface.',
      ja: '予約、空き状況確認、顧客・予約記録の管理、管理画面を備えたWebアプリケーション。',
    },
    overview: {
      en: 'Developed independently for a client who needed centralized reservation management. Staff could check availability, take bookings, and maintain customer records instead of keeping information in separate manual lists.',
      ja: '予約管理を一元化したいクライアント向けに個人で開発。スタッフは空き状況を確認し、予約を受け、顧客記録を管理でき、手作業の台帳を減らせました。',
    },
    challenges: {
      en: 'Availability and booking records were easy to get out of sync when handled manually. A shared data model and admin tools improved accuracy and reduced duplicate or missing reservations.',
      ja: '手作業では空き状況と予約記録がずれやすく、共有データモデルと管理機能で精度を上げ、重複や欠落を減らしました。',
    },
    myRole: {
      en: 'Sole developer. Designed the schema, built the UI and server logic, and maintained the deployed system.',
      ja: '一人で担当。スキーマ設計、UIとサーバロジックの実装、本番保守まで実施。',
    },
    technologies: ['HTML / CSS', 'JavaScript', 'PHP', 'MySQL', 'Linux'],
    featured: true,
  },
  {
    slug: 'ecommerce-frontend',
    title: {
      en: 'E-commerce Frontend Implementation',
      ja: 'Eコマースフロントエンド実装',
    },
    description: {
      en: 'Product listing, product detail, shopping-cart, registration, and checkout interfaces integrated with server-side order processing.',
      ja: '商品一覧、詳細、カート、会員登録、チェックアウトをサーバ側の注文処理と連携したフロントエンド。',
    },
    overview: {
      en: 'Implemented customer-facing commerce screens at Sojin Co., Ltd. Listing, detail, cart, registration, and checkout flows were integrated with backend order processing to create a consistent purchasing path.',
      ja: '株式会社創人で顧客向けコマース画面を実装。一覧、詳細、カート、登録、チェックアウトをバックエンドの注文処理と連携し、一貫した購買導線を作りました。',
    },
    challenges: {
      en: 'Designs had to become maintainable, cross-browser interfaces that stayed in sync with server-side cart and order state, including form validation and asynchronous updates.',
      ja: 'デザインを、保守しやすくクロスブラウザで動く実装へ落とし込み、カートや注文のサーバ状態、フォーム検証、非同期更新と同期させる必要がありました。',
    },
    myRole: {
      en: 'Frontend engineer. Converted mockups into production UI and integrated them with backend order functions.',
      ja: 'フロントエンドエンジニアとして、モックを本番UIへ実装し、バックエンドの注文機能と連携。',
    },
    technologies: ['HTML / CSS', 'JavaScript', 'jQuery', 'AJAX', 'PHP', 'MySQL'],
    featured: true,
  },
];
