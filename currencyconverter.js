//http://data.fixer.io/api/latest?access_key=bb8b923474240451cb6f1028e01a1a5e

const axios=require('axios');
const getexchangerate= async (from,to)=>
{
  try
  {
  const response=await axios.get('http://data.fixer.io/api/latest?access_key=bb8b923474240451cb6f1028e01a1a5e');

const euro=1/response.data.rates[from];
const rate=euro*response.data.rates[to];

return rate;

}catch(e)
{
console.log(e.message);
}






};



const getcountries=async(currencycode)=>
{
const response=await axios.get(`https://restcountries.eu/rest/v2/currency/${currencycode}`);
const data =response.data.map((country)=>country.name);
return data;
};
getexchangerate('USD','CAD').then((rate)=>
{
  //console.log(rate);
}).catch((e)=>
{
  console.log(e);
});

const convertcurrency=async(from,to,amt)=>
{
const rate=await getexchangerate(from,to);
const newrate=(rate*amt).toFixed(2);
//console.log(newrate);
const data=await getcountries(to);
const newdata=`${amt} ${from} is worth ${newrate} ${to} you can use this in ${data.join(', ')} countries`
//console.log(newdata);
return newdata;

};
convertcurrency('USD','INR',20).then((newdata)=>
{
  console.log(newdata);
}).catch((e)=>
{console.log(e.message);

});
