// This function starts when the button is clicked
function startHacking(e) {
    e.preventDefault();
  
    const name = document.getElementsByClassName("input")[0].value;
    if (!name)
      return alert("Enter Username")
    
  
    // List of hacking steps
    let a = [
        "Initialising hack program........",
        "Scanning networks for vulnerable systems........",
        "Hacking " + name + "........",
        "Attempting brute force on password........",
        "Password found for " + name + "'s_463: ***encrypted***........",
        "Accessing " + name + "'s_463 account........",
        "Retrieving personal data........",
        "Decrypting stored files........",
        "Creating backdoor access to system........",
        "System compromised: Full control gained........",
        "Retrieving sensitive information........",
        "Password for account 'Email' retrieved: ***decrypted_password***........",
        "Password for account 'Banking' retrieved: ***decrypted_password***........",
        "Generating password for new account.........",
        "Password creation successful........",
        "Hacking complete. Disconnecting from the network........"
    ];

    // Get the element to display the messages
    let elem = document.getElementsByClassName("para")[0];

    // Clear the previous content before adding new messages
    elem.innerHTML = "";

    // Loop over the messages and display them with a delay
    for (let i = 0; i < a.length; i++) {
        setTimeout(() => {
            elem.innerHTML += a[i] + "<br>"; // Add each message to the paragraph element with a line break
        }, i * 3000); // Delay each message by 1 second (1000 milliseconds)
    }
}
