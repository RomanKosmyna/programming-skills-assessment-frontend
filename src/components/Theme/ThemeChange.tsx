import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeChange() {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkModeOn, setIsDarkModeOn] = useState(userTheme === "dark" || (!userTheme && systemTheme));

    useEffect(() => {
        themeCheck();
    }, []);

    const themeCheck = () => {
        if (isDarkModeOn) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const themeSwitch = () => {
        const newMode = !isDarkModeOn;
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        setIsDarkModeOn(newMode);
    };

    return (
        <div>
            <button onClick={() => themeSwitch()}>
                {isDarkModeOn ? (
                    <SunIcon w={6} h={6} color="yellow" />
                ) : (
                    <MoonIcon w={6} h={6} color="#0070f3" />
                )}
            </button>
        </div>
    )
}