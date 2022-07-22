import { Timestamp } from "react-native-reanimated/lib/types/lib/reanimated2/commonTypes";
//Navigation
export type Navigation = {
  navigate: (scene: string) => void;
};

//Enumerados
export enum TipoRegion {
  latam = "latam",
  europa = "europa",
}
export enum TipoExperiencia {
  junior = "junior",
  semisenior = "semisenior",
  senior = "senior",
}
export enum TipoPresencialidad {
  remoto = "remoto",
  mixto = "mixto",
  presencial = "presencial",
}
export enum TipoJornada {
  completa = "completa",
  parcial = "parcial",
}
export enum TipoEstado {
  abierta = "abierta",
  cerrada = "cerrada",
}
export enum TipoCategoria {
  frontend = "frontend",
  backend = "backend",
  fullstack = "fullstack",
}

//Modelo de datos Tipos
export type Pais = {
  id: number;
  bandera: string;
  nombre: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
export type Estado = {
  id: number;
  pais_id: number;
  nombre: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
export type Tecnologia = {
  id: number;
  nombre: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
export type Idioma = {
  id: number;
  nombre: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
export type Beneficio = {
  id: number;
  nombre: string;
  descripcion: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
export type AttachmentContract = {
  url: string;
  name: string;
  extname: string;
  size: number;
  mimeType: string;
};
export type Valor = {
  id: number;
  nombre: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
export type Oferta = {
  nombre: string;
  descripcion: string;
  pais: Pais;
  estado: Estado;
  region: TipoRegion;
  experiencia: TipoExperiencia;
  presencialidad: TipoPresencialidad;
  jornada: TipoJornada;
  tipoEstado: TipoEstado;
  categoria: TipoCategoria;
  publicada: boolean;
  salarioMin: number;
  salarioMax: number;
  vacantes: number;
  requisitos: string[];
  tecnologias: Tecnologia[];
  idiomas: Idioma[];
  beneficios: Beneficio[];
  empresaId: number;
  empresa: Empresa;
  destacada: boolean;
};

export type Empresa = {
  nombre: string;
  pais: Pais;
  estado: Estado;
  descripcion: string;
  url: string;
  enlaceTwitter: string;
  enlaceLinkedin: string;
  enlaceBehance: string;
  imagen: AttachmentContract;
  userId: number;
  user: string;
  email: string;
  valores: Valor[];
  numEmpleados: string;
  creacion: string; // Hacemos referencia al año de creación
  ofertas: Oferta[];
};
