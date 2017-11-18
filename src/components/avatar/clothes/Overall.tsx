import * as React from 'react'
import { uniqueId } from 'lodash'

export interface Props {
  color: string
}

export default class Overall extends React.Component<Props> {
  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g id='Clothing/Overall' transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'
            id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id='Overall'
          fill='#B7C1DB'
          fill-rule='evenodd'
          xlinkHref={'#' + path1}
        />
        <g
          id='Color/Palette/Gray-01'
          mask={`url(#${mask1})`}
          fill-rule='evenodd'
          fill={this.props.color}>
          <rect id='🖍Color' x='0' y='0' width='264' height='110' />
        </g>
        <circle
          id='Button'
          fill='#F4F4F4'
          fill-rule='evenodd'
          cx='81'
          cy='83'
          r='5'
        />
        <circle
          id='Button'
          fill='#F4F4F4'
          fill-rule='evenodd'
          cx='183'
          cy='83'
          r='5'
        />
      </g>
    )
  }
}
