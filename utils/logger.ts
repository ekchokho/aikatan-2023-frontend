/**
 * Logs can be enabled by setting enableLogs to true in
 * local storage
 * localStorage.setItem('enableLogs', 'true')
 */

const enableLogs =
  typeof window !== 'undefined'
    ? // on client side check if they are enabled
      localStorage.getItem('enableLogs') || false
    : // enable logs in server console
      true

export const logger = (module: string, ...message: any[]) => {
  if (process.env.NODE_ENV === 'development' || enableLogs) {
    // eslint-disable-next-line no-console
    console.log(`[${module}]`, ...message)
  }
}
