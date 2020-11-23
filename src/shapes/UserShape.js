import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
})
