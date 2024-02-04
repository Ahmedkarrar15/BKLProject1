var currentPage = 1;

function nextPage() {
    var nextPage = currentPage + 1;
    var currentPageElement = document.getElementById('page' + currentPage);
    var nextPageElement = document.getElementById('page' + nextPage);
    
    if (nextPageElement) {
        currentPageElement.style.display = 'none';
        nextPageElement.style.display = 'block';
        currentPage = nextPage;
    }
}

function prevPage() {
    var prevPage = currentPage - 1;
    var currentPageElement = document.getElementById('page' + currentPage);
    var prevPageElement = document.getElementById('page' + prevPage);
    
    if (prevPageElement) {
        currentPageElement.style.display = 'none';
        prevPageElement.style.display = 'block';
        currentPage = prevPage;
    }
}

function submitForm() {
    // Get values from form fields
    var policeInvestigated = document.querySelector('input[name="policeInvestigated"]:checked').value;
    var location = document.getElementById('location').value;
    // Add more fields as needed
    
    // Construct email body
    var emailBody = "Police Investigated: " + policeInvestigated + "\n";
    emailBody += "Location: " + location + "\n";
    // Add more fields as needed

    // Send email
    var mailToLink = "mailto:ahmedkarrar572@gmail.com?subject=Collision Report&body=" + encodeURIComponent(emailBody);
    window.location.href = mailToLink;

    // Show submission confirmation page
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
}
