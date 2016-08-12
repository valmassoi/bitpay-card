# bitpay-card
A `MEAN` full stack `JavaScript` + `TypeScript` single page app - `MongoDB` + `Express.js` + `Angular 2` + `Node.js`

## Live Demo
Hosted at https://bitpay-card.herokuapp.com/  
Test user Email: `a@a.aa` and Password: `a` but try incorrect credentials too  
Note: Being hosted free may cause a slow load if app needs to wake.  

## Prompt and Goal of project
Recreate interactive dashboard of transactions using Angular 2 - based off screenshot:
![prompt](src/_assets/images/prompt.png)

## Feature list
Homepage/Login:
* User login form using `ngForm` and `custom validators` to check for valid email  
* `CSS Animation` on incorrect login credentials returned from `node.js` backend  
* Protected Dashboard route using `CanActivate` login guard `Injectable`  
* Only display "Logout" in navbar if logged in using `*ngIf`  

Activity:
* Loads mock user activity from `node.js` backend  
* Transaction loading animation using `Web Animations API`  
* Iterate transactions list using `*ngFor`  
* Search transactions by note, description, or amount by `subscribing` to a `service`  
* Add/Edit user notes about the transaction  
* Print transactions only removing the side bar using `@media print`  
* Format currency and date/time using `Custom Pipes`  

Other:
* Add Funds button modal that generates QR code from `string`  
* Open in wallet button uses bitcoin `URI string` to open a wallet application with the address

## Caveats
The focus of this project is on `Angular 2` and not backend, so there are security vulnerabilities (missing `jwt`)  
//See comments in code for more.  

## TODO
- [ ] Improve Mobile  
- [ ] Filter Dropdown  
- [x] Add/edit notes  
- [x] Add funds button modal  
- [ ] Other dashboard pages  
- [ ] User database/auth(jwt)  
- [ ] Save notes on backend  
- [ ] Transaction pagination and filter  
- [x] Transaction search  
