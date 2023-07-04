# MERN_E_commerce
This website I built has all the e-commerce features from user authentication to order being added to the database. It has 12 functional pages which include 4 admin pages. 
Home Screen: 
There are some changes in home screen which happen after the user sign in, admin sign in, or if no user id logged in. 
The user name in the nav bar changes after login and a dropdown to check his profile and logout button is displayed. 
If it is admin there are two dropdowns one to check his profile and logout and another one to maintain orders, products and users. Logo redirects to home page. 
After the carousel all the products are displayed. The carousel only shows top rated products.

![home page](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/b876e56c-f999-412b-8163-e2c615286a0e)


![products on home screen](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/59ede451-5d4d-485a-8d75-8a91e3b2363c)

 

Login Screen:
 Form Container was to used to create this sign in form in react.  
 Checking the user authorization functionality was also added to this form. The data entered is checked from the database and if invalid an error message is displayed.

Register Screen:
Register page is very similar to sign in page. Here also I have used form container tag in react. 
Registration page is displayed to the user when the user wants to create anew account. This fom includes details like username, email and password and confirm password.
Both the password and the confirm password should be same.
 
![registration screen](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/f9f60571-d0df-4397-ab29-2b4454371c15)

This data is stored on the database and is used for authorization of the user.
Product Screen:
Product screen contains the details of the items. It also includes the review functionality.  

 ![product description page](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/e74c3ebc-481d-4cca-bc1f-05245afb36f3)

Each user can review the product only once. Once the review is  made the application calculates if it is top rated and displays in carousel.

Cart Screen:
 
Before items are added
![cart screen](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/21aa4619-a4e6-4c33-b912-76e06227611d)

 After items are added.

 ![cart after](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/23302a19-9ba1-428e-9dd4-314e7865ad53)


Shipping Screen: 
shipping screen involves four steps. 

Payment Screen
Here I have provided PayPal option as in the later stage I have incorporated PayPal sdk.
 ![payment](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/6dfe8589-9d6a-4b25-aba2-33d0011c55e7)


Place Order Screen:
Finally on the button click the order is placed by the user and it is added to the database.
 ![order palced](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/7e2fa251-7cc1-4ea2-87ce-4e162e412114)

Order Screen:
This screen provides the whole summary of the orders

User Profile screen:
Here user can edit his information and change his password. On click of update button this information is updated in database
 

Admin pages: 
Admin pages are created for admin to maintain the information of products, users and orders. These pages majorly consist the list of products, users and orders.
The admin pages are as follows,User Edit Screen, Order List Screen, Product Edit Screen, Product List Screen. These screens enable admin to create, update and delete users, products
orders. 
In this page user can create and edit products.
User List Screen:
All the users are displayed in this list. This was created for the admin to maintain the users and to be able to modify if admin of the website is to be changed.
There can be more than one admins in this website. 

 
![users lsit](https://github.com/priya1-0/MERN_E_commerce/assets/72966981/bd1c4ca1-f396-4d6e-9580-11b153d2275d)

