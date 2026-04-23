/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
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
  X
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
    question: 'Qual o seu objetivo principal ao investir em imóveis?',
    options: ['Renda Passiva (Aluguel)', 'Lucro Rápido (Revenda)', 'Preservação de Patrimônio', 'Ainda não tenho certeza']
  },
  {
    id: 'capital',
    question: 'Qual a sua faixa de capital disponível para investimento?',
    options: ['Cotas a partir de R$ 10.000', 'De R$ 50k a R$ 200k', 'De R$ 200k a R$ 500k', 'Acima de R$ 500k']
  },
  {
    id: 'experience',
    question: 'Você já possui experiência com leilões de imóveis?',
    options: ['Sou investidor frequente', 'Já tentei, mas achei complexo', 'Nunca investi em leilões', 'Estou apenas pesquisando']
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-slate-700/50 luxury-glass">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-10 bg-brand-gold flex items-center justify-center rounded">
          <span className="text-brand-navy font-bold text-xl font-serif tracking-tighter">RZ</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight uppercase leading-none text-slate-100">RZ Assessoria</span>
          <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-medium font-mono">Investimentos Imobiliários</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-400">
        <a href="#results" className="hover:text-brand-gold transition-colors">Portfólio</a>
        <a href="#methodology" className="hover:text-brand-gold transition-colors">Metodologia</a>
        <a href="#roles" className="hover:text-brand-gold transition-colors">Operação</a>
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('open-quiz'))}
          className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all uppercase text-[10px] tracking-widest font-bold"
          id="nav-cta"
        >
          Consultoria
        </button>
      </div>
    </div>
  </nav>
);

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
          <span className="text-[11px] uppercase tracking-wider text-brand-gold font-bold font-mono">Mais de 100 Arrematações de Sucesso</span>
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
            Iniciar Admissão
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex flex-col border-l border-slate-700 pl-10">
            <div className="text-5xl font-mono font-bold text-brand-gold leading-tight mb-1">40% a.a.</div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">ROI Médio Projetado</div>
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
          <h2 className="text-2xl font-serif mb-6 text-brand-gold">Curadoria de Ativos</h2>
          <div className="space-y-6">
            {[
              { label: "Checklist Jurídico", val: "Aprovado" },
              { label: "Oportunidades Filtradas", val: "Top 2%" },
              { label: "Liquidez Projetada", val: "< 9 meses" }
            ].map((stat, i) => (
              <div key={i} className="flex justify-between items-end border-b border-slate-700 pb-2">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
                <span className="text-xl font-mono text-slate-200">{stat.val}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CaseCard = ({ title, location, roi, bought, sold, image }: any) => (
  <div className="min-w-[85vw] md:min-w-0 bg-brand-accent/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-brand-gold/50 transition-all group snap-center">
    <div className="h-64 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/20 transition-colors" />
      <div className="absolute bottom-6 left-6 z-10">
        <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-1">{location}</div>
        <h3 className="text-2xl font-serif text-white">{title}</h3>
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
          <span className="text-[9px] uppercase font-bold text-slate-500 block mb-1">Resultado Final</span>
          <span className="font-mono text-sm text-slate-200">{sold}</span>
        </div>
      </div>
    </div>
  </div>
);

const ResultsSection = () => (
  <section id="results" className="py-24 bg-brand-navy border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 font-mono">Performance Histórica</h2>
          <p className="text-5xl md:text-6xl font-serif font-light text-slate-100">Conheça alguns de nossos <span className="serif-italic">cases reais.</span></p>
        </div>
        <div className="flex flex-col items-end">
           <div className="text-right text-slate-500 text-xs uppercase tracking-widest font-bold mb-2">Resultados Passados</div>
           <div className="h-0.5 w-32 bg-brand-gold" />
        </div>
      </div>
      
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide">
        <CaseCard 
          title="Casa Goiânia" 
          location="GOIÁS" 
          roi="84%" 
          bought="R$ 31.944" 
          sold="R$ 120.000" 
          image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
        />
        <CaseCard 
          title="Apto Oceânico" 
          location="PARAÍBA" 
          roi="49%" 
          bought="R$ 55.117" 
          sold="R$ 148.000" 
          image="https://images.unsplash.com/photo-1545324418-f1d3c5b53384?auto=format&fit=crop&q=80&w=800"
        />
        <CaseCard 
          title="Residência MG" 
          location="MINAS GERAIS" 
          roi="29%" 
          bought="R$ 64.500" 
          sold="R$ 160.000" 
          image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800"
        />
        <CaseCard 
          title="Apto Executive" 
          location="PARAÍBA" 
          roi="40%" 
          bought="R$ 59.516" 
          sold="R$ 150.000" 
          image="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800"
        />
      </div>
    </div>
  </section>
);

const MethodologySection = () => {
  const items = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Curadoria",
      desc: "Filtramos mais de 98% dos editais. Selecionamos apenas ativos com potencial de liquidez inferior a 12 meses."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Blindagem",
      desc: "Nossa esteira jurídica garante que 100% dos leilões em que entramos possuam segurança contratual absoluta."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Execução",
      desc: "Gestão completa do imobilizado. Do registro à reforma e venda, cuidamos de cada centavo injetado."
    }
  ];

  return (
    <section id="methodology" className="py-32 bg-slate-100 text-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-8 font-mono">Protocolo RZ</h2>
            <p className="text-5xl font-serif leading-tight mb-8">Nossa metodologia é o alicerce da sua <span className="italic text-brand-gold">segurança.</span></p>
            <p className="text-slate-600 text-lg mb-12">Não operamos sob suposições. Cada passo é orquestrado por dados reais do mercado secundário de imóveis.</p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-quiz'))}
              className="px-8 py-4 border-2 border-brand-navy font-bold text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all"
            >
              Conhecer Detalhes
            </button>
          </div>
          
          <div className="grid gap-8">
            {items.map((item, index) => (
              <div key={index} className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-slate-50 text-brand-gold rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const finalData = { ...answers, name: formData.get('name'), phone: formData.get('phone') } as LeadData;
    
    const message = `Olá! Completei meu Perfil de Investidor no site da RZ Assessoria.%0A%0A` +
      `*Objetivo:* ${finalData.goal}%0A` +
      `*Capital:* ${finalData.capital}%0A` +
      `*Experiência:* ${finalData.experience}%0A` +
      `*Investidor:* ${finalData.name}%0A` +
      `*Contato:* ${finalData.phone}`;
      
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
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
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/50 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.1)] p-8 md:p-16 mb-20"
      >
        <div className="absolute top-0 right-0 p-8">
           <button onClick={onClose} className="text-slate-500 hover:text-brand-gold transition-colors">
              <X className="w-6 h-6" />
           </button>
        </div>

        {!showFinal ? (
          <div>
            <div className="text-[10px] uppercase font-bold tracking-[0.5em] text-brand-gold mb-12 font-mono">Questionário de Admissão</div>
            <div className="flex gap-1 mb-16">
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
                <h3 className="text-3xl md:text-5xl font-serif text-slate-100 mb-12 leading-tight">
                  {steps[currentStep].question}
                </h3>
                <div className="grid gap-4">
                  {steps[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOption(option)}
                      className="group flex items-center justify-between p-6 rounded-xl border border-slate-700/50 hover:border-brand-gold/50 bg-slate-800/20 hover:bg-brand-gold/5 transition-all"
                    >
                      <span className="font-light text-slate-400 group-hover:text-slate-100 text-lg font-serif italic">{option}</span>
                      <div className="w-6 h-6 rounded-full border border-slate-700 group-hover:border-brand-gold group-hover:bg-brand-gold flex items-center justify-center transition-all">
                         <ChevronRight className="w-3 h-3 text-transparent group-hover:text-brand-navy" />
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
            <div className="text-[10px] uppercase font-bold tracking-[0.5em] text-brand-gold mb-8 font-mono text-center">Protocolo Finalizado</div>
            <h3 className="text-4xl md:text-5xl font-serif text-white text-center mb-6 italic">Suas metas são realistas.</h3>
            <p className="text-slate-500 text-center mb-12 max-w-sm mx-auto">Para garantir a privacidade dos nossos grupos, o próximo contato será realizado via canal exclusivo de WhatsApp.</p>
            
            <form onSubmit={handleFinish} className="grid gap-6 max-w-md mx-auto">
              <div className="border-b border-slate-700 focus-within:border-brand-gold transition-colors pb-2">
                <input required name="name" type="text" placeholder="NOME COMPLETO" className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-700 font-mono text-xs tracking-widest py-3" />
              </div>
              <div className="border-b border-slate-700 focus-within:border-brand-gold transition-colors pb-2">
                <input required name="phone" type="tel" placeholder="NÚMERO WHATSAPP" className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-700 font-mono text-xs tracking-widest py-3" />
              </div>
              <button 
                type="submit"
                className="mt-8 py-5 amber-gradient text-brand-navy font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all"
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

const RolesSection = () => (
  <section id="roles" className="py-24 bg-brand-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 font-mono">Operational Efficiency</h2>
        <p className="text-5xl font-serif font-light text-slate-100">Divisão de Papéis em <span className="serif-italic">Alta Performance.</span></p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
        <div className="p-16 bg-brand-navy group">
          <div className="text-brand-gold font-mono text-[10px] uppercase tracking-widest mb-10">Tier 1: Assessoria</div>
          <h3 className="text-3xl font-serif text-white mb-8">Nossa Responsabilidade</h3>
          <ul className="space-y-6">
            {[
              "Garimpagem e Identificação de Oportunidades",
              "Due Diligence Jurídica",
              "Arrematação em Vias Judiciais e Extrajudiciais",
              "Desocupação Ágil e Regularização",
              "Gestão de Obras e Engenharia de Valor",
              "Venda Estratégica e Liquidez de Patrimônio"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-slate-500 group-hover:text-slate-300 transition-colors">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                <span className="text-sm font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-16 bg-brand-navy group border-l border-slate-800/50">
          <div className="text-brand-gold font-mono text-[10px] uppercase tracking-widest mb-10">Tier 2: Investidor</div>
          <h3 className="text-3xl font-serif text-white mb-8">Sua Responsabilidade</h3>
          <ul className="space-y-6">
            {[
              "Aporte de Capital para Arrematação",
              "Assinatura e Formalização de Ativos",
              "Acompanhamento de Reports Executivos",
              "Recebimento de Lucros e Dividendos"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-slate-500 group-hover:text-slate-300 transition-colors">
                <div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-brand-gold rounded-full transition-colors" />
                <span className="text-sm font-medium tracking-wide italic">{item}</span>
              </li>
            ))}
          </ul>
        </div>
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
          <li><a href="#results" className="hover:text-white transition-colors">Portfólio de Ativos</a></li>
          <li><a href="#methodology" className="hover:text-white transition-colors">Protocolo Jurídico</a></li>
          <li><a href="#roles" className="hover:text-white transition-colors">Modelo Tier-Based</a></li>
        </ul>
      </div>
      
      <div className="md:col-span-3">
        <h4 className="font-bold mb-10 text-brand-gold uppercase text-[10px] tracking-[0.4em] font-mono">Atendimento</h4>
        <ul className="space-y-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <li className="text-white font-mono">(11) 99999-9999</li>
          <li className="lowercase">contato@rzassessoria.com.br</li>
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
      
      {/* Featured Metric */}
      <section className="bg-slate-900 py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="border-l border-brand-gold/30 pl-4 py-2">
              <div className="text-5xl font-mono font-bold text-brand-gold mb-3">+100</div>
              <div className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">Imóveis Arrematados</div>
            </div>
            <div className="border-l border-brand-gold/30 pl-4 py-2">
              <div className="text-5xl font-mono font-bold text-brand-gold mb-3">40% a.a.</div>
              <div className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">ROI Médio Projetado</div>
            </div>
            <div className="border-l border-brand-gold/30 pl-4 py-2">
              <div className="text-5xl font-mono font-bold text-brand-gold mb-3">100%</div>
              <div className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">Avaliado Juridicamente</div>
            </div>
          </div>
        </div>
      </section>

      <MethodologySection />
      <RolesSection />
      
      {/* Dynamic CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-5 grayscale" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-10 leading-tight">Pronto para sair do amadorismo e escalar seu <span className="serif-italic">patrimônio?</span></h2>
          <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light">
            Nossa agenda de admissão é criteriosa para garantir a exclusividade e rentabilidade das nossas operações.
          </p>
          <button 
            onClick={() => setIsQuizOpen(true)}
            className="px-12 py-6 amber-gradient rounded-sm font-bold text-xs uppercase tracking-[0.3em] text-brand-navy shadow-2xl shadow-brand-gold/20 hover:scale-105 transition-transform"
          >
            Iniciar Protocolo de Admissão
          </button>
        </div>
      </section>

      <Footer />
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  );
}
