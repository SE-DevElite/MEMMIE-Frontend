import React, { useState } from 'react'
import { ActivityIndicator, Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import ButtonLongCommon from '@/common/ButtonLong.common'
import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import readMemoryStore from '@/stores/ReadMemoryStore'

interface Props {
  handleClose: () => void
  handleCloseReadMemory: () => void
}

const windowWidth = Dimensions.get('window').width

const DeleteMemory: React.FC<Props> = props => {
  const { handleClose, handleCloseReadMemory } = props
  const [wait, setWait] = useState(false)

  const handleDelete = async () => {
    setWait(true)
    const token = await getAccessToken()

    console.log(readMemoryStore.memory_id)

    await RequestWithToken(token as string)
      .delete(`/memories/delete/${readMemoryStore.memory_id}`)
      .then(res => {
        handleClose()
        handleCloseReadMemory()
        setWait(false)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.header}>Delete</Text>
        <Text style={styles.description}>
          Are you sure to delete this memory?
        </Text>
        <Text style={styles.description}>
          if you change your mind, you'll have to past a new{' '}
          <Text style={styles.boldText}>memory</Text> agian.
        </Text>
        {wait ? (
          <View>
            <ActivityIndicator size="large" color="#66023C" />
          </View>
        ) : (
          <ButtonLongCommon
            onPress={handleDelete}
            title="Delete"
            background_color="#66023C"
            color="#ffffff"
            width={windowWidth - 64}
            font_size={16}
          />
        )}
        <ButtonLongCommon
          onPress={handleClose}
          title="Cancel"
          width={windowWidth - 64}
          font_size={16}
          fonts="normal"
        />
      </View>
    </View>
  )
}

export default DeleteMemory

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 10,
    alignItems: 'center'
  },
  header: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#66023C'
  },
  description: {
    marginVertical: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#66023C'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
