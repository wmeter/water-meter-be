const _serializeSingle = (user) => {
  return {
    id: user._id,
    email: user.email,
    role: user.role,
    active: user.active,
    device: user.device
  }
}

const serializer = (data) => {
  if (!data) {
    return null
  }

  if (Array.isArray(data)) {
    return data.map(_serializeSingle)
  }

  return _serializeSingle(data)
}

module.exports = serializer