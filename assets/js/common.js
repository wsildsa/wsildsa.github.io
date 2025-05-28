// Returns yyyy-mm-dd format for URL
function formatDate(date) {
	var dd = date.getDate();
	var mm = date.getMonth()+1; 
	var yyyy = date.getFullYear();

	if (dd < 10) {
		dd="0"+dd;
	};

	if (mm < 10) {
		mm="0"+mm;
	}; 

	date = yyyy+"-"+mm+"-"+dd;
	return date;
};

// Sets end date for query
function getFutureDate(date, months) {
	return new Date(date.setMonth(date.getMonth() + months));      
};
