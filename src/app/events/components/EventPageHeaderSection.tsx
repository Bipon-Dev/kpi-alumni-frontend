import { dummyEventData } from "@/app/manage/events/components/table-comps/tableDummyData"
import React from "react"

interface TCardProps {
    banner: string;
    eventId: string;
    title: string;
    description: string;
    eventDateTime: string;
    location: string;
    eventStatus: string;
}

const CardItems: React.FC<TCardProps> = ({ title }) => {
    return (
        <div>
            <div>{title}</div>
            <div></div>
            <div></div>
        </div>
    )
}

const EventPageHeaderSection = () => {
    return (
        <div>
            <div>SearchBox</div>
            <div>
                {
                    dummyEventData.map((event) => {
                        return (
                            <CardItems
                                key={event.eventId}
                                banner=""
                                description=""
                                eventDateTime=""
                                eventId=""
                                eventStatus=""
                                location=""
                                title={event.title}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default EventPageHeaderSection