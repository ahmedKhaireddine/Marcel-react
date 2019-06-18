// export function getCurrentDate(separator=' '){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let monthName;

  switch (month) {
    case 1:
      monthName = "Janvier";
      break;
    case 2:
      monthName = "Février";
      break;
    case 3:
      monthName = "Mars";
      break;
    case 4:
      monthName = "Avril";
      break;
    case 5:
      monthName = "Mai";
      break;
    case 6:
      monthName = "Juin";
      break;
    case 7:
      monthName = "Juillet";
      break;
    case 8:
      monthName = "Aout";
      break;
    case 9:
      monthName = "Septembre";
      break;
    case 10:
      monthName = "Octobre";
      break;
    case 11:
      monthName = "Novembre";
      break;
    case 12:
      monthName = "Décembre";
      break;
    default:
      monthName = "Mois";
  }
  
  // return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  // return date, month, year;
  // }

export { date, monthName, year };