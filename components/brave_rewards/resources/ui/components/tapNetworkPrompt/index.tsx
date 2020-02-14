/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledCloseIcon,
  StyledBackground,
  StyledContent,
  StyledTitle,
  StyledInfo,
  StyledDisclaimer,
  StyledLink
} from './style'
import { getLocale } from 'brave-ui/helpers'
import { CloseStrokeIcon } from 'brave-ui/components/icons'

export interface Props {
  openTapNetwork: () => void
  onDismissTapPrompt: () => void
}

export default class TapNetworkPrompt extends React.PureComponent<Props, {}> {
  render () {
    const { openTapNetwork, onDismissTapPrompt } = this.props

    return (
      <StyledWrapper>
        <StyledCloseIcon onClick={onDismissTapPrompt}>
          <CloseStrokeIcon />
        </StyledCloseIcon>
        <StyledBackground />
        <StyledContent>
          <StyledTitle>
            {getLocale('tapNetworkTitle')}
          </StyledTitle>
          <StyledInfo>
            {getLocale('tapNetworkInfo')}
          </StyledInfo>
          <StyledLink onClick={openTapNetwork}>
            {getLocale('tapNetworkLink')}
          </StyledLink>
          <StyledDisclaimer>
            {getLocale('tapNetworkDisclaimer')}
          </StyledDisclaimer>
        </StyledContent>
      </StyledWrapper>
    )
  }
}
