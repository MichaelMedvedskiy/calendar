var env = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 3000;

console.log('env*****',env);

if(env === 'development' || env === 'test'){
  var config = require('./config.json');
//  console.log(config);
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key)=>{
    process.env[key] = envConfig[key];
  });
}
