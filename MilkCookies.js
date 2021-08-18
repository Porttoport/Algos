function timeForMilkAndCookies(date) {
	if(date.getMonth()+date.getDate() == 35){
        return true;
    }
    else{
        return false;
    }
}

timeForMilkAndCookies(new Date(2000, 11, 24));