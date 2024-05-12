import { useState } from 'react';

export const useHover = () => {
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

    const handleMouseEnter = (itemId: number) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    return { hoveredItemId, handleMouseEnter, handleMouseLeave };
}