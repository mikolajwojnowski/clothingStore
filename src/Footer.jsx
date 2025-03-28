function Footer(){
    return(
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} wojnowskimikolaj</p> 
        </footer>
    );
}

export default Footer

// how to do a comment
// &copy; this is a copyright symbol
// (ONLY IN RETURN STATEMENT) {} in curly brackets we can include js code - here we insert Date object with method .getFullYear()
//in return statement we can only return 1 html element, but this element can have children elements