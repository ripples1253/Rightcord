const {Dispatch: DispatchNative} = require('./discord_dispatch_'+process.platform+'.node');

function dispatchConstructor(jsonConfigString, updateCallback, errorCallback, analyticsCallback) {
  const instance = new DispatchNative(jsonConfigString, updateCallback, errorCallback, analyticsCallback);
  return {
    command: instance.command.bind(instance),
    destroy: instance.destroy.bind(instance),
  };
}

module.exports = {Dispatch: dispatchConstructor};
