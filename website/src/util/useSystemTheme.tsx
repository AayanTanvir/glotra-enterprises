'use client';

import React, { useState, useEffect } from 'react';

export default function useSystemTheme() {
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setIsDark(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return isDark;
}
