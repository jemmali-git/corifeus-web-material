[//]: #@corifeus-header

[![Build Status](https://travis-ci.org/patrikx3/corifeus-web-material.svg?branch=master)](https://travis-ci.org/patrikx3/corifeus-web-material)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-web-material/?branch=master)  [![Trello](https://img.shields.io/badge/Trello-Corifeus-026aa7.svg)](https://trello.com/b/3NArfcD1/corifeus)
  
[![NPM](https://nodei.co/npm/corifeus-web-material.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/corifeus-web-material/)
------

# Corifeus Web Material - Amazing

### Node Version Requirement 
```>=7.8.0```  
   
The ```async``` and ```await``` keywords are required.

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
The default ```@ViewChild``` is not ElementRef with Material.
Need to use like:
```typescript
@ViewChild('elementButton', {read: ElementRef}) elementButton : ElementRef;
```

https://github.com/angular/material2/blob/master/src/lib/core/theming/_theming.scss  

## Queue task
* Override ```console.error``` as a Notify error

[//]: #@corifeus-footer

---
[**CORIFEUS-WEB-MATERIAL**](https://pages.corifeus.tk/corifeus-web-material) Build v4.1.3-453 on 5/4/2017, 1:09:02 AM

[Corifeus](http://github.com/patrikx3/corifeus) by [Patrik Laszlo](http://patrikx3.tk)
 

[//]: #@corifeus-footer:end