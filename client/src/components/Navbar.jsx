
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/ui-components/ui/dropdown-menu"
import { Button } from "@/ui-components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/ui-components/ui/avatar"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
                    <CheckIcon className="h-6 w-6" />
                    <span>Todo</span>
                </Link>
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>K</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>Khalid</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="#" prefetch={false}>
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" prefetch={false}>
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button variant="destructive">Logout</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Navbar


function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}