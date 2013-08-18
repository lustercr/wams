module.exports = { 
  "development": { 
    "driver":   'mongodb',
    "url":      'mongodb://localhost/wams_dev'
  }, 
  "test": { 
    "driver":   'mongodb',
    "url":      'mongodb://localhost/wams_test'
  }, 
  "production": { 
    "driver":   'mongodb',
    "url":      'mongodb://localhost/wams_prod'
  }
};
