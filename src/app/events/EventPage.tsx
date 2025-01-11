import AdmEventProvider from "../manage/events/components/context/AdmEventProvider"
import EventPageHeaderSection from "./components/EventPageHeaderSection"

const EventPage = () => {
    return (
        <AdmEventProvider>
            <EventPageHeaderSection />
        </AdmEventProvider>
    )
}

export default EventPage