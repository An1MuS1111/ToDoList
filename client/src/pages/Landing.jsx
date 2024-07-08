
import { Badge } from "@/ui-components/ui/badge"
import { Button } from "@/ui-components/ui/button"
import { Card } from "@/ui-components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/ui-components/ui/avatar"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui-components/ui/accordion"
import { Checkbox } from "@/ui-components/ui/checkbox"
import { Textarea } from "@/ui-components/ui/textarea"

export default function Component() {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 p-4 border-r">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold">Private</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <HomeIcon className="w-5 h-5" />
                                    Home
                                </span>
                                <Badge>8</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <CircleCheckIcon className="w-5 h-5" />
                                    Completed
                                </span>
                                <Badge>16</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <UserIcon className="w-5 h-5" />
                                    Personal
                                </span>
                                <Badge>4</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <BriefcaseIcon className="w-5 h-5" />
                                    Work
                                </span>
                                <Badge>6</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <DumbbellIcon className="w-5 h-5" />
                                    Diet
                                </span>
                                <Badge>3</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <BookIcon className="w-5 h-5" />
                                    List of Book
                                </span>
                                <Badge>8</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <CarIcon className="w-5 h-5" />
                                    Road trip list
                                </span>
                                <Badge>6</Badge>
                            </li>
                        </ul>
                        <Button variant="outline" className="w-full mt-4">
                            <PlusIcon className="w-5 h-5" />
                            Create new list
                        </Button>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Group</h2>
                        <div className="space-y-2">
                            <Card className="flex items-center justify-between p-4">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>MP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-sm font-medium">Mobal Project</h3>
                                        <p className="text-xs text-muted-foreground">5 People</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flex items-center justify-between p-4">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>FP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-sm font-medium">Futur Project</h3>
                                        <p className="text-xs text-muted-foreground">4 People</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                            <PlusIcon className="w-5 h-5" />
                            Create new group
                        </Button>
                    </div>
                </div>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Good Morning, Sullivan! 👋</h1>
                        <p className="text-muted-foreground">Today, Wed 6 July 2023</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            Today
                            <ChevronDownIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="outline">
                            <MenuIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
                <div className="mt-6 space-y-4">
                    {[
                        { task: "Watch Netflix - Vinland Saga", emoji: "", time: "19.00 - 20.00" },
                    ].map((item, index) => (
                        <Card>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="task-item">
                                    <AccordionTrigger className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id={`task-0`} />
                                            <label htmlFor={`task-0`} className="flex items-center gap-2">
                                                Jogging 🏃‍♂️
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">06.00 - 07.30</span>
                                            <Button variant="ghost" size="icon">
                                                <MoveVerticalIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-4 border-t">
                                        <div className="grid gap-4">
                                            <div>
                                                <h3 className="text-sm font-medium">Task Details</h3>
                                                <p className="text-muted-foreground">
                                                    Go for a morning jog to start the day fresh and energized.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium">Subtasks</h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox id="subtask-1" />
                                                            <label htmlFor="subtask-1">Warm up</label>
                                                        </div>
                                                        <Button variant="ghost" size="icon">
                                                            <MoveVerticalIcon className="w-5 h-5" />
                                                        </Button>
                                                    </li>
                                                    <li className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox id="subtask-2" />
                                                            <label htmlFor="subtask-2">Jog for 30 minutes</label>
                                                        </div>
                                                        <Button variant="ghost" size="icon">
                                                            <MoveVerticalIcon className="w-5 h-5" />
                                                        </Button>
                                                    </li>
                                                    <li className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox id="subtask-3" />
                                                            <label htmlFor="subtask-3">Cool down</label>
                                                        </div>
                                                        <Button variant="ghost" size="icon">
                                                            <MoveVerticalIcon className="w-5 h-5" />
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium">Notes</h3>
                                                <Textarea placeholder="Add any notes here..." className="min-h-[100px]" />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </Card>
                    ))}
                </div>
            </main>
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
                <Button variant="default" className="flex items-center gap-2">
                    <PlusIcon className="w-5 h-5" />
                    Create new task
                </Button>
            </div>
        </div>
    )
}

function BookIcon(props) {
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
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}


function BriefcaseIcon(props) {
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}


function CarIcon(props) {
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
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
        </svg>
    )
}


function ChevronDownIcon(props) {
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
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function CircleCheckIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}


function DumbbellIcon(props) {
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
            <path d="M14.4 14.4 9.6 9.6" />
            <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
            <path d="m21.5 21.5-1.4-1.4" />
            <path d="M3.9 3.9 2.5 2.5" />
            <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
        </svg>
    )
}


function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MoveVerticalIcon(props) {
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
            <polyline points="8 18 12 22 16 18" />
            <polyline points="8 6 12 2 16 6" />
            <line x1="12" x2="12" y1="2" y2="22" />
        </svg>
    )
}


function PlusIcon(props) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function UserIcon(props) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}