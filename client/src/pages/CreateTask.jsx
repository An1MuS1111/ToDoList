import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/ui-components/ui/dropdown-menu"
import { Button } from "@/ui-components/ui/button"
import { Card, CardContent, CardFooter } from "@/ui-components/ui/card"
import { Label } from "@/ui-components/ui/label"
import { Input } from "@/ui-components/ui/input"
import { Textarea } from "@/ui-components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/ui-components/ui/select"

export default function Component() {
    const [formData, setFormData] = useState({})
    const [subtasks, setSubtasks] = useState([]);
    const [newSubtask, setNewSubtask] = useState('');

    const handleAddSubtask = () => {
        if (newSubtask.trim() !== '') {
            setSubtasks([...subtasks, newSubtask]);
            setNewSubtask('');
        }
    };

    const handleDeleteSubtask = (index) => {
        setSubtasks(subtasks.filter((_, i) => i !== index));
    };


    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Link className="flex items-center gap-2 font-semibold" >
                    <CheckIcon className="h-6 w-6" />
                    <span>Todo</span>
                </Link>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <img src="/placeholder.svg" width={36} height={36} alt="Avatar" className="rounded-full" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Jared Palmer</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link  >
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link  >
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link  >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8  w-1/3 mx-auto">
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold">Create Task</h1>
                        </div>
                        <Card className="pt-5 w-full" >
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Task Title</Label>
                                    <Input id="title" type="text" placeholder="Enter task title" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Task Description</Label>
                                    <Textarea id="description" placeholder="Enter task description" className="min-h-[100px]" />
                                </div>
                                {/*  */}
                                <div className="space-y-2">
                                    <Label htmlFor="subtasks">Sub Tasks</Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            id="subtasks"
                                            type="text"
                                            placeholder="Add sub task"
                                            value={newSubtask}
                                            onChange={(e) => setNewSubtask(e.target.value)}
                                        />
                                        <Button variant="ghost" size="icon" onClick={handleAddSubtask}>
                                            <PlusIcon className="h-4 w-4" />
                                            <span className="sr-only">Add sub task</span>
                                        </Button>
                                    </div>
                                    <div className="grid gap-2">
                                        {subtasks.map((subtask, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <div>{subtask}</div>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <FilePenIcon className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="ghost" size="icon" onClick={() => handleDeleteSubtask(index)}>
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/*  */}
                                {/* <div className="space-y-2">
                                    <Label htmlFor="subtasks">Sub Tasks</Label>
                                    <div className="flex items-center gap-2">
                                        <Input id="subtasks" type="text" placeholder="Add sub task" />
                                        <Button variant="ghost" size="icon">
                                            <PlusIcon className="h-4 w-4" />
                                            <span className="sr-only">Add sub task</span>
                                        </Button>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center justify-between">
                                            <div>Sub Task 1</div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="ghost" size="icon">
                                                    <FilePenIcon className="h-4 w-4" />
                                                    <span className="sr-only">Edit</span>
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <TrashIcon className="h-4 w-4" />
                                                    <span className="sr-only">Delete</span>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>Sub Task 2</div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="ghost" size="icon">
                                                    <FilePenIcon className="h-4 w-4" />
                                                    <span className="sr-only">Edit</span>
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <TrashIcon className="h-4 w-4" />
                                                    <span className="sr-only">Delete</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="grid  grid-cols-2 grid-rows-2 gap-4">
                                    <div className="space-y-2 col-start-1 col-end-3">
                                        <Label htmlFor="start-time" className="mt-4">
                                            Start Time
                                        </Label>
                                        <Input id="start-time" type="datetime-local" />
                                    </div>
                                    <div className="space-y-2 col-start-1 col-end-3">
                                        <Label htmlFor="end-time">End Time</Label>
                                        <Input id="end-time" type="datetime-local" />
                                    </div>
                                </div>
                                <div className="grid grid-rows-2 grid-cols-2 gap-4">
                                    <div className="space-y-2 col-start-1 col-end-3">
                                        <Label htmlFor="status">Task Status</Label>
                                        <Select id="status">
                                            <SelectTrigger >
                                                <SelectValue placeholder="Select a status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="todo">To do</SelectItem>
                                                <SelectItem value="urgent">Urgent</SelectItem>
                                                <SelectItem value="done">Done</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </div>
                                    <div className="space-y-2 col-start-1 col-end-3">
                                        <Label htmlFor="category">Task Category</Label>
                                        <Select id="category">
                                            <SelectTrigger >
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="personal">Personal</SelectItem>
                                                <SelectItem value="work">Work</SelectItem>
                                                <SelectItem value="shopping">Shopping</SelectItem>
                                                <SelectItem value="health">Health</SelectItem>
                                                <SelectItem value="education">Education</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>

                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save Task</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

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


function FilePenIcon(props) {
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
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
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


function TrashIcon(props) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}