# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.
## Description

Deployed on Heroku: https://cs5610-final.herokuapp.com
This web application is designed for designing housing trading platform. Traditional house tradings are time consuming and hard to efficiently connect buyers and sellers and update the information in real time. Our website procides the platform for both sides which could realize the functions of posting houses information and fulfilling trades in a convenient way.


## Tech Stack

We built the website using MEAN stack. The frontend part was designed and implemented in MVC model. Routering module was used to switch pages in frontend. By displaying the front end information, we used the Bootstrap library, the Font-awesome library. Landing homepage used flash to show animation and will redirect to login page. Grid system used to display houses. External public webservice Google Map APIs are used for getting Geolocation and displaying maps in house detail page. For backend development, we used express framework and injected passport to help realize the authentication. Provided local strategy and facebook strategy for the authentication. AuthGuard was used to protect the profile page and user could only see this page after they logged in. We implemented the RESTful APIs to achieve the CRUD operations. The data is stored in MLab added on Heroku.

## Domain Objects

The web application mainly contains User, House, Comment domain objects. The definiation of each object is in the model part. User contains login, profile, register components. House contains list, edit, new, detail, order components. House-detail contains comment and map component. Comment contains list, edit, new components. Every user could have access to user objects and comment objects. User service provides endpoints for user related APIs. House service provides endpoints for house related APIs. Comment service provides endpoints for comment related APIs. Public service provides endpoints for external APIs.

## Roles

There are four roles: Admin, Seller, Buyer, Agent.
### Admin could:
  - Update profile
  - CRUD House objects
  - CRUD Comment objects
### Seller could:
  - Update profile
  - Create House, view All House and view my houses, update and delete my houses
  - CRUD their own comments
### Buyer could:
  - Update profile
  - Read House
  - Select unsold house into their order, delete house in their order
  - CRUD their own comments
### Agent could:
  - Update profile
  - CRUD House on behalf of owner
  - Place/Delete order on behalf of buyer
  - CRUD their own comments

# Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Admin: admin/admin
Seller: alice/alice
Buyer: bob/bob

## Domain relationship
Hill, Apartment, 5027 were created by vic, House and AVL were created by alice.  
5027 was bought by bob, so in its detail page, other users couldn't buy it. It appears in bob's my order page and bob could delete it.
Hill has comment by bob and bob could operate this comment.  
Every page has the left icon, user could click it to the previous page.

## User operations
Landing page shows the animation and click the Login to login.  
After loggedin, the user will be redirected to profile page and be able to update their information. Click the Houses button to redirect to house detail page. Click logout button to logout.  
Click the plus icon on house list page, the seller could add a new house. The agent needs to provide the seller's username to create a new house.  
If alice click the List My Houses label, it will only display her 3 houses.  
Click the More Info button, the page will redirect to house detail page. Owner could see the edit button on this page. If it is not sold, the buyer/Agent could see the Buy button. The agent needs to provide the buyer's username to buy. After clicking Buy button, the house displays in the my order component. The map displays the marker based on its address. If bob deletes the house in my order, others could buy this house again.  
Click the Add Comment button on house detail page, a user could add a new comment. The config icon displays only if it's the current user's comment.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
