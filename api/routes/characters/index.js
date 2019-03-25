module.exports = function (router) {
    require('./characters.get')(router);
    require('./character.post')(router);
    require('./character.get')(router);
    require('./character.put')(router);
    require('./character.delete')(router);
}