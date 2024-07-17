import { Button } from "@/ui-components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui-components/ui/accordion"
import { Checkbox } from "@/ui-components/ui/checkbox"
import { Badge } from "@/ui-components/ui/badge"
import { useEffect, useState } from "react"
import axios from "axios"


const TaskCardComponent = ({ item, handleDelete }) => {


    const handleDate = (d) => {
        const date = new Date(d);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }



    // const handleDelete = async (taskId) => {

    //     try {
    //         await axios.delete(`http://localhost:4444/todos/${taskId}`);
    //         setItems_((prevItems) => prevItems.filter((item) => item.id !== taskId));
    //     } catch (error) {
    //         console.error('Error deleting task:', error);
    //     };
    // }

    return (
        <>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    {/* Trigger start */}

                    <div className="flex items-center justify-between" >

                        <div className="flex items-center ">

                            <span className="text-sm font-medium">{item.title}</span>
                        </div>
                        <div className="flex items-center ">
                            <Badge variant="secondary">{item.taskCategory}</Badge>


                            <Button onClick={() => handleDelete(item.taskId, item.taskStatus)} size="icon" variant="ghost">
                                <BinIcon className="h-4 w-4" />
                            </Button>
                            <AccordionTrigger className="flex items-center "></AccordionTrigger></div>
                    </div>
                    {/* Trigger end  */}
                    <AccordionContent>
                        <div className="grid gap-2">
                            <div>
                                <div className="text-sm font-medium pb-2">Task Description</div>
                                <p>{item.description}</p>
                            </div>
                            <div>
                                <div className="text-sm font-medium pb-2">Sub Tasks</div>
                                <ul className="grid gap-2">
                                    {item.subTasks.map((subTask, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Checkbox checked={subTask.complete} />
                                            <span>{subTask.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium">Start Date</div>
                                    <p>{handleDate(item.taskStartedAt)}</p>
                                </div>
                                <div>
                                    <div className="text-sm font-medium">Due Date</div>
                                    <p>{handleDate(item.taskCompletedAt)}</p>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

            </Accordion></>


    )
}


export default TaskCardComponent


function BinIcon() {
    return (

        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillrule="evenodd" clip-rule="evenodd"></path></svg>
    )
}

