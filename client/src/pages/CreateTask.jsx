import { Link, useNavigate } from 'react-router-dom'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/ui-components/ui/dropdown-menu"
import { Button } from "@/ui-components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/ui-components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/ui-components/ui/card"
import { Label } from "@/ui-components/ui/label"
import { Input } from "@/ui-components/ui/input"
import { Textarea } from "@/ui-components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/ui-components/ui/select"
import { Checkbox } from "@/ui-components/ui/checkbox"
import { Badge } from "@/ui-components/ui/badge"
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import axios from 'axios'
import { useGetUser } from "@/hooks/useGetUser"
import { useAuth } from "@/hooks/AuthProvider"



export default function Component() {
    const navigate = useNavigate();
    const [subTasks, setSubTasks] = useState([]);
    const [newSubTask, setNewSubTask] = useState('');

    const handleAddSubTask = () => {
        if (newSubTask.trim() !== '') {
            setSubTasks([...subTasks, newSubTask]);
            setNewSubTask('');
        }
    };

    const handleRemoveSubTask = (index) => {
        setSubTasks(subTasks.filter((_, i) => i !== index));
    };

    const { axiosJWT } = useAuth();
    const { accessToken } = useGetUser();
    const userId = useGetUser().id;


    const [formData, setFormData] = useState({
        userId: userId,
        title: "",
        description: "",
        subTasks: [],
        taskStartDate: "",
        taskStartTime: "",
        taskCompleteDate: "",
        taskCompleteTime: "",
        taskStatus: "",
        taskCategory: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSelectChange = (id, value) => {
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async () => {
        const formattedSubTasks = subTasks.map((task) => ({
            complete: false, // Assuming subtasks are incomplete initially
            title: task,
        }));

        const taskData = {
            userId: userId,
            title: formData.title,
            description: formData.description,
            subTasks: formattedSubTasks,
            taskStartedAt: new Date(`${formData.taskStartDate}T${formData.taskStartTime}:00`).toISOString(),
            taskCompletedAt: new Date(`${formData.taskCompleteTime}T${formData.taskEndTime}:00`).toISOString(),
            taskStatus: formData.taskStatus,
            taskCategory: formData.taskCategory,
        };

        console.log(taskData);

        try {
            const response = await axiosJWT.post('http://localhost:4444/todos/add', taskData, {
                headers: { authorization: "Bearer " + accessToken },
            });

            if (response.status === 200 || response.status === 201) {
                // Handle success
                console.log('Task created successfully');
                navigate('/');
            } else {
                // Handle error
                console.error('Failed to create task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="container flex-1 px-4 py-8 sm:px-6 lg:px-8 flex justify-center">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create New Task</CardTitle>
                            <CardDescription>Fill out the details for your new task.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-1.5">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" placeholder="Enter task title" value={formData.title} onChange={handleChange} />
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" placeholder="Enter task description" value={formData.description} onChange={handleChange} />
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="taskCategory">Category</Label>
                                <Select id="taskCategory" onValueChange={(value) => handleSelectChange('taskCategory', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Work">Work</SelectItem>
                                        <SelectItem value="Personal">Personal</SelectItem>
                                        <SelectItem value="Shopping">Shopping</SelectItem>
                                        <SelectItem value="Health">Health</SelectItem>
                                        <SelectItem value="Education">Education</SelectItem>
                                        <SelectItem value="Others">Others</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="taskStatus">Status</Label>
                                <Select id="taskStatus" onValueChange={(value) => handleSelectChange('taskStatus', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="todo">To Do</SelectItem>
                                        <SelectItem value="urgent">Urgent</SelectItem>
                                        <SelectItem value="done">Done</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-1.5">
                                <Label>Sub Tasks</Label>
                                <div className="flex items-center gap-2">
                                    <Input
                                        placeholder="Enter sub task"
                                        value={newSubTask}
                                        onChange={(e) => setNewSubTask(e.target.value)}
                                    />
                                    <Button size="icon" variant="ghost" onClick={handleAddSubTask}>
                                        <PlusIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="grid gap-2">
                                    {subTasks.map((task, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {/* <Checkbox /> */}
                                                <p>{index + 1}.</p>
                                                <span className="text-sm font-medium">{task}</span>
                                            </div>
                                            <Button size="icon" variant="ghost" onClick={() => handleRemoveSubTask(index)}>
                                                <XIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-1.5">
                                    <Label htmlFor="taskStartDate">Start Date</Label>
                                    <Input type="date" id="taskStartDate" value={formData.taskStartedAt} onChange={handleChange} />
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="taskStartTime">Start Time</Label>
                                    <Input type="time" id="taskStartTime" value={formData.taskStartTime} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-1.5">
                                    <Label htmlFor="taskCompleteTime">End Date</Label>
                                    <Input type="date" id="taskCompleteTime" value={formData.taskEndedAt} onChange={handleChange} />
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="taskEndTime">End Time</Label>
                                    <Input type="time" id="taskEndTime" value={formData.taskEndTime} onChange={handleChange} />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button size="sm" onClick={handleSubmit}>Save Task</Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
            <Footer />
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


function XIcon(props) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}