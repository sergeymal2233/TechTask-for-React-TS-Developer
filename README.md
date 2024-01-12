# Documentation

### Part one
A thorough study of the design and an abstract representation of the implementation of the components. Identify similar styles that can be moved to individual components and reused throughout the application.

Result: It was determined that the design consists of two main parts: The header and the main body. The main body, in turn, consists of a content part and a sidebar. The font used, and its possible styles were determined. After a thorough study of the design, having an understanding of how to implement each part of the application, we move on to part two.

### Part two
Building the basic architecture of the application: creating a mini-UI library, page markup, basic styles, normalization, fonts, scss mixins and variables, setting up a router and installing the necessary dependencies. We also defined the main fields and created the main data structures (```Card```, ```User```, ```Transaction```, etc.). The page layout is implemented using the HOC component ```<Layout />```, which encapsulates the logic of placing the header and the main body, which stretches to the maximum possible height. The UI library consists of such elements as:
- ```<Typography />``` - a component that encapsulates all possible font styles.
- ```<Button />```-  is a component that describes all possible button styles and also has the possibility of additional styling.
- ```<Icons />``` - a component that defines the general appearance of icons and also implements some of them (Credit card, notification, wallet)
- ```<PageSection />``` - I noticed that the homepage consists of several sections and these sections have the same styles for the header, padding and content placement, so I created this component that will allow us to place content on the homepage.

And many others...
All of these components were created as a skeleton of our application so that we could use all the reusable components in a declarative style.

### Part three
Splitting the application into components. Instead of writing the markup right away, I use a component-based approach and develop all possible components so that later, I can fully focus on the markup and not dive into the details of component implementation. As a result of this part, almost all the elements that are present on the design were created (```<TransactionItem />```, ```<BalanceCard />```, ```<BalanceCardList />```, ```<BankCard />```, ```<Menu />```, ```<UserBankInfo />```, etc...)

### Part four
In parallel with the third part, there is a part with business logic. You need to understand that components are primarily UI, so all business logic should be separated, encapsulated in functions or hooks, and called in components in the most declarative style so that they do not have direct access to it.

#### When working in FinTech, there are 2 main rules
- ##### Money is always stored in cents
- ##### Dates are always stored in milliseconds.
Therefore, we have created functions that convert cents and milliseconds into a user-friendly form.

Working with dates is a rather dangerous topic, due to different time zones and other reasons, so I decided to use the ```dayjs``` library to ensure the safety of working with dates.

We also created the ```useScrollHorizontally``` hook, which allows us to add horizontal scrolling to components and handle it well. And also useMediaQuery, which will allow us to handle media queries in components.

### Part Five
Putting everything together. Using all the components, styles, and business logic that we've created so far, we build the page completely.

### Part Six
Adding a responsive element using mixins and the ```useMediaQuery``` hook. Checking the functionality of the application and its appearance.


# Report on challenges 
#### After creating the components and architecture, I moved on to writing the business logic, where I faced challenges. The most difficult task was to create the ability to scroll content horizontally, both on a computer and on mobile devices. The main difficulty was that this mechanism should be reusable, and therefore it should not depend on a specific implementation of the data or something else. It should implement the basic logic, but have an abstract idea of the list data that will be scrolled. Therefore, the ```useHorizontallyScroll``` hook was created, which provides the most convenient interface for the interaction with components. Logic was implemented in it, which allows you to scroll the list horizontally, but at this time not to scroll the entire page in parallel. A generic was also added, which allows this hook to abstractly work with any ```HTML elements```, not specifically with a ```div``` or, for example, a ```section```.

#### In the design, I noticed quite a few elements that can dynamically change, appear, disappear or move somewhere when the screen size changes. I realized that the usual approach through css styles is not suitable for all of these elements, and therefore I created the ```useMediaQuery``` hook, which allows you to set breakpoints and track screen size changes. So for example I use this hook in ```<Header />``` to hide the ```<HeaderUserSection />```, the navigation menu and also to show the ```<Menu />``` component if the user is using a mobile phone. This hook uses the browser API and media requests to match them to the current screen size.
