import { useState } from 'react';

export const useHover = () => {
    const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

    const handleMouseEnter = (itemId: string) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    return { hoveredItemId, handleMouseEnter, handleMouseLeave };
}