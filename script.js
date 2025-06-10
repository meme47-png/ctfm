const imageFilenames = [
  "1737121377465.jpg",
  "1737121380765.jpg",
  "1737121383844.jpg",
  "1737121386526.jpg",
  "1737121390829.jpg",
  "1737121396571.jpg",
  "1737121399488.jpg",
  "1737121446195.jpg",
  "1737121468011.jpg",
  "1737121497174.jpg",
  "GreenScreen.webp",
  "Picsart_24-04-30_07-44-23-239.webp",
  "Picsart_24-05-01_09-33-17-981.webp",
  "Picsart_24-05-01_09-42-04-102.webp",
  "Picsart_24-05-01_09-42-51-195.webp",
  "Picsart_24-05-01_09-43-11-875.webp",
  "Picsart_24-05-01_09-43-26-320.webp",
  "Picsart_24-05-01_09-43-48-467.webp",
  "Picsart_24-05-01_09-44-10-168.webp",
  "Picsart_24-05-01_09-44-30-980.webp",
  "Picsart_24-05-01_09-45-05-497.webp",
  "Picsart_24-05-01_09-45-31-429.webp",
  "Picsart_24-05-01_09-45-50-849.webp",
  "Picsart_24-05-01_09-46-22-008.webp",
  "Picsart_24-05-01_09-46-39-014.webp",
  "Picsart_24-05-01_09-46-57-976.webp",
  "Picsart_24-05-01_09-47-32-295.webp",
  "Picsart_24-05-01_09-47-54-341.webp",
  "Picsart_24-05-01_09-48-14-786.webp",
  "Picsart_24-05-01_09-48-58-170.webp",
  "Picsart_24-05-01_09-49-47-173.webp",
  "Picsart_24-05-01_09-50-58-800.webp",
  "Picsart_24-05-01_09-51-26-628.webp",
  "Picsart_24-05-01_09-51-55-340.webp",
  "Picsart_24-05-01_09-52-14-546.webp",
  "Picsart_24-05-01_09-52-45-861.webp",
  "Picsart_24-05-01_09-53-04-157.webp",
  "Picsart_24-05-01_09-53-23-377.webp",
  "Picsart_24-05-01_09-54-10-638.webp",
  "Picsart_24-05-01_09-54-44-913.webp",
  "Picsart_24-05-01_09-54-59-805.webp",
  "Picsart_24-05-01_09-55-20-100.webp",
  "Picsart_24-05-01_09-55-40-025.webp",
  "Picsart_24-05-01_09-55-53-954.webp",
  "Picsart_24-05-01_09-56-15-973.webp",
  "Picsart_24-05-01_09-56-31-307.webp",
  "Picsart_24-05-01_09-56-52-179.webp",
  "Picsart_24-05-01_09-57-09-937.webp",
  "Picsart_24-05-01_09-58-01-749.webp",
  "Picsart_24-05-01_09-58-44-309.webp",
  "Picsart_24-05-01_09-59-03-233.webp",
  "Picsart_24-05-01_09-59-35-813.webp",
  "Picsart_24-05-01_10-00-03-861.webp",
  "Picsart_24-05-01_10-00-20-605.webp",
  "Picsart_24-05-01_10-00-46-030.webp",
  "Picsart_24-05-01_10-01-31-393.webp",
  "Picsart_24-05-01_10-01-45-169.webp",
  "Picsart_24-05-01_10-01-56-863.webp",
  "Picsart_24-05-01_10-02-27-705.webp",
  "Picsart_24-05-01_10-02-55-218.webp",
  "Picsart_24-05-01_10-03-20-729.webp",
  "Picsart_24-05-01_10-03-43-773.webp",
  "Picsart_24-05-01_10-04-00-525.webp",
  "Picsart_24-05-01_10-04-15-296.webp",
  "Picsart_24-05-01_10-04-31-147.png",
  "Picsart_24-05-01_10-04-45-052.webp",
  "Picsart_24-05-01_10-05-05-409.webp",
  "Picsart_24-05-01_10-05-24-367.webp",
  "Picsart_24-05-01_10-05-44-294.webp",
  "Picsart_24-05-01_10-06-16-324.webp",
  "Picsart_24-05-01_10-06-38-903.webp",
  "Picsart_24-05-01_10-06-56-167.webp",
  "Picsart_24-05-01_10-07-26-176.webp",
  "Picsart_24-05-01_10-07-45-945.webp",
  "Picsart_24-05-01_10-07-58-694.webp",
  "Picsart_24-05-01_10-08-29-408.webp",
  "Picsart_24-05-01_10-08-45-164.webp",
  "Picsart_24-05-01_10-09-30-760.webp",
  "Picsart_24-05-01_10-09-45-287.webp",
  "Picsart_24-05-01_10-10-05-859.webp",
  "Picsart_24-05-01_10-10-20-752.webp",
  "Picsart_24-05-01_10-10-31-725.webp",
  "Screenshot_20250221_194156_Chrome.jpg",
  "Screenshot_20250221_194215_Chrome.jpg",
  "Screenshot_20250221_194228_Chrome.jpg",
  "Screenshot_20250221_194241_Chrome.jpg",
  "Screenshot_20250221_194251_Chrome.jpg",
  "Screenshot_20250221_194305_Chrome.jpg",
  "Screenshot_20250221_194317_Chrome.jpg"
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const gallery = document.getElementById("gallery");
const shuffledFilenames = shuffleArray([...imageFilenames]);

shuffledFilenames.forEach(filename => {
  const container = document.createElement("div");
  container.classList.add("image-container");

  const img = document.createElement("img");
  img.src = `images/${filename}`;
  img.alt = filename;

  const downloadLink = document.createElement("a");
  downloadLink.href = img.src;
  downloadLink.download = filename;
  downloadLink.textContent = "Download";
  downloadLink.classList.add("download-btn");

  container.appendChild(img);
  container.appendChild(downloadLink);
  gallery.appendChild(container);
});
