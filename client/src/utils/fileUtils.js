export const downloadCanvasToImage = () => {
  const canvas = document.querySelector('canvas');
  const dataURL = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'canvas.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadGeneratedImage = (photo) => {
  // Create a Blob from the base64 data
  const byteCharacters = atob(photo);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: 'image/png' });

  // Create a download link and trigger the download
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'generated_photo.png';
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);
};

export const reader = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });
};
