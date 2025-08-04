import * as React from 'react'

interface CartItem {
  id: string | number;
  name: string;
  quantity: number;
  totalPrice: number;
}

interface OrderEmailProps {
  name: string
  email: string
  phone: string
  pickupDate: string
  items: CartItem[]
  totalPrice: number
}

const OrderEmail = ({
  name,
  email,
  phone,
  pickupDate,
  items,
  totalPrice,
}: OrderEmailProps) => (
  <html lang="hu">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        {`
          body {
            background-color: #fafafa;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            padding: 0 10px;
            margin: 0;
          }
          .container {
            background-color: #ffffff;
            margin: 0 auto;
            max-width: 600px;
            border-radius: 12px;
            border: 1px solid #e5e5e5;
            overflow: hidden;
            width: 100%;
          }
          .header {
            background-color: #bc956c;
            padding: 36px 40px;
            text-align: center;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
          }
          .logo {
            margin: 0 auto;
            display: block;
            filter: brightness(0) invert(1);
          }
          .heading {
            color: #ffffff;
            font-size: 28px;
            font-weight: 600;
            margin: 24px 0 0 0;
          }
          .subheading {
            color: #f5f5f5;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin: 8px 0 0 0;
          }
          .information-section {
            padding: 24px 40px;
            background-color: #f5f5f5;
            margin: 0 0 24px 0;
          }
          .information-table {
            width: 100%;
            border-collapse: collapse;
          }
          .information-cell {
            padding-bottom: 16px;
            width: 50%;
          }
          .information-label {
            color: #737373;
            font-size: 11px;
            font-weight: 500;
            margin: 0 0 4px 0;
            text-transform: uppercase;
          }
          .information-value {
            color: #171717;
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            word-break: break-word;
          }
          .products-section {
            padding: 0 40px;
          }
          .products-title {
            font-size: 18px;
            font-weight: 600;
            color: #171717;
            margin: 0 0 16px 0;
          }
          .product-table {
            width: 100%;
            border-collapse: collapse;
          }
          .product-row {
            padding: 16px 0;
            display: block;
          }
          .product-name-cell {
            width: 60%;
          }
          .product-details-cell {
            width: 20%;
            text-align: right;
          }
          .product-price-cell {
            width: 20%;
            text-align: right;
          }
          .product-name {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            color: #171717;
          }
          .product-details {
            margin: 0;
            font-size: 14px;
            color: #737373;
          }
          .product-price {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            color: #171717;
          }
          .divider {
            border: 0;
            border-top: 1px solid #e5e5e5;
            margin: 16px 0;
          }
          .total-section {
            padding: 24px 40px;
            background-color: #f5f5f5;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            margin-top: 24px;
          }
          .total-table {
            width: 100%;
            border-collapse: collapse;
          }
          .total-label-cell {
            width: 50%;
          }
          .total-price-cell {
            width: 50%;
            text-align: right;
          }
          .total-label {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            color: #737373;
            text-transform: uppercase;
          }
          .total-price-text {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            color: #bc956c;
          }
          .footer {
            padding: 24px 40px 40px 40px;
            text-align: center;
          }
          .footer-text {
            font-size: 12px;
            color: #737373;
            line-height: 1.5;
            margin: 0 0 24px 0;
          }
          .footer-links {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
          }
          .footer-link-cell {
            width: 33.33%;
            text-align: center;
          }
          .footer-link {
            font-size: 12px;
            color: #737373;
            text-decoration: underline;
          }
          .footer-copyright {
            font-size: 12px;
            color: #737373;
            margin: 0;
          }
        `}
      </style>
    </head>
    <body style={{ margin: 0, padding: 0 }}>
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <img
            src="https://edenkapu.vercel.app/assets/images/logos/logo2.png"
            width={120}
            height={32}
            alt="Édenkapu logo"
            className="logo"
          />
          <h1 className="heading" style={{ margin: 0, padding: 0 }}>Rendelésed megkaptuk!</h1>
          <p className="subheading" style={{ margin: 0, padding: 0 }}>Köszönjük a rendelésedet, {name}! Összefoglaltuk a részleteket.</p>
        </div>

        {/* Information Table Section */}
        <div className="information-section">
          <table className="information-table">
            <tbody>
              <tr>
                <td className="information-cell">
                  <p className="information-label" style={{ margin: 0 }}>Név</p>
                  <p className="information-value" style={{ margin: 0 }}>{name}</p>
                </td>
                <td className="information-cell">
                  <p className="information-label" style={{ margin: 0 }}>Email</p>
                  <p className="information-value" style={{ margin: 0 }}>{email}</p>
                </td>
              </tr>
              <tr>
                <td className="information-cell">
                  <p className="information-label" style={{ margin: 0 }}>Telefon</p>
                  <p className="information-value" style={{ margin: 0 }}>{phone}</p>
                </td>
                <td className="information-cell">
                  <p className="information-label" style={{ margin: 0 }}>Átvétel ideje</p>
                  <p className="information-value" style={{ margin: 0 }}>
                    {new Date(pickupDate).toLocaleDateString('hu-HU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <h2 className="products-title" style={{ margin: 0 }}>Rendelt termékek</h2>
          <hr className="divider" style={{ margin: '16px 0 24px 0' }} />
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <table className="product-table">
                <tbody>
                  <tr>
                    <td className="product-name-cell">
                      <p className="product-name" style={{ margin: 0 }}>{item.name}</p>
                    </td>
                    <td className="product-details-cell">
                      <p className="product-details" style={{ margin: 0 }}>{item.quantity} db</p>
                    </td>
                    <td className="product-price-cell">
                      <p className="product-price" style={{ margin: 0 }}>{item.totalPrice} Ft</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              {index < items.length - 1 && <hr className="divider" />}
            </React.Fragment>
          ))}
        </div>

        {/* Total Price Section */}
        <div className="total-section">
          <table className="total-table">
            <tbody>
              <tr>
                <td className="total-label-cell">
                  <p className="total-label" style={{ margin: 0 }}>VÉGÖSSZEG</p>
                </td>
                <td className="total-price-cell">
                  <p className="total-price-text" style={{ margin: 0 }}>{totalPrice} Ft</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="footer">
          <p className="footer-text" style={{ margin: 0 }}>
            A rendelésed hamarosan feldolgozásra kerül. Amennyiben bármilyen kérdésed van, keress minket bizalommal az alábbi elérhetőségeken.
          </p>
          <table className="footer-links">
            <tbody>
              <tr>
                <td className="footer-link-cell">
                  <a href="https://edenkapu.hu" className="footer-link">
                    Weboldal
                  </a>
                </td>
                <td className="footer-link-cell">
                  <a href="tel:+36XXXXXXXXX" className="footer-link">
                    Telefon
                  </a>
                </td>
                <td className="footer-link-cell">
                  <a href="mailto:edenkapukavezoesfagyizo@gmail.com" className="footer-link">
                    Email
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="footer-copyright" style={{ margin: 0 }}>
            Copyright © {new Date().getFullYear()} Édenkapu • Minden jog fenntartva
          </p>
        </div>
      </div>
    </body>
  </html>
)

export default OrderEmail
