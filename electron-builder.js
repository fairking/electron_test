/**
* @type {import('electron-builder').Configuration}
* @see https://www.electron.build/configuration/configuration
**/
module.exports = {
  appId: "com.electron_test.cmu",
  productName: "Electron Test CMU",
  copyright: "Copyright © year ${author}",
  win: {
    target: "nsis",
    icon: "public/logo_256x256.ico"
  },
  rpm: {
    category: "Other"
  }
};
