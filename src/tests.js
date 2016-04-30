const testsContext = require.context('.', true, /__TEST__\/.*.js?$/);
testsContext.keys().forEach(testsContext);
