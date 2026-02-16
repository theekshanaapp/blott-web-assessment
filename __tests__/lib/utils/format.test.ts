import { sanitizeUrl } from '@/lib/utils/format'

describe('sanitizeUrl utility function', () => {
  it('should return valid URL as-is', () => {
    const url = 'https://example.com/article'
    expect(sanitizeUrl(url)).toBe(url)
  })

  it('should handle URLs with query parameters', () => {
    const url = 'https://example.com/article?id=123&ref=home'
    expect(sanitizeUrl(url)).toBe(url)
  })

  it('should handle URLs with hash fragments', () => {
    const url = 'https://example.com/article#section'
    expect(sanitizeUrl(url)).toBe(url)
  })

  it('should return fallback for invalid URLs', () => {
    const invalidUrl = 'not-a-valid-url'
    expect(sanitizeUrl(invalidUrl)).toBe('#')
  })

  it('should handle empty string', () => {
    expect(sanitizeUrl('')).toBe('#')
  })

  it('should handle javascript: protocol (security)', () => {
    const maliciousUrl = 'javascript:alert("xss")'
    expect(sanitizeUrl(maliciousUrl)).toBe('#')
  })

  it('should handle http:// URLs', () => {
    const url = 'http://example.com/article'
    expect(sanitizeUrl(url)).toBe(url)
  })

  it('should handle URLs with special characters', () => {
    const url = 'https://example.com/article?title=Hello%20World&ref=home'
    expect(sanitizeUrl(url)).toBe(url)
  })

  it('should handle relative URLs', () => {
    const relativeUrl = '/article'
    expect(sanitizeUrl(relativeUrl)).toBe(relativeUrl)
  })

  it('should block data: protocol (security)', () => {
    const dataUrl = 'data:text/html,<script>alert("xss")</script>'
    expect(sanitizeUrl(dataUrl)).toBe('#')
  })
})
