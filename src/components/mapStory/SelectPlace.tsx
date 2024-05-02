import ButtonLongCommon from "@/common/ButtonLong.common";
import { WindowScreen } from "@/common/consts/ConfigScreen";
import { themes } from "@/common/themes/themes";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type CordinatesType = {
    latitude: number
    longitude: number
}

interface Feature {
    place_name: string;
    geometry: {
        coordinates: CordinatesType;
    };
}

interface SearchResponse {
    features: Feature[];
    // Add other properties if needed
}

interface Props {
    search: string
    response: SearchResponse
    handleCordinates: (cor: CordinatesType) => void
}

const SelectPlace: React.FC<Props> = props => {
    const { search, response, handleCordinates } = props

    return (
        <>
            {search == '' && false ? (
                <></>
            ) : (
                <View
                    style={styles.container}>
                    {response?.features?.map((feature: Feature, index: number) => (
                        <TouchableOpacity key={index} style={{ margin: 1 }} onPress={() => { handleCordinates(feature.geometry.coordinates) }}>
                            <View style={styles.textBox}>
                                <Text style={styles.text} numberOfLines={1}>
                                    {feature.place_name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View >
            )}
        </>
    )
}

export default SelectPlace

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: WindowScreen.Width / 1.06 - WindowScreen.Width / 5.8,
        marginLeft: WindowScreen.Width / 174,
        top: WindowScreen.Height / 17.4,//23.2,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E5E5E5'
    },
    textBox: {
        height: WindowScreen.Height / 23.2,
        width: WindowScreen.Width / 1.05 - WindowScreen.Width / 5.8
    },
    text: {
        color: themes.light.primary.hex,
        padding: 10

    }
})