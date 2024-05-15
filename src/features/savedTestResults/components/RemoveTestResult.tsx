import { useNavigate } from "react-router-dom";
import { deleteUserTestResultById } from "../api/deleteUserTestResultById";
import { useToast } from "@chakra-ui/react";

type Props = {
    token: string;
    userTestResultId: string | undefined;
};

export default function RemoveTestResult({ token, userTestResultId }: Props) {
    const toast = useToast();
    const navigate = useNavigate();

    const removeResultData = async () => {
        try {
            const response = await deleteUserTestResultById(token, userTestResultId);
    
            if (response.success) {
                toast({
                    title: "Test Result Status",
                    description: "You have successfully removed the test result.",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });
                navigate("/");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            
            toast({
                title: 'Test Result Status',
                description: errorMessage,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <div className="mt-6">
            <button
                onClick={() => removeResultData()}
                className="bg-red-700 text-mainWhite font-medium rounded-md 
                px-4 py-1 transition-opacity hover:dark:opacity-90"
            >
                Remove This Result
            </button>
        </div>
    )
}