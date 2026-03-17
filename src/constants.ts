export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrls: string[];
}

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: '공공기관 AI 활용 강의',
    category: 'AI 활용',
    description: '실무에 바로 적용하는 생성형 AI 활용법 교육',
    imageUrls: ['https://picsum.photos/seed/lecture1/800/600']
  },
  {
    id: '2',
    title: '학교 대상 생성형 AI 교육',
    category: '교육',
    description: '학생과 교사를 위한 AI 리터러시 및 창의적 도구 활용',
    imageUrls: ['https://picsum.photos/seed/school/800/600']
  },
  {
    id: '3',
    title: '강사 대상 SNS 브랜딩 강의',
    category: '브랜딩',
    description: '퍼스널 브랜딩을 위한 SNS 전략 및 콘텐츠 기획',
    imageUrls: ['https://picsum.photos/seed/branding/800/600']
  }
];
