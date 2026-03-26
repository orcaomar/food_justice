import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// Mock IntersectionObserver which is not available in JSDOM
// Using a class pattern as components expect to use 'new IntersectionObserver'
class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn();
  unobserve = vi.fn();
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

afterEach(() => {
  cleanup();
});
