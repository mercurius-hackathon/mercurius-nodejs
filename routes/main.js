/**
 * @author yahuang.wu
 * @date : 2018.03.10
 */

var Web3 = require('web3');

var contractConfig = require('./contractConfig');

var contractABI = contractConfig.contractABI();

var httpProvider = contractConfig.httpProvider();
var contractAddress = contractConfig.contractAddress();

module.exports = function (app) {

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));
  }

  console.log(contractABI);
  var contract = web3.eth.contract(contractABI);
  var contractInstance = contract.at(contractAddress);

  // 调用mercurius合约方法
  app.get('/backtest', function (req, res) {

    var owner = req.query.owner;
    var strateId = req.query.strateId;
    var backTestResult = req.query.backTestResult;

    console.log(contractInstance);
    var result = contractInstance.setBackTestResult(owner, strateId, backTestResult);

    res.end(JSON.stringify(result));
  });

};
