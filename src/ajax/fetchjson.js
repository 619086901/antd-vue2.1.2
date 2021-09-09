/**
 * url读取json文件
 * @param {*} url
 * @returns
 */
export async function getJSON(url) {
  try {
    let response = await fetch(url)
    const body = await response
    // console.log(response)
    // console.log(body)
    return body
  } catch (error) {
    return error
  }
}
