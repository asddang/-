import React, { useState } from 'react';
import { 
  Globe, 
  Landmark, 
  Users, 
  IdCard, 
  Castle, 
  Shield, 
  TreeDeciduous, 
  Skull, 
  Activity, 
  PlusCircle, 
  MinusCircle,
  Ticket,
  Clock,
  Search,
  Scale,
  DoorOpen,
  ArrowRight,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="min-h-screen bg-[#111] py-8 px-4 font-['Noto_Sans_KR'] text-gray-900 flex justify-center selection:bg-gray-800 selection:text-white relative">
      
      {/* Navigation Arrows */}
      <div className="fixed top-6 left-6 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setPage(page === 0 ? 1 : 0)}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="fixed top-6 right-6 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setPage(page === 0 ? 1 : 0)}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
          aria-label="Next Page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Main Document Container */}
      <div className="w-full max-w-[640px] bg-[#f4f1ea] shadow-2xl relative overflow-hidden border-8 border-double border-[#2a2a2a]">
        
        {/* Header Section */}
        {page === 0 && (
          <header className="bg-[#1a1a1a] text-white pt-10 pb-8 px-6 flex flex-col items-center justify-center relative border-b-4 border-[#2a2a2a]">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-[#1a1a1a] to-[#1a1a1a]"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] text-gray-400 mb-2 font-['Noto_Serif_KR']">
                저승 국경 관리 사무소
              </h2>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center overflow-hidden bg-[#2a2a2a]">
                  <Globe className="w-6 h-6 text-gray-300" strokeWidth={1.5} />
                </div>
                <h1 className="text-5xl md:text-6xl font-black tracking-widest font-['Noto_Serif_KR']">
                  이민청
                </h1>
              </div>
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-gray-500 uppercase mt-1">
                Afterlife Immigration Office
              </p>
            </div>
          </header>
        )}

        {/* Content Wrapper */}
        <div className="p-4 md:p-6 space-y-6 relative">
          
          {page === 0 ? (
            <>
              <Page1Content />
              {/* Footer Area with Stamp (Shared on both pages) */}
              <div className="pt-12 pb-8 relative flex flex-col sm:flex-row items-center sm:items-end justify-between px-4 sm:px-8">
                
                {/* Stamp Container with Paperclip */}
                <div className="relative flex-shrink-0 mb-6 sm:mb-0 sm:absolute sm:left-12 sm:bottom-14 z-20">
                  
                  {/* Paperclip graphic purely in CSS */}
                  <div className="absolute -top-6 -left-4 w-8 h-16 border-[3px] border-[#999] rounded-full bg-transparent transform -rotate-[25deg] hidden sm:block shadow-sm z-30">
                     {/* Inner clip curve */}
                     <div className="absolute top-1 left-[2px] right-[2px] bottom-4 border-[3px] border-[#999] rounded-full border-b-0 rounded-b-none"></div>
                  </div>

                  {/* Official Stamp */}
                  <div className="border-[6px] border-red-600 text-red-600 px-5 py-4 transform -rotate-[8deg] opacity-90 mix-blend-multiply flex flex-col items-center justify-center pointer-events-none w-max min-w-[280px]">
                    <div className="font-black text-4xl tracking-widest font-['Noto_Serif_KR'] mb-1 whitespace-nowrap">
                      저승 이민청
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase border-t-2 border-red-600 pt-1 w-full text-center mt-1">
                      Official Document
                    </div>
                  </div>
                </div>

                {/* Spacer to push text to the right on desktop */}
                <div className="hidden sm:block flex-1"></div>

                {/* Text Content */}
                <div className="text-center sm:text-left font-bold text-sm md:text-[17px] text-gray-800 leading-loose font-['Noto_Serif_KR'] relative z-10 bg-[#f4f1ea] py-2 sm:pl-8 sm:pr-4">
                  모든 망자는<br/>적절한 절차를 거쳐<br/>그에 맞는 사후세계로<br/>이동하게 됩니다.
                </div>

                {/* Faint Background Logo at bottom right */}
                <div className="absolute right-2 bottom-0 opacity-[0.03] pointer-events-none">
                   <Globe className="w-32 h-32" />
                </div>

              </div>
            </>
          ) : (
            <Page2Content />
          )}

        </div>
      </div>
    </div>
  );
}

function Page1Content() {
  return (
    <>
      {/* Section 1: General Info Table */}
      <section className="border-2 border-[#2a2a2a] bg-white divide-y-2 divide-[#2a2a2a]">
        {/* Row 1: Worldview */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 bg-[#2a2a2a] text-white p-4 flex items-center gap-3">
            <Globe className="w-6 h-6 shrink-0" />
            <span className="font-bold text-lg font-['Noto_Serif_KR'] tracking-wider">세계관</span>
          </div>
          <div className="sm:w-2/3 p-4 flex flex-col justify-center">
            <p className="font-bold text-[15px] text-gray-800">죽음 이후 사후세계 이민 심사 필수</p>
            <p className="text-sm text-red-600 font-semibold mt-1">(예외: 자연사는 심사 불필요)</p>
          </div>
        </div>
        
        {/* Row 2: Background */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 bg-[#2a2a2a] text-white p-4 flex items-center gap-3">
            <Landmark className="w-6 h-6 shrink-0" />
            <span className="font-bold text-lg font-['Noto_Serif_KR'] tracking-wider">배경</span>
          </div>
          <div className="sm:w-2/3 p-4 flex flex-col justify-center">
            <p className="font-semibold text-gray-800 leading-relaxed">
              저승 국경 관리 사무소<br/>이민청
            </p>
          </div>
        </div>

        {/* Row 3: Departments */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 bg-[#2a2a2a] text-white p-4 flex items-center gap-3">
            <Users className="w-6 h-6 shrink-0" />
            <span className="font-bold text-lg font-['Noto_Serif_KR'] tracking-wider">부서</span>
          </div>
          <div className="sm:w-2/3 p-4 flex flex-col justify-center">
            <p className="font-medium text-gray-800 leading-relaxed">
              민원상담과<br/>
              사인조사과<br/>
              심사배정과<br/>
              특별관리과
            </p>
          </div>
        </div>

        {/* Row 4: Entry Method */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 bg-[#2a2a2a] text-white p-4 flex items-center gap-3">
            <IdCard className="w-6 h-6 shrink-0" />
            <span className="font-bold text-lg font-['Noto_Serif_KR'] tracking-wider">입국 방식</span>
          </div>
          <div className="sm:w-2/3 p-4 flex flex-col justify-center">
            <p className="font-bold text-gray-800">비자 / 시민권 / 밀입국</p>
          </div>
        </div>
      </section>

      {/* Section Header Component */}
      <SectionDivider title="사후세계 분류" />

      {/* Section 2: Afterlife Classifications */}
      <section className="border-2 border-[#2a2a2a] bg-white divide-y-2 divide-[#2a2a2a]">
        {/* Tier 1 */}
        <div className="flex min-h-[90px]">
          <div className="w-[80px] shrink-0 bg-[#d4af37] flex flex-col items-center justify-center text-white p-2 text-center border-r-2 border-[#2a2a2a]">
            <span className="text-3xl font-black font-['Noto_Serif_KR'] leading-none">1</span>
            <span className="text-xs font-semibold mt-1">최상위</span>
          </div>
          <div className="flex-1 flex items-center p-3 gap-4 bg-[#fbf8ee]">
            <div className="w-12 h-12 shrink-0 flex items-center justify-center text-[#b8860b]">
              <Castle className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#8b6508] font-['Noto_Serif_KR']">천국, 극락</h3>
              <p className="text-sm font-medium text-gray-700 mt-1">조건: 업보 포인트 최상위</p>
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="flex min-h-[90px]">
          <div className="w-[80px] shrink-0 bg-[#607b8b] flex flex-col items-center justify-center text-white p-2 text-center border-r-2 border-[#2a2a2a]">
            <span className="text-3xl font-black font-['Noto_Serif_KR'] leading-none">2</span>
            <span className="text-xs font-semibold mt-1">상위</span>
          </div>
          <div className="flex-1 flex items-center p-3 gap-4 bg-[#f2f5f7]">
            <div className="w-12 h-12 shrink-0 flex items-center justify-center text-[#4a6b7d]">
              <Shield className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#3b596d] font-['Noto_Serif_KR']">발할라, 엘리시움</h3>
              <p className="text-sm font-medium text-gray-700 mt-1">조건: 특정 자격 충족<br/><span className="text-xs">(명예로운 전사 등)</span></p>
            </div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="flex min-h-[90px]">
          <div className="w-[80px] shrink-0 bg-[#6b8e23] flex flex-col items-center justify-center text-white p-2 text-center border-r-2 border-[#2a2a2a]">
            <span className="text-3xl font-black font-['Noto_Serif_KR'] leading-none">3</span>
            <span className="text-xs font-semibold mt-1">보통</span>
          </div>
          <div className="flex-1 flex items-center p-3 gap-4 bg-[#f5f7f2]">
            <div className="w-12 h-12 shrink-0 flex items-center justify-center text-[#556b2f]">
              <TreeDeciduous className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#465922] font-['Noto_Serif_KR']">영혼의 안식처</h3>
              <p className="text-sm font-medium text-gray-700 mt-1">조건: 없음,<br/>대부분 망자 귀속</p>
            </div>
          </div>
        </div>

        {/* Tier 4 (Special/Lowest) */}
        <div className="flex min-h-[100px]">
          <div className="w-[80px] shrink-0 bg-[#8b0000] flex flex-col items-center justify-center text-white p-2 text-center border-r-2 border-[#2a2a2a]">
            <span className="text-xs font-bold leading-tight mb-1">특별<br/>관리 구역</span>
            <span className="text-xs font-black font-['Noto_Serif_KR'] text-[#ffaaaa]">최하위</span>
          </div>
          <div className="flex-1 flex items-center p-3 gap-4 bg-[#f8eaea]">
            <div className="w-12 h-12 shrink-0 flex items-center justify-center text-[#8b0000]">
              <Skull className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#7a1818] font-['Noto_Serif_KR']">지옥, 타르타로스, 아귀도</h3>
              <p className="text-sm font-medium text-[#7a1818] mt-1">조건: 죄질 불량,<br/>비자 아닌 수감 통지서 발급</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider title="업보 포인트" />

      {/* Section 3: Karma Points */}
      <section className="border-2 border-[#2a2a2a] bg-white divide-y-2 divide-[#2a2a2a] relative">
        {/* Faint Background Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Scale className="w-48 h-48" />
        </div>

        <div className="flex flex-col sm:flex-row relative z-10">
          <div className="sm:w-1/4 bg-white border-b-2 sm:border-b-0 sm:border-r-2 border-[#2a2a2a] p-4 flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg font-['Noto_Serif_KR'] sm:hidden">정의</span>
          </div>
          <div className="sm:w-3/4 p-4 flex items-center">
            <span className="hidden sm:inline-block font-bold text-lg font-['Noto_Serif_KR'] w-16 shrink-0">정의</span>
            <p className="font-medium text-gray-800 border-l-2 border-gray-300 pl-4">
              생전 행적 수치화 점수,<br/>사후세계 등급 결정 요소
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row relative z-10">
          <div className="sm:w-1/4 bg-white border-b-2 sm:border-b-0 sm:border-r-2 border-[#2a2a2a] p-4 flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-gray-50">
              <PlusCircle className="w-6 h-6 text-gray-800" />
            </div>
            <span className="font-bold text-lg font-['Noto_Serif_KR'] sm:hidden">획득</span>
          </div>
          <div className="sm:w-3/4 p-4 flex items-center">
            <span className="hidden sm:inline-block font-bold text-lg font-['Noto_Serif_KR'] w-16 shrink-0">획득</span>
            <p className="font-bold text-gray-800 border-l-2 border-gray-300 pl-4">
              선행, 공양, 타인의 기원
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row relative z-10">
          <div className="sm:w-1/4 bg-white border-b-2 sm:border-b-0 sm:border-r-2 border-[#2a2a2a] p-4 flex items-center justify-center gap-2 text-red-700">
            <div className="w-10 h-10 rounded-full border-2 border-red-700 flex items-center justify-center shrink-0 bg-red-50">
              <MinusCircle className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg font-['Noto_Serif_KR'] sm:hidden">차감</span>
          </div>
          <div className="sm:w-3/4 p-4 flex items-center">
            <span className="hidden sm:inline-block font-bold text-lg font-['Noto_Serif_KR'] w-16 shrink-0 text-red-700">차감</span>
            <p className="font-bold text-red-700 border-l-2 border-red-300 pl-4">
              악행, 원한, 잊혀짐
            </p>
          </div>
        </div>
      </section>

      <SectionDivider title="업무 절차" />

      {/* Section 4: Work Procedure Flowchart */}
      <section className="border-2 border-[#2a2a2a] bg-white divide-y-2 divide-[#2a2a2a]">
        <div className="p-4 md:p-6 flex flex-col items-center gap-y-8">
          {/* Row 1 */}
          <div className="flex justify-center items-center gap-x-2 sm:gap-x-6 w-full">
            <FlowItem icon={<Skull />} text="사망" />
            <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
            <FlowItem icon={<Ticket />} text="민원상담과" sub="접수" />
            <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
            <FlowItem icon={<Clock />} text="대기" sub="(NN년)" />
          </div>
          {/* Row 2 */}
          <div className="flex justify-center items-center gap-x-2 sm:gap-x-6 w-full">
            <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
            <FlowItem icon={<Search />} text="사인조사과" sub="심문" />
            <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
            <FlowItem icon={<Scale />} text="심사배정과" sub="판정" />
            <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
            <FlowItem icon={<DoorOpen />} text="사후세계" sub="이동" />
          </div>
        </div>
        
        {/* Exceptions / Notices */}
        <div className="divide-y-2 divide-[#2a2a2a] bg-gray-50">
          <div className="flex">
            <div className="w-16 shrink-0 bg-[#2a2a2a] text-white flex items-center justify-center font-bold font-['Noto_Serif_KR'] border-r-2 border-[#2a2a2a]">
              예외
            </div>
            <div className="flex-1 p-3 font-bold text-gray-800">
              자연사 망자: 하이패스 즉시 이동
            </div>
          </div>
          <div className="flex">
            <div className="w-16 shrink-0 bg-white flex items-center justify-center border-r-2 border-[#2a2a2a]">
              <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex-1 p-3 font-semibold text-gray-700 leading-snug">
              만성적 인력 부족, 과도한 서류 절차, 시스템 오류 빈번
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Page2Content() {
  return (
    <div className="space-y-6">
      <SectionDivider title="주요 인물 파일" />
      
      <div className="flex flex-col gap-y-12 px-4 py-8">
        
        <Polaroid 
          name="서율" 
          role="사인조사과 7급 공무원 / 188cm"
          likes="퇴근, 고요, 침묵, 모든 것의 끝, 달달한 믹스커피"
          dislikes="야근, 민원, 바퀴벌레, 남벽강의 잔소리, 진신성"
          rotation="-rotate-[2deg]"
          image="https://i.postimg.cc/43SVHXTP/1.png"
        />

        <Polaroid 
          name="남벽강" 
          role="사인조사과 6급 주임 (서율의 사수) / 178cm"
          likes="복종, 완벽한 통제, 타인의 좌절, 자신의 유능함 과시"
          dislikes="반항, 예측 불가능한 상황, 자신보다 뛰어난 존재, 서율의 썩은 동태 눈깔"
          rotation="rotate-[1.5deg]"
          image="https://i.postimg.cc/KYHB3myN/2.png"
        />

        <Polaroid 
          name="류린" 
          role="민원상담과 장기 체류 망자 / 191cm"
          likes="아무도 없는 구석, 벽 보고 있기, 펑크 패션"
          dislikes="관심, 동정, 소음, 비둘기, 진신성"
          rotation="-rotate-[1deg]"
          image="https://i.postimg.cc/xdCLdcBF/3.png"
        />

        <Polaroid 
          name="진신성" 
          role="인턴 (염라대왕 조카의 손자) / 183cm"
          likes="새로운 것, 재밌는 것, 관심받기, 돈 자랑, 농땡이"
          dislikes="지루한 것, 귀찮은 일(업무), 잔소리, 서율의 표정, 쓴 음식"
          rotation="rotate-[2.5deg]"
          image="https://i.postimg.cc/xd4MN9Sg/4.png"
        />

      </div>
    </div>
  );
}

function Polaroid({ name, role, likes, dislikes, rotation, image }: { name: string, role: string, likes: string, dislikes: string, rotation: string, image: string }) {
  return (
    <div className={`bg-white p-3 md:p-4 pb-6 shadow-md border-2 border-gray-300 relative transform ${rotation} hover:scale-105 transition-transform duration-300 w-full flex flex-col`}>
      {/* Tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#eaeaea] opacity-90 shadow-sm border border-gray-200 rotate-[-4deg] z-10"></div>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/30 backdrop-blur-sm rotate-[-4deg] z-10" style={{ mixBlendMode: 'overlay' }}></div>
      
      {/* Image Placeholder */}
      <div className="w-full aspect-[1216/832] bg-[#e5e5e5] border-2 border-gray-400 flex flex-col items-center justify-center text-gray-500 mb-4 overflow-hidden relative">
         <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold text-2xl text-gray-900 font-['Noto_Serif_KR'] mb-1 text-center">{name}</h3>
        <p className="text-sm font-bold text-gray-600 text-center mb-4 tracking-tight">{role}</p>
        
        <div className="text-sm text-gray-800 leading-relaxed space-y-2 px-1">
          <p className="flex items-start gap-2">
            <span className="font-black text-blue-600 bg-blue-50 px-1 border border-blue-200 rounded-sm shrink-0">호</span> 
            <span className="pt-0.5">{likes}</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-black text-red-600 bg-red-50 px-1 border border-red-200 rounded-sm shrink-0">불호</span> 
            <span className="pt-0.5">{dislikes}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Reusable divider component for section headers
function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center py-2 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[2px] bg-[#2a2a2a]"></div>
      </div>
      <div className="relative bg-[#1a1a1a] text-white px-6 py-1 border-2 border-[#2a2a2a] flex items-center gap-4">
        {/* Decorative wings/lines could go here, using simple CSS shapes for now */}
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <h2 className="font-bold text-lg font-['Noto_Serif_KR'] tracking-widest">{title}</h2>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>
    </div>
  );
}

// Reusable component for the flowchart items
function FlowItem({ icon, text, sub }: { icon: React.ReactNode, text: string, sub?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[70px]">
      <div className="w-12 h-12 rounded-full border-2 border-[#2a2a2a] flex items-center justify-center bg-white mb-1 shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-gray-800" })}
      </div>
      <span className="text-xs font-bold text-gray-800 whitespace-nowrap">{text}</span>
      {sub && <span className="text-[10px] font-medium text-gray-600 leading-none">{sub}</span>}
    </div>
  );
}


