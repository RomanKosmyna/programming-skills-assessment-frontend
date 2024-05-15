import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react';
import { activeQuestionStatus } from '../slices/activeInstructionStepSlice';
import { useAppDispatch } from 'src/hooks';

const steps = [
    { title: 'First', description: 'Choose a Category' },
    { title: 'Second', description: 'Select a Specific Test' },
    { title: 'Third', description: 'Prepare for the test' },
    { title: 'Fourth', description: 'Run the Test' }
]

export default function InstructionStepper() {
    const dispatch = useAppDispatch();
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const handleInstructionStep = (index: number) => {
        setActiveStep(index);
        dispatch(activeQuestionStatus(index));
    };

    return (
        <Stepper size="lg" colorScheme="red" index={activeStep}>
            {steps.map((step, index) => (
                <Step
                    key={index}
                    onClick={() => handleInstructionStep(index)}
                    className="cursor-pointer"
                >
                    <StepIndicator className="dark:text-mainWhite font-medium">
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>
                    <Box flexShrink='0'>
                        <StepTitle className="font-medium dark:text-mainWhite">
                            {step.title}
                        </StepTitle>
                        <StepDescription className=" dark:text-darkText1">
                            {step.description}
                        </StepDescription>
                    </Box>
                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}