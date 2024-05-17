import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import { ExpectedTestResultType } from '@features/activeTest/types';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
    },
    questionSection: {
        margin: 5,
        padding: 10,
    }
});

type Props = {
    testName: string | null;
    totalDurationTimer: number;
    remainingDurationTimer: number;
    result: ExpectedTestResultType[];
};

export default function RenderPDFResult(
    { testName, totalDurationTimer, remainingDurationTimer, result }: Props
) {
    
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{testName}</Text>
                    <Text>Total time: {totalDurationTimer}</Text>
                    <Text>Remaining time: {remainingDurationTimer}</Text>
                </View>
                <View style={styles.questionSection}>
                    {result.map((testResult: ExpectedTestResultType, index: number) => (
                        <Text key={index}>Question #{index + 1}{testResult.isCorrect ? " Correct" : " Incorrect"}</Text>
                    ))}
                </View>
            </Page>
        </Document>
    )
}