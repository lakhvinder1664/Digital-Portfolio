import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'text' | 'image' | 'interactive'

  useEffect(() => {
    // Only enable on devices with hover capability (non-touch)
    if (window.matchMedia('(hover: none)').matches) return;

    let animId;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (!target) return;

      // 1. Strictly check if hovering project cards / work items
      const isProject = Boolean(
        target.closest(
          '.work-card, .projects-card-item, .work-box, [data-cursor="view"]'
        )
      );

      // 2. Check if hovering an interactive link / button / input
      const isInteractive = Boolean(
        target.closest(
          'a, button, input, select, textarea, [role="button"], .menu-row-item, .header-menu-btn'
        )
      );

      // 3. Check if hovering typography / text (heading or paragraph)
      const isText =
        !isProject &&
        !isInteractive &&
        Boolean(
          target.closest(
            'h1, h2, h3, h4, h5, h6, p, blockquote, label, .services-sub-line, .cta-quote-text, .hero-bio-text'
          )
        );

      if (isProject) {
        setCursorMode('project');
      } else if (isInteractive) {
        setCursorMode('interactive');
      } else if (isText) {
        setCursorMode('text');
      } else {
        setCursorMode('default');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth animation loop (lerp)
    const render = () => {
      const ease = 0.22;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`magic-custom-cursor ${isVisible ? 'is-visible' : ''} mode-${cursorMode}`}
      aria-hidden="true"
    >
      {cursorMode === 'project' && (
        <span className="cursor-badge-text">VIEW &#8599;</span>
      )}
    </div>
  );
}

