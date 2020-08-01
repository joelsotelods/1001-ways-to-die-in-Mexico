

drop view IF EXISTS vw_derecho_habiencia;

drop table IF EXISTS d_defunciones_generales;


CREATE TABLE d_defunciones_generales (
  ent_regis INT NULL,
  mun_regis INT NULL,
  ent_resid INT NULL,
  mun_resid INT NULL,
  tloc_resid INT NULL,
  loc_resid INT NULL,
  ent_ocurr INT NULL,
  mun_ocurr INT NULL,
  tloc_ocurr INT NULL,
  loc_ocurr INT NULL,
  causa_def varchar(100) NULL,
  lista_mex varchar(100) NULL,
  sexo INT NULL,
  edad INT NULL,
  dia_ocurr INT NULL,
  mes_ocurr INT NULL,
  anio_ocur INT NULL,
  dia_regis INT NULL,
  mes_regis INT NULL,
  anio_regis INT NULL,
  dia_nacim INT NULL,
  mes_nacim INT NULL,
  anio_nacim INT NULL,
  ocupacion INT NULL,
  escolarida INT NULL,
  edo_civil INT NULL,
  presunto INT NULL,
  ocurr_trab INT NULL,
  lugar_ocur INT NULL,
  necropsia INT NULL,
  asist_medi INT NULL,
  sitio_ocur INT NULL,
  cond_cert INT NULL,
  nacionalid INT NULL,
  derechohab INT NULL,
  embarazo INT NULL,
  rel_emba INT NULL,
  horas INT NULL,
  minutos INT NULL,
  capitulo INT NULL,
  grupo INT NULL,
  lista1 INT NULL,
  gr_lismex varchar(100) NULL,
  vio_fami INT NULL,
  area_ur INT NULL,
  edad_agru INT NULL,
  complicaro INT NULL,
  dia_cert INT NULL,
  mes_cert INT NULL,
  anio_cert INT NULL,
  maternas varchar(100) NULL,
  lengua INT NULL,
  cond_act INT NULL,
  par_agre INT NULL,
  ent_ocules INT NULL,
  mun_ocules INT NULL,
  loc_ocules INT NULL,
  razon_m INT NULL,
  dis_re_oax INT NULL,
  data_year INT NULL
);

create view vw_derecho_habiencia as
select data_year, derechohab, (select ded.DESCRIP from c_dederech ded where ded.dederech_id = def.derechohab) derechi_habiencia, count(*) cantidad_derecho
from d_defunciones_generales def 
group by data_year, derechohab;


Create VIEW vw_def_by_years as 

select data_year, causa_def, ent_regis,
(select DESCRIP from c_decatcausa cda where cda.decatcausa_id =  ddef.causa_def) asdasd,
count(*) count_
from d_defunciones_generales ddef
group by causa_def, data_year
order by count_ desc;

CREATE VIEW  vw_deaths_states as 
Select data_year, ent_regis, count(*) count_ from d_defunciones_generales
group by ent_regis, data_year

Select * FROM vw_deaths_states

Create view vw_time_to_die as
select horas, data_year,
count(*) count_
from d_defunciones_generales ddef
group by horas
order by horas;

create view vw_derechohabiencia_death as
select data_year, 
	derechohab, 
	(select d_derech.DESCRIP from c_dederech d_derech where d_derech.dederech_id = ddef.derechohab) derechohabiencia,
    count(*) muertes
from d_defunciones_generales ddef
group by data_year, derechohab;