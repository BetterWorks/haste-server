{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 64,

  "maxLength": 5000000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "info",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "random"
  },

  "storage": {
    "type": "redis",
    "host": "0.0.0.0",
    "port": 6379,
    "db": 2,
    "expire": 2592000
  },

  "documents": {
  }

}
