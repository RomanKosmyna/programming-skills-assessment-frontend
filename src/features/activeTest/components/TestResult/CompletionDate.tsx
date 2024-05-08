import { completionDate, completionDateHour } from "../../util/currentTime";

export default function CompletionDate() {
    return (
        <div className="bg-gradient-to-r from-accentBlue to-[#5BBCFF] p-3 rounded-md">
            <h3 className="font-bold text-[24px] text-main">Completion Date</h3>
            <p className="font-medium text-main">Hour: {completionDateHour}</p>
            <p className="font-medium text-main">Date: {completionDate}</p>
        </div>
    )
}