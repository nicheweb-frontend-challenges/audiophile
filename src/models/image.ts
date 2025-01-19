// Image type for reusable image objects
class Image {
  mobile: string;
  tablet: string;
  desktop: string;
  constructor(mobile: string, tablet: string, desktop: string) {
    this.mobile = mobile;
    this.tablet = tablet;
    this.desktop = desktop;
  }
}

export default Image;
