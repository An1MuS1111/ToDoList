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
import { useGetUser } from "@/hooks/useGetUser"




export default function Component() {

    const navigate = useNavigate();

    const user = useGetUser();





    const { id, accessToken } = user;

    const { axiosJWT, token } = useAuth();
    const [tasks, setTasks] = useState([]);


    const handleDelete = async (taskId, taskStatus) => {
        console.log(`Here is the accessToken: ${accessToken}`)
        console.log(`Here is the task ID: ${taskId} and task status: ${taskStatus}`)
        try {
            await axiosJWT.delete(`http://localhost:4444/todos/${taskId}`, {
                headers: { authorization: "Bearer " + accessToken },
            });

            // await axios.delete(`http://localhost:4444/todos/${taskId}`);
            setTasks((prevItems) => prevItems.filter((item) => item.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        };
    }

    useEffect(() => {

        // const fetchTasks = async () => {
        //     try {
        //         const res = await axios.get(`http://localhost:4444/todos/${id}`);
        //         setTasks(res.data);
        //     } catch (error) {
        //         console.error('Error fetching tasks:', error);
        //     }
        // };

        const fetchTasks = async () => {
            try {
                const res = await axiosJWT.get(`http://localhost:4444/todos/${id}`, {

                    headers: { authorization: "Bearer " + accessToken },

                });
                setTasks(res.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };


        fetchTasks();

    }, [tasks]);

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
                            {tasks.filter(task => task.taskStatus === 'todo').map((todo, index) =>
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

                            {tasks.filter(task => task.taskStatus === 'urgent').map((urgent, index) =>
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

                            {tasks.filter(task => task.taskStatus === 'done').map((done, index) =>
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
