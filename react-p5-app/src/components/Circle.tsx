import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

function Circle() {
  let x = 50;
  let y = 50;
  let pg: p5Types.Graphics;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(720, 400).parent(canvasParentRef);
    p5.frameRate(60);

    pg = p5.createGraphics(400, 250);
  };

  const draw = (p5: p5Types) => {
    p5.background(51);

    p5.fill(0, 12);
    p5.rect(0, 0, p5.width, p5.height);
    p5.fill(255);
    p5.noStroke();
    // p5.noFill();
    // p5.stroke(255);
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);

    pg.background(100);
    pg.noFill();
    pg.stroke(255);
    pg.ellipse(p5.mouseX - 150, p5.mouseY - 75, 50, 50);

    p5.image(pg, 150, 75);
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default Circle;
