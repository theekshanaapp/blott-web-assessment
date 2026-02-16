export function sanitizeUrl(url: string): string {
  if (!url || url.trim() === '') {
    return '#';
  }

  if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
    return url;
  }

  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:', 'about:'];
  const lowerUrl = url.toLowerCase().trim();

  if (dangerousProtocols.some(dangerous => lowerUrl.startsWith(dangerous))) {
    return '#';
  }

  try {
    const parsed = new URL(url);
    const protocol = parsed.protocol.toLowerCase();

    if (protocol !== 'http:' && protocol !== 'https:') {
      return '#';
    }

    return parsed.toString();
  } catch {
    return '#';
  }
}
