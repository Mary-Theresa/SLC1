module.exports={

aritGeo: function(arr)
{
	
	var diff = (arr[1] - arr[0])
	var ratio = (arr[1] / arr[0]);
	var ap = 1
	var gp = 1

	if (arr.length === 0)
	{
		return 0;
	}
	for (i=1; i<=arr.length-1; i++)
	  {
	    if (diff === (arr[i+1] - arr[i]))
	    {
	      ap++
	    }
	  } 
	for (i=1; i<=arr.length-1; i++)
      {
	    if (ratio === (arr[i+1] / arr[i]))
	    {
	      gp++
	    } 
	  }

if (ap == arr.length-1)
{
  return 'Arithmetic'
}
else if (gp == arr.length-1)
{
  return 'Geometric'
}
else 
{
  return -1
}
}
}

