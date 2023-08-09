import { LOCALES } from '@/const/i18n';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: 'pl',
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
