import { Blocker } from "react-router-dom";

type Props = {
    navBlocker: Blocker;
};

export default function NavigationBlocker({ navBlocker }: Props) {
    if (navBlocker === undefined) return null;

    return (
        <>
            {
                navBlocker.state === "blocked" ? (
                    <div className="w-full min-h-screen absolute top-0 left-0 z-30 bg-black/50 flex justify-center items-center">
                        <div className="bg-main p-4 rounded-lg">
                            <p className="font-medium">If you leave now, you will have to restart a test.</p>
                            <p className="font-medium mt-2">Are you sure you want to proceed?</p>
                            <div className="mt-5 flex justify-center gap-4">
                                <button
                                onClick={() => navBlocker.proceed()}
                                className="px-6 py-2 bg-red-400 text-main font-medium rounded-md"
                                >
                                    Proceed
                                </button>
                                <button 
                                onClick={() => navBlocker.reset()}
                                className="px-6 py-2 bg-accentBlue text-main font-medium rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}