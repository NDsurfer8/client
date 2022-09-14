import { View, Text, StyleSheet,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Card from '../components/Card'
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector } from 'react-redux'
import * as houseAction from '../redux/actions/houseAction'

const HomeListScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const {houses} = useSelector(state => state.house);

    useEffect(() => {
        dispatch(houseAction.fetchHouses());
    }, [dispatch])

    return (
        <View style={styles.container}>
            <FlatList
                data={houses}
                keyExtractor={item => item._id}
                renderItem={({item})=>{
                    return <Card 
                    navigation={navigation} 
                    title={item.title}
                    address={item.address}
                    homeType= {item.homeType}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    yearBuilt={item.yearBuilt}
                    id={item._id}
                    />
                }}
            />
            
            <FloatingAction
                animated={false}
                showBackground={false}
                position='right'
                onPressMain={() => navigation.navigate('AddHome')}
            />
        </View>
    )
}

export default HomeListScreen
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})