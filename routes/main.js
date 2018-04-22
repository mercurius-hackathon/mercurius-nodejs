/**
 * @author yahuang.wu
 * @date : 2018.03.10
 */

var Web3 = require('web3');

var contractConfig = require('./contractConfig');

var contractABI = contractConfig.contractABI();

var httpProvider = contractConfig.httpProvider();
var contractAddress = contractConfig.contractAddress();

var strategyArray = ['ubah', 'best', 'crp', 'bcrp', 'up', 'eg', 'ons', 'anticor1', 'anticor2', 'pamr', 'cwmr_var', 'cwmr_std', 'olmar2', 'bk', 'bnn', 'cornk', 'm0', 'rmr', 'sp', 'wmamr'];

module.exports = function (app) {

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));
  }

  var contract = web3.eth.contract(contractABI);
  var contractInstance = contract.at(contractAddress);
  var test = contractInstance.balanceOf('0x627306090abab3a6e1400e9345bc60c78a8bef57');
  console.log(test.toString(10));

  // 调用mercurius合约方法
  app.get('/backtest', function (req, res) {

    var owner = parseInt(req.query.owner);
    var strateId = parseInt(req.query.strateId);
    var backTestResult = req.query.backTestResult;

    // console.log(owner, 0xf12b5dd4ead5f743c6baa640b0216200e89b60da);
    // console.log(strateId);
    // console.log(backTestResult);


    // var result = contractInstance.testFunction(0,'123');
    // console.log(result);

    // res.end(JSON.stringify(result));
  });

};
