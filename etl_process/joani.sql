Create VIEW vw_def_by_years as 

select data_year, causa_def, ent_regis,
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by causa_def, data_year
order by count_ desc;

Select * FROM vw_def_by_years WHERE data_year = 2017;

CREATE VIEW  vw_deaths_states as 
Select data_year, ent_regis, count(*) count_ from d_defunciones_generales
group by ent_regis, data_year

Select * FROM vw_deaths_states 
