export interface MeetingImage {
  imageUrl: string;
}

export interface MeetingImagePreview extends MeetingImage{
  size: `${string}px`;
  top: `${string}px`;
  brightness: number;
}

export class MeetingImagePreviewAdapter {
  startBrightness: number | null = null;
  brightnessStep = 0;

  constructor(
    protected meetingImages: MeetingImage[],
  ) {
  }

  adaptToPreview(
    startSize: number, sizeStep: number,
    startTop: number, topStep: number,
    startBrightness: number, brightnessStep: number,
    count = this.meetingImages.length): MeetingImagePreview[] {
    let size = startSize;
    let top = startTop;
    let brightness = startBrightness;
    const result: MeetingImagePreview[] = [];


    for (let imageIndex = 0; imageIndex < count; imageIndex++) {
      result.push({
        ...this.meetingImages[imageIndex],
        size: `${size}px`,
        top: `${top}px`,
        brightness: brightness
      })

      size -= sizeStep;
      top -= topStep;

      brightness -= brightnessStep;
      if(brightness < 0) brightness = 0;
    }

    return result;
  }
}
