'use client'
import useWindowDimensions from '@/app/hooks/useWindowDimensions';
import React, { ReactNode, useMemo } from 'react'

interface props {
    renderOnMob?: boolean;
    renderOnDesk?: boolean;
    children: ReactNode;
}

export default function VariableRender({ renderOnDesk, renderOnMob, children }: props) {
    const { width } = useWindowDimensions();
    const isMobile = useMemo(() => width < 1279, [width]);

    return (
        (renderOnDesk && !isMobile && children) || (renderOnMob && isMobile && children) || <></>
    )
}
