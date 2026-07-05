import { VideoProject } from '@/types';

export const videoCategories: { value: string; label: string }[] = [
  { value: 'cartoon-creative', label: '卡通人物创意视频' },
  { value: 'children-story', label: '儿童绘本故事' },
  { value: 'fire-safety', label: '消防宣传片' },
];

export const videoProjects: VideoProject[] = [
  {
    id: 'video-01',
    title: 'AI 卡通角色创意短片',
    description: '利用 AI 生成卡通角色形象与动画，创作趣味创意短视频，展现 AI 在角色设计中的独特表现力。',
    category: 'cartoon-creative',
    videoSrc: '/images/projects/video/placeholder-01.mp4',
    duration: '00:45',
    tags: ['卡通', '角色设计', '创意动画'],
  },
  {
    id: 'video-02',
    title: 'AI 儿童绘本故事动画',
    description: '通过 AI 图像生成与视频合成技术，将绘本故事转化为生动的动画视频，打造沉浸式阅读体验。',
    category: 'children-story',
    videoSrc: '/images/projects/video/placeholder-02.mp4',
    duration: '02:30',
    tags: ['儿童', '绘本', '故事动画'],
  },
  {
    id: 'video-03',
    title: '消防安全公益宣传短片',
    description: '使用 AI 辅助内容创作，制作消防安全主题宣传视频，以直观生动的视觉语言传递安全知识。',
    category: 'fire-safety',
    videoSrc: '/images/projects/video/placeholder-03.mp4',
    duration: '01:45',
    tags: ['公益', '消防', '宣传片'],
  },
];
