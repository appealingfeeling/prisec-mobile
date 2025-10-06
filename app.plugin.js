const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function withFirebasePodfile(config) {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
      
      if (fs.existsSync(podfilePath)) {
        let contents = fs.readFileSync(podfilePath, 'utf-8');
        
        // Add use_modular_headers! if not already present
        if (!contents.includes('use_modular_headers!')) {
          contents = contents.replace(
            /platform :ios/,
            `platform :ios\n  use_modular_headers!`
          );
          fs.writeFileSync(podfilePath, contents);
        }
      }
      
      return config;
    },
  ]);
};