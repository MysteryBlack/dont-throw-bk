Dont-throw project
==============

Don't throw,we need it!

##Project Description

 With the spirit of frugality, we must insist the virtue of environmentalism in this resources-rich era, the waste of someone may be the treasure of another. We are engaged in creating a goods-exchanged platform in which all people could give their no-longer-used belongings to those in need. In this era everyone asks for convenience and rapidity, and we offer a system in which people could search the objects nearby, and thus make them more convenient.
 
##Description 

This project is Dont-thow project's Back-end.If you want to see front-end , please [click me](https://github.com/MysteryBlack/dont-throw-layout)

##Install 

`$npm i` && `touch errors` && setting `/config.json` && `/config/default.json`

`default.json`:

```javasript
{
  "port": 3000,
  "host": "localhost",
  "controllers": "controllers",
  "error": {
    "format": "{level:1}{module:3}{code:2}",
    "file": "errors"
  },
  "logger": {
    "level": "debug",
    "dir": "log",
    "filename": "%s.log"
  },
  "packages": {
    "sequelize": {    
        "db": "yourdbname",
        "username": "yourusername",
        "password": "yourpassword",
        "options": {
            "host": "yourhost"
        }
    },   
    "users": {        
      "redis-database": 2,
      "token-expire": 604800,
      "nonce-expire": 300
    }
  }
}


```
