"use client";

import React, { useState, useEffect } from "react";

import PwaAgent from "@/lib/PwaAgent";
import InstallPromptDialog from "./InstallPromptDialog";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<{ outcome: string }>;
}

export default function InstallPrompt() {
    const [displayPrompt, setDisplayPrompt] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    const { isMobile, isStandalone } = PwaAgent();

    const closePrompt = () => {
        setDisplayPrompt(false);
    };

    const handleInstallPrompt = async () => {
        if (!deferredPrompt) {
            return;
        }
        const result = await deferredPrompt.prompt();
        console.log(`Install prompt was: ${result.outcome}`);
    };

    const handleListener = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    useEffect(() => {
        // Only show prompt if user is on mobile and app is not installed
        if (isMobile && !isStandalone) {
            setDisplayPrompt(true);
        }

        window.addEventListener("beforeinstallprompt", handleListener);
        return () => {
            document.removeEventListener("beforeinstallprompt", handleListener);
        };
    }, [isMobile, isStandalone]);

    return (
        <>
            {displayPrompt && deferredPrompt && (
                <InstallPromptDialog
                    closePrompt={closePrompt}
                    installPrompt={handleInstallPrompt}
                />
            )}
        </>
    );
}
