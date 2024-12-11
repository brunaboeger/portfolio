// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
  created_at: Date;
};

export type Profiles = {
  id: string;
  name: string;
  email: string;
  phone: string;
  image_url: string;
};

export type Projects = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  priority: boolean;
};

export type Experiences = {
  id: number;
  name: string;
  description: string;
  role: string;
  image_url: string;
  date_begin: Date;
  date_end: Date;
  current: boolean;
};

export type Studies = {
  id: string;
  name: string;
  type: string;
  type_name: string;
  description: string;
  image_url: string;
};

export type Abilities = {
  id: string;
  name: string;
  image_url: string;
  level: number;
};
