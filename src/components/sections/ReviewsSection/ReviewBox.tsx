import React from 'react';
import { cn } from '@/utils/cn';
import type { Review } from './types';
import { CompanyLogo } from './components/CompanyLogo';
import { ReviewAuthor } from './components/ReviewAuthor';

const ReviewBox = ({ author, position, company, content, logo, image }: Review) => {
  return (
    <div>
      <div 
        className={cn(
          "rounded-xl border border-white/10 bg-black/10 backdrop-blur-sm p-[1px]",
          // Mobile-specific styles
          "md:transform-none md:transition-none",
          "md:hover:shadow-[0_0_20px_rgba(29,211,176,0.15)]"
        )}
      >
        <div className="rounded-lg bg-[#0D0D0D]/10 p-8 h-full">
          <CompanyLogo logo={logo} company={company} />
          <p className="text-white text-lg leading-relaxed mb-8">"{content}"</p>
          <ReviewAuthor 
            author={author}
            position={position}
            company={company}
            image={image}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;