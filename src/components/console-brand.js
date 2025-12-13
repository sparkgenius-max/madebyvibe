export function initConsoleBrand() {
    const brandColor = '#fe8a8a';
    const whiteColor = '#ffffff';

    // "Made By" - Top Line (White)
    const madeByArt = `
 __  __           _         ____       
|  \\/  | __ _  __| | ___   | __ ) _  _ 
| |\\/| |/ _\` |/ _\` |/ _ \\  |  _ \\| || |
| |  | | (_| | (_| |  __/  | |_) | || |
|_|  |_|\\__,_|\\__,_|\\___|  |____/ \\_, |
                                  |__/ 
`;

    // "Vibe" - Bottom Line (Brand Color)
    const vibeArt = `
__     ___ _          
\\ \\   / (_) |__   ___ 
 \\ \\ / /| | '_ \\ / _ \\
  \\ V / | | |_) |  __/
   \\_/  |_|_.__/ \\___|
`;

    const commonStyle = `
        font-family: "Menlo", "Consolas", monospace;
        font-weight: bold;
        font-size: 14px;
        line-height: 1.2;
        background: transparent;
    `;

    const styleMadeBy = `
        ${commonStyle}
        color: ${whiteColor};
    `;

    const styleVibe = `
        ${commonStyle}
        color: ${brandColor};
    `;

    console.log(
        `%c${madeByArt}%c${vibeArt}`,
        styleMadeBy,
        styleVibe
    );
}
