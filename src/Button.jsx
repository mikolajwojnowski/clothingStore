


function Button(){

    // inline styling (we have also modules such as button.module.css and external via className)
    const styles = {
            backgroundColor: "hsl(200,100%,50%)",
            color: "white",
            padding: "10px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer", 
            display: "block", 
            width: "100%",
            margin: "20px 30px 20px 20px",
           
    }

    return(
        <button style={styles}>
            Click me
        </button>
    );
}

export default Button