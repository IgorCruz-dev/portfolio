/**
 * Fonte única de verdade do portfólio.
 *
 * Regra do arquivo: nada aqui é retórica. Todo número e toda afirmação
 * tem origem verificável — repositório, site no ar ou perfil público —
 * registrada no campo `fonte`. Se não dá para apontar a origem, não entra.
 */

export type Fonte = string;

export const perfil = {
  nome: "Igor Cruz",
  pronomes: "ele/dele",
  papel: "Engenheiro de software",
  local: "São Joaquim da Barra, SP",
  email: "igorjscruz07@gmail.com",
  whatsapp: "5516996973320",
  github: "https://github.com/IgorCruz-dev",
  linkedin: "https://www.linkedin.com/in/igorcruz-dev",
  site: "https://www.igorcruz.com.br",
} as const;

export const whatsappLink = (texto: string) =>
  `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(texto)}`;

/** A frase de posicionamento. Curta porque a prova vem logo abaixo. */
export const posicionamento = {
  linha1: "Software que vai",
  linha2: "para produção",
  linha3: "— e fica lá.",
  lead:
    "Cofundador da StudyTrack, um SaaS B2B que instituições de ensino pagam para usar todos os dias. " +
    "Antes de ser bonito, o que eu entrego precisa aguentar segunda-feira de manhã.",
} as const;

/** Barra de prova do hero. Três fatos, nenhum adjetivo. */
export const provas: { valor: string; rotulo: string; fonte: Fonte }[] = [
  {
    valor: "SaaS B2B",
    rotulo: "em produção, com clientes pagantes",
    fonte: "studytrack.com.br — parceiro Opus (Goiânia/GO) publicado no site",
  },
  {
    valor: "3 clientes",
    rotulo: "sites comerciais entregues e no ar",
    fonte: "Branco Zanol, Ave Palavra!, StudyTrack",
  },
  {
    valor: "~790",
    rotulo: "commits meus na StudyTrack em 1 ano",
    fonte: "git log studytrack-frontend + studytrack-backend (out/2026)",
  },
];

export type Projeto = {
  slug: string;
  nome: string;
  tipo: string;
  estado: "produção" | "no ar" | "protótipo" | "open source";
  ano: string;
  resumo: string;
  problema: string;
  solucao: string;
  papel: string;
  stack: string[];
  imagem: string;
  imagemAlt: string;
  /** Rótulo sob a captura. Obrigatório sempre que a tela mostra dado que
      não é real — sem isso, um número de demonstração passa por resultado. */
  imagemLegenda?: string;
  links: { rotulo: string; href: string }[];
  destaques: { valor: string; rotulo: string; fonte: Fonte }[];
};

export const projetos: Projeto[] = [
  {
    slug: "studytrack",
    nome: "StudyTrack",
    tipo: "Produto SaaS B2B · cofundador",
    estado: "produção",
    ano: "out/2025 — hoje",
    resumo:
      "Plataforma white-label que cursinhos e instituições de ensino usam como portal próprio: banco de questões, simulados, correção de redação e gamificação, com a marca de cada escola.",
    problema:
      "Coordenação pedagógica descobre que um aluno despencou quando a prova chega — tarde demais para intervir. A escola decide no escuro porque o dado existe espalhado em planilha, caderno e cabeça de professor.",
    solucao:
      "Um portal por instituição, com a identidade visual dela, onde o desempenho de cada aluno vira métrica em tempo real: evolução por disciplina, lacunas identificadas, redações corrigidas por competência e relatórios que a gestão consegue ler sem ser analista de dados.",
    papel:
      "Cofundador e desenvolvedor. Divido a construção do produto com o outro fundador — frontend e backend, do schema ao deploy. Também respondo pelo suporte direto às instituições, o que muda como eu escrevo código: cada decisão tem alguém do outro lado na segunda de manhã.",
    stack: [
      "Next.js 16", "React 19", "TypeScript", "Tailwind 4",
      "Python", "Flask", "Supabase", "PostgreSQL",
      "Fly.io", "Vercel",
    ],
    imagem: "/media/st-dashboard-gestor.webp",
    imagemAlt:
      "Dashboard do gestor da StudyTrack mostrando alunos ativos, evolução da turma, ponto forte e ponto fraco por disciplina e ranking de engajamento",
    links: [
      { rotulo: "Ver o produto no ar", href: "https://www.studytrack.com.br" },
      { rotulo: "Case completo", href: "/trabalho/studytrack" },
    ],
    destaques: [
      { valor: "71", rotulo: "rotas no app", fonte: "find src/app -name page.tsx" },
      { valor: "~163k", rotulo: "linhas de código", fonte: "109k TS/TSX + 54k Python" },
      { valor: "1.610", rotulo: "commits no produto", fonte: "877 frontend + 733 backend" },
      { valor: "5.000+", rotulo: "questões catalogadas", fonte: "claim público em studytrack.com.br" },
    ],
  },
  {
    slug: "branco-zanol",
    nome: "Associação Branco Zanol",
    tipo: "Cliente comercial · site e painel",
    estado: "no ar",
    ano: "2026",
    resumo:
      "Site institucional e painel administrativo completo para uma associação de judô de Orlândia/SP. Tudo que aparece no site é editável por quem trabalha lá — sem me chamar.",
    problema:
      "Uma associação que precisa prestar contas publicamente e divulgar projetos, mas não tem equipe técnica. Site parado é site morto: se publicar notícia depender de desenvolvedor, não publica.",
    solucao:
      "Um painel administrativo que cobre todo o conteúdo do site — notícias, projetos, galeria, vídeos, carrossel, portal de transparência e lista de inscritos — mais newsletter por e-mail e busca pública. Entreguei com um protocolo de QA de 178 casos de teste para a associação validar a entrega.",
    papel: "Projeto, desenvolvimento e entrega — sozinho, do levantamento ao deploy.",
    stack: ["Next.js", "TypeScript", "Supabase", "Resend", "Vercel"],
    imagem: "/media/zanol-site.webp",
    imagemAlt:
      "Home da Associação Branco Zanol, com carrossel em tela cheia, barra de acessibilidade e navegação institucional",
    imagemLegenda: "Site no ar, em associacaobrancozanol.com.br.",
    links: [
      { rotulo: "Ver no ar", href: "https://www.associacaobrancozanol.com.br" },
    ],
    destaques: [
      { valor: "35", rotulo: "páginas", fonte: "find src/app -name page.tsx" },
      { valor: "178", rotulo: "casos de teste no QA", fonte: "QA_PROTOCOL.md do repositório" },
      { valor: "A11y", rotulo: "barra de fonte, contraste e animação", fonte: "site no ar" },
    ],
  },
  {
    slug: "ave-palavra",
    nome: "Ave, Palavra!",
    tipo: "Cliente comercial · site institucional",
    estado: "no ar",
    ano: "out/2026",
    resumo:
      "Site institucional para uma escola de português e redação de Franca/SP, com exportação estática e conteúdo inteiro editável em um único arquivo tipado.",
    problema:
      "Uma escola com 16 anos de história e material novo todo ano, presa a um site que não contava essa história e que ninguém conseguia atualizar.",
    solucao:
      "Next.js com exportação estática — nada de servidor para manter — e todo o conteúdo em um arquivo TypeScript tipado: trocar um depoimento ou uma turma é editar uma linha, e o build quebra se faltar campo.",
    papel:
      "Direção visual, desenvolvimento e entrega. Fiz passagem de acessibilidade (contraste AA, aninhamento semântico, prefers-reduced-motion) e de performance — uma animação de fundo que rerasterizava a cada quadro virou animação de transform, que roda no compositor.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Exportação estática"],
    imagem: "/media/avepalavra-site.webp",
    imagemAlt:
      "Home do site Ave, Palavra! com título editorial em serifa, ave turquesa e cartão de checklist de redação em vidro",
    imagemLegenda: "Site no ar, em ave-palavra-site.vercel.app.",
    links: [
      { rotulo: "Ver no ar", href: "https://ave-palavra-site.vercel.app/" },
      { rotulo: "Código", href: "https://github.com/IgorCruz-dev/ave-palavra-site" },
    ],
    destaques: [
      { valor: "AA", rotulo: "contraste corrigido na entrega", fonte: "commit fix(a11y) no repositório" },
      { valor: "0", rotulo: "servidor para manter", fonte: "next export / site estático" },
    ],
  },
  {
    slug: "investai",
    nome: "InvestAI",
    tipo: "Projeto próprio · open source",
    estado: "open source",
    ano: "out/2026",
    resumo:
      "Assistente que lê uma carteira de investimentos, busca dados reais de mercado e notícias, calcula os indicadores localmente e usa a Claude API para escrever um briefing em português.",
    problema:
      "Pedir análise de carteira direto para um modelo de linguagem é convidar número inventado. O cálculo precisa sair de dado real, não de memória de modelo.",
    solucao:
      "O sistema separa as camadas: dados vêm de fonte pública (yfinance, RSS de notícias), os indicadores são calculados em Python localmente, e o modelo só entra no fim para redigir o texto sobre números que ele não inventou. Três interfaces sobre o mesmo núcleo: dashboard, web e WhatsApp.",
    papel: "Projeto inteiro — arquitetura, código, CI e documentação.",
    stack: ["Python 3.12", "PostgreSQL", "Streamlit", "Claude API", "GitHub Actions"],
    imagem: "",
    imagemAlt: "",
    links: [{ rotulo: "Código e documentação", href: "https://github.com/IgorCruz-dev/investai" }],
    destaques: [
      { valor: "MIT", rotulo: "licença aberta", fonte: "LICENSE no repositório" },
      { valor: "CI", rotulo: "lint e testes a cada push", fonte: ".github/workflows/ci.yml" },
    ],
  },
  {
    slug: "obrasos",
    nome: "ObrasOS",
    tipo: "Proposta comercial · construtora",
    estado: "protótipo",
    ano: "2026",
    resumo:
      "Sistema de gestão de obras desenhado como proposta para uma construtora: cronograma, diário de obra, efetivo, medição e folha, na linguagem de quem toca canteiro.",
    problema:
      "Construtora pequena controla obra em planilha, caderno de campo e grupo de WhatsApp. O engenheiro sabe o que está atrasado; o escritório descobre na medição do mês.",
    solucao:
      "Em vez de um CRUD genérico de projetos, modelei o vocabulário real do setor: RDO (relatório diário de obra), PPC para medir aderência ao planejado, controle de efetivo, Gantt, medição e folha de pagamento — cada obra com percentual de conclusão, custo realizado contra previsto e alertas de desvio.",
    papel:
      "Pesquisa do domínio, modelagem e protótipo da interface. A proposta não virou contrato, mas o estudo é meu: a parte difícil foi entender como uma construtora mede progresso, não desenhar tela.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    imagem: "/media/obrasos-app.webp",
    imagemAlt:
      "Painel do ObrasOS com obras ativas, total em gestão, gasto do mês, efetivo, lista de obras em andamento com percentual de conclusão e PPC, e alertas de desvio",
    imagemLegenda:
      "Protótipo da proposta. Obras, valores e nomes são de demonstração — a proposta não virou contrato.",
    links: [],
    destaques: [
      { valor: "14", rotulo: "módulos desenhados", fonte: "navegação do protótipo" },
      { valor: "RDO · PPC", rotulo: "métricas reais do setor", fonte: "modelagem do domínio" },
    ],
  },
  {
    slug: "memorias",
    nome: "Memórias — APAE",
    tipo: "Hackathon · protótipo",
    estado: "protótipo",
    ano: "mai/2026",
    resumo:
      "Plataforma que conecta famílias e equipe da APAE no acompanhamento diário das crianças atendidas. Construída e apresentada em hackathon universitário.",
    problema:
      "A família recebe da APAE um resumo esparso do dia da criança. O progresso real — o que ela conquistou nesta semana, como evoluiu em cada área — fica dentro da instituição.",
    solucao:
      "Três visões sobre o mesmo acompanhamento: família, professor e gestor. A família vê evolução por área, humor do dia, próximos atendimentos e cada conquista registrada por quem atendeu, com nome e contexto.",
    papel: "Desenvolvimento no time e apresentação do pitch.",
    stack: ["Next.js", "TypeScript", "shadcn/ui", "Recharts"],
    imagem: "/media/memorias-app.webp",
    imagemAlt:
      "Dashboard da família no Memórias, mostrando evolução geral do Miguel, conquistas da semana, humor médio e evolução por área",
    imagemLegenda: "Demonstração no ar. A criança e os registros são fictícios.",
    links: [
      { rotulo: "Ver a demonstração", href: "https://memorias-rouge.vercel.app/dashboard" },
      { rotulo: "Código", href: "https://github.com/IgorCruz-dev/memorias" },
    ],
    destaques: [
      { valor: "3", rotulo: "perfis: família, professor, gestor", fonte: "demonstração no ar" },
    ],
  },
];

export const projetoPorSlug = (slug: string) => projetos.find((p) => p.slug === slug);

/** A trajetória. O ponto não é a lista — é o que acontece em paralelo. */
export type Marco = {
  periodo: string;
  titulo: string;
  organizacao: string;
  trilha: "formação" | "corporativo" | "produto";
  texto: string;
  destaque?: boolean;
};

export const trajetoria: Marco[] = [
  {
    periodo: "jan/2024 — set/2025",
    titulo: "Aprendiz",
    organizacao: "Tribunal de Justiça de São Paulo",
    trilha: "corporativo",
    texto:
      "Despacho eletrônico e trâmite de documentos de alta prioridade nos sistemas e-SAJ e PJe. Primeiro contato com o que significa operar um sistema onde o erro tem consequência real: dado sensível, LGPD e prazo legal que não negocia.",
  },
  {
    periodo: "desde jan/2025",
    titulo: "Bacharelado em Sistemas de Informação",
    organizacao: "FAFRAM",
    trilha: "formação",
    texto: "Em andamento, com conclusão prevista para dez/2028.",
  },
  {
    periodo: "desde out/2025",
    titulo: "Cofundador",
    organizacao: "StudyTrack",
    trilha: "produto",
    destaque: true,
    texto:
      "Começa no mesmo mês em que entro na Vittia. Um ano depois, a StudyTrack é um produto em produção, com instituições pagantes e suporte atendido por quem escreveu o código.",
  },
  {
    periodo: "out/2025 — set/2026",
    titulo: "Aprendiz — Engenharia e Projetos",
    organizacao: "Vittia",
    trilha: "corporativo",
    texto:
      "Escopo técnico-administrativo da área de Engenharia e Projetos de uma das maiores indústrias de fertilizantes do país: requisições em ERP Datasul, mapas comparativos de fornecedores de equipamento industrial e consolidação de cronogramas para a liderança de engenharia.",
  },
  {
    periodo: "mai/2026",
    titulo: "Memórias — APAE",
    organizacao: "Hackathon universitário",
    trilha: "produto",
    texto: "Protótipo construído em equipe e apresentado no pitch por mim.",
  },
  {
    periodo: "2026",
    titulo: "Primeiros clientes de desenvolvimento",
    organizacao: "Branco Zanol · Ave, Palavra!",
    trilha: "produto",
    texto:
      "Dois sites comerciais entregues e no ar, com painel administrativo e acessibilidade tratada como requisito, não como enfeite.",
  },
  {
    periodo: "desde set/2026",
    titulo: "Efetivado",
    organizacao: "Vittia",
    trilha: "corporativo",
    texto:
      "Encerro o programa de aprendizagem efetivado em tempo integral — enquanto a StudyTrack segue em produção e os clientes seguem sendo atendidos.",
  },
];

/** Princípios — cada um ancorado em algo que existe e pode ser conferido. */
export const principios: { titulo: string; texto: string; prova: string; href?: string }[] = [
  {
    titulo: "Problema antes de tecnologia",
    texto:
      "A escolha técnica vem depois de entender quem sofre com o problema. Na StudyTrack isso é literal: eu atendo o suporte das instituições, então ouço a consequência de cada decisão que tomei no código.",
    prova: "StudyTrack — suporte direto com quem desenvolve",
    href: "https://www.studytrack.com.br",
  },
  {
    titulo: "Código que outra pessoa mantém",
    texto:
      "Tipagem, conteúdo em arquivo tipado em vez de string solta, CI em todo projeto e README que explica o porquê — não só o como. Entrego projeto pensando em quem abre o repositório depois de mim.",
    prova: "InvestAI — CI, ruff e documentação pública",
    href: "https://github.com/IgorCruz-dev/investai",
  },
  {
    titulo: "Medir antes de afirmar",
    texto:
      "No Ave, Palavra! uma animação de fundo rerasterizava a camada inteira a cada quadro. Troquei por animação de transform, que roda no compositor, e registrei a medição antes e depois em três larguras de tela.",
    prova: "Ave, Palavra! — relatório de medição no repositório",
    href: "https://github.com/IgorCruz-dev/ave-palavra-site",
  },
];

export const stack = {
  "Front-end": ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  "Back-end": ["Python", "Flask", "FastAPI", "Node.js"],
  "Dados": ["PostgreSQL", "Supabase"],
  "Infra": ["Vercel", "Fly.io", "Oracle Cloud", "GitHub Actions"],
} as const;

/**
 * Case aprofundado da StudyTrack.
 *
 * Deliberadamente não entra aqui: número de clientes, faturamento, nomes de
 * instituição que não sejam públicos, e qualquer detalhe de postura de
 * segurança do sistema. O que um case precisa mostrar é decisão de engenharia,
 * não a planta do cofre.
 */
export const studytrackCase = {
  contexto:
    "Cursinhos e escolas preparatórias competem com plataformas nacionais que têm marca própria e nenhum vínculo com a instituição. O aluno estuda no app de outra empresa, e a escola não vê nada do que acontece ali. A StudyTrack inverte isso: a plataforma leva a marca da escola, e o dado volta para a coordenação.",

  arquitetura: [
    {
      camada: "Portal por instituição",
      texto:
        "Cada escola tem rota própria, identidade visual própria e base de alunos isolada. O mesmo código serve todas — o que muda é configuração, não fork.",
    },
    {
      camada: "Frontend",
      texto:
        "Next.js com React Server Components onde faz sentido e cliente onde é interativo. O app tem 71 rotas entre portal do aluno, painel da escola e administração interna.",
    },
    {
      camada: "Backend",
      texto:
        "Flask organizado em blueprints por domínio — aluno, parceiro, administração, integrações — com a lógica em services, separada da camada HTTP.",
    },
    {
      camada: "Dados e autenticação",
      texto: "Supabase sobre PostgreSQL, com autenticação e storage no mesmo lugar.",
    },
    {
      camada: "Infraestrutura",
      texto: "Frontend na Vercel, backend em container no Fly.io, tarefas agendadas por APScheduler.",
    },
  ],

  desafios: [
    {
      titulo: "Isolar instituições sem duplicar o produto",
      texto:
        "Cada escola precisa enxergar só os próprios alunos, com a própria marca, sem que isso vire uma cópia do sistema por cliente. A decisão foi tratar a instituição como parâmetro em todas as camadas — rota, consulta e permissão — para que adicionar uma escola seja cadastro, não deploy.",
    },
    {
      titulo: "Corrigir redação manuscrita",
      texto:
        "Professor de cursinho gasta horas corrigindo redação à mão. O fluxo aceita a foto da folha, extrai o texto e devolve avaliação por competência do ENEM, com feedback estruturado — e o professor revisa em vez de começar do zero.",
    },
    {
      titulo: "Gamificar sem distorcer o dado",
      texto:
        "XP, streak, níveis e ranking aumentam engajamento, mas criam um sistema de pontuação que várias ações disputam ao mesmo tempo. Contagem concorrente é a classe de bug mais fácil de não perceber: ninguém reclama de ponto a mais. Isso mudou como eu trato escrita concorrente no banco.",
    },
    {
      titulo: "Relatório que a coordenação lê",
      texto:
        "Dado bruto não convence diretor. A plataforma gera relatórios em PDF com gráficos, evolução por disciplina e recorte por turma, montados no backend com ReportLab e matplotlib — feitos para sair da tela e virar reunião.",
    },
  ],

  telas: [
    {
      src: "/media/st-dashboard-gestor.webp",
      alt: "Painel do gestor: alunos ativos, questões respondidas, evolução da turma, ponto forte e ponto fraco por disciplina, ranking de engajamento e adoção de videoaulas",
      titulo: "Painel da escola",
      texto: "O que a coordenação vê: volume, evolução, onde a turma trava e quem está parando de aparecer.",
    },
    {
      src: "/media/st-dashboard-aluno.webp",
      alt: "Painel do aluno com sequência de dias, questões respondidas, simulados, nível, missão do dia e barra de progresso de gamificação",
      titulo: "Portal do aluno",
      texto: "Do outro lado, o aluno vê progresso, sequência, missão do dia e o quanto falta para o próximo nível.",
    },
    {
      src: "/media/st-redacoes-kpis.webp",
      alt: "Tela de indicadores de redação da StudyTrack",
      titulo: "Redações",
      texto: "Envio, correção por competência e histórico de evolução por aluno.",
    },
    {
      src: "/media/studytrack-site.webp",
      alt: "Página pública da StudyTrack apresentando a plataforma para instituições de ensino",
      titulo: "Site do produto",
      texto: "A ponta comercial: é por aqui que uma instituição descobre a plataforma e pede demonstração.",
    },
  ],
} as const;

/**
 * Liderança no Diretório Acadêmico.
 *
 * Descrito pelo que foi feito, não pelo cargo. "Vice-presidente" sozinho não
 * diz nada a um recrutador; "fui atrás de patrocínio e abri o evento" diz.
 */
export const lideranca = {
  cargo: "Vice-presidente do Diretório Acadêmico",
  periodo: "FAFRAM",
  resumo:
    "O cargo veio com responsabilidade de execução: as duas maiores iniciativas do calendário acadêmico passaram pela nossa organização.",
  frentes: [
    {
      titulo: "Hackathon",
      duracao: "Uma semana",
      texto:
        "Organizei um hackathon de uma semana inteira em que cada equipe precisava entregar, no último dia, uma solução para um problema real — apresentada no palco. Fui também da equipe que construiu o Memórias, protótipo para a APAE, e quem apresentou o pitch.",
      ligacao: "memorias" as const,
    },
    {
      titulo: "Semana de Estudos",
      duracao: "Ciclo de palestras",
      texto:
        "Da captação à execução: fomos atrás de palestrantes e de patrocínio, organizamos a estrutura e o coffee break, e em alguns dos dias eu abri e encerrei o evento no palco.",
    },
  ],
  competencias: [
    "Captação de patrocínio",
    "Articulação com palestrantes",
    "Organização de evento",
    "Condução de palco",
  ],
} as const;
