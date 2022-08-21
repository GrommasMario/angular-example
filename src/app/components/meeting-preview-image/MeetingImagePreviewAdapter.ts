export interface IMeetingImage {
    imageUrl: string;
}

export interface IMeetingImagePreview extends IMeetingImage {
    size: `${string}px`;
    top: `${string}px`;
    brightness: number;
}

export class MeetingImagePreviewAdapter {
    startBrightness: number | null = null;

    brightnessStep = 0;

    constructor(protected meetingImages: IMeetingImage[]) {}

    adaptToPreview(
        startSize: number,
        sizeStep: number,
        startTop: number,
        topStep: number,
        startBrightness: number,
        brightnessStep: number,
        count = this.meetingImages.length,
    ): IMeetingImagePreview[] {
        let size = startSize;
        let top = startTop;
        let brightness = startBrightness;
        const result: IMeetingImagePreview[] = [];

        for (let imageIndex = 0; imageIndex < count; imageIndex++) {
            result.push({
                ...this.meetingImages[imageIndex],
                size: `${size}px`,
                top: `${top}px`,
                brightness,
            });

            size -= sizeStep;
            top -= topStep;

            brightness -= brightnessStep;
            if (brightness < 0) brightness = 0;
        }

        return result;
    }
}
