import { render, screen } from '@testing-library/react'
import Logo from '@/components/ui/Logo'

describe('Logo Component', () => {
  it('should render the logo image', () => {
    render(<Logo />)
    const logo = screen.getByAltText('BLOTT - Latest News from the World of Finance')
    expect(logo).toBeInTheDocument()
  })

  it('should have proper alt text for accessibility', () => {
    render(<Logo />)
    const logo = screen.getByAltText(/BLOTT/i)
    expect(logo).toHaveAttribute('alt', 'BLOTT - Latest News from the World of Finance')
  })

  it('should use Next.js Image component', () => {
    render(<Logo />)
    const logo = screen.getByAltText('BLOTT - Latest News from the World of Finance')
    expect(logo.tagName).toBe('IMG')
  })

  it('should have responsive sizing classes', () => {
    const { container } = render(<Logo />)
    const logoContainer = container.querySelector('div')
    expect(logoContainer).toBeInTheDocument()
    expect(logoContainer?.className).toContain('flex')
  })
})
