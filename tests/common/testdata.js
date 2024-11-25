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
      let date = new Date();
      let timestemp = date.getMonth() + date.getDate() + date.getHours() + date.getMinutes();
      data.firstName = faker.person.firstName();
      data.lastName = faker.person.lastName();
      data.address = faker.location.streetAddress();
      data.city = faker.location.city();
      data.state = faker.location.state();
      data.zip = faker.location.zipCode();
      data.phone = "1";//faker.phone.number()
      data.ssn = "1";
      // data.username = data.firstName.toLowerCase().substr(1,10) + Date.now().toString.substr(10);
      data.username = (faker.internet.username().toLowerCase()).substring(1,12);
      data.password = data.lastName;
      console.log('First name -', data.firstName, ' , lastName  -', data.lastName);
      console.log('Registering with username -', data.username, ' , password -', data.password);
      return data;
  }
};

export default Data;