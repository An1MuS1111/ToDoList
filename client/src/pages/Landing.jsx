import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/ui-components/ui/dropdown-menu"
import { Button } from "@/ui-components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/ui-components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/ui-components/ui/card"
import { Link } from 'react-router-dom'
import TaskCardComponent from "@/components/TaskCardComponent"
import { useFetch } from "@/hooks/useFetch"
import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useAuth } from "@/hooks/AuthProvider"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"




export default function Component() {

    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });

    const { id } = user;

    const { isLoading, apiData, serverError } = useFetch('http://localhost:4444/todos/' + id);

    const [todos, setTodos] = useState([])
    const [urgents, setUrgents] = useState([])
    const [dones, setDones] = useState([])

    const handleDelete = async (taskId, taskStatus) => {
        console.log(`Here is the task ID: ${taskId} and task status: ${taskStatus}`)
        try {
            await axios.delete(`http://localhost:4444/todos/${taskId}`);
            if (taskStatus === 'todo') {
                setTodos((prevItems) => prevItems.filter((item) => item.id !== taskId));
                console.log('Todo task deleted: ', taskId)
            } else if (taskStatus === 'urgent') {
                setUrgents((prevItems) => prevItems.filter((item) => item.id !== taskId));
                console.log('Urgent task deleted: ', taskId)
            } else if (taskStatus === 'done') {
                setDones((prevItems) => prevItems.filter((item) => item.id !== taskId));
                console.log('Done task deleted: ', taskId)
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        };
    }

    useEffect(() => {
        if (apiData) {

            const todoTasks = apiData.filter(task => task.taskStatus === 'todo');
            const urgentTasks = apiData.filter(task => task.taskStatus === 'urgent');
            const doneTasks = apiData.filter(task => task.taskStatus === 'done');

            setTodos(todoTasks);
            setUrgents(urgentTasks);
            setDones(doneTasks);
        }
    }, [apiData]);

    if (isLoading) {
        return <div>...Loading</div>;
    }

    if (serverError) {
        return <div>Error: {serverError.message}</div>;
    }



    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="container flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="bg-yellow-50">
                        <CardHeader className="bg-lime-50">
                            <CardTitle>To-Do</CardTitle>
                            <CardDescription>Tasks that need to be completed.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* TODO */}


                            {todos.map((todo, index) =>
                                <TaskCardComponent item={todo} handleDelete={handleDelete} />
                            )}
                        </CardContent>
                        <CardFooter>
                            {/* <Button size="sm">Add Task</Button> */}
                        </CardFooter>
                    </Card>
                    <Card className="bg-yellow-50">
                        <CardHeader className="bg-lime-50">
                            <CardTitle>Urgent</CardTitle>
                            <CardDescription>High priority tasks.</CardDescription>
                        </CardHeader>
                        <CardContent>

                            {/* URGENT */}

                            {urgents.map((urgent, index) =>
                                <TaskCardComponent item={urgent} handleDelete={handleDelete} />
                            )}
                        </CardContent>
                        <CardFooter>
                            {/* <Button size="sm">Add Task</Button> */}
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Completed</CardTitle>
                            <CardDescription>Tasks that have been completed.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* DONE */}

                            {dones.map((done, index) =>
                                <TaskCardComponent item={done} handleDelete={handleDelete} />
                            )}
                        </CardContent>
                        <CardFooter>
                            {/* <Button size="sm">Add Task</Button> */}
                        </CardFooter>
                    </Card>
                </div>
            </main >
            <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2">
                <Button variant="default" className="flex items-center gap-2" onClick={() => { navigate('/createTask') }}>
                    <PlusIcon className="w-5 h-5" />
                    Create new task
                </Button>
            </div>
            <Footer />
        </div >
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
