import axios from "../liberary/axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Item from "./item";

export default function Cards () {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        axios.get('/todos')
        .then(res => {
            setAllData(res?.data)
        })
    }, [])
    
    const styles = StyleSheet.create({
        container: {
            padding: 20,
            paddingTop: 70,
        }
    })

    return (
        <View style={styles.container}>
            <ScrollView>
            {
                allData?.map(res =>
                    <Item title={res?.title} key={res?.id} isCompleted={res?.completed} />
                )
            }
            </ScrollView>
        </View>
    );
}