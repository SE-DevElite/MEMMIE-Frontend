import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ArticleCard from '@/components/setting/ArticleCard'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import { themes } from '@/common/themes/themes'

const PopularArticleSection: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.popularHeadingParent}>
      <View>
        <Text style={styles.popularArticles}>Popular articles</Text>
      </View>
      <ArticleCard
        // actionButtonText={<NavArrowRight />}
        actionButtonLabel="Creating an account"
        actionButtonTitle="Creating an account"
        // onCard1Press={() => navigation.navigate("SupportGettingstartedCreated")}
      />
      <ArticleCard
        // actionButtonText={require('../assets/-icon-nav-arrow-right6.png')}
        actionButtonLabel="Reset password"
        actionButtonTitle="Reset password"
        propTop={15}
        propLeft={16}
        propWidth={98}
        propWidth1={103}
        propWidth2={122}
        // onCard1Press={() => navigation.navigate("SupportGettingstartedResetpw")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  popularArticles: {
    fontSize: 25,
    lineHeight: 29,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex,
    textAlign: 'left'
  },
  popularHeadingParent: {
    position: 'absolute',
    top: 233,
    left: 16
  }
})

export default PopularArticleSection
