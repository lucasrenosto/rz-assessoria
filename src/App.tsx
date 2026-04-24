/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Gavel, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Building2, 
  LineChart, 
  Handshake,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  X,
  Menu,
  Shield,
  Zap,
  BookOpen,
  Lock,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface LeadData {
  goal: string;
  capital: string;
  experience: string;
  name: string;
  phone: string;
}

const steps = [
  { 
    id: 'goal', 
    question: 'O que predomina em seus investimentos:', 
    options: [
      'Estou começando a investir', 
      'Renda fixa ou imóveis', 
      'Renda variável', 
      'Invisto em negócio próprio', 
      'Diversifico meus investimentos'
    ] 
  },
  {
    id: 'capital',
    question: 'Qual seu capital disponível para investimento?',
    options: ['até R$15k', 'de R$15k a R$25k', 'de R$25k a R$80k', 'de R$80k a R$300k', 'acima de R$300k']
  },
  {
    id: 'experience',
    question: 'Você já possui experiência com leilões de imóveis?',
    options: ['Nunca arrematei', 'Estudo, mas não opero', 'Já arrematei 1 ou 2', 'Investidor Recorrente (3+)']
  }
];

// --- Components ---

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-navy border-b border-white/10 shadow-lg py-4" : "bg-brand-navy md:bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded">
            <span className="text-brand-navy font-bold text-xl font-serif">RZ</span>
          </div>
          <span className="text-white font-serif text-lg tracking-widest uppercase hidden sm:block">Assessoria</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400">
          <a href="#resultados" className="hover:text-brand-gold transition-colors">Cases</a>
          <a href="#operaçao" className="hover:text-brand-gold transition-colors">Operação</a>
          <a href="#jornada" className="hover:text-brand-gold transition-colors">Jornada</a>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-quiz'))}
            className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all uppercase text-[10px] tracking-widest font-bold"
          >
            Membro RZ
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0a0f1e] z-[60] flex flex-col p-10 pt-32 gap-8 text-center"
          >
            <button className="absolute top-8 right-6 text-white" onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            {[
              { label: "Cases", id: "resultados" },
              { label: "Operação", id: "operaçao" },
              { label: "Jornada", id: "jornada" }
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-white hover:text-brand-gold transition-colors">
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => { setIsMenuOpen(false); window.dispatchEvent(new CustomEvent('open-quiz')); }}
              className="mt-4 px-8 py-5 amber-gradient text-brand-navy font-bold uppercase tracking-widest text-xs"
            >
              Quero Ser Membro RZ
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden bg-brand-navy text-white">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/30 to-transparent pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 inline-flex items-center space-x-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-wider text-brand-gold font-bold font-mono">Onde o mercado vê risco, nós entregamos performance</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif font-light leading-[1] mb-8"
        >
          Multiplique seu patrimônio <br/>
          <span className="serif-italic">com imóveis de leilão.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl"
        >
          Transformamos a complexidade dos leilões em rentabilidade sólida. Nossa metodologia 360º é focada em investidores que buscam segurança e resultados consistentes.
        </motion.p>
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-10 items-start md:items-center"
          >
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-quiz'))}
              className="px-10 py-6 amber-gradient text-brand-navy font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2 group hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all"
              id="hero-cta-quiz"
            >
              Quero Ser Membro RZ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="border-l border-brand-gold/30 pl-10 max-w-xs">
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl font-serif italic text-slate-300 leading-relaxed"
              >
                "Transformamos oportunidades ocultas em <span className="text-brand-gold">patrimônio líquido real.</span>"
              </motion.p>
            </div>
          </motion.div>
      </div>

      <div className="md:col-span-5 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-10 luxury-glass rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
             <LineChart className="w-32 h-32 text-brand-gold/5" />
          </div>
          <h2 className="text-2xl font-serif mb-6 text-brand-gold font-light">Indicadores de Performance</h2>
          <div className="space-y-5">
            {[
              { label: "Rentabilidade", val: "40% a.a. (ROI Base)" },
              { label: "Track Record", val: "+100 Arrematações" },
              { label: "Liquidez Média", val: "< 9 meses" },
              { label: "Segurança", val: "Margem Conservadora" }
            ].map((stat, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
                <span className="text-base font-mono text-slate-300">{stat.val}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">
            Focado em imóveis populares de alta rentabilidade e ativos de padrão superior com margem de segurança.
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CaseCard = ({ title, location, roi, bought, sold, image, liquidity }: any) => (
  <div className="min-w-[85vw] md:min-w-0 bg-brand-accent/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-brand-gold/50 transition-all group snap-center">
    <div className="h-64 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/20 transition-colors" />
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-2xl font-serif text-white mb-1">{title}</h3>
        <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">{location}</div>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl font-mono font-bold text-brand-gold">{roi}</div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold text-right">Retorno<br/>Líquido</div>
      </div>
      <div className="grid grid-cols-2 gap-6 border-t border-slate-700 pt-6">
        <div>
          <span className="text-[9px] uppercase font-bold text-slate-500 block mb-1">Arrematação</span>
          <span className="font-mono text-sm">{bought}</span>
        </div>
        <div>
          <span className="text-[9px] uppercase font-bold text-slate-500 block mb-1">Vendido por</span>
          <span className="font-mono text-sm text-slate-200">{sold}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-700/30 flex justify-between items-center">
        <span className="text-[9px] uppercase font-bold text-brand-gold/60 tracking-widest">Liquidez da Operação</span>
        <span className="text-[10px] font-mono text-slate-400 uppercase">{liquidity}</span>
      </div>
    </div>
  </div>
);

const ResultsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="resultados" className="py-24 bg-brand-navy border-t border-slate-800 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 font-mono"
            >
              Performance Histórica
            </motion.h2>
            <p className="text-5xl md:text-6xl font-serif font-light text-slate-100">
              Conheça alguns de nossos <span className="serif-italic">cases reais.</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-right text-slate-500 text-xs uppercase tracking-widest font-bold">Explore nossos<br/>resultados</div>
             <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="w-12 h-12 border border-slate-700 flex items-center justify-center text-slate-400 rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-12 h-12 border border-slate-700 flex items-center justify-center text-brand-gold rounded-full hover:bg-brand-gold hover:text-brand-navy transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
             </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide"
        >
        <CaseCard 
          title="Casa" 
          location="GOIÁS" 
          roi="84%" 
          bought="R$ 31.944" 
          sold="R$ 120.000" 
          image="https://i.imgur.com/CZUrLeT.jpeg"
          liquidity="menos de 9 meses"
        />
        <CaseCard 
          title="Apto" 
          location="PARAÍBA" 
          roi="49%" 
          bought="R$ 55.117,68" 
          sold="R$ 148.000,00" 
          image="https://i.imgur.com/qpN4u6s.jpeg"
          liquidity="menos de 10 meses"
        />
        <CaseCard 
          title="Casa" 
          location="MINAS GERAIS" 
          roi="29%" 
          bought="R$ 64.500" 
          sold="R$ 160.000" 
          image="https://i.imgur.com/tElMEkY.jpeg"
          liquidity="menos de 6 meses"
        />
        <CaseCard 
          title="Casa" 
          location="PARAÍBA" 
          roi="40%" 
          bought="R$ 59.516,05" 
          sold="R$ 150.000,00" 
          image="https://i.imgur.com/Zy0y4Q3.jpeg"
          liquidity="menos de 9 meses"
        />
      </motion.div>
    </motion.div>
  </section>
  );
};

const OperationSection = () => {
  const [activeTab, setActiveTab] = useState<'method' | 'roles' | 'trust'>('method');

  const methods = [
    { title: "Inteligência & IA", desc: "IA própria para garimpagem de oportunidades e scanners validados por grandes investidores. Realizamos a leitura diária de milhares de editais, antecipando tendências e identificando ativos com margens acima da média de mercado.", icon: <TrendingUp className="w-5 h-5"/> },
    { title: "Rede de Blindagem", desc: "Conexão direta com rede de advogados, instituições financeiras, cartórios, corretores experientes e empreiteiros com expertise em valorização, garantindo segurança jurídica e negociações imbatíveis de reforma.", icon: <Users className="w-5 h-5"/> },
    { title: "Fluxo de Giro Ágil", desc: "Processos amadurecidos de desocupação e regularização documental, eliminando gargalos burocráticos e acelerando drasticamente o ciclo de reinvestimento do capital aportado pelos nossos membros.", icon: <Zap className="w-5 h-5"/> }
  ];

  const tiers = [
    { 
      name: "ASSESSORES", 
      tasks: [
        "Due Diligence Jurídica 360: Análise profunda de riscos e passivos do imóvel e do devedor.", 
        "Arrematação e Regularização: Execução técnica no leilão e baixa de todas as restrições pós-venda.", 
        "Gestão de Obras e Engenharia: Reformas estratégicas focadas em maximizar o VGV (Valor Geral de Venda).", 
        "Liquidez e Venda Estratégica: Desinvestimento acelerado através de rede exclusiva de corretores parceiros."
      ] 
    },
    { 
      name: "MEMBROS RZ", 
      tasks: [
        "Aporte de Capital: Definição do volume investido conforme o perfil de risco e metas individuais.", 
        "Assinatura de Ativos: Formalização da propriedade ou participação conforme a modalidade de aporte.", 
        "Reports Executivos: Acompanhamento de cada fase da operação através de relatórios detalhados.", 
        "Recebimento de Lucros: Liquidação do capital e recebimento dos dividendos após a venda do ativo."
      ] 
    }
  ];

  return (
    <section id="operaçao" className="py-24 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-12">
            <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 font-mono"
          >
            Metodologia & Governança
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif text-brand-navy leading-tight italic mb-12"
          >
            Protocolo de <br/> <span className="text-brand-gold serif-italic">Excelência.</span>
          </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                <div className="flex flex-col sm:flex-row gap-2 p-1 bg-slate-200/50 rounded-2xl md:rounded-xl w-full sm:w-fit mb-10">
                  {[
                    { id: 'method', label: 'Metodologia' },
                    { id: 'trust', label: 'Governança' },
                    { id: 'roles', label: 'Responsabilidades' }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-6 py-3.5 sm:py-2.5 text-[10px] md:text-[9px] uppercase tracking-widest font-bold transition-all rounded-xl md:rounded-lg ${activeTab === tab.id ? 'bg-brand-navy text-white shadow-lg' : 'text-slate-500 hover:text-brand-navy'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="min-h-[300px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'method' && (
                      <motion.div 
                        key="method"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
                      >
                        {methods.map((m, i) => (
                          <div key={i} className={`p-8 bg-white rounded-3xl border border-slate-200 group hover:border-brand-gold/40 transition-all shadow-sm flex flex-col h-full ${i === 2 ? 'md:col-span-2' : ''}`}>
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                              {m.icon}
                            </div>
                            <h4 className="font-serif font-bold text-xl text-brand-navy mb-3">{m.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-light flex-grow">{m.desc}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === 'trust' && (
                      <motion.div 
                        key="trust"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-6 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors">
                              <ShieldCheck className="w-16 h-16" />
                           </div>
                           <h4 className="text-xl font-serif text-brand-navy mb-6 italic">Pilar de Confiança Real</h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-10">
                              <div className="space-y-3">
                                 <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Compliance & Governança</p>
                                 <p className="text-slate-400 text-sm leading-relaxed font-normal">Assinatura de contratos robustos para total segurança antes de qualquer transação financeira.</p>
                              </div>
                              <div className="space-y-3">
                                 <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Transparência Auditada</p>
                                 <p className="text-slate-400 text-sm leading-relaxed font-normal">Fornecemos acesso integral a certidões, documentos jurídicos e comprovantes de cada operação.</p>
                              </div>
                           </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'roles' && (
                      <motion.div 
                        key="roles"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {tiers.map((t, i) => (
                          <div key={i} className="bg-brand-navy p-8 rounded-[2.5rem] border border-white/10 shadow-xl">
                            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.4em] font-mono mb-6 text-brand-gold">{t.name}</h4>
                            <div className="space-y-4">
                              {t.tasks.map((task, j) => (
                                <div key={j} className="flex items-start gap-3 text-slate-300">
                                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                  <span className="text-xs md:text-sm font-light leading-relaxed">{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                      <span className="text-brand-navy font-bold text-xs uppercase tracking-widest">Remuneração</span>
                      <div className="px-2 py-1 bg-brand-gold/10 rounded font-mono text-[9px] text-brand-gold font-bold">MODELO ALINHADO</div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    Operamos com dois modelos: <strong>taxa fixa na arrematação</strong> ou <strong>percentual de lucro</strong>. Em ambos os casos, nossa previsão entregue já considera todos os custos.
                  </p>
                </div>

                <div className="p-8 bg-brand-navy rounded-3xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-4 font-mono">Performance</h4>
                  <p className="text-white text-sm font-serif italic italic leading-relaxed">
                    Nossa curadoria foca em ativos com potencial de retorno real acima da média do mercado imobiliário tradicional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const PartnersSection = () => (
  <section className="py-32 bg-slate-50 border-y border-slate-200 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-12 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-brand-navy leading-tight italic mb-4"
          >
            Mestres por trás da <span className="text-brand-gold">Seleção de Ativos.</span>
          </motion.h2>
          <p className="text-slate-500 font-light text-xl max-w-2xl leading-relaxed">
            Mais do que assessores, somos investidores que dominam a técnica e a execução no campo de batalha dos leilões.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-lg shrink-0">
                  <img src="https://i.imgur.com/rVzxwj2.png" alt="Antônio Zambianco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div>
                  <div className="flex items-center gap-2 text-[9px] font-bold text-brand-gold uppercase tracking-[0.3em] font-mono mb-1">
                    Fundador & Estrategista
                  </div>
                  <h3 className="text-2xl font-serif text-brand-navy">Antônio Zambianco</h3>
               </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
              Especialista em Estratégia de Dados e Modelagem Financeira. Com passagens pela Bain & Company e liderança em Data & AI no iFood, Antônio utiliza análise preditiva de alta complexidade para identificar as melhores oportunidades de leilão, garantindo máxima rentabilidade e decisões baseadas em dados para os investidores.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-brand-navy/5 rounded-lg border border-slate-200 text-[9px] font-bold uppercase tracking-widest text-slate-500">Data Intelligence</div>
               <div className="px-4 py-2 bg-brand-navy/5 rounded-lg border border-slate-200 text-[9px] font-bold uppercase tracking-widest text-slate-500">Strategic Analytics</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-lg shrink-0">
                  <img src="https://i.imgur.com/iADBxuC.jpeg" alt="Lucas Renosto" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div>
                  <div className="flex items-center gap-2 text-[9px] font-bold text-brand-gold uppercase tracking-[0.3em] font-mono mb-1">
                    Fundador & Operações
                  </div>
                  <h3 className="text-2xl font-serif text-brand-navy">Lucas Renosto</h3>
               </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
              Engenheiro Civil pela USP e fundador da BYB, agência de performance com 8 anos de mercado. Com vasta experiência em estratégias de aquisição para o setor imobiliário e financeiro, Lucas utiliza o rigor analítico e a inteligência de dados para acelerar a liquidez dos ativos e garantir o máximo retorno sobre o capital investido.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-brand-navy/5 rounded-lg border border-slate-200 text-[9px] font-bold uppercase tracking-widest text-slate-500">Marketing de Performance</div>
               <div className="px-4 py-2 bg-brand-navy/5 rounded-lg border border-slate-200 text-[9px] font-bold uppercase tracking-widest text-slate-500">Growth Strategy</div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-video lg:aspect-square bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply z-10" />
            <img 
              src="https://i.imgur.com/CB1VP0J.png" 
              alt="Sócios RZ Assessoria em campo" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            {/* Repositioned Authority Badge with high contrast - moved lower */}
            <div className="absolute bottom-40 right-8 z-20 hidden md:block text-right">
              <div className="flex items-baseline gap-2 mb-2 justify-end drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                <span className="text-6xl font-serif text-brand-gold italic">100+</span>
                <span className="text-white text-[9px] uppercase font-bold tracking-[0.2em] font-mono">Arrematações</span>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-brand-navy/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-brand-gold">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <p className="text-white text-base font-bold uppercase tracking-tight leading-tight mb-1">
                      Validado com <br/> capital próprio.
                    </p>
                    <p className="text-brand-gold/60 text-[10px] font-medium uppercase tracking-widest">
                      Operamos onde dominamos.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-white/50 z-20 shadow-xl group-hover:translate-y-[-5px] transition-transform">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold shadow-lg">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-brand-navy font-bold text-lg leading-tight italic font-serif">"Onde há complexidade, nós entregamos rentabilidade auditada."</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const QuizModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<LeadData>>({});
  const [showFinal, setShowFinal] = useState(false);

  const handleOption = (value: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: value };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowFinal(true);
    }
  };

  const handleFinish = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const finalData = { ...answers, name: formData.get('name'), phone: formData.get('phone') } as LeadData;
    
    const message = `Olá! Completei meu Perfil de Investidor no site da RZ Assessoria.%0A%0A` +
      `*Objetivo:* ${finalData.goal}%0A` +
      `*Capital:* ${finalData.capital}%0A` +
      `*Experiência:* ${finalData.experience}%0A` +
      `*Investidor:* ${finalData.name}%0A` +
      `*Contato:* ${finalData.phone}`;
      
    window.open(`https://wa.me/5511985286428?text=${message}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-brand-navy/95 backdrop-blur-xl" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-3xl max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible bg-slate-900 border border-slate-700/50 rounded-3xl shadow-[0_0_80px_rgba(245,158,11,0.1)] p-6 md:p-14"
      >
        <div className="absolute top-0 right-0 p-4 md:p-8">
           <button onClick={onClose} className="text-slate-500 hover:text-brand-gold transition-colors">
              <X className="w-6 h-6" />
           </button>
        </div>

        {!showFinal ? (
          <div>
            <div className="text-[10px] md:text-[12px] uppercase font-bold tracking-[0.5em] text-brand-gold mb-6 md:mb-10 font-mono">Questionário de Admissão</div>
            <div className="flex gap-1 mb-8 md:mb-12">
              {steps.map((_, idx) => (
                <div key={idx} className={`h-1 flex-1 transition-colors ${idx <= currentStep ? 'bg-brand-gold' : 'bg-slate-800'}`} />
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-2xl md:text-5xl font-serif text-slate-100 mb-8 md:mb-12 leading-tight">
                  {steps[currentStep].question}
                </h3>
                <div className="grid gap-3">
                  {steps[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOption(option)}
                      className="group flex items-center justify-between p-4 md:p-6 rounded-xl border border-slate-700/50 hover:border-brand-gold/50 bg-slate-800/20 hover:bg-brand-gold/5 transition-all text-left"
                    >
                      <span className="font-light text-slate-400 group-hover:text-slate-100 text-lg md:text-2xl font-serif italic">{option}</span>
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-slate-700 group-hover:border-brand-gold group-hover:bg-brand-gold flex items-center justify-center transition-all shrink-0 ml-4">
                         <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-transparent group-hover:text-brand-navy" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {currentStep > 0 && (
              <button 
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-12 text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-brand-gold"
              >
                Retornar
              </button>
            )}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-[12px] uppercase font-bold tracking-[0.5em] text-brand-gold mb-6 font-mono text-center">Perfil Analisado</div>
            <h3 className="text-4xl md:text-6xl font-serif text-white text-center mb-6 italic leading-tight">Suas metas são realistas.</h3>
            <p className="text-slate-400 text-center mb-10 text-lg font-light max-w-md mx-auto">Para garantir a segurança, o próximo contato será realizado via canal exclusivo de WhatsApp.</p>
            
            <form onSubmit={handleFinish} className="grid gap-8 max-w-lg mx-auto">
              <div className="border-b border-slate-700 focus-within:border-brand-gold transition-colors pb-2">
                <input required name="name" type="text" placeholder="NOME COMPLETO" className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-700 font-mono text-sm md:text-lg tracking-widest py-4 uppercase" />
              </div>
              <div className="border-b border-slate-700 focus-within:border-brand-gold transition-colors pb-2">
                <input required name="phone" type="tel" placeholder="NÚMERO WHATSAPP" className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-700 font-mono text-sm md:text-lg tracking-widest py-4" />
              </div>
              <button 
                type="submit"
                className="mt-8 py-6 amber-gradient text-brand-navy font-bold uppercase tracking-[0.2em] text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all"
              >
                Solicitar Admissão no Grupo
              </button>
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const JourneySection = () => (
  <section id="jornada" className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
            <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 font-mono"
          >
            Seu próximo passo
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-navy font-serif text-6xl md:text-7xl leading-[0.9] font-light"
          >
            Jornada do <br/><span className="text-brand-gold italic serif-italic">Membro RZ.</span>
          </motion.h2>
        </div>
        <div className="max-w-xs">
          <p className="text-slate-500 text-sm leading-relaxed font-light">
            Sair do mercado amador exige um método de admissão rigoroso. Entenda como transformamos capital em patrimônio líquido.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Step 1: Admission & Growth Hub */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Analysis Sidebar - Simplified & Legible */}
          <div className="lg:col-span-4 bg-white rounded-[3rem] p-10 md:p-14 border border-slate-200 flex flex-col">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-gold mb-10 border border-slate-100">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-3xl md:text-4xl font-serif text-brand-navy mb-10 italic">Processo de Admissão</h4>
            
            <div className="space-y-8 flex-grow">
              <p className="text-slate-500 text-xl leading-relaxed font-light">
                Aplicamos uma breve análise para validar se o seu perfil é compatível com as teses de investimento do ecossistema RZ.
              </p>
            </div>

            <div className="pt-10 border-t border-slate-100 mt-10">
               <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-brand-gold rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">Critérios Técnicos</span>
               </div>
            </div>
          </div>

          {/* Central Hub Card - Deal Flow Focus */}
          <div className="lg:col-span-8 relative bg-brand-navy rounded-[3.5rem] p-12 md:p-20 overflow-hidden shadow-2xl flex flex-col justify-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--color-brand-gold),transparent)] mix-blend-overlay" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8 lg:space-y-12">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]" />
                   <span className="text-[11px] font-mono text-brand-gold tracking-[0.4em] font-bold uppercase">Deal Flow Exclusivo</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-serif text-white leading-[1.1] md:leading-[0.9] tracking-tighter italic">
                  Sua central de <br className="hidden md:block" />
                  <span className="text-brand-gold serif-italic font-light">oportunidades.</span>
                </h3>
                
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                  Não somos apenas consultores. Somos arrematadores. Após a aprovação do seu perfil, você entra no nosso canal de oportunidades reais.
                </p>
              </div>

              <div className="relative">
                 <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-5 md:p-10 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] xl:scale-110 xl:translate-x-6">
                    <div className="flex items-center gap-3 md:gap-5 mb-8 md:mb-10 border-b border-white/5 pb-6 md:pb-8">
                       <div className="relative shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                             <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-green-500" />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-[3px] border-slate-900 rounded-full" />
                       </div>
                        <div className="min-w-0 flex-grow">
                          <div className="text-white text-base md:text-xl font-serif italic mb-1 flex items-center gap-2 overflow-hidden">
                             <span className="truncate">Deal Flow</span>
                             <span className="text-brand-gold not-italic font-mono font-bold text-[8px] md:text-[9px] bg-brand-gold/20 px-2 py-0.5 rounded border border-brand-gold/20 shrink-0">RZ</span>
                             <span className="shrink-0">💎</span>
                          </div>
                          <div className="flex items-center gap-2 overflow-hidden">
                             <div className="flex items-center gap-1.5 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20 shrink-0">
                                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-green-500 text-[7px] md:text-[8px] font-bold tracking-[0.1em] uppercase">Online</span>
                             </div>
                             <div className="w-0.5 h-0.5 bg-white/20 rounded-full shrink-0" />
                             <span className="text-slate-500 text-[7px] md:text-[8px] font-medium tracking-[0.1em] uppercase truncate">Private Group</span>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="bg-white/5 p-4 md:p-5 rounded-2xl rounded-tl-none max-w-[90%] border border-white/5 shadow-inner">
                          <p className="text-slate-300 text-[13px] md:text-sm italic leading-relaxed">Novo Ativo: Comercial SP com ROI projetado de 38%.</p>
                       </div>
                       <button 
                         onClick={() => window.dispatchEvent(new CustomEvent('open-quiz'))}
                         className="w-full bg-brand-gold/10 p-5 rounded-2xl rounded-tl-none border border-brand-gold/30 flex items-center justify-between group/msg hover:bg-brand-gold transition-all duration-300"
                       >
                          <div className="text-brand-gold group-hover/msg:text-brand-navy text-xs font-bold font-mono tracking-[0.2em] uppercase transition-colors duration-300">COMPRAR COTA</div>
                          <ArrowRight className="w-4 h-4 text-brand-gold group-hover/msg:text-brand-navy opacity-50 group-hover/msg:translate-x-1 transition-all duration-300" />
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-navy border-t border-slate-800 pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
      <div className="md:col-span-6">
        <div className="flex items-center gap-3 mb-10 text-white">
          <div className="w-10 h-8 bg-brand-gold flex items-center justify-center rounded">
             <span className="text-brand-navy font-bold text-lg font-serif tracking-tighter">RZ</span>
          </div>
          <span className="font-bold text-xl uppercase tracking-widest">RZ Assessoria</span>
        </div>
        <p className="text-slate-500 max-w-sm mb-12 leading-relaxed text-sm">
          Sair do amadorismo é o primeiro passo para o lucro real. Nossa jornada é construída sobre fatos e rentabilidade auditada.
        </p>
        <div className="flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-600">
           <span>Curadoria</span>
           <span>Blindagem</span>
           <span>Gestão</span>
        </div>
      </div>
      
      <div className="md:col-span-3">
        <h4 className="font-bold mb-10 text-brand-gold uppercase text-[10px] tracking-[0.4em] font-mono">Institucional</h4>
        <ul className="space-y-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
          <li><a href="#operaçao" className="hover:text-white transition-colors">Operação</a></li>
          <li><a href="#jornada" className="hover:text-white transition-colors">Jornada</a></li>
        </ul>
      </div>
      
      <div className="md:col-span-3">
        <h4 className="font-bold mb-10 text-brand-gold uppercase text-[10px] tracking-[0.4em] font-mono">Atendimento</h4>
        <ul className="space-y-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <li className="text-white font-mono">(11) 98528-6428</li>
          <li className="lowercase">antonio.zambianco@gmail.com</li>
          <li className="pt-4 italic font-serif text-[10px] tracking-normal capitalize">São Paulo — Avenue, BR</li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mt-32 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[9px] uppercase tracking-[0.3em] font-bold">
      <div className="mb-4 md:mb-0">RZ Assessoria Imobiliária &copy; {new Date().getFullYear()}</div>
      <div className="italic font-serif normal-case tracking-normal text-slate-500">Excellence in High-Stake Auctions</div>
    </div>
  </footer>
);

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const handleOpenQuiz = () => setIsQuizOpen(true);
    window.addEventListener('open-quiz', handleOpenQuiz);
    return () => window.removeEventListener('open-quiz', handleOpenQuiz);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ResultsSection />
      <OperationSection />
      <PartnersSection />
      <JourneySection />
      
      {/* Dynamic CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-5 grayscale" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-10 leading-tight">Pronto para sair do amadorismo e escalar seu <span className="serif-italic">patrimônio?</span></h2>
          <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light">
            Nossa agenda de admissão é criteriosa para garantir a exclusividade e rentabilidade das nossas operações.
          </p>
          <button 
            onClick={() => setIsQuizOpen(true)}
            className="px-12 py-6 amber-gradient rounded-sm font-bold text-xs uppercase tracking-[0.3em] text-brand-navy shadow-2xl shadow-brand-gold/20 hover:scale-105 transition-transform"
          >
            Quero Ser Membro RZ
          </button>
        </motion.div>
      </section>

      <Footer />
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  );
}
