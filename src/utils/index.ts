/**
 * 下载文件
 * @param fileData 文件数据
 * @param fileType 文件类型
 * @param fileName 文件名
 */
export function downloadFile(
  fileData: ArrayBuffer | string | Blob,
  fileType: string,
  fileName: string
): boolean {
  let blob: Blob
  let success = true // 假设初始状态为成功

  // 创建 Blob 对象
  try {
    if (fileData instanceof Blob) {
      blob = fileData
    } else {
      blob = new Blob([fileData], { type: fileType })
    }
  } catch (error) {
    console.error('Error creating the Blob:', error)
    return false
  }

  const a = document.createElement('a')
  const url = window.URL.createObjectURL(blob)

  // 下载后释放URL资源和清理逻辑
  const cleanup = () => {
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  try {
    a.href = url
    a.download = fileName
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
  } catch (error) {
    console.error('Error triggering the download:', error)
    success = false // 下载失败时，设置 success 为 false
  } finally {
    setTimeout(cleanup, 0)
  }

  return success
}

/**
 * 是否回显
 * @param num
 */
export function booleanEcho(num: number | string) {
  switch (num) {
    case 1:
      return '是'
    case 0:
      return '否'
    case undefined:
    case null:
    case '':
      return ''
    default:
      return ''
  }
}
