
let data=[
  "1",
"2",
"3",
"4",
"5",
"6",
"7",
  "8",
]
let data1=[
['LIC AAO Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['Cantonment Board Various Post Online Form 2023',"latest_job.html","23/1/2023","age-20"],
['RRC Jaipur Apprentice Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['MPPSC Latest Recruitment 2023',"latest_job.html","23/1/2023","age-18"],
['Rajasthan State Eligibility Test SET Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['MPESB High School TET Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['UPPSC Civil Judge PCS J 2022 Form Status, Re Upload Photo, Signature',"latest_job.html","23/1/2023","age-18"],
['Rajasthan Home Guard Online Form 2023',"latest_job.html","23/1/2023","age-22"],
['UPSC NDA I Online Form 2023 Extended',"latest_job.html","23/1/2023","age-18"],
['UPSC CDS I Online Form 2023 Extended',"latest_job.html","23/1/2023","age-18"],
['NHPC India Trainee Engineer and Officer TE TO Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['YIL Ordnance Factory Apprentice Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['Railway SCR Apprentice Online Form 2023',"latest_job.html","23/1/2023","age-24"],
['UPPSC One Time Registration OTR Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['KVS Teaching and Non Teaching Various Post Correction Edit Form',"latest_job.html","23/1/2023","age-18"],
['MPESB Patwari and Other Post Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['SGPGI Lucknow Nursing Officer Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['RSMSSB Primary and Upper Primary Teacher Online Form 2022',"latest_job.html","23/1/2023","age-18"],
['CRPF HC Ministerial and ASI Steno Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['BRO MSW, Mechanic, Operator, Driver Recruitment 2023',"latest_job.html","23/1/2023","age-18"],
['MP Middle School Teacher Eligibility Test Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['RRC SER Apprentices Online Form',"latest_job.html","23/1/2023","age-18"],
['NDA Pune Group C Various Post Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['AAI Junior Executives ATC Online Form 2022',"latest_job.html","23/1/2023","age-18"],
['NTA UGC NET December 2022 Online Form',"latest_job.html","23/1/2023","age-18"],
['Central Silk Board Various Post Online Form 2023',"latest_job.html","23/1/2023","age-18"],
['DSSSB PGT Economics Online Form 2023',"latest_job.html","23/1/2023","age-18"],
]
let latest_job=document.getElementById('latest_job_div');
function render(renderDiv,array_of_data){
  let order_list=document.createElement("ol");
for(let i in array_of_data){


  let link=document.createElement('a');
link.setAttribute("href",array_of_data[i][1])
link.setAttribute("target","_blank")
link.innerText=array_of_data[i][0];

  let list=document.createElement('li');
  list.id=i;
  list.appendChild(link)
  order_list.appendChild(list)
  //css

  list.style.marginTop="10px";
  link.style.color="black"
  link.addEventListener("click",()=>{
    link.style.color='red';
  })
}
renderDiv.appendChild(order_list);
  // let order_list=document.createElement("p");
  // order_list.innerHTML="done 1";
  // renderDiv.appendChild(order_list);

}
render(latest_job,data1)


let load_id_value="12"
//render in latest job .html
let render_total=function(load_id){
let render_div=document.getElementById("display");

for(let i in data1[1]){
  let div1=document.createElement('p');
  div1.innerText=data1[load_id][i];
  render_div.appendChild(div1);
  console.log("done",i)
}
console.log("done")
}
render_total("5")
