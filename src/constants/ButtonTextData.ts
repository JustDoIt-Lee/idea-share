interface ButtonTextData {
    chars: { char: string; x: number; y: number; rotation: number; }[];
}

export const IdeasShareText: ButtonTextData = {
    chars: [
        { char: 'I', x: 120, y: 400, rotation: -90 },
        { char: 'd', x: 140, y: 380, rotation: -70 },
        { char: 'e', x: 170, y: 370, rotation: -45 },
        { char: 'a', x: 200, y: 365, rotation: -20 },
        { char: ' ', x: 230, y: 365, rotation: 0 },
        { char: 'S', x: 260, y: 370, rotation: 20 },
        { char: 'h', x: 290, y: 380, rotation: 45 },
        { char: 'a', x: 310, y: 400, rotation: 70 },
        { char: 'r', x: 320, y: 430, rotation: 90 },
        { char: 'e', x: 310, y: 460, rotation: 110 },
    ]
};

export const MyIdeaText: ButtonTextData = {
    chars: [
        { char: 'M', x: 160, y: 530, rotation: -110 },
        { char: 'y', x: 180, y: 540, rotation: -90 },
        { char: ' ', x: 210, y: 545, rotation: -45 },
        { char: 'I', x: 240, y: 540, rotation: 0 },
        { char: 'd', x: 270, y: 530, rotation: 45 },
        { char: 'e', x: 290, y: 510, rotation: 90 },
        { char: 'a', x: 300, y: 480, rotation: 135 },
    ]
};
