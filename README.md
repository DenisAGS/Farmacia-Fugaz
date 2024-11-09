# 🌟 Proyecto Angular para Gestión de Farmacia Fugaz

## 📋 Descripción General
Este proyecto es un sistema de gestión de farmacia desarrollado en Angular que tiene como objetivo optimizar las operaciones tanto para administradores como para vendedores. La aplicación permite a los administradores gestionar el inventario, usuarios y supervisar las ventas, mientras que los vendedores pueden realizar ventas rápidas y consultar el catálogo de productos disponibles.

La aplicación está diseñada con una arquitectura modular, lo que facilita su mantenimiento y escalabilidad. Además, cuenta con un sistema de autenticación y control de acceso que asegura que cada usuario tenga permisos adecuados según su rol.

## 🛠️ Funcionalidades y Características Principales
### 1. Autenticación y Seguridad 🔒
* Inicio de sesión seguro para administradores y vendedores mediante autenticación basada en tokens.
* Registro de nuevos usuarios con rol asignado (Administrador o Vendedor).
* Cambio de contraseña para mejorar la seguridad del usuario.
* Protección de rutas basada en roles con Angular Guards, asegurando que los usuarios solo accedan a las secciones permitidas.
### 2. Gestión para Vendedores 🛒
 __Interfaz de Ventas:__
* Registro rápido de ventas con selección de productos desde el catálogo.
* Visualización del total de ventas diarias realizadas.
__Catálogo de Productos  📊:__
* Consulta de productos disponibles para facilitar la recomendación al cliente.
* Búsqueda y filtrado de productos para una experiencia de usuario rápida y fluida.
### 3. Panel de Administración 🧑‍💼
__Ingresos Diarios 📊:__
* Panel que muestra un resumen de los ingresos generados por ventas cada día.
* Gráficos y tablas para análisis rápido.
__Gestión de Productos (Catálogo Base):__
* Crear, editar y eliminar productos del inventario.
* Control de stock para evitar desabastecimientos.
__Gestión de Usuarios 👥:__
* Alta, baja y modificación de usuarios (tanto vendedores como administradores).
* Asignación de roles y permisos personalizados.
* Notificación automática al usuario al ser registrado o eliminado.
