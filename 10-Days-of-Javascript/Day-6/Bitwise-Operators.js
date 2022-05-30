function getMaxLessThanK(n, k) {
    let maxValue = 0;
    for( var i = 1; i < n; i++)
        for(var j=i+1; j<=n; j++)
            if((i&j) < k && (i&j) > maxValue)
                maxValue = (i&j);

    return maxValue;
}