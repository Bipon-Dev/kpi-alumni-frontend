import useModelStore from "@/lib/stores/useModelStore"
import { Button } from "@/lib/ui/button"
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog"
import { Input } from "@/lib/ui/input"
import { useState } from "react"
import { createEvent } from "../AdmEventOperation"
import { useAdmEvent } from "../context/AdmEventProvider"

interface TProps {
    closeModel: () => void
}
const defaultFormData = {
    title: "",
    eventTime: "",
    description: "",
    location: "",
    photoUrl: "",
    organization: ""
}

const ModalBody: React.FC<TProps> = ({ closeModel }) => {

    const [formData, setFormData] = useState(defaultFormData)
    const { refetch } = useAdmEvent();



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        createEvent(formData)
        refetch()
        closeModel()
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="picture" className="text-base font-medium text-primary">Add Picture</label>
                <Input
                    id="picture"
                    type="file"
                    onChange={handleChange}
                    name="photoUrl"
                />
            </div>
            <div className="flex gap-2">
                <Input
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    value={formData.title} />
                {/* to do :  add day picker , day js  or same  kind feature for adding date . */}
                <Input
                    placeholder="Event Time"
                    name="eventTime"
                    onChange={handleChange}
                    value={formData.eventTime}
                />
            </div>
            <div className="flex gap-2">
                <Input
                    placeholder="Add Location"
                    name="location"
                    onChange={handleChange}
                    value={formData.location} />
                <Input
                    placeholder="Organizer"
                    name="organization"
                    onChange={handleChange}
                    value={formData.organization} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="description" className="text-base font-medium text-primary">Description</label>
                <Input
                    className="w-full h-[100px] "
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-center justify-end gap-2">
                <Button type="button" className=" w-[100px] text-white bg-error" onClick={closeModel}>Cancel</Button>
                <Button type="submit" className="w-[100px] text-white bg-secondary">Add Event</Button>
            </div>
        </form>
    )
}

const ModalAddEvent = () => {

    const { closeModel, modalName } = useModelStore()

    return (
        <Dialog open={modalName === "add-event"} onOpenChange={closeModel}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-medium text-primary">Add Event</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <ModalBody closeModel={closeModel} />
                </DialogBody>
            </DialogContent>
        </Dialog>

    )
}

export default ModalAddEvent