@mui is the libaray to get custom components
it includes tailwind css

https://mui.com/material-ui/react-table/

npm i @mui - to install dependencies
npm install @mui/material @emotion/react @emotion/styled

Navbar - second custom compoonent - 
uses bootstrap (dependecy)
https://getbootstrap.com/docs/4.0/components/navbar/
<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
"sticky-top" is the bootstrap CSS syntax to change the properities. 

in package-json = "proxy": "http://localhost:9000"

Navbar = easy to change the details

Display table = takes in GET request and sorts the data
line 22 to line 89 this is the imported table: this code makes the table the shape that it is and also controls the logic of clicking to next page or back a page to view results.

line 92+ is the GEt request for data, sorts the data, and injects the data into the table.