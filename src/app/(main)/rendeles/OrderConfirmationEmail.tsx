import { CartItem } from '@/lib/types'

interface OrderEmailProps {
  customerName: string
  email: string
  phone: string
  items: CartItem[]
  totalPrice: number
}

const OrderConfirmationEmail = ({
  customerName,
  email,
  phone,
  items,
  totalPrice,
}: OrderEmailProps) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1>Köszönjük a rendelését!</h1>

      <div>
        <h2>Rendelési adatok:</h2>
        <p>Név: {customerName}</p>
        <p>Email: {email}</p>
        <p>Telefon: {phone}</p>
      </div>

      <div>
        <h2>Rendelt termékek:</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Termék</th>
              <th style={{ textAlign: 'right' }}>Mennyiség</th>
              <th style={{ textAlign: 'right' }}>Ár</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td style={{ textAlign: 'right' }}>{item.quantity} db</td>
                <td style={{ textAlign: 'right' }}>{item.totalPrice} Ft</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={2}
                style={{ textAlign: 'right', fontWeight: 'bold' }}
              >
                Végösszeg:
              </td>
              <td style={{ textAlign: 'right', fontWeight: 'bold' }}>
                {totalPrice} Ft
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p>Köszönjük, hogy minket választott!</p>
    </div>
  )
}

export default OrderConfirmationEmail
