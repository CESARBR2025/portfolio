// src/types/insights.ts

export interface Filtrado {
  region: string;
  porcent_consola: number;
  porcent_p2_consola: number;
}

export interface Cobertura {
  p_consola_cobertura: number;
  diferencia_cobertura_msj: number;
  porcentaje_diferencia_cobertura_msj: number;
  cobertura_filtrado: Filtrado[];
}

export interface Coincidencia {
  p_consola_coincidencia: number;
  diferencia_coincidencia_msj: number;
  porcentaje_diferencia_coincidencia_msj: number;
  coincidencia_filtrado: Filtrado[];
}

export interface Frecuencia {
  parque_total: number;
  p_consola_frecuencia: number;
  diferencia_frecuencia_msj: number;
  porcentaje_diferencia_frecuencia_msj: number;
  frecuencia_filtrado: Filtrado[];
}

export interface KpiItem {
  region: string;
  zone: string;
  porc_cobertura: number;
  porc_frecuencia: number;
  porc_coincidencia: number;
}

export interface GraficaItem {
  Fecha: string;
  Cobertura: number;
  Frecuencia: number;
  Coincidencia: number;
  Parque: number;
}

export interface Kpis {
  kpis: KpiItem[];
  grafica: GraficaItem[];
}

export interface Mensajes {
  mensaje_cobertura: string;
  mensaje_frecuencia: string;
  mensaje_coincidencia: string;
  mensaje_cobertura_en: string;
  mensaje_frecuencia_en: string;
  mensaje_coincidencia_en: string;
}

export interface InsightsResponse {
  cobertura: Cobertura;
  coincidencia: Coincidencia;
  frecuencia: Frecuencia;
  kpis: Kpis;
  mensajes: Mensajes;
}
