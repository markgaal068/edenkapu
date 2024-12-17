import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'
import { CartItem } from '@/lib/types'

interface OrderEmailProps {
  name: string
  email: string
  phone: string
  items: CartItem[]
  totalPrice: number
}

const OrderEmail = ({
  name,
  email,
  phone,
  items,
  totalPrice,
}: OrderEmailProps) => (
  <Html>
    <Head />
    <Preview>Édenkapu - Rendelés visszaigazolás</Preview>

    <Body>
      <div style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  src="https://www.edenkapu.hu/assets/images/logos/logo2.png"
                  width={174}
                  height={48}
                  alt="édenkapu logo"
                  style={logo}
                />
              </Column>
              <Column align="right" style={tableCell}>
                <Text style={heading}>Rendelés visszaigazolás</Text>
              </Column>
            </Row>
          </Section>

          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column style={informationTableColumn}>
                <Text style={informationTableLabel}>Név</Text>
                <Text style={informationTableValue}>{name}</Text>
              </Column>
            </Row>
            <Row style={informationTableRow}>
              <Column style={informationTableColumn}>
                <Text style={informationTableLabel}>Email</Text>
                <Text style={informationTableValue}>{email}</Text>
              </Column>
            </Row>
            <Row style={informationTableRow}>
              <Column style={informationTableColumn}>
                <Text style={informationTableLabel}>Telefonszám</Text>
                <Text style={informationTableValue}>{phone}</Text>
              </Column>
            </Row>
          </Section>

          <Section style={productTitleTable}>
            <Text style={productsTitle}>Rendelt termékek</Text>
          </Section>

          {items.map((item) => (
            <Section key={item.id}>
              <Row>
                <Column style={{ paddingLeft: '22px' }}>
                  <Text style={productTitle}>
                    {item.name} - {item.quantity} db - {item.totalPrice} Ft
                  </Text>
                </Column>
              </Row>
            </Section>
          ))}

          <Hr style={productPriceLine} />
          <Section align="right">
            <Row>
              <Column style={tableCell} align="right">
                <Text style={productPriceTotal}>VÉGÖSSZEG</Text>
              </Column>
              <Column style={productPriceVerticalLine}></Column>
              <Column style={productPriceLargeWrapper}>
                <Text style={productPriceLarge}>{totalPrice} Ft</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={productPriceLineBottom} />

          <Text style={footerTextCenter}>
            Köszönjük a rendelését! Hamarosan felvesszük Önnel a kapcsolatot.
          </Text>

          <Text style={footerTextCenter}>
            Ha kérdése van, keressen minket bizalommal.
          </Text>

          <Section>
            <Row>
              <Column align="center">
                <Img
                  src="https://www.edenkapu.hu/assets/images/logos/logo2.png"
                  width={87}
                  height={24}
                  alt="édenkapu logo"
                  style={logoSmall}
                />
              </Column>
            </Row>
          </Section>

          <Text style={footerLinksWrapper}>
            <Link href="https://edenkapu.hu">Weboldal</Link> •{' '}
            <Link href="tel:+36XXXXXXXXX">Telefon</Link> •{' '}
            <Link href="mailto:edenkapukavezoesfagyizo@gmail.com">Email</Link>
          </Text>

          <Text style={footerCopyright}>
            Copyright © {new Date().getFullYear()} Édenkapu <br />
            Minden jog fenntartva
          </Text>
        </Container>
      </div>
    </Body>
  </Html>
)

export default OrderEmail

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#1F2937',
  color: '#ffffff',
}

const container = {
  margin: '0 auto',
  padding: '20px 20px 48px',
  maxWidth: '800px',
  width: '100%',
}

const logo = {
  margin: '0',
  display: 'block',
  backgroundColor: '#1F2937',
}

const logoSmall = {
  margin: '48px auto 0 auto',
  display: 'block',
  backgroundColor: '#1F2937',
}

const tableCell = { display: 'table-cell' }

const heading = {
  fontSize: '32px',
  fontWeight: '300',
  color: '#D1D5DB',
  margin: '0',
}

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: '#ffffff',
  backgroundColor: '#2A3441',
  borderRadius: '8px',
  fontSize: '12px',
  marginTop: '40px',
}

const informationTableColumn = {
  paddingTop: '12px',
  paddingRight: '20px',
  paddingBottom: '12px',
  paddingLeft: '20px',
}

const informationTableLabel = {
  color: '#D1D5DB',
  fontSize: '10px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
  textTransform: 'uppercase' as const,
}

const informationTableValue = {
  fontSize: '12px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
  color: '#ffffff',
  wordBreak: 'break-word' as const,
}

const productTitleTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  backgroundColor: '#2A3441',
  borderRadius: '8px',
  fontSize: '12px',
  margin: '48px 0 15px 0',
  overflow: 'hidden',
}

const productsTitle = {
  paddingLeft: '20px',
  paddingTop: '8px',
  paddingBottom: '8px',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
  color: '#ffffff',
}

const productTitle = {
  fontSize: '12px',
  fontWeight: '600',
  margin: '0',
  padding: '12px 0',
  lineHeight: 1.4,
  color: '#ffffff',
}

const productPriceTotal = {
  margin: '0',
  color: '#D1D5DB',
  fontSize: '10px',
  fontWeight: '600',
  padding: '0px 30px 0px 0px',
  textAlign: 'right' as const,
}

const productPriceLine = {
  margin: '30px 0 0 0',
  borderColor: '#374151',
}

const productPriceVerticalLine = {
  height: '48px',
  borderLeft: '1px solid',
  borderColor: '#374151',
}

const productPriceLargeWrapper = {
  display: 'table-cell',
  width: '150px',
}

const productPriceLarge = {
  margin: '0px 20px 0px 0px',
  fontSize: '16px',
  fontWeight: '600',
  whiteSpace: 'nowrap' as const,
  textAlign: 'right' as const,
  color: '#ffffff',
}

const productPriceLineBottom = {
  margin: '0 0 75px 0',
  borderColor: '#374151',
}

const footerTextCenter = {
  fontSize: '12px',
  color: '#D1D5DB',
  margin: '24px 0',
  lineHeight: '1.5',
  textAlign: 'center' as const,
}

const footerLinksWrapper = {
  margin: '8px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: '#D1D5DB',
}

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: '#D1D5DB',
}
