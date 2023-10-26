import { KBridgeBody } from "../types/KBridgeBody";

const component: KBridgeBody = {
  building: {
    buildingLength: 10,
    porchLength: 5,
    wallWidth: 10,
    wallHeight: 5.25,
    sidingType: "Vertical Groove Wood Panel Siding (Radiant Barrier backed) - Included",
  },
  windows: [
    {
      width: 1.5,
      height: 2,
      windowLocation: "middle",
      windowSize: "2'x2' Insulated Horizontal Sliding Window",
      windowWall: "D",
    },
    {
      width: 1.5,
      height: 2,
      windowLocation: "middle",
      windowSize: "2'x2' Insulated Horizontal Sliding Window",
      windowWall: "B",
    },
  ],
  doors: [
    {
      width: 2.5,
      height: 4.2,
      doorLocation: "middle",
      doorWall: "C",
    },
  ],
  dogDoor: {
    width: 1.8,
    height: 2.2,
    dogDoorLocation: "left",
  },
};

export default component;
