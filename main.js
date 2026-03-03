const currency = "JPY";
const exact_date = "20240127";

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");
url.searchParams.set("date", exact_date);
url.searchParams.set("valcode", currency);
url.searchParams.set("json", "");

console.log(url.toString());