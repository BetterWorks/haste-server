{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 16,

  "maxLength": 5000000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": false,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "random"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 30000
      }
    }
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
