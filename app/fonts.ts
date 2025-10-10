import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    { path: './fonts/Roboto-VariableFont_wdth,wght.ttf', style: 'normal', weight: '400 900' },
    { path: './fonts/Roboto-Italic-VariableFont_wdth,wght.ttf', style: 'italic', weight: '400 900' },
  ],
  variable: '--font-roboto',
  display: 'swap',
});

export const redRose = localFont({
  src: [
    { path: './fonts/RedRose-VariableFont_wght.ttf', style: 'normal', weight: '400 900' },
  ],
  variable: '--font-red-rose',
  display: 'swap',
});