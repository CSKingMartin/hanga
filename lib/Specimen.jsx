import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component';

const Specimen = ({
  children
}) => (
  <Frame>
    {children}
  </Frame>
)

Specimen.propTypes = {
  children: PropTypes.any
}

export default Specimen
