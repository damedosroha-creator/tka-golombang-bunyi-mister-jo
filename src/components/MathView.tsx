import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math?: string;
  text?: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({
  math,
  text,
  block = false,
  className = '',
}) => {
  // If raw math formula is provided directly
  if (math !== undefined) {
    const html = useMemo(() => {
      try {
        return katex.renderToString(math, {
          displayMode: block,
          throwOnError: false,
          output: 'htmlAndMathml',
        });
      } catch (e) {
        console.error('KaTeX error:', e);
        return math;
      }
    }, [math, block]);

    return (
      <span
        className={`math-rendered ${block ? 'block overflow-x-auto my-2 py-1 text-center' : 'inline-block px-1'} ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // If text containing inline $...$ or $$...$$ is provided
  const renderedContent = useMemo(() => {
    if (!text) return null;

    // Split text by $$...$$ first, then by $...$
    const parts: React.ReactNode[] = [];
    const blockRegex = /\$\$([\s\S]*?)\$\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    const processInline = (str: string, keyPrefix: string): React.ReactNode[] => {
      const inlineRegex = /\$([^\$]+?)\$/g;
      const inlineParts: React.ReactNode[] = [];
      let iLast = 0;
      let iMatch: RegExpExecArray | null;

      while ((iMatch = inlineRegex.exec(str)) !== null) {
        if (iMatch.index > iLast) {
          inlineParts.push(str.substring(iLast, iMatch.index));
        }
        const formula = iMatch[1];
        try {
          const rendered = katex.renderToString(formula, {
            displayMode: false,
            throwOnError: false,
          });
          inlineParts.push(
            <span
              key={`${keyPrefix}-inline-${iMatch.index}`}
              className="inline-block px-0.5 align-middle"
              dangerouslySetInnerHTML={{ __html: rendered }}
            />
          );
        } catch {
          inlineParts.push(`$${formula}$`);
        }
        iLast = inlineRegex.lastIndex;
      }
      if (iLast < str.length) {
        inlineParts.push(str.substring(iLast));
      }
      return inlineParts;
    };

    let blockIdx = 0;
    while ((match = blockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          ...processInline(text.substring(lastIndex, match.index), `text-${blockIdx}`)
        );
      }
      const blockFormula = match[1];
      try {
        const rendered = katex.renderToString(blockFormula, {
          displayMode: true,
          throwOnError: false,
        });
        parts.push(
          <div
            key={`block-${blockIdx}`}
            className="my-3 py-1 px-3 overflow-x-auto text-center bg-slate-50/80 rounded border border-slate-200"
            dangerouslySetInnerHTML={{ __html: rendered }}
          />
        );
      } catch {
        parts.push(
          <pre key={`block-err-${blockIdx}`} className="text-center font-mono text-sm">
            {blockFormula}
          </pre>
        );
      }
      lastIndex = blockRegex.lastIndex;
      blockIdx++;
    }

    if (lastIndex < text.length) {
      parts.push(...processInline(text.substring(lastIndex), `text-end`));
    }

    return parts;
  }, [text]);

  return <span className={`math-text-container ${className}`}>{renderedContent}</span>;
};
