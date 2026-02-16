import {
  getHeadlineMarginTop,
  getLinkMarginTop,
  getHeadlineFontSize,
  getLinkContainerHeight,
  getLinkGap,
  combineResponsiveClasses,
} from '@/lib/config/cardLayout'

describe('cardLayout configuration functions', () => {
  describe('combineResponsiveClasses', () => {
    it('should combine base class', () => {
      const result = combineResponsiveClasses('mt-2')
      expect(result).toBe('mt-2')
    })

    it('should combine multiple responsive classes', () => {
      const result = combineResponsiveClasses('mt-2', 'sm:mt-4', 'md:mt-6')
      expect(result).toBe('mt-2 sm:mt-4 md:mt-6')
    })

    it('should filter out undefined values', () => {
      const result = combineResponsiveClasses('mt-2', undefined, 'md:mt-6')
      expect(result).toBe('mt-2 md:mt-6')
    })

    it('should handle all breakpoints', () => {
      const result = combineResponsiveClasses(
        'base',
        'sm',
        'md',
        'tablet',
        'xl'
      )
      expect(result).toBe('base sm md tablet xl')
    })
  })

  describe('getHeadlineMarginTop', () => {
    it('should return responsive margin classes', () => {
      const result = getHeadlineMarginTop()
      expect(result).toContain('mt-2')
      expect(typeof result).toBe('string')
    })
  })

  describe('getLinkMarginTop', () => {
    it('should return responsive margin classes', () => {
      const result = getLinkMarginTop()
      expect(result).toContain('mt-2')
      expect(typeof result).toBe('string')
    })
  })

  describe('getHeadlineFontSize', () => {
    it('should return responsive font size classes', () => {
      const result = getHeadlineFontSize()
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })
  })

  describe('getLinkContainerHeight', () => {
    it('should return responsive height classes', () => {
      const result = getLinkContainerHeight()
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })
  })

  describe('getLinkGap', () => {
    it('should return responsive gap classes', () => {
      const result = getLinkGap()
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })
  })
})
