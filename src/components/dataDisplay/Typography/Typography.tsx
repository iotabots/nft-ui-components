import React from 'react'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

export function Typography(props: TypographyProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiTypography
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {
      '&.MuiTypography-root': {
        fontFamily: '"Inter", sans-serif'
      },
      '&.MuiTypography-h1, &.MuiTypography-h2': {
        fontFamily: '"Roboto Serif", sans-serif',
        fontWeight: 800
      },
      '&.MuiTypography-h3, &.MuiTypography-h4': {
        fontFamily: '"Roboto Serif", sans-serif',
        fontWeight: 800
      },
      '&.MuiTypography-h5, &.MuiTypography-h6': {
        fontFamily: '"Roboto Serif", sans-serif',
        fontWeight: 800
      }
    }
  }
})
