import '@/app/ui/global.css'
import { prompt } from '@/app/ui/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${prompt.className} antialiased`}>{children}</body>
    </html>
  )
}
