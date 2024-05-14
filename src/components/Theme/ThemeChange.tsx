import { useEffect } from "react";

export default function ThemeChange() {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    useEffect(() => {
        themeCheck();
    }, []);

    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
            return;
        }
    };

    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    };

    return (
        <div>
            <button onClick={() => themeSwitch()}>Theme Change</button>
        </div>
    )
}