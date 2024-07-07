import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

function NavMenu() {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Sahifalar</NavigationMenuTrigger>
						<NavigationMenuContent className='flex flex-col gap-2 p-2 w-[300px]'>
							<Link
								href='/authors'
								className='
								hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors w-full'
							>
								Mualliflar
							</Link>
							
							<Link
								href='/categories'
								className='
								hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors w-full'
							>
								Categoriyalar
							</Link>
							<Link
								href='/tags'
								className='
								hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors w-full'
							>
								Taglar
							</Link>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	)
}

export default NavMenu
