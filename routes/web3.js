/**
 * @author yahuang.wu
 * @date : 2018.03.10
 */

var Web3 = require('web3');
var EOSContractABI = [{
  "constant": true,
  "inputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "address"}],
  "name": "claimed",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "owner_", "type": "address"}],
  "name": "setOwner",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "time",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{"name": "", "type": "uint128"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "foundersAllocation",
  "outputs": [{"name": "", "type": "uint128"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "day", "type": "uint256"}],
  "name": "claim",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "foundersKey",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "address"}],
  "name": "userBuys",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "day", "type": "uint256"}],
  "name": "createOnDay",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "freeze",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "", "type": "address"}],
  "name": "keys",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "startTime",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "authority_", "type": "address"}],
  "name": "setAuthority",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "", "type": "uint256"}],
  "name": "dailyTotals",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "buy",
  "outputs": [],
  "payable": true,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "openTime",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "EOS",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "today",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "authority",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "eos", "type": "address"}],
  "name": "initialize",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "createFirstDay",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "claimAll",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "timestamp", "type": "uint256"}],
  "name": "dayFor",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "day", "type": "uint256"}, {"name": "limit", "type": "uint256"}],
  "name": "buyWithLimit",
  "outputs": [],
  "payable": true,
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "collect",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "numberOfDays",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "key", "type": "string"}],
  "name": "register",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "createPerDay",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "type": "function"
}, {
  "inputs": [{"name": "_numberOfDays", "type": "uint256"}, {
    "name": "_totalSupply",
    "type": "uint128"
  }, {"name": "_openTime", "type": "uint256"}, {"name": "_startTime", "type": "uint256"}, {
    "name": "_foundersAllocation",
    "type": "uint128"
  }, {"name": "_foundersKey", "type": "string"}], "payable": false, "type": "constructor"
}, {"payable": true, "type": "fallback"}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "name": "window", "type": "uint256"}, {
    "indexed": false,
    "name": "user",
    "type": "address"
  }, {"indexed": false, "name": "amount", "type": "uint256"}],
  "name": "LogBuy",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "name": "window", "type": "uint256"}, {
    "indexed": false,
    "name": "user",
    "type": "address"
  }, {"indexed": false, "name": "amount", "type": "uint256"}],
  "name": "LogClaim",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "name": "user", "type": "address"}, {
    "indexed": false,
    "name": "key",
    "type": "string"
  }],
  "name": "LogRegister",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "name": "amount", "type": "uint256"}],
  "name": "LogCollect",
  "type": "event"
}, {"anonymous": false, "inputs": [], "name": "LogFreeze", "type": "event"}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "authority", "type": "address"}],
  "name": "LogSetAuthority",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
  "name": "LogSetOwner",
  "type": "event"
}];
var EOSContractFun = '0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf';
var API = require('./api_error');

module.exports = function (app) {

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/gyEJwnt0SjKKmafgYTRq"));
  }

  // 验证EOS是否映射
  app.get('/eos/verifytoken', function (req, res) {
    if (!req.query.address) {
      return res.end(JSON.stringify(API.PARAM_ERROR));
    }
    var ethAddress = req.query.address;

    var EOSContract = web3.eth.contract(EOSContractABI);

    var EOSContractInstance = EOSContract.at(EOSContractFun);
    console.log('开始查询EOS映射状态,以太坊地址: ' + ethAddress);
    verifyToken(ethAddress, function (data) {
      if (data.length > 0) {
        res.end(JSON.stringify({"code": 0, "eosAddress": data, "message": "", "errorMessage": ""}));
      } else {
        res.end(JSON.stringify(API.EOS_MAPPING_NOT_FOUND));
      }
    });

    // EOS智能合约提供的查询API
    function verifyToken(ethAddress, callback) {
      try{
        callback(EOSContractInstance.keys.address(ethAddress));
      }catch(e){
        console.log(e);
        res.end(API.PARAM_ERROR);
      }
    }
  });

  // 查询EOS钱包余额
  app.get('/eos/balance', function (req, res) {
    if (!req.query.address) {
      return res.end(JSON.stringify(API.PARAM_ERROR));
    }

    var ethAddress = req.query.address;

    // ethplorer提供的API支持查询以太坊钱包地址的所有token余额
    GET('https://api.ethplorer.io/getAddressInfo/' + ethAddress + '?apiKey=freekey', req, res).then(function (data) {
      if (data.error) {
        res.end(JSON.stringify(API.INVALID_ETH_ADDRESS_FORMAT));
      } else {
        var eosBalance = 0;
        var balanceArray = data.tokens || [];
        for (var i = 0; i < balanceArray.length; i++) {
          if (balanceArray[i].tokenInfo.name == 'EOS') {
            eosBalance = (new Number(balanceArray[i].balance) / 1000000000000000000).toLocaleString();
          }
        }
        var result = {
          "code": 0,
          "message": "",
          "eosBalance": eosBalance,
          "errorMessage": ""
        };
        res.end(JSON.stringify(result));
      }
    });
  });
};
