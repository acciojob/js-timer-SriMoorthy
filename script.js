// write js code here if required
function updateTime(){
	let now = new Date();

	const day = string(now.getDate()).padstart(2,'0');
	const month = string(now.getMonth()+1).padstart(2,'0');
	const year = now.getFullYear();

	const hours = string(now.getHours()).padstart(2,'0');
	const min = string(now.getMinutes()).padstart(2,'0');
	const seconds = string(now.getSecons()).padstart(2,'0')

	const formatted = `${day}/${month}/${year},${hours}:${min}:${seconds}`
	document.getElementById('timer').textContent = formatted;
}

setInterval(updateTime,1000);
updateTime()

