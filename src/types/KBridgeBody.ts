export interface KBridgeBody {
  building: {
    buildingLength: number;
    porchLength: number;
    wallWidth: number;
    wallHeight: number;
    sidingType: string;
  };
  windows: [
    {
      width: number;
      height: number;
      windowLocation: string;
      windowSize: string;
      windowWall: string;
    },
    {
      width: number;
      height: number;
      windowLocation: string;
      windowSize: string;
      windowWall: string;
    },
  ];
  doors: [
    {
      width: number;
      height: number;
      doorLocation: string;
      doorWall: string;
    },
  ];
  dogDoor: {
    width: number;
    height: number;
    dogDoorLocation: string;
  };
}
