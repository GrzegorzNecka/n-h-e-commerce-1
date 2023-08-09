import '../../globals.css';
import localFont from 'next/font/local';

const roboto = localFont({
  src: [
    {
      path: '../../fonts/roboto/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/roboto/Roboto-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/roboto/Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-roboto',
});

type Props = {
  children: React.ReactNode;
};

export default function BodyLayout({ children }: Props) {
  return <body className={`${roboto.variable} font-body`}>{children}</body>;
}
