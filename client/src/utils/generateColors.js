export const generateColors = (count) => {
    const colors = [];

    for (let i = 0; i < count; i += 1) {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(color);
    }
    
    return colors;
};