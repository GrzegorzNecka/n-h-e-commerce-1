import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import Navigation from '@/app/components/Navigation';
import { LOCALES } from '@/const/i18n';
import BodyLayout from '@/app/components/modules/BodyLayout';

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: (typeof LOCALES)[number] };
};

export async function generateMetadata({ params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
  };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html className="h-full" lang={locale}>
      <BodyLayout>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </BodyLayout>
    </html>
  );
}
