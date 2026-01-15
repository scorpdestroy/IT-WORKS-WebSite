const ipRequestCounts = new Map<string, { count: number; resetTime: number }>()

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS = 5

export function rateLimit(ip: string): { success: boolean; remaining: number } {
  const now = Date.now()
  const record = ipRequestCounts.get(ip)

  if (!record || now > record.resetTime) {
    ipRequestCounts.set(ip, { count: 1, resetTime: now + WINDOW_MS })
    return { success: true, remaining: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 }
  }

  record.count++
  return { success: true, remaining: MAX_REQUESTS - record.count }
}
