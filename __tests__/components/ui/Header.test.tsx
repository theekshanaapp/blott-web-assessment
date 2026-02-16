import { render, screen } from '@testing-library/react'
import Header from '@/components/ui/Header'

describe('Header Component', () => {
  let container: HTMLElement

  beforeEach(() => {
    const result = render(<Header />)
    container = result.container
  })

  it('should render the header element', () => {
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
  })

  it('should display "LATEST NEWS" text', () => {
    const newsElements = screen.getAllByText('LATEST NEWS')
    expect(newsElements.length).toBeGreaterThanOrEqual(1)
  })

  it('should display "FROM" text', () => {
    const fromElements = screen.getAllByText('FROM')
    expect(fromElements.length).toBeGreaterThanOrEqual(1)
  })

  it('should display "THE WORLD" text', () => {
    const worldElements = screen.getAllByText('THE WORLD')
    expect(worldElements.length).toBeGreaterThanOrEqual(1)
  })

  it('should display "OF FINANCE" text', () => {
    const financeElements = screen.queryAllByText('FINANCE')
    expect(financeElements.length).toBeGreaterThan(0)
    const ofText = container.textContent || ''
    expect(ofText).toContain('OF')
    expect(ofText).toContain('FINANCE')
  })

  it('should have proper heading structure', () => {
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings.length).toBeGreaterThanOrEqual(1)
    expect(headings.length).toBeLessThanOrEqual(2)
  })

  it('should have mobile and desktop versions', () => {
    const allHeadings = container.querySelectorAll('h1')
    expect(allHeadings.length).toBeGreaterThanOrEqual(1)

    const newsElements = screen.getAllByText('LATEST NEWS')
    const mobileHeading = newsElements[0].closest('h1')
    expect(mobileHeading).toBeInTheDocument()
    expect(mobileHeading?.className).toContain('tablet:hidden')

    if (allHeadings.length > 1) {
      const desktopHeading = Array.from(allHeadings).find(h1 =>
        h1 !== mobileHeading && h1.className.includes('hidden')
      )
      if (desktopHeading) {
        expect(desktopHeading.className).toContain('tablet:block')
      }
    }
  })

  it('should render Bitcoin icon with proper aria-label', () => {
    const supElements = container.querySelectorAll('sup[aria-label="Bitcoin"]')
    expect(supElements.length).toBeGreaterThanOrEqual(1)
    expect(supElements.length).toBeLessThanOrEqual(2)

    const bitcoinIcons = screen.queryAllByLabelText('Bitcoin')
    expect(bitcoinIcons.length).toBeGreaterThanOrEqual(1)
  })

  it('should have accessible semantic structure', () => {
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
    expect(header?.tagName).toBe('HEADER')
  })
})
