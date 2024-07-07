"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavMenu from './nav-menu'

function Mobile() {
	const pathname = usePathname()
	return (
		<Sheet>
			<SheetTrigger asChild className='flex md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>Bekki</h1>
				</Link>
				<Separator className='my-3'/>
				<div className='flex flex-col space-y-3'>
					{navLinks.map(nav => (
						<Link
							key={nav.name}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2 group',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							<nav.icon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
							{nav.name}
						</Link>
					))}
					
					<NavMenu/>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
