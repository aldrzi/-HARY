import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          What is $HARY?
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          Welcome to $HARY’s casino, hop off the hamster wheel and jump into a Lambo with me! Future developments and updates coming soon. 
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://twitter.com/CoinSolama54357"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Visit our Twitter
          </Button>
        </div>
      </Section>
    </div>
  )
}
