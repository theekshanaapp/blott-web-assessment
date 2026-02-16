import { render, screen } from '@testing-library/react'
import {
  CardLayout,
  CardLinkContainer,
  CardLinkText,
  CardLinkIcon,
} from '@/components/patterns/card/CardLayout'

describe('CardLayout Component', () => {
  const mockChildren = {
    image: <div data-testid="card-image">Image</div>,
    headline: <div data-testid="card-headline">Headline</div>,
    link: <a data-testid="card-link" href="/">Link</a>,
  }

  it('should render all card sections', () => {
    render(<CardLayout>{mockChildren}</CardLayout>)
    expect(screen.getByTestId('card-image')).toBeInTheDocument()
    expect(screen.getByTestId('card-headline')).toBeInTheDocument()
    expect(screen.getByTestId('card-link')).toBeInTheDocument()
  })

  it('should render as an article element', () => {
    const { container } = render(<CardLayout>{mockChildren}</CardLayout>)
    const article = container.querySelector('article')
    expect(article).toBeInTheDocument()
  })

  it('should apply skeleton classes when isSkeleton is true', () => {
    const { container } = render(
      <CardLayout isSkeleton>{mockChildren}</CardLayout>
    )
    const article = container.querySelector('article')
    expect(article).toHaveAttribute('role', 'presentation')
    expect(article).toHaveAttribute('aria-hidden', 'true')
  })

  it('should not apply skeleton classes when isSkeleton is false', () => {
    const { container } = render(<CardLayout>{mockChildren}</CardLayout>)
    const article = container.querySelector('article')
    expect(article).not.toHaveAttribute('role', 'presentation')
  })
})

describe('CardLinkContainer Component', () => {
  it('should render children correctly', () => {
    render(
      <CardLinkContainer>
        <span>Test Link</span>
      </CardLinkContainer>
    )
    expect(screen.getByText('Test Link')).toBeInTheDocument()
  })

  it('should have flex layout classes', () => {
    const { container } = render(
      <CardLinkContainer>
        <span>Test</span>
      </CardLinkContainer>
    )
    const containerDiv = container.querySelector('div')
    expect(containerDiv).toBeInTheDocument()
    expect(containerDiv?.className).toContain('flex')
    expect(containerDiv?.className).toContain('justify-start')
    expect(containerDiv?.className).toContain('items-center')
  })
})

describe('CardLinkText Component', () => {
  it('should render text content', () => {
    render(<CardLinkText>Read Article</CardLinkText>)
    expect(screen.getByText('Read Article')).toBeInTheDocument()
  })

  it('should have underline border', () => {
    const { container } = render(<CardLinkText>Test</CardLinkText>)
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
    expect(span?.className).toContain('border-b-[1px]')
  })
})

describe('CardLinkIcon Component', () => {
  it('should render icon content', () => {
    render(
      <CardLinkIcon>
        <span>Icon</span>
      </CardLinkIcon>
    )
    expect(screen.getByText('Icon')).toBeInTheDocument()
  })

  it('should have flex layout classes', () => {
    const { container } = render(
      <CardLinkIcon>
        <span>Icon</span>
      </CardLinkIcon>
    )
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
    expect(span?.className).toContain('flex')
  })
})
