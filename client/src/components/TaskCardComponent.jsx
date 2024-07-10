import { Button } from "@/ui-components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui-components/ui/accordion"
import { Checkbox } from "@/ui-components/ui/checkbox"
import { Badge } from "@/ui-components/ui/badge"


const TaskCardComponent = ({ items }) => {




    const handleDate = (d) => {
        const date = new Date(d);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }




    return (
        <>
            {items.map((item, index) =>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        {/* Trigger start */}

                        <div className="flex items-center justify-between" >

                            <div className="flex items-center gap-2">
                                <Checkbox />
                                <span className="text-sm font-medium">{item.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary">{item.taskCategory}</Badge>


                                <Button size="icon" variant="ghost">
                                    <MoveVerticalIcon className="h-4 w-4" />
                                </Button>
                            </div>
                            <AccordionTrigger className="flex items-center justify-between"></AccordionTrigger></div>
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

                </Accordion>)}</>


    )
}


export default TaskCardComponent


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

