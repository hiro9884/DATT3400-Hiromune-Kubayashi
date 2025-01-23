let table;

function preload(){
  table = loadTable("asset/S-V3-F015021-FAULT-CASE1.csv", "csv", "header");

}

function setup() {
 // put setup code here
 createCanvas(800, 600);
 noLoop();

}
function draw() {
  background(20);

  if (table) {
    let numRows = table.getRowCount(); 
    print(numRows);

    let jlonValues = table.getColumn("JLON"); 
    let colorValues = table.getColumn("JLAT"); 

    let centerX = width / 2; 
    let centerY = height / 2; 
    let maxBarLength = 280; 

    for (let i = 0; i < numRows; i++) {
      let jlon = float(jlonValues[i]);
      let barLength = map(jlon, 139.22, 139.47, 0, maxBarLength); 

      let angle = map(i, 0, numRows, 0, TWO_PI);
      let x1 = centerX; 
      let y1 = centerY; 

      // The following two lines involve the ChatGPT assistant.
      let x2 = centerX + barLength * cos(angle); 
      let y2 = centerY + barLength * sin(angle); 

      // Convert 'JLAT' to a numerical value and determine the color. 
      let colorValue = float(colorValues[i]);
      if (colorValue >= 35.6 && colorValue < 35.73) {
        stroke("red");
      } else if (colorValue >= 35.73 && colorValue < 35.8) {
        stroke("green");
      } else {
        stroke("blue");
      }

      strokeWeight(4); 
      line(x1, y1, x2, y2);

      // Draw a circle at the endpoint (with a decorative flower-like appearance).
      fill(255);
      noStroke();
      circle(x2, y2, 8); 
    }
  }
}

