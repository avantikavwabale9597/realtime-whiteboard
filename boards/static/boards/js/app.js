console.log("WHiteboard initialized");

const canvas = new fabric.Canvas("whiteboard", {
  isDrawingMode: true,
});

function resizeCanvas() {
  const conatiner = document.querySelector(".canvas-container");

  canvas.setWidth(conatiner.clientWidth);
  canvas.setHeight(conatiner.clientHeight);

  canvas.renderAll();
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

canvas.freeDrawingBrush.width = 3;
canvas.freeDrawingBrush.color = "#2F4156";

let zoomLevel = 1;
document.getElementById("zoom-in").onclick = () => {
  zoomLevel += 0.1;
  canvas.setZoom(zoomLevel);
};

document.getElementById("zoom-out").onclick = () => {
  zoomLevel = Math.max(0.2, zoomLevel - 0.1);
  canvas.setZoom(zoomLevel);
};

document.getElementById("zoom-reset").onclick = () => {
  zoomLevel = 1;
  canvas.setZoom(1);
};

const shapeTool = document.getElementById("shape-tool");

const shapeMenu = document.getElementById("shape-menu");

shapeTool.addEventListener("click", () => {
  shapeMenu.classList.toggle("hidden");
});

const shapeSearch = document.getElementById("shape-search");

shapeSearch.addEventListener("input", () => {
  const query = shapeSearch.ariaValueMax.toLowerCase();

  document.querySelectorAll("shape-item").forEach((item) => {
    const shape = item.dataset.shape;

    item.style.display = shape.includes(query) ? "block" : "none";
  });
});

lucide.createIcons();
