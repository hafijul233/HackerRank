/*
Enter your query here.
*/

SELECT ROUND(SUM(LAT_N), 2) AS lat, ROUND(SUM(LONG_W), 2) AS lon FROM STATION;