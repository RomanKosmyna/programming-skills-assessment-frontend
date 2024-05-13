import { Tab } from "@chakra-ui/react";
import { useEffect } from "react";
import { setQuestionStatus } from "../../slices/activeTestQuestionNavigationSlice";

import { useAppDispatch, useAppSelector } from "src/hooks";

type Props = {
    index: number;
};

export default function QuestionNavigationTab({ index }: Props) {
    const dispatch = useAppDispatch();

    const activeQuestionPayload = {
        questionNumber: index,
        isOptionChosen: false
    };

    const state = useAppSelector(state => state.activeTestQuestionNavigation.questionsStatus);

    const questionStatus = state[index - 1];

    useEffect(() => {
        dispatch(setQuestionStatus(activeQuestionPayload));
    }, []);

    const isOptionChosen = questionStatus ? questionStatus.isOptionChosen : false;

    return (
        <Tab
            _selected={{ bg: "#6499E9" }}
            key={index}
            className={`w-[45px] px-8 py-2 ${isOptionChosen ? "bg-lime-600" : "bg-gray-300"} text-[22px] text-white rounded-md`}
        >
            {index}
        </Tab>)
}