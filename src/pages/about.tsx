import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Kevin" desc="Oi. Sou o Kevin Cavalcanti! Você pode continuar navegando a vontade por aqui." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Oi. Sou o Kevin Cavalcanti!</h1>
        <p>
        Você pode continuar navegando a vontade por aqui
        {/* //  <a href="https://www.lekoarts.de/en">website</a> or my other{' '} */}
          {/* <a href="https://gatsby-starter-portfolio.netlify.com">Gatsby projects</a>. */}
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
