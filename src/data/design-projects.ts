import { DesignProject } from '@/types';

export const designCategories: { value: string; label: string }[] = [
  { value: 'brand-visual-identity', label: '品牌与视觉识别设计' },
  { value: 'graphic-layout', label: '平面与排版设计' },
  { value: 'ecommerce-visual', label: '电商视觉设计' },
  { value: 'ui-new-media', label: 'UI与新媒体设计' },
  { value: 'creative-artistic', label: '创意与艺术表现' },
  { value: 'other', label: '其他设计' },
];

export const designProjects: DesignProject[] = [
  {
    id: 'design-01',
    title: '「棉总集团」IP 形象与表情包设计',
    description: '以"棉花糖"为意象，构建原创 IP 品牌"棉总集团"——一家专门帮助成年人处理烦恼的虚构企业。IP 定位"外表柔软，态度强硬"，通过轻松幽默的方式表达当代年轻人的真实情绪，用吐槽代替说教，用共鸣代替安慰。包含核心角色设定、三种形态延展、表情包系列与经典语录体系。',
    category: 'brand-visual-identity',
    imageSrc: '/images/projects/design/ip-cotton-boss.jpg',
    tags: ['IP形象', '表情包', '潮玩设计', '情绪疗愈'],
  },
  {
    id: 'design-02',
    title: '「棉总集团」IP 体系延展',
    description: '围绕棉总 IP 构建完整品牌体系：暴躁棉总（情绪管理部）、炸毛棉总（天气控制部）、毒舌棉总（真话办公室）三大形态，配套表情包延展与多角度形象设计，适用于社交媒体传播与周边衍生。',
    category: 'brand-visual-identity',
    imageSrc: '/images/projects/design/ip-cotton-boss-showcase.jpg',
    tags: ['品牌体系', '形象延展', '表情包', '社交媒体'],
  },
  {
    id: 'design-03',
    title: 'AI 赛博朋克风格插画',
    description: '使用 Midjourney 与 GPT-image2 创作的赛博朋克风格系列插画，探索未来视觉语言。',
    category: 'creative-artistic',
    imageSrc: '/images/projects/design/placeholder-05.jpg',
    tags: ['AI插画', '赛博朋克', '创意'],
  },
  {
    id: 'design-04',
    title: '数字艺术展览海报',
    description: '以 AI 生成图像为核心视觉，创作系列数字艺术展览宣传海报，融合科技与美学。',
    category: 'graphic-layout',
    imageSrc: '/images/projects/design/placeholder-02.jpg',
    tags: ['海报', '排版', '艺术'],
  },
  {
    id: 'design-05',
    title: 'AI 产品电商视觉方案',
    description: '为 AI 工具产品设计全套电商视觉内容，从主图到详情页，提升产品点击率与转化率。',
    category: 'ecommerce-visual',
    imageSrc: '/images/projects/design/placeholder-03.jpg',
    tags: ['电商', '产品图', '详情页'],
  },
  {
    id: 'design-06',
    title: 'AI 创作工具 UI 设计',
    description: '面向创作者的 AI 内容生成工具界面设计，注重操作流程简洁与视觉体验流畅。',
    category: 'ui-new-media',
    imageSrc: '/images/projects/design/placeholder-04.jpg',
    tags: ['UI', '工具设计', '交互'],
  },
];

