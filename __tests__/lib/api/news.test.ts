global.fetch = jest.fn()

describe('News API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should handle successful API response', async () => {
    const mockResponse = [
      {
        id: 1,
        headline: 'Test News',
        image: 'https://example.com/image.jpg',
        url: 'https://example.com/article',
        source: 'Test Source',
        datetime: Math.floor(Date.now() / 1000),
        category: 'general',
        summary: 'Test summary',
        related: '',
      },
    ]

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    })

    const { fetchGeneralNews } = await import('@/lib/api/news')
    const result = await fetchGeneralNews()

    expect(result.data).toBeTruthy()
    expect(Array.isArray(result.data)).toBe(true)
    expect(result.data.length).toBe(1)
    expect(result.data[0].thumbnail).toBe('https://example.com/image.jpg')
    expect(result.data[0].datetime).toBe(mockResponse[0].datetime * 1000)
    expect(result.error).toBeNull()
  })

  it('should handle API error', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'))

    const { fetchGeneralNews } = await import('@/lib/api/news')
    const result = await fetchGeneralNews()

    expect(result.data).toEqual([])
    expect(result.error).toBeTruthy()
  })

  it('should handle non-ok response', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: async () => ({}),
    })

    const { fetchGeneralNews } = await import('@/lib/api/news')
    const result = await fetchGeneralNews()

    expect(result.data).toEqual([])
    expect(result.error).toBeTruthy()
    expect(result.error).toContain('API Error')
  })
})
