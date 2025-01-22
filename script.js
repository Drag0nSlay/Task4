// Function for OUI Lookup
function lookupMAC() {
    const macInput = document.getElementById("mac-input").value.trim();
    const macField = document.getElementById("mac-input");
    const ouiResult = document.getElementById("oui-result");

    if (!macInput) {
        alert("Please enter a MAC address!");
        macField.style.border = "2px solid orange"; // Highlight input field
        return;
    }

    macField.style.border = ""; // Remove highlight if input is valid

    if (macInput === "00:1A:2B:3C:4D:5E") {
        ouiResult.textContent = "Manufacturer: Cisco Systems, Address: 170 West Tasman Drive, San Jose, CA, USA.";
    } else {
        ouiResult.textContent = "Invalid MAC Address. Try again.";
    }
}

// Function to show Geolocation
function showGeolocation() {
    const geoResult = document.getElementById("geo-result");
    geoResult.textContent = "Location: San Jose, California, USA.";
}

// Function to check suspicious file
function checkFile() {
    const fileInput = document.getElementById("file-input").value.trim();
    const fileField = document.getElementById("file-input");
    const fileResult = document.getElementById("file-result");

    if (!fileInput) {
        alert("Please enter the file name!");
        fileField.style.border = "2px solid orange"; // Highlight input field
        return;
    }

    fileField.style.border = ""; // Remove highlight if input is valid

    if (fileInput === "suspicious-file.exe") {
        fileResult.textContent = "Correct! The file is suspicious and linked to malicious-site.com.";
    } else {
        fileResult.textContent = "Incorrect. Try again.";
    }
}

// Add event listeners for Enter key functionality
document.getElementById("mac-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        lookupMAC(); // Trigger MAC lookup function
    }
});

document.getElementById("file-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkFile(); // Trigger file check function
    }
});