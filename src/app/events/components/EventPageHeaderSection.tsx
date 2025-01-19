import { useAdmEvent } from "@/app/manage/events/components/context/AdmEventProvider";
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
    const { data } = useAdmEvent();
    return (
        <div>
            <div>SearchBox</div>
            <div>
                {
                    data.map((event) => {
                        return (
                            <CardItems
                                key={event.id}
                                banner={event.photoUrl}
                                description={event.description}
                                eventDateTime={event.createdAt.toString()}
                                eventId={event.id.toString()}
                                eventStatus={event.status.toString()}
                                location={event.location}
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