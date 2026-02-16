export function sanitizeUrl(url: string): string {
  if (!url || url.trim() === '') {
    return '#';
  }

  // Handle relative URLs (safe to return as-is)
  if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
    return url;
  }

  // Check for dangerous protocols before parsing
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:', 'about:'];
  const lowerUrl = url.toLowerCase().trim();
  
  if (dangerousProtocols.some(dangerous => lowerUrl.startsWith(dangerous))) {
    return '#';
  }

  try {
    const parsed = new URL(url);
    const protocol = parsed.protocol.toLowerCase();
    
    // Only allow http and https protocols
    if (protocol !== 'http:' && protocol !== 'https:') {
      return '#';
    }
    
    return parsed.toString();
  } catch {
    // If URL parsing fails, it's invalid
    return '#';
  }
}
