import { ENVIRONMENT } from './constants.js';
import { faker } from '@faker-js/faker';

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
  },

  randomizer (data) {
      data.firstName = faker.person.firstName();
      data.lastName = faker.person.lastName();
      data.address = faker.location.streetAddress();
      data.city = faker.location.city();
      data.state = faker.location.state();
      data.zip = faker.location.zipCode();
      data.phone = "1";//faker.phone.number()
      data.ssn = "1";
      // data.username = data.firstName.toLowerCase().substr(1,10) + Date.now().toString.substr(10);
      // trimming username as after specific length web app throws already exists error
      data.username = (faker.internet.username().toLowerCase()).substring(1,12);
      // data.password = data.lastName; default set to test@2024
      return data;
  }
};

export default Data;