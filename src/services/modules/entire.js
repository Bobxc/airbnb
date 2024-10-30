import bobxRequest from '..'

export function getEntireRoomList(offset = 0, size = 20) {
  return bobxRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}
