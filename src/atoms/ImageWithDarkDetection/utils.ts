export const getImageBrightness = (
  imageSrc: string,
  callback: (a: number) => void,
): void => {
  const img = new Image();
  img.src = imageSrc;
  img.crossOrigin = 'Anonymous';

  img.onload = function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    (ctx as CanvasRenderingContext2D).drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
    );

    const imageData = (ctx as CanvasRenderingContext2D).getImageData(
      0,
      0,
      img.width,
      img.height,
    );
    const data = imageData.data;

    let r, g, b, avg;
    let colorSum = 0;

    for (let x = 0, len = data.length; x < len; x += 4) {
      r = data[x];
      g = data[x + 1];
      b = data[x + 2];

      avg = (r + g + b) / 3;
      colorSum += avg;
    }

    const brightness = colorSum / (img.width * img.height);
    callback(brightness);
  };
};
