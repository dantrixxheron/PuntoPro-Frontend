# PuntoPro

***You can find the [Spanish version of this README](README.ES.md)***. 🌎

**PuntoPro** is a digital tool designed for microbusinesses that want to take their sales to the next level. It offers a simple and accessible way to manage sales digitally, helping to formalize processes and improve record organization.

## 🧩 Purpose

Many microbusinesses lack accessible tools tailored to their needs for tracking sales. PuntoPro aims to solve this problem by providing a simple, intuitive, and ready-to-use solution, allowing them to:

- Register daily sales.
- Monitor income.
- Manage inventory.
- Generate digital invoices.
- Access simple reports.

## 🛠 Technologies used in the full project

* React JS with Vite
* Tailwind CSS
* Node.js
* Express.js
* Supabase
* Render
* Vercel
* invoice-generator (Invoicing API)
* Chart.js React library

## 🧱 Database Model

```
USER
- id_user (PK)
- name
- email
- passwd
- role (admin/casher/stakeholder)

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
> Replaced later for ER Diagram.

## 🎨 Layout and design

The visual design was created using the following base color palette (generated with Coolors.co):

- Dark blue: #22489B  
- Medium blue: #5E7CE2  
- Light blue: #7898EB  
- Very light blue: #B2CAF5  
- Light gray: #EAF1F4  
- Dark gray: #363845  

Coolors.co color palette viewer was used as a visual reference, providing a clear idea of how to combine these colors to achieve an attractive, functional, and accessible design with sufficient color contrast.
<img width="704" height="524" alt="Captura de pantalla 2025-07-19 172634" src="https://github.com/user-attachments/assets/0acaf5f3-b958-4af4-bd23-5286514f4f20" />

## 📁 Folder Structure

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

## 🔮 Future Improvements

- Integration with card payment methods (Stripe, MercadoPago).
- Support for multiple user accounts per business.
- Support for managing multiple separate businesses.
- Multi-language implementation.
- Custom business rule configurations (salons, veterinary clinics, offices, etc.).

---

**Developed by:** Daniela Cruz
