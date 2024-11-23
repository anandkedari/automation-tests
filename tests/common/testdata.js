import { ENVIRONMENT } from './constants.js';

const fs = require('fs');
const path = require('path');
const dataFolderName = 'test-data';
const dataFileName = ENVIRONMENT + '-data.json';

export const Data = {
  get get() {
    this.setDataFolder();
    let dataFilePath = this.featureDir + path.sep + dataFolderName + path.sep + dataFileName;
    try {
      var data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    } catch (e) {
      let error = `File not found: ${dataFilePath}. Data file name should follow naming convention as:ENV-data.json, where ENV is global variable`;
      throw new Error(error);
    }
    return data;
  },
  setDataFolder(dataFolder = path.dirname(module.parent.filename)) {
    this.featureDir = dataFolder;
    return this;
  }
}

export default Data;