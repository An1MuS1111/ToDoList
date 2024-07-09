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
import { useParams } from "react-router-dom"




export default function Component() {


    const { id } = useParams();

    const { isLoading, apiData, serverError } = useFetch('http://localhost:4444/todos/' + id);

    const [todos, setTodos] = useState([])
    const [urgents, setUrgents] = useState([])
    const [dones, setDones] = useState([])


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
                            <TaskCardComponent items={todos} />
                        </CardContent>
                        <CardFooter>
                            <Button size="sm">Add Task</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Urgent</CardTitle>
                            <CardDescription>High priority tasks.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* URGENT */}
                            <TaskCardComponent items={urgents} />

                        </CardContent>
                        <CardFooter>
                            <Button size="sm">Add Task</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Completed</CardTitle>
                            <CardDescription>Tasks that have been completed.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* DONE */}
                            <TaskCardComponent items={dones} />
                        </CardContent>
                        <CardFooter>
                            <Button size="sm">Add Task</Button>
                        </CardFooter>
                    </Card>
                </div>
            </main >
            <Footer />
        </div >
    )
}

