import { useEffect } from 'react';

type AllowedStyles = 'blockSize' | 'insetInlineStart' | 'position' | 'insetBlockStart' | 'inlineSize';

// ドキュメントの書字方向を取得し、縦書きかどうかを判定する
const isVerticalWritingMode = (): boolean => {
  const { writingMode } = window.getComputedStyle(document.documentElement);
  return writingMode.includes('vertical');
};

// スクロールバーの幅を計算する
const getScrollBarSize = (): number => {
  const scrollBarXSize = window.innerHeight - document.body.clientHeight;
  const scrollBarYSize = window.innerWidth - document.body.clientWidth;
  return isVerticalWritingMode() ? scrollBarXSize : scrollBarYSize;
};

// スクロール位置を取得する
const getScrollPosition = (fixed: boolean): number => {
  if (fixed) {
    return isVerticalWritingMode()
      ? document.scrollingElement?.scrollLeft ?? 0
      : document.scrollingElement?.scrollTop ?? 0;
  }

  return parseInt(document.body.style.insetBlockStart || '0', 10);
};

// 背面固定のスタイルを固定する
const applyBackStyles = (scrollPosition: number, apply: boolean): void => {
  const styles: Partial<Record<AllowedStyles, string>> = {
    blockSize: '100dvb',
    insetInlineStart: '0',
    position: 'fixed',
    insetBlockStart: isVerticalWritingMode() ? `${scrollPosition}px` : `${scrollPosition * -1}px`,
    inlineSize: '100dvi',
  };

  Object.keys(styles).forEach((key) => {
    const styleKey = key as AllowedStyles;
    document.body.style[styleKey] = apply ? styles[styleKey]! : '';
  });
};

// スクロール位置を元に戻す
const restorePosition = (scrollPosition: number): void => {
  const options: ScrollToOptions = {
    behavior: 'instant',
    [isVerticalWritingMode() ? 'left' : 'top']: isVerticalWritingMode() ? scrollPosition : scrollPosition * -1,
  };

  window.scrollTo(options);
};

// 背面を固定する
const backfaceFixed = (fixed: boolean): void => {
  const scrollBarWidth = getScrollBarSize();
  const scrollPosition = getScrollPosition(fixed);

  document.body.style.paddingInlineEnd = fixed ? `${scrollBarWidth}px` : '';
  applyBackStyles(scrollPosition, fixed);
  if (!fixed) {
    restorePosition(scrollPosition);
  }
};

const useModalScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    backfaceFixed(isOpen);
  }, [isOpen]);
};

export default useModalScrollLock;
