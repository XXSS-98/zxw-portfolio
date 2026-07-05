'use client';

import { useState } from 'react';
import { DesignProject } from '@/types';

interface ProjectCardProps {
  project: DesignProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className='group cursor-pointer'>
      <div className='relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f5f5f7]'>
        {!imgError ? (
          <img
            src={project.imageSrc}
            alt={project.title}
            className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
            onError={() => setImgError(true)}
          />
        ) : (
          <div className='flex h-full items-center justify-center text-[#86868b]'>
            <div className='text-center'>
              <svg className='mx-auto h-12 w-12 mb-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
              <span className='text-sm'>{project.title}</span>
            </div>
          </div>
        )}
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 rounded-2xl' />
      </div>
      <div className='mt-5'>
        <h3 className='text-lg font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-300'>
          {project.title}
        </h3>
        <p className='mt-1.5 text-sm text-[#86868b] leading-relaxed line-clamp-2'>
          {project.description}
        </p>
        <div className='mt-3 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span key={tag} className='text-xs px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#86868b]'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
