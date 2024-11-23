/*export const Sample = () => {
    let fontSize = 16; // Initial font size in pixels
  
    const changeFontSize = () => {
      const textAnimi = document.getElementById("root");
      textAnimi.style.fontSize = `${fontSize}px`; // Set font size in pixels
      fontSize += 2; // Increment font size by 2 pixels every 2 seconds
    };
  
    setInterval(changeFontSize, 2000); // Call changeFontSize every 2 seconds
  };

  export default Sample;*/

  var num = prompt("Enter a number"); // Prompt user for initial number input

  while (num != 0) {
    document.write("Entered number: " + num + "<br>"); // Display entered number
    console.log(num); // Log the number to console (optional)
  
    num = prompt("Enter another number (enter 0 to exit)"); // Prompt for next number
  }
  


  

  
  