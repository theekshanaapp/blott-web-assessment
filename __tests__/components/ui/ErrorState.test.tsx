import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ErrorState from '@/components/ui/ErrorState'

describe('ErrorState Component', () => {
  it('should render error message', () => {
    render(<ErrorState message="Test error message" />)
    expect(screen.getByText('Test error message')).toBeInTheDocument()
  })

  it('should render default message when not provided', () => {
    render(<ErrorState />)
    expect(
      screen.getByText('Something went wrong. Please try again later.')
    ).toBeInTheDocument()
  })

  it('should render "Unable to Load News" heading', () => {
    render(<ErrorState />)
    expect(screen.getByText('Unable to Load News')).toBeInTheDocument()
  })

  it('should render retry button when onRetry is provided', () => {
    const mockRetry = jest.fn()
    render(<ErrorState onRetry={mockRetry} />)
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })

  it('should not render retry button when onRetry is not provided', () => {
    render(<ErrorState />)
    expect(screen.queryByRole('button', { name: /try again/i })).not.toBeInTheDocument()
  })

  it('should call onRetry when retry button is clicked', async () => {
    const user = userEvent.setup()
    const mockRetry = jest.fn()
    render(<ErrorState onRetry={mockRetry} />)
    
    const retryButton = screen.getByRole('button', { name: /try again/i })
    expect(retryButton).toBeInTheDocument()
    
    await user.click(retryButton)
    
    expect(mockRetry).toHaveBeenCalledTimes(1)
  })

  it('should have proper ARIA attributes', () => {
    render(<ErrorState />)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveAttribute('aria-live', 'polite')
  })
})
