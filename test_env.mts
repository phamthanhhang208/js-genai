import {Environment, Tool} from './src/types.js';

const computerUseTool: Tool = {
  computerUse: {
    environment: Environment.ENVIRONMENT_BROWSER
  }
};

console.log('Environment.ENVIRONMENT_BROWSER:', Environment.ENVIRONMENT_BROWSER);
console.log('typeof:', typeof Environment.ENVIRONMENT_BROWSER);
console.log('tool JSON:', JSON.stringify(computerUseTool, null, 2));

const computerUseToolString: Tool = {
  computerUse: {
    environment: "ENVIRONMENT_BROWSER" as any
  }
};
console.log('string tool JSON:', JSON.stringify(computerUseToolString, null, 2));
