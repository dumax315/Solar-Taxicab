import kaboom from "kaboom";

import { LevelConf } from "kaboom";

import { k } from "./main.js";



const mapScale = 1.5;

const blockSize = 64 * mapScale;

const backgroundSize = 64 * mapScale * 6;

const numberOfBackTiles = 48;


const mapASCII =
  ["        ",
  "        ",
  "        ",
  "        ",
  "        ",
  "        ",
  "        ",
  "        ",];

// this is a bug in kaboom, it works fine
export function generateMap () {
  k.addLevel(
    mapASCII, {
      width: backgroundSize,
      height: backgroundSize,
      pos: vec2(width() / 2 - 10 * backgroundSize, height() / 2 - 10 * backgroundSize),
      "=": () => [
        rect(backgroundSize, backgroundSize),
        color(255, 0, 0),
        area(),
        origin("center"),
        // "planet",
        layer("bg"),
        "background",
        {
          startingPos: [0, 0],
        }
      ],
      " ": () => [
        rect(backgroundSize, backgroundSize),
        sprite("stars"),
        // scale(400 * mapScale),
				//repeting stars 1
        // scale(0.5484 * mapScale),
				//repeting stars 2
				// scale(.703 * mapScale),
				//repeting stars 8bit
				scale(1 * mapScale),
        // color(0,0,0),
        area(),
        origin("center"),
        layer("bg"),
        "background",
        {
          startingPos: [0, 0],
        }
      ],
    }
  );
} 