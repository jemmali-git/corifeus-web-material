[//]: #@corifeus-header

 [![Build Status](https://travis-ci.org/patrikx3/corifeus-web-material.svg?branch=master)](https://travis-ci.org/patrikx3/corifeus-web-material)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/?branch=master)  
  
[![NPM](https://nodei.co/npm/corifeus-web-material.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/corifeus-web-material/)
---
# Corifeus Web Material - Amazing

## Issues / Support
This is an open source project. Time is a precious thing, so I have rarely time to give support and fix issues for someone else. I fix a bug, when I have an error that I need. If you got an issue, error or bug, I hope someone will have time to do it for you, otherwise, you are on your own.

Though, if I know the solution, I will tell you. Besides, core errors will be fixed by me.

***If you want to extend, fix bugs or add in new features, I promptly merge pull requests or you can become a ```patrikx3``` member.***

### Node Version Requirement 
``` 
>=7.8.0 
```  
   
### Built on Node 
``` 
v7.10.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    
  
# Description  

                        
[//]: #@corifeus-header:end

Corifeus Web Material. 
  
https://material.corifeus.tk  
  
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
[**CORIFEUS-WEB-MATERIAL**](https://pages.corifeus.tk/corifeus-web-material) Build v4.1.354-42

[Corifeus](http://www.corifeus.tk) by [Patrik Laszlo](http://patrikx3.tk)

[//]: #@corifeus-footer:end