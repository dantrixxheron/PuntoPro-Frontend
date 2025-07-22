# PuntoPro

**PuntoPro** es una herramienta digital diseñada para microempresas que desean llevar sus ventas al siguiente nivel. Ofrece una forma sencilla y accesible de gestionar ventas de manera digital, ayudando a formalizar procesos y mejorar la organización de los registros.

## 🧩 Propósito

Muchas microempresas carecen de herramientas accesibles y adaptadas a sus necesidades para llevar el control de sus ventas. PuntoPro busca resolver esta problemática proporcionando una solución sencilla, intuitiva y lista para usarse, permitiéndoles:

- Registrar ventas diarias.
- Controlar ingresos.
- Gestionar inventario.
- Generar facturas digitales.
- Acceder a reportes simples.

## 🛠 Tecnologías utilizadas en el proyecto completo

* React JS con Vite
* Tilewind CSS
* Node.js
* Express.js
* Supabase
* Render
* Vercel
* invoice-generator (API de facturación)
* Chart.js react library


## 🧱 Modelo de Datos

```
USER
- id_user (PK)
- name
- email
- passwd
- role (admin/casher/skateholder)

PRODUCT
- id_product (PK)
- name
- code
- price_txEx
- price_txIn
- stock
- category_id (FK)

SALE
- id_sale (PK)
- date
- subtotal
- tax
- total
- payment_type (cash/card)
- status (paid/unpaid)
- user_id (FK) as casher

SALE_DETAIL
- id_detail (PK)
- product_id (FK)
- quantity
- unit_price
- subtotal
- sale_id (FK)

CATEGORY
- id_category (PK)
- name

COMPANY
- id_company (PK)
- name
- address
- phone
- email
- logo

INVOICE
- id_invoice (PK)
- sale_id (FK)
- date
- total
- name_receiver
- id_company (FK)
- archive_path

```
> Esto se reemplazará luego por un diagrama ER con la información definitiva de la distribución de BD. 


## 🎨 Maquetado y diseño

El diseño visual se realizó usando la paleta de colores base (generada con Coolors.co):

- Azul oscuro: #22489B  
- Azul medio: #5E7CE2  
- Azul claro: #7898EB  
- Azul muy claro: #B2CAF5  
- Gris claro: #EAF1F4  
- Gris oscuro: #363845  

En referencia visual se utilizó el visualizador de paletas de colores de Coolors.co, que nos da una idea clara de cómo combinar estos colores para lograr un diseño atractivo, funcional y accesible con los contrastes de color.
<img width="704" height="524" alt="Captura de pantalla 2025-07-19 172634" src="https://github.com/user-attachments/assets/8ec76e45-cfea-4920-8c69-869a5de25184" />


## 📁 Estructura de carpetas

```
PuntoPro/
│
├── src/
│   ├── app/
│   ├── assets/
│   └── environments/
├── README.md
├── package.json
└── angular.json
```

## Futuras mejoras

- Integración con métodos de pago por tarjeta (Stripe, MercadoPago).
- Creación de cuentas múltiples por negocio.
- Creación de múltiples negocios aislados.
- Implementación de distintos idiomas.
- Aplicación de distintas reglas de distintos negocios (estéticas, veterinarias, consultorios, etc.).

---

**Desarrollado por:** Daniela Cruz
