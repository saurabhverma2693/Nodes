const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getProductFromfILE = cb => {
    
    fs.readFile(p, (err, fileContent) => {
        if (err) {
           return cb([]);
        } else {
            try {
                cb(JSON.parse(fileContent));
            } catch (e) {
                // If file is empty or corrupted, return an empty array
                cb([]);
            }
        }
    });

}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductFromfILE(products =>{
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
        });
    });
    
  }

  static fetchAll(cb) {
    getProductFromfILE(cb);
}

 
};
