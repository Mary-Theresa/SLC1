module.exports={

findMinMax: function (arr)
{
	min = arr[0];
	max = arr[0];
	result = []
	if (arr.length === 0) 
	{
		return result;
	}
	for (i = 1; i<=arr.length; i++)
	{
		if (arr[i] <= min)
		{
			min = arr[i];
		}
		else if (arr[i] > max)
		{
			max = arr[i];
		}
	}
	if (min === max)
	{
        result.push(max);
		return result;
	}
	else
	{
		result.push(min);
	    result.push(max);
	    return result;	
	}
	
}
	
}	