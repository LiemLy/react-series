import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

function PieChart() {
  let angles = [30, 10, 45, 35, 60, 38, 75, 67];
  let x = 0;
  let y = 100;
  let speed = 0;
  let a = 1;
  let mode = "+";
  let step = 0.001;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(720, 400).parent(canvasParentRef);
    p5.frameRate(60);
    p5.noStroke();
    p5.rectMode(p5.CENTER);
  };

  const draw = (p5: p5Types) => {
    p5.background(150);
    p5.translate(200, 200);
    p5.rotate(x);

    pieChart(300, angles, p5);
    x = x + speed * a;

    if (mode == "+") {
      speed += step;
    } else if (mode == "-") {
      speed -= 0.001;
    }

    if (speed > 0.5) {
      mode = "-";
    } else if (speed < 0) {
      p5.noLoop();
    }
  };

  const pieChart = (diameter: number, data: number[], p5: p5Types) => {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
      let gray = p5.map(i, 0, data.length, 0, 255);
      p5.fill(gray);
      p5.arc(
        0,
        0,
        diameter,
        diameter,
        lastAngle,
        lastAngle + p5.radians(data[i])
      );
      lastAngle += p5.radians(data[i]);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default PieChart;
