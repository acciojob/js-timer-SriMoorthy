// write js code here if required
function updateTime(){
	let now = new Date();

	const day = String(now.getDate()).padstart(2,'0');
	const month = String(now.getMonth()+1).padstart(2,'0');
	const year = now.getFullYear();

	const hours = String(now.getHours()).padstart(2,'0');
	const min = String(now.getMinutes()).padstart(2,'0');
	const seconds = String(now.getSecons()).padstart(2,'0')

	const formatted = `${day}/${month}/${year},${hours}:${min}:${seconds}`
	document.getElementById('timer').textContent = formatted;
}

setInterval(updateTime,1000);
updateTime()

