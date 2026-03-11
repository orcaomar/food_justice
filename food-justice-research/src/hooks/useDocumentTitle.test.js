import { renderHook } from '@testing-library/react';
import useDocumentTitle from './useDocumentTitle';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('useDocumentTitle', () => {
  let originalTitle;

  beforeEach(() => {
    originalTitle = document.title;
  });

  afterEach(() => {
    document.title = originalTitle;
  });

  it('should set document.title', () => {
    renderHook(() => useDocumentTitle('Test Title'));
    expect(document.title).toBe('Test Title');
  });

  it('should update document.title when prop changes', () => {
    const { rerender } = renderHook(({ title }) => useDocumentTitle(title), {
      initialProps: { title: 'First Title' }
    });

    expect(document.title).toBe('First Title');

    rerender({ title: 'Second Title' });
    expect(document.title).toBe('Second Title');
  });
});
