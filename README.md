# personal-passion-project
Binnen je expert development module krijg je de kans om een technologie tot in de diepte uit te spitten in de vorm van een personal passion project. Je krijgt de ruimte om te experimenteren, exploreren en nieuwe uitdagingen aan te gaan.

## Generator
The main code of this generator is provided by [Hashlips](https://www.youtube.com/channel/UC1LV4_VQGBJHTJjEWUmy8nA). This person provided good information surrounding this generator in his playlist. Code has been tweaked to provide other metadata that will be used in the game created for this NFT project. This way these values can be used to alter the gameplay.

## Dev tools
### Node
This project uses Node.js. To install this go to the [Node.js website](https://nodejs.org/en/download/).

### Typescript
This project uses TypeScript. To install this just follow the [instalation guide](https://www.npmjs.com/package/ts-node#installation) provided on npm.

### Solana CLI
For this project you will need to install the Solana CLI onto your computer. Solana has great docs in how to do this, [find out how](https://docs.solana.com/cli/install-solana-cli-tools).

## Metaplex
After providing the Metaplex program with my assets, I can prepare the minting. This is done by giving it all the correct info through the CLI. The commands needed for this are:

```cli
npx ts-node js/packages/cli/src/candy-machine-cli.ts upload ./assets --env devnet --keypair (PATH TO YOUR DEVNET FILE)
```

```CLI
npx ts-node js/packages/cli/src/candy-machine-cli.ts create_candy_machine --env devnet --keypair (PATH TO YOUR DEVNET FILE)
```

```cli
npx ts-node js/packages/cli/src/candy-machine-cli.ts update_candy_machine --keypair (PATH TO YOUR DEVNET FILE) --price (YOUR PRICE, FOR EXAMPLE: 1) --date (LAUNCH DATE, FOR EXAMPLE: "19 Dec 2021 00:00:00 EST")
```