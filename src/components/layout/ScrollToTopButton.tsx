import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../lib/cn';

interface ScrollToTopButtonProps {
  threshold?: number;
  className?: string;
}

export function ScrollToTopButton({ threshold = 250, className }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (docHeight > 0) {
        const progress = Math.min(Math.max((scrollY / docHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-40 transition-all duration-300 ease-out',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-4 pointer-events-none scale-90',
        className
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-border bg-surface/85 backdrop-blur-md text-foreground shadow-lg hover:border-foreground/40 hover:bg-surface-elevated hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {/* Subtle radial progress background */}
        <svg
          className="absolute inset-0 h-full w-full -rotate-90 p-0.5 pointer-events-none"
          viewBox="0 0 36 36"
        >
          <path
            className="text-border-subtle stroke-current"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-foreground stroke-current transition-all duration-150 ease-out"
            strokeDasharray={`${scrollProgress}, 100`}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
