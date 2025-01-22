select sampling_size,frequency,STORED_VALUE 
from ms_grc_get_sampling_size 
where stored_value=to_number(:FREQUENCY)
AND :LOGIN_ID IS NOT NULL
UNION
SELECT 0 as sampling_size,
  'NA' as  frequency,
  'NA' AS STORED_VALUE
  FROM DUAL
  where not exists
  (select 1 from ms_grc_get_sampling_size
WHERE stored_value=to_number(:FREQUENCY)
AND :LOGIN_ID    IS NOT NULL)