function downloadPDF() {
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1W6lGlP90gDfMLQKRTeKerIvIJGWZ6koU/view?usp=sharing'; // Replace with the actual path to your PDF file
    link.setAttribute('download', 'ES_CV_Bilyana-Ancheva-MC-Email-Specialist_ServiGuide.pdf');
    link.classList.add('btn', 'btn-warning'); // Add Bootstrap button classes
    link.textContent = 'Download eCatalogue'; // Set button text
    link.style.display = 'none'; // Hide the button
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
