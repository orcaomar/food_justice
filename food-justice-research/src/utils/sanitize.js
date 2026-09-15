import DOMPurify from 'dompurify';

// 🛡️ Sentinel: Mitigate reverse tabnabbing and allow safe external links
DOMPurify.addHook('afterSanitizeAttributes', function (node) {
  if (node.tagName === 'A') {
    if (node.getAttribute('target') === '_blank') {
      node.setAttribute('rel', 'noopener noreferrer');
    }
  }
});

const sanitizationCache = new Map();

/**
 * Sanitizes untrusted HTML strings using DOMPurify with safe attributes and tabnabbing mitigation.
 * Results are cached for performance.
 *
 * @param {string} dirty - The raw HTML string.
 * @returns {string} The sanitized HTML string.
 */
export const sanitizeHtml = (dirty) => {
  if (!dirty) return '';

  if (sanitizationCache.has(dirty)) {
    return sanitizationCache.get(dirty);
  }

  const sanitized = DOMPurify.sanitize(dirty, {
    ADD_ATTR: ['target', 'rel'],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });

  sanitizationCache.set(dirty, sanitized);
  return sanitized;
};

export default sanitizeHtml;
