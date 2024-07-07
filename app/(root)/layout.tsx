import { ChildProps } from '@/types'
import NextTopLoader from 'nextjs-toploader'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<main>
				<NextTopLoader showSpinner={false} />
			<Navbar />
			<div className='container'>
				{children}
			</div>
			<Footer />
		</main>
	)
}

export default Layout
