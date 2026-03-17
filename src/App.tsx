import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Award, BookOpen, Users, Sparkles, 
  Layout, Share2, Mail, CheckCircle2, ArrowRight, Lock, Trash2, Plus
} from 'lucide-react';
import { cn } from './lib/utils';
import { INITIAL_PORTFOLIO, type PortfolioItem } from './constants';

// --- Components ---

const Navbar = ({ onAdminClick }: { onAdminClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight">강사 아는디자이너</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#lectures" className="hover:text-brand-gold transition-colors">Lectures</a>
          <a href="#profile" className="hover:text-brand-gold transition-colors">Profile</a>
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          <button 
            onClick={onAdminClick}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
            title="Admin"
          >
            <Lock size={18} />
          </button>
        </div>

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="bg-brand-light">
    {/* Spline Viewer as Hero Visual */}
    <div className="relative h-[70vh] w-full overflow-hidden">
      <spline-viewer 
        url="https://prod.spline.design/DIPq5AKm98mJTwLS/scene.splinecode"
        className="w-full h-full"
      />
    </div>

    {/* Content Section Below */}
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-full">
          AI & Design Branding Expert
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-brand-dark">
          AI와 디자인으로 <br />
          <span className="italic text-brand-gold">‘나를 브랜딩하는 방법’</span>을 <br />
          알려드립니다
        </h1>
        <p className="text-lg text-brand-dark/70 mb-10 max-w-lg leading-relaxed">
          공공기관과 학교에서 바로 적용 가능한 <br />
          생성형 AI · 디자인 · SNS 브랜딩 실전 강의
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="px-8 py-4 bg-brand-dark text-white rounded-full font-medium hover:bg-brand-dark/90 transition-all flex items-center gap-2 group">
            강의 문의하기
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 border border-brand-dark/20 rounded-full font-medium hover:bg-brand-dark/5 transition-all">
            강의 소개서 요청하기
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { label: "디자인 실무 경험", value: "24년", icon: Layout },
    { label: "북디자이너 경력", value: "9년", icon: BookOpen },
    { label: "강의 진행 횟수", value: "500+", icon: Users },
    { label: "AI 융합 전문", value: "Expert", icon: Sparkles },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                <stat.icon className="text-brand-dark group-hover:text-brand-gold transition-colors" size={28} />
              </div>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest opacity-50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LectureCategories = () => {
  const categories = [
    {
      title: "생성형 AI 활용 강의",
      description: "AI를 도구로 사용하는 수준을 넘어 실제 업무와 콘텐츠 제작에 적용할 수 있도록 설계된 강의",
      items: ["ChatGPT 실전 활용", "콘텐츠 자동화", "AI 기반 글쓰기 & 아이디어 생성"],
      result: "AI를 활용해 직접 콘텐츠를 만들 수 있게 됨",
      icon: Sparkles
    },
    {
      title: "캔바 디자인 강의",
      description: "디자인을 몰라도 가능한 실전형 디자인 제작 강의",
      items: ["카드뉴스 제작", "강의자료 디자인", "SNS 콘텐츠 디자인"],
      result: "디자인 외주 없이 스스로 콘텐츠 제작 가능",
      icon: Layout
    },
    {
      title: "SNS 브랜딩 강의",
      description: "나를 드러내는 방법을 모르는 사람을 위한 퍼스널 브랜딩 실전 전략",
      items: ["SNS 콘텐츠 기획", "브랜딩 메시지 설계", "지속 가능한 콘텐츠 구조 만들기"],
      result: "나만의 브랜드 방향과 콘텐츠 기준이 생김",
      icon: Share2
    }
  ];

  return (
    <section id="lectures" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">강의 분야 소개</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl luxury-shadow flex flex-col">
              <div className="w-14 h-14 bg-brand-dark text-white rounded-2xl flex items-center justify-center mb-8">
                <cat.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
              <p className="text-sm text-brand-dark/60 mb-8 leading-relaxed">{cat.description}</p>
              
              <ul className="space-y-3 mb-10 flex-grow">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-brand-light">
                <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Expected Result</p>
                <p className="text-sm font-medium">{cat.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeyLectures = () => {
  const lectures = [
    {
      title: "생성형 AI로 나만의 콘텐츠 시스템 만들기",
      target: ["AI를 써봤지만 제대로 활용하지 못하는 분", "콘텐츠 제작 시간이 오래 걸리는 분", "강의/업무에 AI를 적용하고 싶은 분"],
      content: ["ChatGPT를 활용한 콘텐츠 제작 구조", "AI를 활용한 글쓰기 시스템 구축", "반복 가능한 콘텐츠 제작 방법", "실습 중심 적용"],
      outcome: ["AI로 콘텐츠를 직접 제작 가능", "콘텐츠 제작 시간 단축", "지속 가능한 콘텐츠 구조 확보"]
    },
    {
      title: "캔바로 완성하는 실전 디자인",
      target: ["디자인이 어려운 강사 및 실무자", "빠르게 콘텐츠를 만들어야 하는 분"],
      content: ["캔바 기본 구조 이해", "카드뉴스 및 강의자료 제작", "디자인 템플릿 활용 전략"],
      outcome: ["디자인을 직접 제작 가능", "콘텐츠 퀄리티 향상", "외주 의존도 감소"]
    },
    {
      title: "SNS 브랜딩 전략 강의",
      target: ["나를 어떻게 표현해야 할지 막막한 분", "콘텐츠 방향이 없는 분"],
      content: ["퍼스널 브랜딩 구조 이해", "콘텐츠 기획 방법", "지속 가능한 SNS 운영 전략"],
      outcome: ["나만의 브랜드 방향 정립", "콘텐츠 기획 기준 확보", "SNS 운영 지속 가능"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">대표 강의</h2>
          <p className="text-brand-dark/50 uppercase tracking-[0.3em] text-xs">Core Programs</p>
        </div>

        <div className="space-y-12">
          {lectures.map((lec, idx) => (
            <div key={idx} className="grid md:grid-cols-[1fr_2fr] gap-8 bg-brand-light rounded-3xl overflow-hidden border border-brand-dark/5">
              <div className="bg-brand-dark p-12 text-white flex flex-col justify-center">
                <h3 className="text-3xl font-bold leading-tight mb-8">{lec.title}</h3>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest opacity-50">추천 대상</p>
                  <ul className="space-y-2">
                    {lec.target.map((t, i) => (
                      <li key={i} className="text-sm opacity-80 flex gap-2">
                        <span className="text-brand-gold">•</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-12 grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-6">Lecture Content</p>
                  <ul className="space-y-4">
                    {lec.content.map((c, i) => (
                      <li key={i} className="text-sm font-medium flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-6">After Change</p>
                  <ul className="space-y-4">
                    {lec.outcome.map((o, i) => (
                      <li key={i} className="text-sm font-medium flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-brand-gold" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { text: "AI를 이렇게 실무에 바로 적용할 수 있을 줄 몰랐습니다.", author: "공공기관 교육 담당자" },
    { text: "디자인을 전혀 못했는데, 강의 후 바로 콘텐츠를 만들 수 있게 되었습니다.", author: "강의 참여자" },
    { text: "이론이 아니라 실제로 적용되는 강의라 만족도가 높았습니다.", author: "교육 참가자" },
  ];

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">수강생 후기</h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs">Testimonials</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-brand-gold mb-6">
                <Sparkles size={32} />
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">“{rev.text}”</p>
              <p className="text-sm opacity-50">— {rev.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Profile = () => (
  <section id="profile" className="py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
        <div className="relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden luxury-shadow">
            <img 
              src="https://picsum.photos/seed/profile/800/1000" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-brand-gold rounded-tr-3xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-brand-gold rounded-bl-3xl" />
        </div>

        <div>
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase mb-4 block">Instructor Profile</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">AI와 디자인을 연결하는 강사</h2>
          
          <div className="space-y-6 mb-10">
            {[
              "24년 경력 디자이너",
              "9년 북디자이너",
              "1인 출판사 운영",
              "AI + 디자인 융합 강의 진행"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-brand-dark/70 leading-relaxed text-lg mb-8">
            디자인 실무 경험을 기반으로 AI를 활용해 누구나 콘텐츠를 만들 수 있도록 돕는 강의를 진행하고 있습니다. 
            단순한 도구 사용법을 넘어, 결과물을 만들어내는 실전 프로세스를 공유합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = ({ items }: { items: PortfolioItem[] }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">강의 사례</h2>
          <p className="text-brand-dark/50 uppercase tracking-[0.3em] text-xs">Portfolio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div 
              layout
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative luxury-shadow">
                <img 
                  src={item.imageUrls[0]} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                    View Gallery ({item.imageUrls.length})
                  </div>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">{item.category}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-brand-dark/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio Gallery Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden luxury-shadow max-h-[90vh] flex flex-col"
            >
              <div className="p-8 border-b border-brand-light flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-1">{selectedItem.category}</p>
                  <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                </div>
                <button onClick={() => setSelectedItem(null)} className="p-2 hover:bg-black/5 rounded-full transition-colors"><X /></button>
              </div>
              <div className="p-8 overflow-y-auto flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedItem.imageUrls.map((url, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden luxury-shadow">
                      <img src={url} alt="" className="w-full h-auto" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-8 bg-brand-light rounded-3xl">
                  <h4 className="font-bold mb-4">강의 상세 내용</h4>
                  <p className="text-brand-dark/70 leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-brand-light border-t border-brand-dark/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-brand-dark rounded-[40px] p-12 md:p-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        
        <div className="grid lg:grid-cols-2 gap-16 relative z-10 text-left">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">강의 문의</h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl leading-relaxed">
              이메일로 직접 문의하시거나, 아래 폼을 작성해 주세요. <br />
              강의 일정 및 커리큘럼을 빠르게 안내드립니다. <br />
              보통 24시간 내 답변드립니다.
            </p>

            <div className="space-y-8">
              <a 
                href="mailto:sejin3004@naver.com" 
                className="text-2xl md:text-3xl font-bold text-brand-gold hover:underline underline-offset-8 block"
              >
                sejin3004@naver.com
              </a>
              <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-sm opacity-60 inline-block">
                강의 대상 / 일정 / 인원 함께 보내주시면 빠르게 안내드립니다
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-white/10">
            <form action="https://formspree.io/f/mbdzplne" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-gold">이름</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="성함을 입력해 주세요"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-gold">연락처</label>
                  <input 
                    type="tel" 
                    name="contact" 
                    required 
                    placeholder="010-0000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-gold">이메일</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="example@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-gold">문의 내용</label>
                <textarea 
                  name="message" 
                  required 
                  placeholder="강의 주제, 일정, 대상 등 상세 내용을 입력해 주세요"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-2"
              >
                문의 보내기
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-brand-light border-t border-brand-dark/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">A</span>
        </div>
        <span className="text-lg font-bold tracking-tight">강사 아는디자이너</span>
      </div>
      <p className="text-xs text-brand-dark/40">© 2026 강사 아는디자이너. All rights reserved.</p>
      <div className="flex gap-6 text-xs uppercase tracking-widest font-medium opacity-60">
        <a href="#" className="hover:text-brand-gold">Privacy</a>
        <a href="#" className="hover:text-brand-gold">Terms</a>
      </div>
    </div>
  </footer>
);

// --- Admin Panel ---

const AdminPanel = ({ 
  isOpen, 
  onClose, 
  portfolio, 
  onUpdatePortfolio 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  portfolio: PortfolioItem[];
  onUpdatePortfolio: (items: PortfolioItem[]) => void;
}) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newItem, setNewItem] = useState({ title: '', category: '', description: '', imageUrls: [] as string[] });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    (Array.from(files) as File[]).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem(prev => ({
          ...prev,
          imageUrls: [...prev.imageUrls, reader.result as string]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setNewItem(prev => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((_, i) => i !== index)
    }));
  };

  const handleAddItem = () => {
    if (!newItem.title) return;
    const item: PortfolioItem = {
      ...newItem,
      id: Date.now().toString(),
      imageUrls: newItem.imageUrls.length > 0 
        ? newItem.imageUrls 
        : [`https://picsum.photos/seed/${Date.now()}/800/600`]
    };
    onUpdatePortfolio([...portfolio, item]);
    setNewItem({ title: '', category: '', description: '', imageUrls: [] });
  };

  const handleDeleteItem = (id: string) => {
    onUpdatePortfolio(portfolio.filter(item => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden luxury-shadow max-h-[90vh] flex flex-col"
      >
        <div className="p-8 border-b border-brand-light flex justify-between items-center bg-brand-light">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full"><X /></button>
        </div>

        <div className="p-8 overflow-y-auto flex-grow">
          {!isAuthenticated ? (
            <div className="max-w-sm mx-auto py-20 text-center">
              <Lock className="mx-auto mb-6 text-brand-gold" size={48} />
              <h3 className="text-xl mb-6">관리자 로그인이 필요합니다</h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password (1111)"
                  className="w-full px-6 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  autoFocus
                />
                <button type="submit" className="w-full py-3 bg-brand-dark text-white rounded-xl font-bold">Login</button>
              </form>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Add New Section */}
              <div className="bg-brand-light p-8 rounded-2xl">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Plus size={20} /> 새 포트폴리오 추가
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    placeholder="제목" 
                    value={newItem.title}
                    onChange={e => setNewItem({...newItem, title: e.target.value})}
                    className="px-4 py-2 rounded-lg border border-brand-dark/10"
                  />
                  <input 
                    placeholder="카테고리" 
                    value={newItem.category}
                    onChange={e => setNewItem({...newItem, category: e.target.value})}
                    className="px-4 py-2 rounded-lg border border-brand-dark/10"
                  />
                  <textarea 
                    placeholder="설명" 
                    value={newItem.description}
                    onChange={e => setNewItem({...newItem, description: e.target.value})}
                    className="px-4 py-2 rounded-lg border border-brand-dark/10 md:col-span-2 h-32"
                  />
                  
                  <div className="md:col-span-2 space-y-4">
                    <label className="block text-sm font-bold opacity-60">이미지 업로드 (여러 장 선택 가능)</label>
                    <div className="flex flex-wrap gap-4">
                      {newItem.imageUrls.map((url, idx) => (
                        <div key={idx} className="relative w-24 h-24 rounded-lg overflow-hidden group">
                          <img src={url} className="w-full h-full object-cover" alt="" />
                          <button 
                            onClick={() => removeImage(idx)}
                            className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                      <label className="w-24 h-24 rounded-lg border-2 border-dashed border-brand-dark/10 flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 transition-colors">
                        <Plus size={24} className="text-brand-dark/20" />
                        <span className="text-[10px] font-bold opacity-40 mt-1">Upload</span>
                        <input 
                          type="file" 
                          multiple 
                          accept="image/*" 
                          onChange={handleImageUpload} 
                          className="hidden" 
                        />
                      </label>
                    </div>
                  </div>

                  <button 
                    onClick={handleAddItem}
                    className="md:col-span-2 py-3 bg-brand-gold text-white rounded-lg font-bold hover:bg-brand-gold/90 transition-colors"
                  >
                    추가하기
                  </button>
                </div>
              </div>

              {/* List Section */}
              <div>
                <h3 className="text-lg font-bold mb-6">포트폴리오 목록</h3>
                <div className="space-y-4">
                  {portfolio.map(item => (
                    <div key={item.id} className="flex items-center gap-6 p-4 border border-brand-dark/5 rounded-xl hover:bg-brand-light transition-colors">
                      <img src={item.imageUrls[0]} className="w-20 h-20 object-cover rounded-lg" alt="" />
                      <div className="flex-grow">
                        <p className="text-xs font-bold text-brand-gold">{item.category}</p>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-sm opacity-60 line-clamp-1">{item.description}</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_items');
    if (saved) {
      setPortfolio(JSON.parse(saved));
    } else {
      setPortfolio(INITIAL_PORTFOLIO);
    }
  }, []);

  const updatePortfolio = (newItems: PortfolioItem[]) => {
    setPortfolio(newItems);
    localStorage.setItem('portfolio_items', JSON.stringify(newItems));
  };

  return (
    <div className="min-h-screen selection:bg-brand-gold/30">
      <Navbar onAdminClick={() => setIsAdminOpen(true)} />
      
      <main>
        <Hero />
        <Stats />
        <LectureCategories />
        <KeyLectures />
        <Testimonials />
        <Profile />
        <Portfolio items={portfolio} />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {isAdminOpen && (
          <AdminPanel 
            isOpen={isAdminOpen} 
            onClose={() => setIsAdminOpen(false)} 
            portfolio={portfolio}
            onUpdatePortfolio={updatePortfolio}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
