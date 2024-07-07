import { ThemeProvider } from '@/components/providers/theme-provider'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Bekki dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	icons: { icon: '/favicon.ico' },
	authors: [{ name: 'Bekki Umarjonov' }],
	keywords:
		"dasturlash, web dasturlash, mobil dasturlash, web dizayn, ux/ui dizayn, web analitika, seo, marketing, dasturlash tillari, bloglar, qurno, Bekki, samar badriddinov, samar, badriddinov, samar badriddinov blog, Bekki blog, Bekki dasturlash blog, Bekki dasturlash blogi, Bekki dasturlashga oid blog, Bekki dasturlashga oid bloglar, Bekki dasturlash bloglar, Bekki dasturlash bloglari, Bekki dasturlashga oid bloglar, Bekki dasturlashga oid bloglar, samar badriddinov, Bekki, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, Bekki, Bekki academy, bepul dasturlash, rezyume yozish, portfolio, Bekki javascript, Bekki raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Bekki dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		locale: 'uz_UZ',
		images:
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsammi.ac%2F&psig=AOvVaw14TY_sXprr2SLa-xPNiHEq&ust=1720464331293000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD_i6DLlYcDFQAAAAAdAAAAABAE',
		countryName:"Uzbekistan"
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster position='top-right' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
