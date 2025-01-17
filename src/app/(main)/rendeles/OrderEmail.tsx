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
    <Preview>Rendelés visszaigazolás</Preview>

    <Body>
      <div style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column style={headerColumn}>
                <Img
                  src="https://edenkapu.vercel.app/assets/images/logos/logo2.png"
                  width={174}
                  height={48}
                  alt="édenkapu logo"
                  style={logo}
                />
              </Column>
              <Column align="right" style={headerTextColumn}>
                <Text style={heading}>Rendelés visszaigazolás</Text>
              </Column>
            </Row>
          </Section>

          <Section style={informationTable}>
            <Column>
              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Név</Text>
                  <Text style={informationTableValue}>{name}</Text>
                </Column>
              </Row>
              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Email</Text>
                  <Text style={informationTableValue}>{email}</Text>
                </Column>
              </Row>
              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Telefonszám</Text>
                  <Text style={informationTableValue}>{phone}</Text>
                </Column>
              </Row>
            </Column>
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
                  src="https://edenkapu.vercel.app/assets/images/logos/logo2.png"
                  width={116}
                  height={32}
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
  backgroundColor: '#fafafa',
  color: '#171717',
}

const container = {
  margin: '0 auto',
  padding: '20px 20px 48px',
  maxWidth: '800px',
  width: '100%',
}

const headerColumn = {
  display: 'block' as const,
  marginBottom: '26px',
}

const headerTextColumn = {
  display: 'block' as const,
  textAlign: 'left' as const,
}

const logo = {
  margin: '0',
  display: 'block',
  backgroundColor: '#bc956c',
  padding: '16px',
  borderRadius: '8px',
}

const logoSmall = {
  margin: '48px auto 0 auto',
  display: 'block',
  backgroundColor: '#bc956c',
  padding: '8px',
  borderRadius: '8px',
}

const tableCell = { display: 'table-cell' }

const heading = {
  fontSize: '32px',
  fontWeight: '300',
  color: '#171717',
  margin: '0',
}

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: '#171717',
  backgroundColor: '#f5f5f5',
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
  color: '#737373',
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
  color: '#171717',
  wordBreak: 'break-word' as const,
}

const productTitleTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  backgroundColor: '#f5f5f5',
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
  color: '#171717',
}

const productTitle = {
  fontSize: '12px',
  fontWeight: '600',
  margin: '0',
  padding: '12px 0',
  lineHeight: 1.4,
  color: '#171717',
}

const productPriceTotal = {
  margin: '0',
  color: '#737373',
  fontSize: '10px',
  fontWeight: '600',
  padding: '0px 30px 0px 0px',
  textAlign: 'right' as const,
}

const productPriceLine = {
  margin: '30px 0 0 0',
  borderColor: '#e5e5e5',
}

const productPriceVerticalLine = {
  height: '48px',
  borderLeft: '1px solid',
  borderColor: '#e5e5e5',
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
  color: '#171717',
}

const productPriceLineBottom = {
  margin: '0 0 75px 0',
  borderColor: '#e5e5e5',
}

const footerTextCenter = {
  fontSize: '12px',
  color: '#737373',
  margin: '24px 0',
  lineHeight: '1.5',
  textAlign: 'center' as const,
}

const footerLinksWrapper = {
  margin: '8px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: '#737373',
}

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: '#737373',
}
