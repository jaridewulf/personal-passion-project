const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Old Skool Racers";
const description = "Race your NFTs against your friends.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "wheels" },
      { name: "chasis" },
      { name: "bumper" },
      { name: "doorhandle" },
      { name: "headlight" },
      { name: "shadows" },
      { name: "taillight" },
      { name: "windows" },
    ],
  },
  {
    growEditionSizeTo: 18,
    layersOrder: [
      { name: "wheels" },
      { name: "chasis" },
      { name: "antenna" },
      { name: "bumper" },
      { name: "doorhandle" },
      { name: "headlight" },
      { name: "shadows" },
      { name: "taillight" },
      { name: "windows" },
    ],
  },
];

//Yarn run rarity to check rarity of each attribute

//Shuffles the creaton of the layer cfg, this prevents prediction of antenna while minting
const shuffleLayerConfigurations = true;

//Show extra info while creating collection
const debugLogs = false;

const format = {
  width: 276,
  height: 185,
  smoothing: false,
};

const gif = {
  export: true,
  repeat: -1,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

//Place to provide additional meta data (global)
const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
