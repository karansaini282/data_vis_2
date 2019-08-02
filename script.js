d3.json('https://bustime.mta.info/api/siri/vehicle-monitoring.json?key=330dbfc1-9009-422d-a5c4-364cf7d082c9&VehicleMonitoringDetailLevel=calls&LineRef=M3').then(data=>
{
  console.log(data);
},error=>
{
  console.log(error);
}
);
