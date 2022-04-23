# atlantbh-junior-qa-task
This is task for Junior QA in Atlantbh

# How to setup automation tests

First clone github repository on your local and follow steps

1. git clone https://github.com/Calculator-dev/atlantbh-junior-qa-task
2. npm install

If you get error for "chromedriver" and cant start one of the following test visit this site to solve your issue 
https://zwbetz.com/download-chromedriver-binary-and-add-to-your-path-for-automated-functional-testing/

First you have to add "chromedriver" to your PATH and then run one of the tests.

After that you have to restar your VSCode and run tests.


/****************************************************************************************************
YOU HAVE TO MATCH VERSION OF "CHROMEDRIVER" INSTALLED IN PACKAGE.JSON AND ONE YOU ARE ADDING IN PATH.
****************************************************************************************************/

# To launch Registring User test follow these steps

1. Go into the tests folder by typing "cd tests" in the terminal
2. In the registerUser.js changle line 12, delete following email "farisaksalic@gmail.com" and add yours
3. Open your terminal and type "node registringUser.js"

# To launch login User test follow these steps

1. Go into the tests folder by typing "cd tests" in the terminal
2. Open your terminal and type "node loginUser.js"

# To launch Signout test follow these steps

1. Go into the tests folder by typing "cd tests" in the terminal
2. Open your terminal and type "node signoutUser.js"

# To launch Search Item test follow these steps

1. Go into the tests folder by typing "cd tests" in the terminal
2. Open your terminal and type "node searchItems.js"

# To launch Add Item to Cart test follow these steps

1. Go into the tests folder by typing "cd tests" in the terminal
2. Open your terminal and type "node addItemToCart.js"

# To launch Buying Items from cart test follow these steps

1. Go into the tests folder by typing "cd tests" in the terminal
2. Open your terminal and type "node buyingItems.js" 

# To launch Add two Items in the Cart test follow these steps

1. Go into the tests folder by typing "cd tests" in the terminal
2. Open your terminal and type "node twoCartItems.js"