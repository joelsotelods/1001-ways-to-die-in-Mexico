Select causa_def, ent_regis,Where data_year=2017
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by causa_def; 


select data_year, causa_def, ent_regis,
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by causa_def, data_year
order by count_ desc;


select horas, 
count(*) count_
from d_defunciones_generales ddef
where horas = 2
group by horas
order by count_ desc;


select  causa_def, 
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
where horas = 2
group by causa_def
order by count_ desc limit 5;

select  causa_def, 
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
where horas = 18
group by causa_def
order by count_ desc limit 5;



select data_year, causa_def, 
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by causa_def, data_year
order by count_ desc;


select data_year, causa_def, 
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by causa_def, data_year
order by count_ desc;

select * from c_decateml;
select data_year, causa_def, 
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by causa_def, data_year
order by count_ desc;

select nom_loc from c_decateml where decateml_locacion_id = 0  and decateml_municipio_id = 0;

select cats.nom_loc from c_decateml cats where cats.decateml_locacion_id = 0  and cats.decateml_municipio_id = 0
and cats.decateml_entidad_id = 9

select data_year,  ddef.ent_regis,
(select cats.nom_loc from c_decateml cats where cats.decateml_locacion_id = 0  and cats.decateml_municipio_id = 0
and cats.decateml_entidad_id = ddef.ent_regis) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by ddef.ent_regis, data_year
order by count_ desc;


select * 
from d_defunciones_generales limit 5;