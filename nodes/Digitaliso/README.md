# Installation instructions

## Step 1:

Clone the [n8n repository](https://github.com/n8n-io/n8n) in github as well as Digitaliso node.

* n8n repository:
   ```sh
  git clone https://github.com/n8n-io/n8n.git
  ```

* Digitaliso node repository:
   ```sh
  git clone https://github.com/MauGal/n8n-nodes-digitaliso.git
  ```

## Step 2:

Copy the Digitaliso node folder to n8n folder in `packages/nodes-base/nodes`

## Step 3:

Copy DigitalisoApi.credentials.ts to n8n folder in `packages/nodes-base/credentials`

## Step 4:

Go to `/packages/nodes-base/package.json`: paste `"dist/nodes/Digitaliso/Digitaliso.node.js",` in the nodes array and paste `"dist/credentials/DigitalisoApi.credentials.js",` in the credentials array to register the node (in an alphabetical order).

## Step 5:

To test if the nodes are working and doesn't have any errors you can install and run a local version of n8n by running:
   ```sh
    lerna bootstrap --hoist
    npm run build
    npm run dev
   ```

* For more information Visit [n8n Documentation](https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#adding-the-node-to-editor-ui).