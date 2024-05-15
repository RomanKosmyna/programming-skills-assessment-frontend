import { useEffect } from "react";
import { setCompletionDate, setCompletionHour } from "@features/activeTest/slices/testResultSlice";
import { completionDate, completionDateHour } from "@features/activeTest/util/currentTime";

import { useAppDispatch } from "src/hooks";

export default function CompletionDate() {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCompletionHour(completionDateHour));
        dispatch(setCompletionDate(completionDate));
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#1C1678] to-[#378CE7] p-3 rounded-md">
            <h3 className="font-bold text-mainWhite text-[24px]">Completion Date</h3>
            <p className="font-medium text-mainWhite">Hour: {completionDateHour}</p>
            <p className="font-medium text-mainWhite">Date: {completionDate}</p>
        </div>
    )
}