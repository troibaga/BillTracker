document.getElementById('balance-tab').addEventListener('click', function() {
    showSection('balance-section');
});

document.getElementById('billing-tab').addEventListener('click', function() {
    showSection('billing-section');
});

document.getElementById('bills-tab').addEventListener('click', function() {
    showSection('bills-section');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Show the balance section by default
showSection('balance-section');

// Handle form submission for adding bills
document.getElementById('billing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const billFor = document.getElementById('bill-for').value;
    const totalAmount = document.getElementById('total-amount').value;
    const billDueDate = document.getElementById('bill-due-date').value;

    const table = document.getElementById('bills-table').getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${billFor}</td>
        <td>₱${parseFloat(totalAmount).toFixed(2)}</td>
        <td>${billDueDate}</td>
    `;

    document.getElementById('billing-form').reset();
});
