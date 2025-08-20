const form = document.getElementByID('cv-form');
const preview = document.getElementById('cv-preview');

function updatePreview() {
	const name = document.getElementById('name').value;
	const experience = documment.getElementById('experience').value;

	preview.innerHTML = `
		<h1>${name}</h1>
		<h2>Doświadczenie zawodowe</h2>
		<p>${experience.replace(/\n/g, '<br>')}</p>
	`;
}

form.addEventListener('input', updatePreview);
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const options = {
		margin: 0,
		filename: 'moje-cv.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
	};

	html2pdf().from(preview).set(options).save();
});

updatePreview();
