import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xe7E09907a707Cccc11D15A21393ef621609C6cBd");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "OG Moonstar",
        description: "This NFT will give you access to MoonstarsDAO!",
        image: readFileSync("scripts/assets/moonstar3d.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();