export const mergeDataByCoordinates = (originalData: any) => {
  const threshold = 0.005
  const mergedMap = new Map()

  originalData.forEach((item: any) => {
    const { latitude, longitude } = item.coordinate
    const existingData = findDataWithSimilarCoordinates(
      mergedMap,
      latitude,
      longitude,
      threshold
    )

    if (existingData) {
      mergeItems(existingData, item)
    } else {
      mergedMap.set(`${latitude}_${longitude}`, { ...item, length: 1 }) // Initialize length to 1
    }
  })

  const mergedArray = Array.from(mergedMap.values())

  return mergedArray
}

const findDataWithSimilarCoordinates = (
  map: any,
  latitude: number,
  longitude: number,
  threshold: number
) => {
  for (const item of map.values()) {
    const { latitude: existingLatitude, longitude: existingLongitude } =
      item.coordinate

    const latDiff = Math.abs(latitude - existingLatitude)
    const lonDiff = Math.abs(longitude - existingLongitude)

    if (latDiff < threshold && lonDiff < threshold) {
      return item
    }
  }

  return null
}

const mergeItems = (existingItem: any, newItem: any) => {
  // Customize this function based on your data structure and merging requirements
  // For example, you can merge properties or update values
  existingItem.length++ // Increment the length
  existingItem.image_urls = existingItem.image_urls || []
  existingItem.image_urls.push(newItem.image_url)
}
