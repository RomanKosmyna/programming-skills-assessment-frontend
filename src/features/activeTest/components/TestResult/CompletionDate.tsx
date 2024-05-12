import { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks";
import { completionDate, completionDateHour } from "../../util/currentTime";
import { setCompletionDate, setCompletionHour } from "../../slices/testResultSlice";

export default function CompletionDate() {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCompletionHour(completionDateHour));
        dispatch(setCompletionDate(completionDate));
    }, []);

    return (
        <div className="bg-gradient-to-r from-accentBlue to-[#5BBCFF] p-3 rounded-md">
            <h3 className="font-bold text-[24px] text-main">Completion Date</h3>
            <p className="font-medium text-main">Hour: {completionDateHour}</p>
            <p className="font-medium text-main">Date: {completionDate}</p>
        </div>
    )
}