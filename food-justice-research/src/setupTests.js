import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// Mock IntersectionObserver which is not available in JSDOM
// Using a traditional function that can be used as a constructor
const IntersectionObserverMock = vi.fn(function() {
  this.observe = vi.fn();
  this.unobserve = vi.fn();
  this.disconnect = vi.fn();
  this.takeRecords = vi.fn();
});

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

afterEach(() => {
  cleanup();
});
