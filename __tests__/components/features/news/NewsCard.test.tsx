import { render, screen, waitFor } from '@testing-library/react'
import NewsCard from '@/components/features/news/NewsCard'
import type { NewsItem } from '@/types/news'

const mockNews: NewsItem = {
  id: 1,
  headline: 'Test Headline',
  thumbnail: 'https://example.com/image.jpg',
  url: 'https://example.com/article',
  source: 'Test Source',
  datetime: Date.now(),
  category: 'general',
  summary: 'Test summary',
}

describe('NewsCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render news headline', () => {
    render(<NewsCard news={mockNews} />)
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
  })

  it('should render "Read Article" link', () => {
    render(<NewsCard news={mockNews} />)
    expect(screen.getByText('Read Article')).toBeInTheDocument()
  })

  it('should have correct article URL', () => {
    render(<NewsCard news={mockNews} />)
    const link = screen.getByRole('link', { name: /read article/i })
    expect(link).toHaveAttribute('href', 'https://example.com/article')
  })

  it('should open link in new tab', () => {
    render(<NewsCard news={mockNews} />)
    const link = screen.getByRole('link', { name: /read article/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have accessible aria-label', () => {
    render(<NewsCard news={mockNews} />)
    const link = screen.getByLabelText(/read article: test headline/i)
    expect(link).toBeInTheDocument()
  })

  it('should handle missing thumbnail with placeholder', () => {
    const newsWithoutThumbnail = { ...mockNews, thumbnail: '' }
    const { container } = render(<NewsCard news={newsWithoutThumbnail} />)
    const images = container.querySelectorAll('img')
    const imageWithAlt = Array.from(images).find(img => img.getAttribute('alt') === 'Test Headline')
    expect(imageWithAlt).toBeInTheDocument()
  })

  it('should handle invalid thumbnail URL', () => {
    const newsWithInvalidThumbnail = { ...mockNews, thumbnail: 'invalid-url' }
    const { container } = render(<NewsCard news={newsWithInvalidThumbnail} />)
    const images = container.querySelectorAll('img')
    const imageWithAlt = Array.from(images).find(img => img.getAttribute('alt') === 'Test Headline')
    expect(imageWithAlt).toBeInTheDocument()
  })

  it('should set priority for first card', () => {
    const { container } = render(<NewsCard news={mockNews} priority={true} />)
    const image = container.querySelector('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
  })

  it('should render image with correct alt text', () => {
    const { container } = render(<NewsCard news={mockNews} />)
    const images = container.querySelectorAll('img')
    const imageWithAlt = Array.from(images).find(img => img.getAttribute('alt') === 'Test Headline')
    expect(imageWithAlt).toBeInTheDocument()
  })
})
