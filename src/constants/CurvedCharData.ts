interface CurvedChar {
    char: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
}

const ideaShareLine: CurvedChar[] = [
    { char: 'I', x: 75, y: 426.6, width: 44.1, height: 40.3, rotation: -51.01 },
    { char: 'd', x: 95.14, y: 409.4, width: 39.3, height: 42.5, rotation: -40.46 },
    { char: 'e', x: 115, y: 395.8, width: 34.7, height: 44.7, rotation: -30.41 },
    { char: 'a', x: 137.5, y: 385.1, width: 31.4, height: 46.5, rotation: -19.6 },
    { char: 'S', x: 202.3, y: 380.3, width: 23.7, height: 45.2, rotation: 9.3 },
    { char: 'h', x: 221.6, y: 385.8, width: 30.9, height: 46.2, rotation: 20.36 },
    { char: 'a', x: 239.8, y: 396.5, width: 37.9, height: 46, rotation: 31.66 },
    { char: 'r', x: 257.1, y: 412.4, width: 38.4, height: 40.7, rotation: 41.97 },
    { char: 'e', x: 268.8, y: 428.3, width: 43, height: 38.5, rotation: 51.52 }
];

const myIdeaLine: CurvedChar[] = [
    { char: 'M', x: 120.4, y: 515.2, width: 44.9, height: 52.7, rotation: 50.66 },
    { char: 'y', x: 142.1, y: 533.7, width: 29.4, height: 49.6, rotation: 30.24 },
    { char: 'I', x: 190.3, y: 545.2, width: 21.1, height: 47.8, rotation: -5.41 },
    { char: 'd', x: 205.5, y: 540.3, width: 25.4, height: 49.3, rotation: -40.47 },
    { char: 'e', x: 215.8, y: 525.9, width: 33.2, height: 49.5, rotation: -50.82 },
    { char: 'a', x: 230.2, y: 510.5, width: 40, height: 50.2, rotation: -50.58 }
];

export const CurvedCharData = [...ideaShareLine, ...myIdeaLine];
