function myFun() {
    var city = document.getElementById("city").value;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd26974b44dmsh4a6af8c87c81462p1776e2jsn3da901ef8f24',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
	.then(response => response.json())
	.then(data => {
	 const d1 = data.CO
	 const ca = d1.aqi
	 const cc = d1.concentration
	 document.getElementById("cc").innerHTML=cc + " &#956g/m³"
	 document.getElementById("ca").innerHTML=ca

	 const d2 = data.SO2
	 const na = d2.aqi
	 const nc = d2.concentration
	 document.getElementById("na").innerHTML=na
	 document.getElementById("nc").innerHTML=nc + " &#956g/m³"

	 const d3 = data.O3
	 const oa = d3.aqi
	 const oc = d3.concentration
	 document.getElementById("oa").innerHTML=oa
	 document.getElementById("oc").innerHTML=oc + " &#956g/m³"

	 const d4 = data.NO2
	 const sa = d4.aqi
	 const sc = d4.concentration
	 document.getElementById("sa").innerHTML=sa
	 document.getElementById("sc").innerHTML=sc + " &#956g/m³"

	 const pa = data[ 'PM2.5' ].aqi
	 const pc = data[ 'PM2.5' ].concentration
	 document.getElementById("pa").innerHTML=pa
	 document.getElementById("pc").innerHTML=pc + " &#956g/m³"

	 const d6 = data.PM10
	 const ppa = d6.aqi
	 const ppc = d6.concentration
	 document.getElementById("ppa").innerHTML=ppa
	 document.getElementById("ppc").innerHTML=ppc + " &#956g/m³"

	 const d7 = data.overall_aqi
	 document.getElementById("oaq").innerHTML=d7

	 if (d7 >= 0 && d7 <= 50) {
  	 result = "Good";
	 col = "green";
	 } else if (d7 >= 51 && d7 <= 100) {
  	 result = "Satisfactory";
	 col = "lightgreen";
	 } else if (d7 >= 101 && d7 <= 200) {
  	 result = "Moderate";
     col = "yellowgreen";
	 } else if (d7 >= 201 && d7 <= 300) {
  	 result = "Poor";
     col = "orange";
	 } else if (d7 >= 301 && d7 <= 400) {
  	 result = "Very poor";
     col = "red";
	 } else if (d7 >= 401 && d7 <= 500) {
  	 result = "Severe";
     col = "maroon";
	 } else {
  	 result = "Death";
     col = "black";
	 }

     elem1 = document.getElementById("result")
	 document.getElementById("result").innerHTML = result
     elem1.style.color = col
	 
	 elem2 = document.getElementById("oaq")
     elem2.style.color = col
	 })
	.catch(err => {
	 const error = "Sorry City is not listed "
	 alert(error)
	});
}






