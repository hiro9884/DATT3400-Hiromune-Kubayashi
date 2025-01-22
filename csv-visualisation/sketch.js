let table;

function preload(){
  table = loadTable("asset/S-V3-F015021-FAULT-CASE1.csv", "csv", "header");

}

function setup() {
 // put setup code here
 createCanvas(800, 600);
 background(220);
 textAlign(CENTER, TOP);
 // console.log(table);
 for(let r = 0; r < table.getRowCount(); r++){
  const name = table.getString(r, "ELM");
  const jlon = table.getNum(r, "JLON");
  const jlat = table.getNum(r, "JLAT");


  const x = random(0, width);
  const y = random(0, height);
  const size = map(jlon, 139.0, 139.9, 0, 150);
  const fillColor = map(jlat, 35.5, 35.9, 0, 255);
  fill(fillColor, 50, 50);
  circle(x, y, size);
  fill(0);
  text(name, x, y + size/2 + 5);
  // console.log(name);

 }
}

function draw() {
  // put drawing code here
  // rect(10, 20, 30, 40);
}