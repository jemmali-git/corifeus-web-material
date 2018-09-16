[//]: #@corifeus-header

 [![Build Status](https://travis-ci.org/patrikx3/corifeus-web-material.svg?branch=master)](https://travis-ci.org/patrikx3/corifeus-web-material) 
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)

  
 
  
[![NPM](https://nodei.co/npm/corifeus-web-material.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/corifeus-web-material/)
---
# 🌴 Corifeus Web Material - Amazing v2018.9.16-2  

This is an open-source project. Star this repository, if you like it, or even donate! Thank you so much! :)

I run my own server with dynamic IP address, so, it may happen, that the server can not be reachable for about max 15 minutes, due to nature of the dynamic DNS. The server may also be unreachable, when I backup the SSD with Clonzilla (very rarely) or an electrical issue (but this should not happen again). When the server is down, please hang on for 15-30 minutes and the server will be back up.

All my domains (patrikx3.com and corifeus.com) could have errors, since I am developing in my free time. However, it is usually stable.

**Bugs are evident™ - MATRIX️**

### Node Version Requirement 
``` 
>=8.11.4 
```  
   
### Built on Node 
``` 
v10.10.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    


# Built on Angular

```text
6.1.7
```
            


# Description  

                        
[//]: #@corifeus-header:end

Corifeus Web Material. 
  
https://material.corifeus.com  

# Error
There is in ```uglifyjs``` or ```cssminify``` is making it not working with this repo, right now it is using the ```---cory-verbose``` build (which removes the compression - uglifys and cssminfier).
  
# Hack
  
For now in beta, uses ```@angular/cdk```, required.  
  
* Component
  * Loading
  * Http 404
  * Theme menu button
  * Translation menu button
  
* Themes
  * Corifeus light
  * Corifeus dark
  * Pink blue-gray
  * Purple green
  * Deep-purple Amber
  * Indigo pink
  
* Services
  * Notify
  * Themes

# Dev info

## Contrast color  
https://github.com/angular/material2/issues/4229#issuecomment-296611188
```scss
.test {
  color: mat-color($button-primary, 900-contrast)
}
```

## ElementRef Material
The default ```@ViewChild``` is not ElementcorifeuRef with Material.
Need to use like:
```typescript
@ViewChild('elementButton', {read: ElementRef}) elementButton : ElementRef;
```

https://github.com/angular/material2/blob/master/src/lib/core/theming/_theming.scss  

## Queue task
* Override ```console.error``` as a Notify error

## Colors
monochromatic, analogous, complementary, tradic 

[//]: #@corifeus-footer

---

[**CORIFEUS-WEB-MATERIAL**](https://pages.corifeus.com/corifeus-web-material) Build v2018.9.16-2 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end